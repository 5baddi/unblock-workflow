import { useRef, useState } from "react";
import { DateTime, scheduleAnimation } from "tripetto-runner-foundation";
import { TypingIndicatorAnimationDuration } from "../ui/typing-indicator";

export const useTypingIndicator = () => {
    const [isTyping, setTyping] = useState(false);
    const typingIndicator = useRef({
        handle: 0,
        time: 0,
    });

    return [
        isTyping,
        () => {
            if (!isTyping) {
                scheduleAnimation(() => setTyping(true));
            }

            if (typingIndicator.current && typingIndicator.current.handle) {
                clearTimeout(typingIndicator.current.handle);
            }

            typingIndicator.current = {
                handle: setTimeout(
                    () => {
                        typingIndicator.current = {
                            handle: 0,
                            time: 0,
                        };

                        scheduleAnimation(() => setTyping(false));
                    },
                    typingIndicator.current.time
                        ? TypingIndicatorAnimationDuration -
                              (DateTime.elapsed(typingIndicator.current.time, true) % TypingIndicatorAnimationDuration) +
                              TypingIndicatorAnimationDuration * 2
                        : TypingIndicatorAnimationDuration * 3
                ) as {} as number,
                time:
                    DateTime.precise -
                    (typingIndicator.current.time &&
                        DateTime.elapsed(typingIndicator.current.time, true) % TypingIndicatorAnimationDuration),
            };
        },
    ] as [boolean, () => void];
};
