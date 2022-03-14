import * as React from "react";
import styled from "styled-components";
import { L10n } from "tripetto-runner-foundation";
import { TypingIndicator } from "../typing-indicator";
import { Message } from "../message";
import {
    ActivateAnsweringAnimation,
    ActivateLeftButtonsAnimation,
    ActivateRightButtonsAnimation,
    DeactivateAnsweringAnimation,
    DeactivateLeftButtonsAnimation,
    DeactivateRightButtonsAnimation,
} from "./animation";
import { SkipIcon } from "../icons/skip";
import { UndoIcon } from "../icons/undo";
import { PauseIcon } from "../icons/pause";
import { MESSAGE_SIZE, SIZE } from "../const";

const ButtonContainer = styled.div<{
    props: {
        alignment: "left" | "right";
        effect: "activate" | "deactivate" | false;
    };
}>`
    display: flex;
    align-self: center;
    padding-left: ${(ref) => ref.props.alignment === "left" && `${6 / SIZE}em`};
    padding-right: ${(ref) => ref.props.alignment === "right" && `${6 / SIZE}em`};

    ${(ref) =>
        (ref.props.effect === "activate" &&
            (ref.props.alignment === "left" ? ActivateLeftButtonsAnimation : ActivateRightButtonsAnimation)) ||
        (ref.props.effect === "deactivate" &&
            (ref.props.alignment === "left" ? DeactivateLeftButtonsAnimation : DeactivateRightButtonsAnimation))}
`;

const Button = styled.div<{
    props: {
        color?: string;
    };
}>`
    height: ${MESSAGE_SIZE / SIZE}em;
    cursor: pointer;
    opacity: 0.6;
    font-size: ${11 / SIZE}em;
    display: flex;
    align-items: center;
    transition: opacity 0.15s ease-in-out;
    color: ${(ref) => ref.props.color};
    text-transform: uppercase;
    margin: 0 ${6 / SIZE}em;

    svg {
        width: ${20 / SIZE}em;
        height: ${20 / SIZE}em;
        margin-right: ${2 / SIZE}em;
        position: relative;
        top: ${-2 / SIZE}em;

        path {
            fill: ${(ref) => ref.props.color};
        }
    }

    :hover {
        opacity: 1;
    }
`;

export const Answering = (props: {
    readonly l10n: L10n.Namespace;
    readonly alignment: "left" | "right";
    readonly effect: "activate" | "deactivate" | false;
    readonly roundness?: number;
    readonly backgroundColor?: string;
    readonly borderColor?: string;
    readonly color?: string;
    readonly isFirst: boolean;
    readonly isTyping: boolean;
    readonly undo?: () => void;
    readonly skip?: () => void;
    readonly pause?: () => void;
    readonly pausing: boolean;
}) => {
    const buttons = (
        <ButtonContainer props={props}>
            {props.undo && (
                <Button
                    props={{
                        color: props.borderColor || props.backgroundColor || props.color,
                    }}
                    onClick={props.undo}
                >
                    {UndoIcon}
                    {props.pausing
                        ? props.l10n.pgettext("runner#8|⏸ Pause conversation", "Cancel pausing")
                        : props.l10n.pgettext("runner#1|🆗 Buttons", "Back")}
                </Button>
            )}
            {props.pause && (
                <Button
                    props={{
                        color: props.borderColor || props.backgroundColor || props.color,
                    }}
                    onClick={props.pause}
                >
                    {PauseIcon}
                    {props.l10n.pgettext("runner#1|🆗 Buttons", "Pause")}
                </Button>
            )}
            {props.skip && (
                <Button
                    props={{
                        color: props.borderColor || props.backgroundColor || props.color,
                    }}
                    onClick={props.skip}
                >
                    {SkipIcon}
                    {props.l10n.pgettext("runner#1|🆗 Buttons", "Skip")}
                </Button>
            )}
        </ButtonContainer>
    );

    return (
        <>
            {props.alignment === "right" && buttons}
            <Message
                alignment={props.alignment}
                roundness={props.roundness}
                backgroundColor={props.backgroundColor}
                borderColor={props.borderColor}
                animation={
                    (props.effect === "activate" && ActivateAnsweringAnimation) ||
                    (props.effect === "deactivate" && DeactivateAnsweringAnimation)
                }
            >
                <TypingIndicator color={props.color} animate={props.isTyping} />
            </Message>
            {props.alignment === "left" && buttons}
        </>
    );
};
