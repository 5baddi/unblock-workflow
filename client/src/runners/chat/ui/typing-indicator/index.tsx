import * as React from "react";
import styled, { css, keyframes } from "styled-components";
import { MESSAGE_SIZE, SIZE } from "../const";

export const TypingIndicatorAnimationDuration = 1300;
const TypingIndicatorAnimation = css`
    animation: ${keyframes`
        0%,
        60%,
        100% {
            transform: translateY(0);
            opacity: 0.5;
        }

        30% {
            transform: translateY(-4px);
            opacity: 1;
        }
    `} 1.3s linear infinite;
`;

const TypingIndicatorElement = styled.div<{
    props: {
        color?: string;
        animate: boolean;
    };
}>`
    width: ${(MESSAGE_SIZE * 1.5) / SIZE}em;
    height: ${MESSAGE_SIZE / SIZE}em;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        display: inline-block;
        width: ${8 / SIZE}em;
        height: ${8 / SIZE}em;
        border-radius: 50%;
        margin: 0 ${2 / SIZE}em;
        background: ${(ref) => ref.props.color};
        opacity: 0.5;

        ${(ref) => (ref.props.animate ? TypingIndicatorAnimation : "")}

        &:nth-child(2) {
            animation-delay: -1.2s;
        }

        &:nth-child(3) {
            animation-delay: -1.1s;
        }
    }
`;

export const TypingIndicator = (props: { readonly color?: string; readonly animate: boolean }) => (
    <TypingIndicatorElement props={props}>
        <span />
        <span />
        <span />
    </TypingIndicatorElement>
);
