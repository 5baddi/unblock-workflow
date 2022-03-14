import * as React from "react";
import { DateTime, castToBoolean, findLast, markdownifyToString, markdownifyToURL } from "tripetto-runner-foundation";
import { findActiveItem, markdownifyToJSX } from "tripetto-runner-react-hook";
import { warningIcon } from "tripetto-runner-fabric/icons/warning";
import { IChatProps } from "../interfaces/props";
import { useChatController } from "./controller";
import { useFocus } from "./focus";
import { ParagraphMessage } from "../ui/message/paragraph";
import { ParagraphTitle } from "../ui/message/paragraph/title";
import { ParagraphDescription } from "../ui/message/paragraph/description";
import { PreviewAnswer } from "../ui/messages/preview";
import { SkippedAnswer } from "../ui/messages/skipped";
import { TextMessage } from "../ui/message/text";
import { PausedAnswer, PausedMessage } from "../ui/messages/paused";
import { Prologue } from "../ui/messages/prologue";
import { Epilogue } from "../ui/messages/epilogue";
import { PausingEmailInput, PausingQuestion } from "../ui/messages/pausing";
import { ConnectionError } from "../ui/errors/connection";
import { OutdatedError } from "../ui/errors/outdated";
import { RejectedError } from "../ui/errors/rejected";
import { PausingError } from "../ui/errors/pausing";
import { TypingIndicator } from "../ui/typing-indicator";
import { Explanation } from "../ui/input/explanation";
import { EmailBlock } from "../blocks/email/email";

export interface IMessage {
    readonly type: "prologue" | "node" | "epilogue";
    readonly id: string;
    readonly key: string;
    readonly timeStamp?: number;
    readonly blockIdentifier?: string;
    readonly disabled: boolean;
    readonly break: boolean;
    readonly question?: React.ReactNode;
    readonly answer?: React.ReactNode;
    readonly input?: React.ReactNode;
    readonly isPreActive: boolean;
    readonly isBeforeActive: boolean;
    readonly isAfterActive: boolean;
    readonly isPostActive: boolean;
    readonly isPausing: boolean;
    readonly isEditable: boolean;
    readonly isTyping: boolean;
    readonly isFirst: (type: "question" | "answer") => boolean;
    readonly isLast: (type: "question" | "answer") => boolean;
    readonly isTail: (type: "question" | "answer") => boolean;
    readonly avatar: (type: "question" | "answer") => boolean;
    readonly spacing: (type: "question" | "answer") => boolean;
    readonly measure: (type: "question" | "answer" | "answering") => (el: HTMLElement | null) => void;
    readonly height: (type: "question" | "answer" | "answering") => number;
    readonly focus?: () => void;
    readonly activate: () => void;
    readonly wait: () => void;
    readonly continue: () => void;
    readonly undo?: () => void;
    readonly skip?: () => void;
    readonly pause?: () => void;
}

