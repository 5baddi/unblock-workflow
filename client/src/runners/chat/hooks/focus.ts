import { FocusEvent, MutableRefObject, useRef, useState } from "react";
import { IRunnerSequenceItem } from "tripetto-runner-react-hook";
import { TAny, extendImmutable } from "tripetto-runner-foundation";
import { IChatRendering } from "../interfaces/block";

export interface IFocus {
    [key: string]: boolean | undefined;
}

export const useFocus = (props: {
    readonly gainFocus?: boolean;
    readonly initialFocus?: IFocus;
    readonly onFocus?: () => void;
    readonly hooks?: {
        hook: (type: "restart", on: () => void) => void;
        onInteraction: () => void;
    };
}) => {
    const [focus, setFocus] = useState<IFocus>(props.initialFocus || {});
    const frameRef = useRef<HTMLIFrameElement>();
    const currentRef = useRef<string>();
    const gainRef = useRef(props.gainFocus || false);
    const elementsRef = useRef<{
        [key: string]: HTMLElement | undefined;
    }>({});
    const requestFocus = (ref: IRunnerSequenceItem<IChatRendering>) => {
        const focusElement = currentRef.current !== ref.key && elementsRef.current[ref.key];

        if (focusElement && frameRef.current) {
            if (document.hasFocus()) {
                const activeElement = document.activeElement;
                let allowFocus = activeElement && activeElement.isEqualNode(frameRef.current);

                if (gainRef.current) {
                    allowFocus = allowFocus || !activeElement || activeElement.tagName === "BODY";

                    gainRef.current = false;
                }

                if (allowFocus) {
                    focusElement.focus({
                        preventScroll: true,
                    });
                }
            }

            delete elementsRef.current[ref.key];
        }
    };

    return [
        frameRef as MutableRefObject<HTMLIFrameElement>,
        requestFocus,
        () => {
            setFocus({});

            currentRef.current = undefined;
        },
        (ref: IRunnerSequenceItem<IChatRendering>) => focus[ref.key],
        (ref: IRunnerSequenceItem<IChatRendering>, hasFocus: boolean, on?: () => void) => (e: FocusEvent) => {
            setFocus(
                extendImmutable(focus, {
                    [ref.key]: hasFocus,
                })
            );

            if (hasFocus) {
                currentRef.current = ref.key;

                if (props.onFocus) {
                    props.onFocus();
                }
            }

            if (on && focus[ref.key] !== hasFocus) {
                on();
            }
        },
        (ref: IRunnerSequenceItem<IChatRendering>) => (el: HTMLElement | null) => {
            if (el) {
                elementsRef.current[ref.key] = el;
            } else {
                delete elementsRef.current[ref.key];
            }
        },
        focus,
    ] as [
        MutableRefObject<HTMLIFrameElement>,
        (ref: IRunnerSequenceItem<IChatRendering>) => void,
        () => void,
        (ref: IRunnerSequenceItem<IChatRendering>) => boolean | undefined,
        (ref: IRunnerSequenceItem<IChatRendering>, hasFocus: boolean, on?: () => void) => (e: FocusEvent) => TAny,
        (ref: IRunnerSequenceItem<IChatRendering>) => (el: HTMLElement | null) => void,
        IFocus
    ];
};
