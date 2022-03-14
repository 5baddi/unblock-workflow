import { Num } from "tripetto-runner-foundation";

/**
 * Calculates a keyframe percentage for the specified duration where offset specifies the begin of the animation.
 * @param duration Specifies the total duration of the animation in milliseconds.
 * @param offset Specifies the offset of the animation in milliseconds.
 * @param percentage Specifies the percentage.
 * @return Returns a percentage string.
 */
export function keyframePercentage(duration: number, offset: number, percentage: number): string {
    return Num.round((100 / duration) * (offset + ((duration - offset) / 100) * Num.range(percentage, 0, 100))) + "%";
}
