import * as React from "react";
import styled from "styled-components";
import { L10n } from "tripetto-runner-foundation";
import { PauseIcon } from "../icons/pause";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { MESSAGE_SIZE, SIZE } from "../const";

export const PausedAnswerElement = styled.div<{
    props: {
        color: string;
    };
}>`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${8 / SIZE}em ${16 / SIZE}em;
    display: flex;

    svg,
    span {
        opacity: 0.6;
        color: ${(ref) => ref.props.color};
    }

    span {
        align-self: center;
    }

    svg {
        min-width: ${24 / SIZE}em;
        width: ${24 / SIZE}em;
        height: ${24 / SIZE}em;
        margin-right: ${8 / SIZE}em;
        position: relative;
        top: ${-2 / SIZE}em;
        fill: ${(ref) => ref.props.color};
    }
`;

export const PausedAnswer = (props: { readonly l10n: L10n.Namespace; readonly color: string }) => (
    <PausedAnswerElement props={props}>
        {PauseIcon}
        <span>{props.l10n.pgettext("runner#2|💬 Messages|Pause request", "Pause this conversation")}</span>
    </PausedAnswerElement>
);

export const PausedMessage = (props: { readonly l10n: L10n.Namespace }) => (
    <ParagraphMessage>
        <ParagraphTitle>
            {props.l10n.pgettext("runner#2|💬 Messages|Conversation paused", "The conversation is now paused.")}
        </ParagraphTitle>
    </ParagraphMessage>
);
