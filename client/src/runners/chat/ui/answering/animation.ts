import { css, keyframes } from "styled-components";
import { AvatarAnimationDuration } from "../avatar/animation";
import { keyframePercentage } from "../../helpers/keyframes";

const ActivateAnsweringAnimationDuration = AvatarAnimationDuration + 300;
export const ActivateAnsweringAnimation = css`
    animation: ${keyframes`
        0%, ${keyframePercentage(ActivateAnsweringAnimationDuration, AvatarAnimationDuration, 0)} {
            transform: scale3d(0,0,0);
            opacity: 0;
        }

        ${keyframePercentage(ActivateAnsweringAnimationDuration, AvatarAnimationDuration, 100)} {
            transform: scale3d(1,1,1);
        }
    `} ${ActivateAnsweringAnimationDuration / 1000}s ease-out;
`;

const DeactivateAnsweringAnimationDuration = 300;
export const DeactivateAnsweringAnimation = css`
    animation: ${keyframes`
        0% {
            transform: scale3d(1,1,1);
        }

        100% {
            transform: scale3d(0,0,0);
            opacity: 0;
        }
    `} ${DeactivateAnsweringAnimationDuration / 1000}s ease-in;
`;

const ActivateButtonsAnimationDuration = ActivateAnsweringAnimationDuration + 300;
export const ActivateLeftButtonsAnimation = css`
    animation: ${keyframes`
        0%, ${keyframePercentage(ActivateButtonsAnimationDuration, ActivateAnsweringAnimationDuration, 0)} {
            opacity: 0;
            transform: translateX(-50%);
        }

        ${keyframePercentage(ActivateButtonsAnimationDuration, ActivateAnsweringAnimationDuration, 100)} {
            opacity: 1;
            transform: translateX(0);
        }
    `} ${ActivateButtonsAnimationDuration / 1000}s ease-out;
`;

export const ActivateRightButtonsAnimation = css`
    animation: ${keyframes`
        0%, ${keyframePercentage(ActivateButtonsAnimationDuration, ActivateAnsweringAnimationDuration, 0)} {
            opacity: 0;
            transform: translateX(50%);
        }

        ${keyframePercentage(ActivateButtonsAnimationDuration, ActivateAnsweringAnimationDuration, 100)} {
            opacity: 1;
            transform: translateX(0);
        }
    `} ${ActivateButtonsAnimationDuration / 1000}s ease-out;
`;

export const DeactivateLeftButtonsAnimation = css`
    animation: ${keyframes`
        0% {
            opacity: 1;
            transform: translateX(0);
        }

        100% {
            opacity: 0;
            transform: translateX(-50%);
        }
    `} 0.3s ease-out;
`;

export const DeactivateRightButtonsAnimation = css`
    animation: ${keyframes`
        0% {
            opacity: 1;
            transform: translateX(0);
        }

        100% {
            opacity: 0;
            transform: translateX(50%);
        }
    `} 0.3s ease-out;
`;
