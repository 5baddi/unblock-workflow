import styled from "styled-components";
import * as React from "react";
import { CheckedIcon } from "../../../ui/icons/checked";
import { UncheckedIcon } from "../../../ui/icons/unchecked";
import { MESSAGE_SIZE, SIZE } from "../../const";

export const CheckboxAnswerElement = styled.div<{
    props: {
        color: string;
        children: React.ReactNode;
    };
}>`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${8 / SIZE}em ${16 / SIZE}em;
    display: flex;

    span {
        color: ${(ref) => ref.props.color};
        align-self: center;
    }

    svg {
        min-width: ${24 / SIZE}em;
        width: ${24 / SIZE}em;
        height: ${24 / SIZE}em;
        margin-right: ${(ref) => (ref.props.children && `${8 / SIZE}em`) || undefined};
        fill: ${(ref) => ref.props.color};
    }
`;

export const CheckboxAnswer = (props: { readonly checked: boolean; readonly children: React.ReactNode; readonly color: string }) => (
    <CheckboxAnswerElement props={props}>
        {props.checked ? CheckedIcon : UncheckedIcon}
        <span>{props.children}</span>
    </CheckboxAnswerElement>
);
