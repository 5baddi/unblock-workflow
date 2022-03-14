import styled, { StyleSheetManager, createGlobalStyle, css, keyframes } from "styled-components";
import * as React from "react";
import { Num, castToBoolean } from "tripetto-runner-foundation";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { color } from "tripetto-runner-fabric/color";
import { TChatDisplay } from "../interfaces/props";
import { Frame } from "../hooks/frame";
import { IRuntimeStyles } from "../hooks/styles";
import { scrollEffect } from "../helpers/scroll";
import { attach, detach } from "../helpers/resizer";
import { AfterInputAnimationDuration } from "./input/animation";
import { MARGIN_BUTTON, MARGIN_MESSAGES, MARGIN_PAGE, MAX_HEIGHT, OFFSET, SMALL_SCREEN_MARGIN, SMALL_SCREEN_SIZE } from "./const";

const RootActivateAnimation = css`
    animation: ${keyframes`
        from {
            opacity: 0;
            transform: translateY(50px) scale(.5);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);

        }
    `} 0.25s ease-out;
`;

const RootDeactivateAnimation = css`
    animation: ${keyframes`
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(50px) scale(.5);
        }
    `} 0.25s ease-out;
`;

const RootFrame = styled(Frame)<{
    props: {
        view: TRunnerViews;
        display: TChatDisplay;
        styles: IRuntimeStyles;
        isVisible: boolean;
        useAnimation: boolean;
    };
}>`
    background-color: transparent !important;
    border: none !important;
    position: ${(ref) =>
        ref.props.display === "button"
            ? ref.props.view === "live"
                ? "fixed"
                : "absolute"
            : ref.props.display === "inline" || ref.props.view !== "live"
            ? "relative"
            : "fixed"};
    left: ${(ref) =>
        (ref.props.display === "inline" && ref.props.view === "live" && `-${OFFSET}px`) ||
        (ref.props.display === "page" && ref.props.view === "live" && "0") ||
        undefined};
    top: ${(ref) =>
        (ref.props.display === "inline" && ref.props.view === "live" && `-${OFFSET}px`) ||
        (ref.props.display === "page" && ref.props.view === "live" && "0") ||
        undefined};
    right: ${(ref) => (ref.props.display === "button" && "32px") || undefined};
    bottom: ${(ref) => (ref.props.display === "button" && "128px") || undefined};
    width: ${(ref) =>
        ref.props.display === "button"
            ? "calc(100% - 64px)"
            : ref.props.display === "inline" && ref.props.view === "live"
            ? `calc(100% + ${OFFSET * 2}px);`
            : "100%"};
    height: ${(ref) =>
        ref.props.display === "button" ? "calc(100% - 160px)" : ref.props.display === "inline" && ref.props.view === "live" ? "0" : "100%"};
    max-width: ${(ref) => (!ref.props.styles.fullWidth && ref.props.display === "button" && "480px") || undefined};
    max-height: ${(ref) =>
        (ref.props.display === "button" &&
            ref.props.view === "live" &&
            ref.props.styles.background.color !== "transparent" &&
            MAX_HEIGHT + "px") ||
        undefined};
    margin-bottom: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" && `-${OFFSET * 2}px`) || undefined};
    margin-right: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" && `-${OFFSET * 2}px`) || undefined};
    box-shadow: ${(ref) =>
        (ref.props.display === "button" &&
            ref.props.styles.background.color !== "transparent" &&
            `0 5px 20px 5px ${color(ref.props.styles.background.color, (o) => o.makeBlackOrWhite().manipulate((m) => m.alpha(0.2)))}`) ||
        undefined};
    border-radius: ${(ref) =>
        (ref.props.display === "button" && ref.props.styles.background.color !== "transparent" && "8px") || undefined};
    z-index: ${(ref) => (ref.props.display !== "inline" ? 2147483645 : undefined)};
    transition: max-height 0.3s linear, opacity 0.3s, box-shadow 0.3s;
    transform-origin: bottom right;
    transform: ${(ref) => (ref.props.display === "button" ? (ref.props.isVisible ? "scale(1)" : "scale(0)") : undefined)};
    opacity: ${(ref) => (ref.props.display === "button" ? (ref.props.isVisible ? 1 : 0) : undefined)};
    pointer-events: ${(ref) => (ref.props.display === "button" ? (ref.props.isVisible ? "auto" : "none") : undefined)};

    ${(ref) =>
        ref.props.display === "button" && ref.props.useAnimation
            ? ref.props.isVisible
                ? RootActivateAnimation
                : RootDeactivateAnimation
            : undefined}

    @media (max-device-width: ${SMALL_SCREEN_SIZE}px) {
        bottom: ${(ref) => (ref.props.display === "button" ? "88px" : undefined)};
        left: ${(ref) => (ref.props.display === "button" ? 0 : undefined)};
        right: ${(ref) => (ref.props.display === "button" ? 0 : undefined)};
        width: ${(ref) => (ref.props.display === "button" ? "100%" : undefined)};
        height: ${(ref) => (ref.props.display === "button" ? "calc(100% - 72px)" : undefined)};
        max-width: none;
        max-height: none;
        z-index: ${(ref) => (ref.props.display !== "inline" ? 2147483647 : undefined)};
    }
`;

