import { css, keyframes } from "styled-components";

export const AvatarAnimationDuration = 500;
export const AvatarAnimation = (alignment: "left" | "right") => css`
    animation: ${keyframes`
        0% {
            transform: scale3d(0,0,0);
            opacity: 0;
        }

        100% {
            transform: scale3d(1,1,1);
        }
    `} ${AvatarAnimationDuration / 1000}s ease-out;
`;

export const AvatarShiftAnimation = (distance: number) => css`
    animation: ${keyframes`
        0% {
            transform: translateY(-${distance}px);
        }

        50% {
            transform: translateY(-${distance}px);
        }

        100% {
            transform: translateY(0);
        }
    `} ${AvatarAnimationDuration / 1000}s ease-out;
`;
