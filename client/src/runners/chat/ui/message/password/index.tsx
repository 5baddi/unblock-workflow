import * as React from "react";
import styled from "styled-components";
import { MESSAGE_SIZE, SIZE } from "../../const";

export const PasswordAnswerElement = styled.div<{
    props: {
        color: string;
    };
}>`
    height: ${MESSAGE_SIZE / SIZE}em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    span {
        display: inline-block;
        width: ${8 / SIZE}em;
        height: ${8 / SIZE}em;
        border-radius: 50%;
        margin: 0 ${2 / SIZE}em;
        background: ${(ref) => ref.props.color};
        opacity: 0.5;
    }
`;

export const PasswordAnswer = (props: { readonly color: string }) => (
    <PasswordAnswerElement props={props}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
    </PasswordAnswerElement>
);
