import * as React from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { ReactNode } from "react";
import { isNumberFinite } from "tripetto-runner-foundation";
import { AvatarAnimationDuration } from "../avatar/animation";
import { color } from "tripetto-runner-fabric/color";
import { MESSAGE_SIZE, SIZE } from "../const";

const MessageElement = styled.div<{
    props: {
        alignment: "left" | "right";
        backgroundColor?: string;
        borderColor?: string;
        roundness?: number;
        textColor?: string;
        animation?: FlattenSimpleInterpolation | false;
        isFirst?: boolean;
        isLast?: boolean;
        justify?: boolean;
    };
}>`
    width: ${(ref) => ref.props.justify && "100%"};
    max-width: ${(ref) => !ref.props.justify && "75%"};
    min-width: ${MESSAGE_SIZE / SIZE}em;
    min-height: ${MESSAGE_SIZE / SIZE}em;
    border-radius: ${(ref) => (isNumberFinite(ref.props.roundness) ? `${ref.props.roundness}px` : `${20 / SIZE}em`)};
    border-bottom-left-radius: ${(ref) =>
        ref.props.alignment === "left" && (typeof ref.props.isLast !== "boolean" || ref.props.isLast) && "0"};
    border-bottom-right-radius: ${(ref) =>
        ref.props.alignment === "right" && (typeof ref.props.isLast !== "boolean" || ref.props.isLast) && "0"};
    transition: border-radius ${AvatarAnimationDuration / 1000}s ease-out;
    transform-origin: ${(ref) => ref.props.alignment} calc(100% - ${MESSAGE_SIZE / SIZE / 2}em);
    background-color: ${(ref) => ref.props.backgroundColor};
    border: ${(ref) => ref.props.borderColor && `1px solid ${ref.props.borderColor}`};
    color: ${(ref) => ref.props.textColor};
    overflow: hidden;
    cursor: default !important;
    z-index: 1;

    a {
        color: ${(ref) => ref.props.textColor};
        text-decoration: underline;

        &:hover {
            color: ${(ref) => ref.props.textColor && color(ref.props.textColor, (o) => o.manipulate((m) => m.lighten(0.3)))};
        }
    }

    ${(ref) => ref.props.animation || ""}
`;

export const Message = (props: {
    readonly alignment: "left" | "right";
    readonly roundness?: number;
    readonly backgroundColor?: string;
    readonly borderColor?: string;
    readonly textColor?: string;
    readonly animation?: FlattenSimpleInterpolation | false;
    readonly isFirst?: boolean;
    readonly isLast?: boolean;
    readonly justify?: boolean;
    readonly onWait?: () => void;
    readonly onContinue?: () => void;
    readonly onClick?: () => void;
    readonly children?: ReactNode;
}) => {
    return (
        <MessageElement props={props} onAnimationStart={props.onWait} onAnimationEnd={props.onContinue} onClick={props.onClick}>
            {props.children}
        </MessageElement>
    );
};