const RootBody = createGlobalStyle<{
    props: {
        customCSS?: string;
    };
}>`
    body {
        overflow: hidden;
        background-color: transparent;

        ${(ref) =>
            ref.props.customCSS &&
            css`
                ${ref.props.customCSS}
            `}
    }
`;

const RootElement = styled.div<{
    props: {
        view: TRunnerViews;
        display: TChatDisplay;
        fontFamily: string;
        styles: IRuntimeStyles;
    };
}>`
    position: absolute;
    left: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? `${OFFSET}px` : "0")};
    right: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? `${OFFSET}px` : "0")};
    top: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? `${OFFSET}px` : "0")};
    bottom: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? `${OFFSET}px` : "0")};
    font-family: ${(ref) => ref.props.fontFamily};
    font-size: ${(ref) => ref.props.styles.font.size}px;
    font-variant-ligatures: none;
    background-color: ${(ref) => color(ref.props.styles.background.color)};
    background-image: ${(ref) =>
        (ref.props.styles.background.url &&
            ref.props.styles.background.opacity > 0 &&
            `${
                (ref.props.styles.background.opacity < 1 &&
                    `linear-gradient(${color(ref.props.styles.background.color, (o) =>
                        o.manipulate((m) => m.alpha(1 - ref.props.styles.background.opacity))
                    )},${color(ref.props.styles.background.color, (o) =>
                        o.manipulate((m) => m.alpha(1 - ref.props.styles.background.opacity))
                    )}),`) ||
                ""
            }url("${ref.props.styles.background.url}")`) ||
        undefined};
    background-size: ${(ref) =>
        (ref.props.styles.background.url &&
            ref.props.styles.background.positioning !== "repeat" &&
            ref.props.styles.background.positioning) ||
        undefined};
    background-repeat: ${(ref) =>
        ref.props.styles.background.url && ref.props.styles.background.positioning === "repeat" ? "repeat" : "no-repeat"};
    background-position: center center;
    line-height: 1.5em;
    overflow-x: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? "visible" : "hidden")};
    overflow-y: ${(ref) => (ref.props.display === "inline" && ref.props.view === "live" ? "visible" : "auto")};
    scroll-behavior: smooth;
    scrollbar-width: ${(ref) =>
        (ref.props.view !== "preview" &&
            ref.props.display === "button" &&
            (!ref.props.styles.showScrollbar || ref.props.styles.background.color === "transparent") &&
            "none") ||
        undefined};
    -ms-overflow-style: ${(ref) =>
        (ref.props.view !== "preview" &&
            ref.props.display === "button" &&
            (!ref.props.styles.showScrollbar || ref.props.styles.background.color === "transparent") &&
            "none") ||
        undefined};
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: transparent;

    ::-webkit-scrollbar {
        display: ${(ref) =>
            (ref.props.view !== "preview" &&
                ref.props.display === "button" &&
                (!ref.props.styles.showScrollbar || ref.props.styles.background.color === "transparent") &&
                "none") ||
            undefined};
    }

    * {
        font-family: ${(ref) => ref.props.fontFamily};
        font-variant-ligatures: none;
        box-sizing: border-box;
        outline: none;
    }

    > div {
        max-width: ${(ref) => (!ref.props.styles.fullWidth && ref.props.display !== "button" && "800px") || undefined};
        margin-left: ${(ref) => (!ref.props.styles.fullWidth && ref.props.display !== "button" && "auto") || undefined};
        margin-right: ${(ref) => (!ref.props.styles.fullWidth && ref.props.display !== "button" && "auto") || undefined};
        padding: ${(ref) =>
            ref.props.display === "button"
                ? `${MARGIN_BUTTON}px ${MARGIN_BUTTON}px ${ref.props.view === "preview" ? MARGIN_BUTTON : 0}px`
                : ref.props.display === "page" || ref.props.view !== "live"
                ? `${MARGIN_PAGE}px ${MARGIN_PAGE}px ${ref.props.view === "preview" ? MARGIN_PAGE : 0}px`
                : undefined};
    }

    > div > div > div + div {
        margin-top: ${MARGIN_MESSAGES}px;
    }

    @media (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }

    @media (${(ref) => (ref.props.view === "live" ? "max-device-width" : "max-width")}: ${SMALL_SCREEN_SIZE}px) {
        font-size: ${(ref) => ref.props.styles.font.sizeSmall}px;

        > div {
            padding: ${(ref) =>
                ref.props.display === "page" || (ref.props.display === "inline" && ref.props.view !== "live")
                    ? `${SMALL_SCREEN_MARGIN}px ${SMALL_SCREEN_MARGIN}px ${ref.props.view === "preview" ? SMALL_SCREEN_MARGIN : 0}px`
                    : undefined};
        }
    }
`;

