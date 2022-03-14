import * as React from "react";
import styled from "styled-components";
import { L10n } from "tripetto-runner-foundation";
import { MESSAGE_SIZE, SIZE } from "../const";

export const PreviewAnswerElement = styled.div`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${8 / SIZE}em ${16 / SIZE}em;
    display: flex;
    align-items: center;
    opacity: 0.4;
`;

export const PreviewAnswer = (props: { readonly l10n: L10n.Namespace }) => (
    <PreviewAnswerElement>{props.l10n.pgettext("runner:chat", "Tap or click to set a preview answer")}</PreviewAnswerElement>
);
