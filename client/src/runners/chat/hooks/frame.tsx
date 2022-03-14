import * as React from "react";
import { createPortal } from "react-dom";
import { useFontLoader } from "tripetto-runner-fabric/fontloader";

export const Frame = (props: {
    readonly children?: ((document: Document, fontFamily: string) => React.ReactNode) | React.ReactNode;
    readonly frameRef?: React.MutableRefObject<HTMLIFrameElement>;
    readonly resizeRef?: React.MutableRefObject<(() => void) | undefined>;
    readonly title?: string;
    readonly style?: React.CSSProperties;
    readonly className?: string;
    readonly font?: string;
    readonly onTouch?: () => void;
}) => {
    const ref = props.frameRef || (React.useRef<HTMLIFrameElement>() as React.MutableRefObject<HTMLIFrameElement>);
    const [doc, setDoc] = React.useState<Document | undefined>();
    const [isFontLoading, fontFamily] = useFontLoader(props.font || "sans-serif", ref, "sans-serif");

    React.useEffect(() => {
        const frameElement = ref.current;
        const updateDoc = () => {
            if (!doc) {
                const contentDocument = frameElement.contentDocument;

                frameElement.contentWindow?.addEventListener("resize", () => {
                    if (props.resizeRef && props.resizeRef.current) {
                        props.resizeRef.current();
                    }
                });

                if (props.onTouch) {
                    const onTouch = props.onTouch;

                    frameElement.contentWindow?.addEventListener("mousedown", () => onTouch());
                    frameElement.contentWindow?.addEventListener("touchstart", () => onTouch());
                    frameElement.contentWindow?.addEventListener("wheel", () => onTouch());
                }

                if (contentDocument) {
                    setDoc(contentDocument);
                }
            }
        };

        if (!doc) {
            const contentDocument = frameElement.contentDocument;

            if (contentDocument && contentDocument.readyState === "complete") {
                return updateDoc();
            } else {
                frameElement.addEventListener("load", updateDoc);
            }
        }

        return () => {
            frameElement.removeEventListener("load", updateDoc);
        };
    }, []);

    return (
        <iframe
            ref={ref}
            title={props.title}
            style={{
                ...props.style,
                opacity: (isFontLoading && "0") || undefined,
                boxShadow: (isFontLoading && "none") || undefined,
            }}
            className={props.className}
        >
            {doc &&
                !isFontLoading &&
                createPortal(typeof props.children === "function" ? props.children(doc, fontFamily) : props.children, doc.body)}
        </iframe>
    );
};
