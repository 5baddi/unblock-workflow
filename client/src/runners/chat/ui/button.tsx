import * as React from "react";
import styled, { StyleSheetManager, createGlobalStyle, css, keyframes } from "styled-components";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { Frame } from "../hooks/frame";
import { color } from "tripetto-runner-fabric/color";
import { castToBoolean } from "tripetto-runner-foundation";
import { SMALL_SCREEN_SIZE } from "./const";

export const IconChat = (iconColor: string) =>
    `url("data:image/svg+xml;base64,${btoa(`<?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
            <path d="M0.5 19c-0.225 0-0.422-0.15-0.482-0.367s0.032-0.447 0.225-0.562c1.691-1.014 2.392-2.489 2.641-3.179-1.838-1.407-2.884-3.354-2.884-5.392 0-1.029 0.258-2.026 0.768-2.964 0.486-0.894 1.18-1.695 2.061-2.381 1.787-1.39 4.156-2.156 6.671-2.156s4.884 0.766 6.671 2.156c0.881 0.685 1.575 1.486 2.061 2.381 0.51 0.937 0.768 1.934 0.768 2.964s-0.258 2.026-0.768 2.964c-0.486 0.894-1.18 1.695-2.061 2.381-1.787 1.39-4.156 2.156-6.671 2.156-1.033 0-2.047-0.129-3.016-0.385-0.429 0.286-1.231 0.793-2.189 1.27-1.488 0.74-2.764 1.115-3.794 1.115zM9.5 3c-4.687 0-8.5 2.916-8.5 6.5 0 1.815 1.005 3.562 2.756 4.792 0.172 0.121 0.25 0.336 0.196 0.539-0.117 0.436-0.515 1.633-1.58 2.788 1.302-0.456 2.704-1.247 3.739-1.959 0.123-0.085 0.277-0.11 0.421-0.069 0.948 0.271 1.947 0.409 2.968 0.409 4.687 0 8.5-2.916 8.5-6.5s-3.813-6.5-8.5-6.5z" fill="${iconColor}" />
        </svg>`)}")`;

export const IconClose = (iconColor: string) =>
    `url("data:image/svg+xml;base64,${btoa(`<?xml version="1.0" encoding="utf-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z" fill="${iconColor}" />
        </svg>`)}")`;

const Animation = css`
    animation: ${keyframes`
        0% {
            transform: skewX(0deg);
        }
        20% {
            transform: skewX(8deg);
        }
        40% {
            transform: skewX(-8deg);
        }
        60% {
            transform: skewX(4deg);
        }
        80% {
            transform: skewX(-4deg);
        }
        100% {
            transform: skewX(0deg);
        }
    `} 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1s;
`;

const ButtonFrame = styled(Frame)<{
    props: {
        view: TRunnerViews;
    };
}>`
    background-color: transparent;
    border: none;
    position: ${(ref) => (ref.props.view === "live" ? "fixed" : "absolute")};
    right: 24px;
    bottom: 24px;
    width: 80px;
    height: 80px;
    z-index: 2147483646;

    @media (max-device-width: ${SMALL_SCREEN_SIZE}px) {
        right: 8px;
        bottom: 8px;
        width: 72px;
        height: 72px;
    }
`;

const Body = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const Button = styled.button<{
    props: {
        isVisible: boolean;
        useAnimation: boolean;
        backgroundColor: string;
        iconColor: string;
        image?: string;
    };
}>`
    display: block;
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: ${(ref) => (ref.props.isVisible ? `2px solid ${ref.props.backgroundColor}` : "none")};
    background-color: ${(ref) => (ref.props.isVisible ? ref.props.iconColor : ref.props.backgroundColor)};
    background-image: ${(ref) =>
        ref.props.isVisible
            ? IconClose(ref.props.backgroundColor)
            : (ref.props.image && `url("${ref.props.image}")`) || IconChat(ref.props.iconColor)};
    background-repeat: no-repeat;
    background-size: ${(ref) => `${!ref.props.isVisible && ref.props.image ? 64 : 32}px`};
    background-position: center center;
    box-shadow: 0 0 5px 1px ${(ref) => color(ref.props.backgroundColor, (o) => o.makeBlackOrWhite().manipulate((m) => m.alpha(0.2)))};
    appearance: none;
    outline: 0;
    transition: transform 0.2s ease-out;
    cursor: default;

    ${(ref) => ref.props.useAnimation && Animation} :hover {
        transform: scale(1.1);
    }

    :focus {
        transform: scale(1.1);
    }

    @media (max-device-width: ${SMALL_SCREEN_SIZE}px) {
        width: 56px;
        height: 56px;
        border-radius: 28px;
    }
`;

export const ChatButton = (props: {
    readonly view: TRunnerViews;
    readonly isVisible: boolean | undefined;
    readonly setVisibility: (visible: boolean) => void;
    readonly styles: {
        readonly chatButton: {
            readonly color: string;
            readonly image?: string;
        };
    };
}) => {
    const isVisible = castToBoolean(props.isVisible, props.view !== "live");
    const useAnimation = props.view === "live" && typeof props.isVisible !== "boolean";

    return (
        <ButtonFrame props={props}>
            {(doc: Document) => (
                <StyleSheetManager target={doc.head}>
                    <>
                        <Body />
                        <Button
                            props={{
                                isVisible,
                                useAnimation,
                                backgroundColor: props.styles.chatButton.color,
                                iconColor: color(props.styles.chatButton.color, (o) => o.makeBlackOrWhite()),
                                image: props.styles.chatButton.image,
                            }}
                            onClick={() => props.setVisibility(!isVisible)}
                        ></Button>
                    </>
                </StyleSheetManager>
            )}
        </ButtonFrame>
    );
};
