import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
    IRunnerSequenceItem,
    TRunnerPreviewData,
    TRunnerViews,
    findActiveItem,
    useL10n,
    useRunnerFoundation,
} from "tripetto-runner-react-hook";
import {
    IDefinition,
    ISnapshot,
    Instance,
    L10n,
    TL10n,
    castToBoolean,
    findFirst,
    isBoolean,
    isFunction,
    scheduleAction,
    set,
} from "tripetto-runner-foundation";
import { namespace } from "../namespace";
import { IChatRendering } from "../interfaces/block";
import { IChatStyles } from "../interfaces/styles";
import { IChatProps } from "../interfaces/props";
import { IChatSnapshot } from "../interfaces/snapshot";
import { useCache } from "./cache";
import { useDisplay } from "./display";
import { useStyles } from "./styles";
import { useAutoStart } from "./autostart";
import { useTypingIndicator } from "./typing-indicator";
import { QuestionAnimationDuration } from "../ui/question/animation";
import { AnswerAnimationDuration } from "../ui/answer/animation";
import { AfterInputAnimationDuration, BeforeInputAnimationDuration } from "../ui/input/animation";
import { banner } from "../ui/messages/banner";

export interface IChatController {
    definition: IDefinition;
    styles: IChatStyles;
    l10n: TL10n;
    view: TRunnerViews;
    readonly instance: Instance | undefined;
    readonly fingerprint: string;
    readonly snapshot: ISnapshot<IChatSnapshot> | undefined;
    readonly isRunning: boolean;
    readonly isFinishing: boolean;
    readonly isPausing: boolean;
    readonly allowStart: boolean;
    readonly allowRestart: boolean;
    readonly allowPause: boolean;
    readonly allowStop: boolean;
    readonly start: () => void;
    readonly restart: () => void;
    readonly pause: () => ISnapshot<IChatSnapshot> | Promise<ISnapshot<IChatSnapshot>> | undefined;
    readonly stop: () => void;
    readonly doPreview: (data: TRunnerPreviewData) => void;
    readonly openChat: () => void;
    readonly closeChat: () => void;
}