export const useChatRunner = (props: IChatProps) => {
    const [runner, cache, l10n, styles, attachments, avatar, isVisible, setVisibility, markRef, doAction] = useChatController({
        ...props,
        onSnapshot: () => {
            const activeItem = findActiveItem(runner.storyline);

            return {
                a: activeItem && activeItem.key,
                b: focusSnapshot,
                c: isVisible,
                d: props.snapshot && props.snapshot.b && props.snapshot.b.d,
                e: DateTime.now,
            };
        },
        onRestart: () => blur(),
    });

    const [frameRef, focus, blur, hasOrHadFocus, handleFocus, handleAutoFocus, focusSnapshot] = useFocus({
        gainFocus: runner.view === "live" && (styles.autoFocus || runner.display === "page" || runner.display === "button"),
        initialFocus: props.snapshot && props.snapshot.b && props.snapshot.b.b,
        onFocus: runner.onInteraction,
    });

    const heightsRef = React.useRef<{
        [key: string]: number | undefined;
    }>({});
    const [, updateHeights] = React.useState({});

    const view = runner.view;
    const messages = runner.storyline
        .filter((item) => view === "preview" || !item.isUpcoming)
        .map((item) => {
            let question: React.ReactNode;
            let answer: React.ReactNode;
            let input: React.ReactNode;

            cache.prepare(item, () => ({
                l10n,
                styles,
                view,
                get id() {
                    return item.node?.block?.key() || "";
                },
                get name() {
                    const name =
                        (item.type === "node" && item.node && castToBoolean(item.node.props.nameVisible, true) && item.node.props.name) ||
                        (item.type === "prologue" && item.prologue && item.prologue.title) ||
                        (item.type === "epilogue" && item.epilogue && item.epilogue.title) ||
                        undefined;

                    return (name && <ParagraphTitle>{markdownifyToJSX(name, item.node && item.node.context)}</ParagraphTitle>) || undefined;
                },
                get description() {
                    const description =
                        (item.type === "node" && item.node && item.node.props.description) ||
                        (item.type === "prologue" && item.prologue && item.prologue.description) ||
                        (item.type === "epilogue" && item.epilogue && item.epilogue.description) ||
                        undefined;

                    return (
                        (description && (
                            <ParagraphDescription>{markdownifyToJSX(description, item.node && item.node.context)}</ParagraphDescription>
                        )) ||
                        undefined
                    );
                },
                get explanation() {
                    return (
                        (item.node && item.node.props.explanation && markdownifyToJSX(item.node.props.explanation, item.node.context)) ||
                        undefined
                    );
                },
                get placeholder() {
                    return (item.node && markdownifyToString(item.node.props.placeholder || "", item.node.context)) || "";
                },
                get label() {
                    return markdownifyToJSX(
                        (item.node && (item.node.props.placeholder || item.node.props.name)) || "...",
                        item.node && item.node.context,
                        false
                    );
                },
                get submitLabel() {
                    return l10n.pgettext("runner#1|🆗 Buttons", "Submit");
                },
                get isFailed() {
                    return (view !== "preview" && item.node && item.node.isFailed && hasOrHadFocus(item) !== undefined) || false;
                },
                get ariaDescribedBy() {
                    return (item.node && item.node.props.explanation && item.node.block && item.node.block.key("explanation")) || undefined;
                },
                get ariaDescription() {
                    return (
                        (item.node && item.node.props.explanation && item.node.block && (
                            <Explanation aria={item.node.block.key("explanation")} color={styles.buttons.baseColor}>
                                {markdownifyToJSX(item.node.props.explanation, item.node.context)}
                            </Explanation>
                        )) ||
                        undefined
                    );
                },
                attachments,
                focus: handleFocus(item, true, () => doAction("focus", item.node)),
                blur: handleFocus(item, false, () => doAction("blur", item.node)),
                autoFocus: handleAutoFocus(item),
                markdownifyToJSX: (md: string, lineBreaks?: boolean) => markdownifyToJSX(md, item.node?.context, lineBreaks),
                markdownifyToURL: (md: string) => markdownifyToURL(md, item.node?.context),
                markdownifyToImage: (md: string) =>
                    markdownifyToURL(md, item.node?.context, undefined, ["image/jpeg", "image/png", "image/svg", "image/gif"]) ||
                    `data:image/svg+xml;base64,${warningIcon(styles.color || "#000")}`,
                markdownifyToString: (md: string, lineBreaks?: boolean) =>
                    markdownifyToString(md, item.node?.context, undefined, lineBreaks),
            }));

            switch (item.type) {
                case "node":
                    question = cache.fetch(
                        "question",
                        (block) =>
                            (item.node && item.node.block && item.node.block.question && item.node.block.question(block)) ||
                            (block.name || block.description ? (
                                <ParagraphMessage>
                                    {block.name}
                                    {block.description}
                                </ParagraphMessage>
                            ) : undefined),
                        item
                    );

                    if (item.node) {
                        if (!item.isPreActive && !item.isBeforeActive && !item.isActive && !item.isAfterActive) {
                            if (item.isPaused) {
                                answer = <PausedAnswer l10n={l10n} color={styles.answers.textColor} />;
                            } else if (item.node.block && item.node.block.answer) {
                                answer =
                                    cache.fetch(
                                        "answer",
                                        (block) => {
                                            const blockAnswer = item.node!.block!.answer!(block);

                                            return typeof blockAnswer === "string" ? <TextMessage>{blockAnswer}</TextMessage> : blockAnswer;
                                        },
                                        item
                                    ) ||
                                    (view === "preview" ? (
                                        <PreviewAnswer l10n={l10n} />
                                    ) : (
                                        <SkippedAnswer l10n={l10n} color={styles.answers.textColor} />
                                    ));
                            }
                        }

                        if ((item.isBeforeActive || item.isActive || item.isAfterActive) && item.node.block && item.node.block.input) {
                            input = cache.fetch(
                                "input",
                                (block) =>
                                    item.node!.block!.input!(
                                        block,
                                        (item.allowNext && item.next) || undefined,
                                        (item.allowUndo && item.undo) || undefined
                                    ),
                                item
                            );
                        }
                    }
                    break;
                case "prologue":
                    question = <Prologue {...item.prologue} kickOff={item.kickOff} view={view} display={runner.display} styles={styles} />;
                    break;
                case "epilogue":
                    question = (
                        <Epilogue
                            {...item.epilogue}
                            repeat={item.repeat}
                            isPreview={view === "preview"}
                            isTest={view === "test"}
                            l10n={l10n}
                            styles={styles}
                            view={view}
                        />
                    );
                    break;
                case "finishing":
                    question = <TypingIndicator color={styles.questions.textColor} animate={true} />;
                    break;
                case "pausing":
                    if (item.pausingRecipe) {
                        switch (item.pausingRecipe.recipe) {
                            case "email":
                                question = <PausingQuestion l10n={l10n} />;

                                if (item.isBeforeActive || item.isActive || item.isAfterActive) {
                                    const emailItem = findLast(runner.storyline, (blockItem) =>
                                        blockItem.node && blockItem.node.isPassed && blockItem.node.block instanceof EmailBlock
                                            ? true
                                            : false
                                    );
                                    const emailAddress =
                                        (props.snapshot && props.snapshot.b && props.snapshot.b.d) ||
                                        (emailItem &&
                                            emailItem.node &&
                                            emailItem.node.block instanceof EmailBlock &&
                                            emailItem.node.block.emailSlot.isSealed &&
                                            emailItem.node.block.emailSlot.value) ||
                                        "";

                                    input = (
                                        <PausingEmailInput
                                            l10n={l10n}
                                            value={emailAddress}
                                            hadFocus={hasOrHadFocus(item) === false}
                                            styles={styles}
                                            onAutoFocus={handleAutoFocus(item)}
                                            onFocus={handleFocus(item, true)}
                                            onBlur={handleFocus(item, false)}
                                            onComplete={item.pausingRecipe.complete}
                                        />
                                    );
                                }
                                break;
                        }
                    } else {
                        question = <TypingIndicator color={styles.questions.textColor} animate={true} />;
                    }
                    break;
                case "paused":
                    question = <PausedMessage l10n={l10n} />;
                    break;
                case "error":
                    switch (item.error) {
                        case "outdated":
                            question = (
                                <OutdatedError
                                    l10n={l10n}
                                    reload={props.onReload && (async () => runner.reload(await Promise.resolve(props.onReload!())))}
                                    color={styles.questions.textColor}
                                />
                            );
                            break;
                        case "rejected":
                            question = <RejectedError l10n={l10n} color={styles.questions.textColor} />;
                            break;
                        case "paused":
                            question = (
                                <PausingError l10n={l10n} retry={item.retry} cancel={item.cancel} color={styles.questions.textColor} />
                            );
                            break;
                        default:
                            question = <ConnectionError l10n={l10n} retry={item.retry} color={styles.questions.textColor} />;
                            break;
                    }
                    break;
            }

            const message: IMessage = {
                type: item.type === "prologue" || item.type === "epilogue" ? item.type : "node",
                id: (item.node && item.node.id) || (item.type === "epilogue" && item.epilogue?.branch) || "",
                key: item.id,
                timeStamp: item.timeStamp,
                blockIdentifier: item.node?.block?.type.identifier,
                disabled: (view === "preview" && findActiveItem(runner.storyline) && !item.isActive) || false,
                break: view === "preview" && !item.isLast,
                isPreActive: view !== "preview" && item.isPreActive,
                isBeforeActive: view !== "preview" && item.isBeforeActive,
                isAfterActive: view !== "preview" && item.isAfterActive,
                isPostActive: view !== "preview" && item.isPostActive,
                isPausing: item.type === "pausing",
                isEditable: item.allowActivate,
                isTyping: runner.isTyping,
                question,
                answer,
                input,
                avatar: (type: "question" | "answer") => {
                    if (item.isPreActive || item.isBeforeActive || item.isActive || item.isAfterActive || item.isPostActive) {
                        return true;
                    }

                    if (
                        type === "question" &&
                        !answer &&
                        item.index + 1 < messages.length &&
                        messages[item.index + 1].question &&
                        !messages[item.index + 1].timeStamp
                    ) {
                        return false;
                    }

                    if (type === "answer" && item.index + 1 < messages.length && !messages[item.index + 1].question) {
                        return false;
                    }

                    return true;
                },
                spacing: (type: "question" | "answer") => {
                    if (type === "question" && !item.timeStamp && item.index > 0 && messages[item.index - 1].answer) {
                        return true;
                    } else if (type === "answer" && (question || (item.index > 0 && !messages[item.index - 1].answer))) {
                        return true;
                    }

                    return false;
                },
                isFirst: (type: "question" | "answer") => {
                    if (item.index === 0) {
                        return true;
                    }

                    if (type === "question" && (item.timeStamp || (item.index > 0 && messages[item.index - 1].answer))) {
                        return true;
                    }

                    if (type === "answer" && (question || (item.index > 0 && !messages[item.index - 1].answer))) {
                        return true;
                    }

                    return false;
                },
                isLast: (type: "question" | "answer") => messages[item.index].avatar(type),
                isTail: (type: "question" | "answer") => item.index > 0 && !messages[item.index - 1].avatar(type),
                measure: (type: "question" | "answer" | "answering") => (el: HTMLElement | null) => {
                    if (view !== "preview" && el) {
                        const height = el.getBoundingClientRect().height;

                        if (height !== heightsRef.current[type + item.id]) {
                            heightsRef.current[type + item.id] = height;

                            updateHeights({});
                        }
                    }

                    if (view === "preview" && el && markRef.current === item.id) {
                        markRef.current = "";

                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "center",
                        });
                    }
                },
                height: (type: "question" | "answer" | "answering") => heightsRef.current[type + item.id] || 0,
                focus: (item.isActive && (() => focus(item))) || undefined,
                activate: item.activate,
                wait: item.wait,
                continue: item.continue,
                undo: (view !== "preview" && item.allowUndo && item.undo) || undefined,
                skip: (view !== "preview" && item.allowSkip && item.skip) || undefined,
                pause: (item.type === "node" && runner.pause) || undefined,
            };

            return message;
        });

    return {
        frameRef,
        title: runner.title,
        view,
        display: runner.display,
        messages,
        l10n,
        styles,
        avatar,
        isVisible,
        setVisibility,
    };
};
