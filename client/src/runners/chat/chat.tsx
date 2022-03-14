import * as React from "react";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { IMessage, useChatRunner } from "./hooks/runner";
import { IChatProps } from "./interfaces/props";
import { ChatRoot } from "./ui/root";
import { ChatButton } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { AvatarAnimation, AvatarShiftAnimation } from "./ui/avatar/animation";
import { MessageContainer } from "./ui/message/container";
import { Message } from "./ui/message";
import { QuestionAnimation } from "./ui/question/animation";
import { AnswerAnimation } from "./ui/answer/animation";
import { Answering } from "./ui/answering";
import { ClosedMessage } from "./ui/messages/closed";
import { EmptyMessage } from "./ui/messages/empty";
import { Input } from "./ui/input";
import { Timestamp } from "./ui/timestamp";
import { MARGIN_MESSAGES } from "./ui/const";
import "./blocks";

export const ChatRunner = (props: IChatProps) => {
    const { view, display, title, messages, frameRef, l10n, styles, avatar, isVisible, setVisibility } = useChatRunner(props);

    return (
        <React.StrictMode>
            <ChatRoot
                frameRef={frameRef}
                view={view}
                display={display}
                title={title}
                isVisible={isVisible}
                styles={styles}
                className={props.className}
                customStyle={props.customStyle}
                customCSS={props.customCSS}
                onTouch={props.onTouch}
            >
                {messages.length === 0 && (
                    <MessageContainer alignment={styles.questions.alignment}>
                        {styles.questions.alignment === "left" && (
                            <Avatar
                                alignment="left"
                                backgroundColor={styles.questions.borderColor || styles.questions.backgroundColor}
                                avatar={avatar}
                                animation={view !== "preview" && AvatarAnimation(styles.questions.alignment)}
                                onClick={clickAvatar(props, view)}
                            />
                        )}
                        <Message
                            alignment={styles.questions.alignment}
                            roundness={styles.questions.roundness}
                            backgroundColor={styles.questions.backgroundColor}
                            borderColor={styles.questions.borderColor}
                            textColor={styles.questions.textColor}
                            animation={view !== "preview" && QuestionAnimation}
                            justify={display === "button" && view === "live"}
                        >
                            {view === "live" ? <ClosedMessage l10n={l10n} /> : <EmptyMessage l10n={l10n} />}
                        </Message>
                        {styles.questions.alignment === "right" && (
                            <Avatar
                                alignment="right"
                                backgroundColor={styles.questions.borderColor || styles.questions.backgroundColor}
                                avatar={avatar}
                                animation={view !== "preview" && AvatarAnimation(styles.questions.alignment)}
                                onClick={clickAvatar(props, view)}
                            />
                        )}
                    </MessageContainer>
                )}
                {messages.map((message) => (
                    <React.Fragment key={message.key}>
                        {message.timeStamp && (
                            <Timestamp
                                l10n={l10n}
                                timeStamp={message.timeStamp}
                                color={
                                    styles.color ||
                                    (styles.questions.backgroundColor === "transparent"
                                        ? styles.questions.textColor
                                        : styles.questions.backgroundColor)
                                }
                            />
                        )}
                        {message.question && (
                            <MessageContainer
                                measure={message.measure("question")}
                                spacing={message.spacing("question")}
                                alignment={styles.questions.alignment}
                                disabled={message.disabled}
                            >
                                {styles.questions.alignment === "left" && (
                                    <Avatar
                                        alignment="left"
                                        visible={message.avatar("question")}
                                        backgroundColor={styles.questions.borderColor || styles.questions.backgroundColor}
                                        avatar={avatar}
                                        animation={
                                            message.isPreActive &&
                                            (message.isTail("question")
                                                ? AvatarShiftAnimation(message.height("question") + MARGIN_MESSAGES)
                                                : AvatarAnimation(styles.questions.alignment))
                                        }
                                        onClick={clickAvatar(props, view)}
                                    />
                                )}
                                <Message
                                    alignment={styles.questions.alignment}
                                    isFirst={message.isFirst("question")}
                                    isLast={message.isLast("question")}
                                    roundness={styles.questions.roundness}
                                    backgroundColor={styles.questions.backgroundColor}
                                    borderColor={styles.questions.borderColor}
                                    textColor={styles.questions.textColor}
                                    animation={message.isPreActive && QuestionAnimation}
                                    onWait={message.wait}
                                    onContinue={message.continue}
                                    onClick={clickQuestion(props, view, message)}
                                >
                                    {message.question}
                                </Message>
                                {styles.questions.alignment === "right" && (
                                    <Avatar
                                        alignment="right"
                                        visible={message.avatar("question")}
                                        backgroundColor={styles.questions.borderColor || styles.questions.backgroundColor}
                                        avatar={avatar}
                                        animation={
                                            message.isPreActive &&
                                            (message.isTail("question")
                                                ? AvatarShiftAnimation(message.height("question") + MARGIN_MESSAGES)
                                                : AvatarAnimation(styles.questions.alignment))
                                        }
                                        onClick={clickAvatar(props, view)}
                                    />
                                )}
                            </MessageContainer>
                        )}
                        {message.answer && (
                            <MessageContainer
                                measure={message.measure("answer")}
                                spacing={message.spacing("answer")}
                                alignment={styles.answers.alignment}
                                disabled={message.disabled}
                            >
                                {styles.answers.alignment === "left" &&
                                    (styles.answers.avatarImage || styles.answers.alignment === styles.questions.alignment) && (
                                        <Avatar
                                            alignment="left"
                                            visible={message.avatar("answer")}
                                            backgroundColor={styles.answers.borderColor || styles.answers.backgroundColor}
                                            avatar={styles.answers.avatarImage}
                                            animation={
                                                message.isPostActive &&
                                                AvatarShiftAnimation(message.height("answer") - message.height("answering"))
                                            }
                                            onClick={clickAvatar(props, view)}
                                        />
                                    )}
                                <Message
                                    alignment={styles.answers.alignment}
                                    isFirst={message.isFirst("answer")}
                                    isLast={message.isLast("answer")}
                                    roundness={styles.answers.roundness}
                                    backgroundColor={styles.answers.backgroundColor}
                                    borderColor={styles.answers.borderColor}
                                    textColor={styles.answers.textColor}
                                    animation={message.isPostActive && AnswerAnimation}
                                    onWait={message.wait}
                                    onContinue={message.continue}
                                    onClick={clickAnswer(props, view, message)}
                                >
                                    {message.answer}
                                </Message>
                                {styles.answers.alignment === "right" &&
                                    (styles.answers.avatarImage || styles.answers.alignment === styles.questions.alignment) && (
                                        <Avatar
                                            alignment="right"
                                            visible={message.avatar("answer")}
                                            backgroundColor={styles.answers.borderColor || styles.answers.backgroundColor}
                                            avatar={styles.answers.avatarImage}
                                            animation={
                                                message.isPostActive &&
                                                AvatarShiftAnimation(message.height("answer") - message.height("answering"))
                                            }
                                            onClick={clickAvatar(props, view)}
                                        />
                                    )}
                            </MessageContainer>
                        )}
                        {message.input && (
                            <>
                                <MessageContainer
                                    measure={message.measure("answering")}
                                    spacing={message.spacing("answer")}
                                    alignment={styles.answers.alignment}
                                >
                                    {styles.answers.alignment === "left" &&
                                        (styles.answers.avatarImage || styles.answers.alignment === styles.questions.alignment) && (
                                            <Avatar
                                                alignment="left"
                                                backgroundColor={styles.answers.borderColor || styles.answers.backgroundColor}
                                                avatar={styles.answers.avatarImage}
                                                animation={
                                                    message.isBeforeActive &&
                                                    (message.isTail("answer")
                                                        ? AvatarShiftAnimation(message.height("answering") + 8)
                                                        : AvatarAnimation(styles.answers.alignment))
                                                }
                                                onClick={clickAvatar(props, view)}
                                            />
                                        )}
                                    <Answering
                                        l10n={l10n}
                                        alignment={styles.answers.alignment}
                                        isFirst={message.isFirst("answer")}
                                        isTyping={message.isTyping}
                                        roundness={styles.answers.roundness}
                                        backgroundColor={styles.answers.backgroundColor}
                                        borderColor={styles.answers.borderColor}
                                        color={styles.answers.textColor}
                                        effect={(message.isBeforeActive && "activate") || (message.isAfterActive && "deactivate") || false}
                                        undo={message.undo}
                                        skip={message.skip}
                                        pause={message.pause}
                                        pausing={message.isPausing}
                                    />
                                    {styles.answers.alignment === "right" &&
                                        (styles.answers.avatarImage || styles.answers.alignment === styles.questions.alignment) && (
                                            <Avatar
                                                alignment="right"
                                                backgroundColor={styles.answers.borderColor || styles.answers.backgroundColor}
                                                avatar={styles.answers.avatarImage}
                                                animation={
                                                    message.isBeforeActive &&
                                                    (message.isTail("answer")
                                                        ? AvatarShiftAnimation(message.height("answering") + 8)
                                                        : AvatarAnimation(styles.answers.alignment))
                                                }
                                                onClick={clickAvatar(props, view)}
                                            />
                                        )}
                                </MessageContainer>
                                <Input
                                    alignment={styles.answers.alignment}
                                    effect={(message.isBeforeActive && "activate") || (message.isAfterActive && "deactivate") || false}
                                    focus={message.focus}
                                    break={message.break}
                                    blockIdentifier={message.blockIdentifier}
                                >
                                    {message.input}
                                </Input>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </ChatRoot>
            {display === "button" && <ChatButton view={view} isVisible={isVisible} setVisibility={setVisibility} styles={styles} />}
        </React.StrictMode>
    );
};

const clickQuestion = (props: IChatProps, view: TRunnerViews, message: IMessage) => () => {
    if (view !== "live" && props.onEdit) {
        switch (message.type) {
            case "prologue":
                props.onEdit("prologue");
                break;
            case "epilogue":
                props.onEdit("epilogue", message.id);
                break;
            default:
                props.onEdit("block", message.id);
                break;
        }

        if (view === "preview") {
            message.activate();
        }
    }
};

const clickAnswer = (props: IChatProps, view: TRunnerViews, message: IMessage) => () => {
    message.activate();

    if (view === "preview" && props.onEdit && message.type === "node" && message.id) {
        props.onEdit("block", message.id);
    }
};

const clickAvatar = (props: IChatProps, view: TRunnerViews) => () => {
    if (view !== "live" && props.onEdit) {
        props.onEdit("styles");
    }
};
