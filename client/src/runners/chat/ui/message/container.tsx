import styled from "styled-components";
import * as React from "react";
import { SIZE } from "../const";

const MessageContainerElement = styled.div<{
    props: {
        alignment: "left" | "right";
        disabled?: boolean;
        spacing?: boolean;
    };
}>`
    display: flex;
    justify-content: ${(ref) => (ref.props.alignment === "left" ? "flex-start" : "flex-end")};
    align-items: flex-start;
    width: 100%;
    opacity: ${(ref) => (ref.props.disabled && "0.2") || undefined};
    transition: opacity 0.2s ease-out;
    padding-top: ${(ref) => ref.props.spacing && `${13 / SIZE}em;`};

    :hover {
        opacity: 1;
    }
`;

export const MessageContainer = (props: {
    readonly alignment: "left" | "right";
    readonly measure?: (el: HTMLElement | null) => void;
    readonly disabled?: boolean;
    readonly spacing?: boolean;
    readonly children?: React.ReactNode;
}) => (
    <MessageContainerElement props={props} ref={props.measure}>
        {props.children}
    </MessageContainerElement>
);
