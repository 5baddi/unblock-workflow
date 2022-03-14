import { css, keyframes } from "styled-components";
import { AvatarAnimationDuration } from "../avatar/animation";
import { keyframePercentage } from "../../helpers/keyframes";

export const QuestionAnimationDuration = AvatarAnimationDuration + 300;
export const QuestionAnimation = css`
    animation: ${keyframes`
        0%, ${keyframePercentage(QuestionAnimationDuration, AvatarAnimationDuration, 0)} {
            transform: scale3d(0,0,0);
            opacity: 0;
        }

        ${keyframePercentage(QuestionAnimationDuration, AvatarAnimationDuration, 100)} {
            transform: scale3d(1,1,1);
        }
    `} ${QuestionAnimationDuration / 1000}s ease-out;
`;