export const useChatController = (
    props: IChatProps & {
        readonly onSnapshot: (type: "pause" | "snapshot") => IChatSnapshot;
        readonly onRestart?: () => void;
    }
) => {
    const [isTyping, onInteraction] = useTypingIndicator();
    const [display, changeDisplay] = useDisplay(props);
    const runner = useRunnerFoundation<IChatRendering>(props, {
        namespace,
        mode: "sequence",
        prologue: "blend",
        banner: banner(props.styles),
        canActivate,
        canInteract,
        canSkip,
        preActiveDuration,
        beforeActiveDuration,
        afterActiveDuration,
        postActiveDuration,
        autoStart: props.view === "test" || props.view === "preview" || display !== "button",
        restore:
            (props.snapshot &&
                props.snapshot.b && {
                    key: props.snapshot.b.a,
                    timeStamp: props.snapshot.b.e,
                }) ||
            undefined,
        onInteraction,
        onPreview: (action: "start" | "end", type: "prologue" | "block" | "epilogue", id?: string) => {
            if (!mark(action, type, id)) {
                previewRef.current = type !== "block" ? type : id;
            }
        },
        onRestart: () => {
            if (onRestartRef.current) {
                onRestartRef.current();
            }
        },
        onDestroy: () => {
            if (props.controller) {
                props.controller[0] = undefined;
            }
        },
    });
    const cache = useCache();
    const [styles, runtimeStyles, avatar, setStyles] = useStyles(props.styles, display, changeDisplay, () => {
        cache.purge();
        runner.update();
    });
    const [l10n, setL10n, updateL10n] = useL10n(props.l10n, props.onL10n, runner, () => cache.purge());
    const [isVisible, setVisibility] = useState<boolean | undefined>(
        runner.view === "live" && ((props.snapshot && props.snapshot.b && props.snapshot.b.c) || runtimeStyles.autoOpen) ? true : undefined
    );
    const onRestartRef = useRef<() => void>();
    const previewRef = useRef<string>();
    const markRef = useRef("");
    const mark = (action: "start" | "end", type: "prologue" | "block" | "epilogue", id?: string) => {
        const activeItem = findActiveItem(runner.storyline);

        switch (action) {
            case "start":
                if (
                    !activeItem ||
                    (type === "prologue" && activeItem.type !== "prologue") ||
                    (type === "epilogue" && activeItem.type !== "epilogue") ||
                    (type === "block" && (!activeItem.node || activeItem.node.id !== id))
                ) {
                    const previewItem = findFirst(
                        runner.storyline,
                        (item) => type === item.type || (item.node && item.node.id === id) || false
                    );

                    if (previewItem) {
                        markRef.current = previewItem.id;

                        previewItem.activate();
                    } else {
                        return false;
                    }
                }
                break;
            case "end":
                previewRef.current = undefined;
                markRef.current = "";

                if (activeItem) {
                    activeItem.deactivate();
                }
                break;
        }

        return true;
    };

    useAutoStart(runner, display, isVisible);

    if (runner.view !== "live" && display !== "button" && typeof isVisible === "boolean") {
        setVisibility(undefined);
    }

    const pause = () => {
        if (props.onPause) {
            return runner.pause<IChatSnapshot>(
                props.onSnapshot("pause"),
                (
                    snapshot: ISnapshot<IChatSnapshot>,
                    done: (result: "succeeded" | "failed" | "canceled", retry?: () => void) => void,
                    item?: IRunnerSequenceItem<IChatRendering>
                ) => {
                    const handlePause = (handler: () => boolean | void | Promise<void>) => {
                        const request = handler();

                        if (!request || isBoolean(request)) {
                            done(isBoolean(request) && !request ? "failed" : "succeeded", () => handlePause(handler));
                        } else {
                            request
                                .then(() => {
                                    done("succeeded");
                                })
                                .catch((reason?: string) => {
                                    done("failed", () => handlePause(handler));

                                    if (reason) {
                                        console.log(reason);
                                    }
                                });
                        }
                    };

                    if (isFunction(props.onPause)) {
                        const pauseHandler = props.onPause;

                        handlePause(() =>
                            pauseHandler(
                                snapshot,
                                (props.l10nNamespace || L10n.Namespace.global).current,
                                (props.l10nNamespace || L10n.Namespace.global).locale.identifier,
                                namespace
                            )
                        );
                    } else if (props.onPause && props.onPause.recipe === "email" && item) {
                        const pauseHandler = props.onPause.onPause;

                        item.setPausingRecipe({
                            recipe: "email",
                            complete: (emailAddress: string) => {
                                if (!snapshot.b) {
                                    set(snapshot, "b", {
                                        d: emailAddress,
                                    });
                                } else {
                                    set(snapshot.b, "d", emailAddress);
                                }

                                handlePause(() =>
                                    pauseHandler(
                                        emailAddress,
                                        snapshot,
                                        (props.l10nNamespace || L10n.Namespace.global).current,
                                        (props.l10nNamespace || L10n.Namespace.global).locale.identifier,
                                        namespace
                                    )
                                );
                            },
                            cancel: () => done("canceled"),
                        });
                    } else {
                        done("succeeded");
                    }
                }
            );
        }

        return runner.pause(props.onSnapshot("pause"));
    };

    const controller = {
        title: runner.definition.name,
        view: runner.view,
        display,
        storyline: runner.storyline,
        pause: (runner.allowPause && props.onPause && pause) || undefined,
        reload: runner.reload,
        isTyping: isTyping || runner.isEvaluating,
        onInteraction,
    };

    onRestartRef.current = props.onRestart;

    if (props.controller) {
        props.controller[0] = {
            get definition() {
                return runner.definition;
            },
            set definition(definition: IDefinition) {
                runner.definition = definition;

                updateL10n(runner.definition && runner.definition.language);
            },
            get instance() {
                return runner.instance;
            },
            get fingerprint() {
                return runner.fingerprint;
            },
            get styles() {
                return styles;
            },
            set styles(newStyles: IChatStyles) {
                setStyles(newStyles);
            },
            get l10n() {
                return l10n;
            },
            set l10n(newL10n: TL10n) {
                setL10n(newL10n);
            },
            get view() {
                return runner.view;
            },
            set view(newView: TRunnerViews) {
                runner.view = newView;
            },
            get snapshot() {
                return runner.snapshot(props.onSnapshot("snapshot"));
            },
            get isRunning() {
                return runner.isRunning;
            },
            get isFinishing() {
                return runner.isFinishing;
            },
            get isPausing() {
                return runner.isPausing;
            },
            get allowStart() {
                return runner.allowStart;
            },
            get allowRestart() {
                return runner.allowRestart;
            },
            get allowPause() {
                return runner.allowPause;
            },
            get allowStop() {
                return runner.allowStop;
            },
            start: runner.start,
            restart: runner.restart,
            pause,
            stop: runner.stop,
            doPreview: runner.doPreview,
            openChat: () => {
                if (display === "button") {
                    setVisibility(true);
                }
            },
            closeChat: () => {
                if (display === "button") {
                    setVisibility(false);
                }
            },
        };
    }

    useEffect(() => {
        if (previewRef.current && runner.view === "preview") {
            scheduleAction(() => {
                if (
                    previewRef.current &&
                    (runner.view !== "preview" ||
                        mark(
                            "start",
                            previewRef.current === "prologue" ? "prologue" : previewRef.current === "epilogue" ? "epilogue" : "block",
                            previewRef.current
                        ))
                ) {
                    previewRef.current = undefined;
                }
            });
        }
    });

    return [
        controller,
        cache,
        runner.l10n,
        runtimeStyles,
        props.attachments,
        avatar,
        isVisible,
        setVisibility,
        markRef,
        runner.doAction,
    ] as [
        typeof controller,
        typeof cache,
        typeof runner.l10n,
        typeof runtimeStyles,
        typeof props.attachments,
        typeof avatar,
        boolean | undefined,
        (visible: boolean) => void,
        MutableRefObject<string>,
        typeof runner.doAction
    ];
};

const canActivate = (item: IRunnerSequenceItem<IChatRendering>) =>
    !item.node || !item.node.block || !item.node.block.input ? true : false;
const canInteract = (item: IRunnerSequenceItem<IChatRendering>) => (item.node && item.node.block && item.node.block.input ? true : false);
const canSkip = (item: IRunnerSequenceItem<IChatRendering>) => !item.node || !item.node.block || !item.node.block.required;
const preActiveDuration = (item: IRunnerSequenceItem<IChatRendering>) =>
    ((!item.node || (item.node.props.name && castToBoolean(item.node.props.nameVisible, true)) || item.node.props.description) &&
        QuestionAnimationDuration) ||
    undefined;
const beforeActiveDuration = (item: IRunnerSequenceItem<IChatRendering>) =>
    (((item.node && item.node.block && item.node.block.input) || item.type === "pausing") && BeforeInputAnimationDuration) || undefined;
const afterActiveDuration = (item: IRunnerSequenceItem<IChatRendering>) =>
    (item.node && item.node.block && item.node.block.input && AfterInputAnimationDuration) || undefined;
const postActiveDuration = (item: IRunnerSequenceItem<IChatRendering>) =>
    (item.node && item.node.block && item.node.block.answer && AnswerAnimationDuration) || undefined;
