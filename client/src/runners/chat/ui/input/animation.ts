import { css, keyframes } from "styled-components";
import { AvatarAnimationDuration } from "../avatar/animation";
import { keyframePercentage } from "../../helpers/keyframes";

export const BeforeInputAnimationDuration = AvatarAnimationDuration + 500;
export const BeforeInputAnimation = css`
    animation: ${keyframes`
        0%, ${keyframePercentage(BeforeInputAnimationDuration, AvatarAnimationDuration, 0)} {
            transform: translateY(-28px) scale(0);
            opacity: 0;
        }

        ${keyframePercentage(BeforeInputAnimationDuration, AvatarAnimationDuration, 100)} {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
    `} ${BeforeInputAnimationDuration / 1000}s ease-in;
`;

export const AfterInputAnimationDuration = 300;
export const AfterInputAnimation = css`
    animation: ${keyframes`
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }

        100% {
            transform: translateY(-28px) scale(0);
            opacity: 0;
        }
    `} ${AfterInputAnimationDuration / 1000}s ease-in;
`;
