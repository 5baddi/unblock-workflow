import * as React from "react";
import styled from "styled-components";
import { L10n } from "tripetto-runner-foundation";
import { SkipIcon } from "../icons/skip";
import { MESSAGE_SIZE, SIZE } from "../const";

export const SkippedAnswerElement = styled.div<{
    props: {
        color: string;
    };
}>`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${8 / SIZE}em ${16 / SIZE}em;
    display: flex;

    svg,
    span {
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

export const SkippedAnswer = (props: { readonly l10n: L10n.Namespace; readonly color: string }) => (
    <SkippedAnswerElement props={props}>
        {SkipIcon}
        <span>{props.l10n.pgettext("runner#2|💬 Messages|Skipped", "You skipped this question")}</span>
    </SkippedAnswerElement>
);
