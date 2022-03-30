import styled from "styled-components";
import * as React from "react";
import { AfterInputAnimation, BeforeInputAnimation } from "./animation";
import { CheckboxElement } from "tripetto-runner-fabric/components/checkbox";
import { RadiobuttonElement } from "tripetto-runner-fabric/components/radiobuttons";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";

export const InputElement = styled.div<{
    props: {
        alignment: "left" | "right";
        effect: "activate" | "deactivate" | false;
        break?: boolean;
    };
}>`
    width: 100%;
    z-index: 0;
    margin-top: 16px !important;
    margin-bottom: ${(ref) => ref.props.break && "32px"};
    transform-origin: ${(ref) => ref.props.alignment} top;

    ${(ref) => (ref.props.effect === "activate" && BeforeInputAnimation) || (ref.props.effect === "deactivate" && AfterInputAnimation)}

    > * + * {
        margin-top: 16px !important;
    }

    > ${CheckboxElement} + ${CheckboxElement} {
        margin-top: 8px !important;
    }

    > ${RadiobuttonElement} + ${RadiobuttonElement} {
        margin-top: 8px !important;
    }
`;

export const Input = (props: {
    readonly alignment: "left" | "right";
    readonly effect: "activate" | "deactivate" | false;
    readonly break?: boolean;
    readonly focus?: () => void;
    readonly blockIdentifier?: string;
    readonly children?: React.ReactNode;
    readonly user?: User;
    readonly glue?: Glue42Web.API | Glue42.Glue;
}) => (
    <InputElement props={props} ref={props.focus} data-block={props.blockIdentifier}>
        {props.children}
    </InputElement>
);
