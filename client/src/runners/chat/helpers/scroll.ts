import { MutableRefObject } from "react";
import { DateTime, Num } from "tripetto-runner-foundation";

export function scrollEffect(
    el: HTMLElement,
    to: number,
    duration: number,
    delay: number,
    cancelAnimationRef?: MutableRefObject<(() => void) | undefined>
): Promise<void> {
    if (cancelAnimationRef && cancelAnimationRef.current) {
        cancelAnimationRef.current();

        cancelAnimationRef.current = undefined;
    }

    return new Promise((resolve: () => void) => {
        if (el.scrollTop !== to) {
            const start = DateTime.precise;
            const delta = to - el.scrollTop;
            let y = 0;

            const animate = () => {
                const requestId = requestAnimationFrame(() => {
                    if (DateTime.precise - start > delay) {
                        y = (delta * Num.range(DateTime.precise - start - delay, 0, duration)) / duration;

                        if (y === delta) {
                            el.style.transform = "none";
                            el.scrollTop = to;

                            if (cancelAnimationRef) {
                                cancelAnimationRef.current = undefined;
                            }

                            resolve();
                        } else {
                            el.style.transform = `translate3d(0,${-y}px,0)`;

                            animate();
                        }
                    } else {
                        animate();
                    }
                });

                if (cancelAnimationRef) {
                    cancelAnimationRef.current = () => {
                        cancelAnimationFrame(requestId);

                        el.style.transform = "none";
                        el.scrollTop += y;
                    };
                }
            };

            if (duration === 0) {
                el.scrollTop = to;

                resolve();
            } else {
                animate();
            }
        } else {
            resolve();
        }
    });
}