const Content = (props: {
    readonly children?: React.ReactNode;
    readonly onChange: (height: number) => void;
    readonly resizeRef: React.MutableRefObject<(() => void) | undefined>;
}) => {
    const contentRef = React.useRef<HTMLElement>() as React.MutableRefObject<HTMLDivElement>;

    React.useEffect(() => {
        const ref = attach(
            (props.resizeRef.current = () => {
                if (contentRef.current) {
                    props.onChange(contentRef.current.getBoundingClientRect().height);
                }
            })
        );

        return () => detach(ref);
    });

    return <div ref={contentRef}>{props.children}</div>;
};

export const ChatRoot = (props: {
    readonly frameRef: React.MutableRefObject<HTMLIFrameElement>;
    readonly view: TRunnerViews;
    readonly display: TChatDisplay;
    readonly isVisible?: boolean;
    readonly title?: string;
    readonly styles: IRuntimeStyles;
    readonly className?: string;
    readonly customStyle?: React.CSSProperties;
    readonly customCSS?: string;
    readonly children?: React.ReactNode;
    readonly onTouch?: () => void;
}) => {
    const [contentHeight, setContentHeight] = React.useState(0);
    const [scrollHeight, setScrollHeight] = React.useState(0);
    const rootRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
    const resizeRef = React.useRef<() => void>();
    const cancelAnimationRef = React.useRef<() => void>();
    const isVisible = castToBoolean(props.isVisible, props.view !== "live");
    const useAnimation = typeof props.isVisible === "boolean";

    React.useEffect(() => {
        if (
            props.frameRef.current &&
            props.view === "live" &&
            (props.styles.autoFocus || props.display === "page" || (props.display === "button" && isVisible))
        ) {
            props.frameRef.current.focus();
        }

        if (
            props.view !== "preview" &&
            (props.display !== "inline" || props.view !== "live") &&
            (props.display !== "button" || isVisible) &&
            rootRef.current
        ) {
            const top = Num.max(contentHeight - rootRef.current.clientHeight, 0);

            scrollEffect(
                rootRef.current,
                top,
                rootRef.current.scrollTop > top ? 200 : 0,
                AfterInputAnimationDuration + 50,
                cancelAnimationRef
            ).then(() => setScrollHeight(contentHeight));
        } else if (props.display === "inline" && props.view === "live" && rootRef.current) {
            rootRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [contentHeight, isVisible]);

    return (
        <RootFrame
            props={{
                view: props.view,
                display: props.display,
                styles: props.styles,
                isVisible,
                useAnimation,
            }}
            frameRef={props.frameRef}
            resizeRef={resizeRef}
            title={props.title}
            style={{
                height: (props.display === "inline" && props.view === "live" && contentHeight + OFFSET * 2 + "px") || undefined,
                maxHeight:
                    (props.view !== "preview" && props.display === "button" && Num.min(contentHeight, MAX_HEIGHT) + "px") || undefined,
                ...props.customStyle,
            }}
            font={props.styles.font && props.styles.font.family}
            className={props.className}
            onTouch={props.onTouch}
        >
            {(doc: Document, fontFamily: string) => (
                <StyleSheetManager target={doc.head}>
                    <>
                        <RootBody props={props} />
                        <RootElement
                            ref={rootRef}
                            props={{
                                ...props,
                                fontFamily,
                            }}
                        >
                            <div
                                style={{
                                    minHeight:
                                        (props.view !== "preview" &&
                                            (props.display !== "inline" || props.view !== "live") &&
                                            scrollHeight + "px") ||
                                        undefined,
                                }}
                            >
                                <Content
                                    onChange={(height: number) => {
                                        height =
                                            Num.ceil(height) +
                                            (props.display === "button"
                                                ? MARGIN_BUTTON
                                                : props.display === "page" || props.view !== "live"
                                                ? MARGIN_PAGE
                                                : 0) *
                                                2;

                                        if (height !== contentHeight) {
                                            setContentHeight(height);

                                            if (height > scrollHeight) {
                                                setScrollHeight(height);
                                            }
                                        }
                                    }}
                                    resizeRef={resizeRef}
                                >
                                    {props.children}
                                </Content>
                            </div>
                        </RootElement>
                    </>
                </StyleSheetManager>
            )}
        </RootFrame>
    );
};
