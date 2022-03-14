import { css, keyframes } from "styled-components";

export const AnswerAnimationDuration = 300;
export const AnswerAnimation = css`
    animation: ${keyframes`
        0% {
            transform: scale3d(0,0,0);
            opacity: 0;
        }

        100% {
            transform: scale3d(1,1,1);
        }
    `} ${AnswerAnimationDuration / 1000}s ease-out;
`;
