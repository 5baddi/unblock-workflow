import * as React from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { IAvataaars, avataaars } from "tripetto-runner-fabric/components/avataaars";
import { MESSAGE_SIZE, SIZE } from "../const";

const AvatarElement = styled.div<{
    props: {
        aligment: "left" | "right";
        visible: boolean;
        backgroundColor?: string;
        image: string | undefined;
        animation: FlattenSimpleInterpolation | undefined;
    };
}>`
    min-width: ${MESSAGE_SIZE / SIZE}em;
    max-width: ${MESSAGE_SIZE / SIZE}em;
    min-height: ${MESSAGE_SIZE / SIZE}em;
    max-height: ${MESSAGE_SIZE / SIZE}em;
    margin-${(ref) => (ref.props.aligment === "left" ? "right" : "left")}: 8px;
    border-radius: 50%;
    transform-origin: center center;
    background-color: ${(ref) => ref.props.backgroundColor};
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: ${(ref) => (ref.props.image ? `${MESSAGE_SIZE / SIZE}em ${MESSAGE_SIZE / SIZE}em` : undefined)};
    background-position: center center;
    background-image: ${(ref) => ref.props.image && `url("${ref.props.image}");`};
    opacity: ${(ref) => (ref.props.visible ? 1 : 0)};
    pointer-events: ${(ref) => (ref.props.visible ? "auto" : "none")};
    transition: none !important;

    ${(ref) => ref.props.animation || ""}
`;

export const Avatar = (props: {
    readonly alignment: "left" | "right";
    readonly backgroundColor?: string;
    readonly visible?: boolean;
    readonly animation?: FlattenSimpleInterpolation | false;
    readonly onClick?: () => void;
    readonly avatar?: string | IAvataaars;
}) => {
    const visible = typeof props.visible !== "boolean" || props.visible;

    return (
        <AvatarElement
            props={{
                aligment: props.alignment,
                backgroundColor: (props.avatar && props.backgroundColor) || undefined,
                visible,
                image:
                    (typeof props.avatar === "string" && props.avatar) ||
                    (typeof props.avatar === "object" &&
                        props.avatar &&
                        `data:image/svg+xml;base64,${avataaars(props.avatar, "base64")}`) ||
                    undefined,
                animation: props.animation || undefined,
            }}
            onClick={() => visible && props.onClick && props.onClick()}
        />
    );
};
