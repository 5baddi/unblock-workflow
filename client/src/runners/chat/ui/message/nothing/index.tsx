import * as React from "react";
import styled from "styled-components";
import { NothingIcon } from "../../icons/nothing";
import { MESSAGE_SIZE, SIZE } from "../../const";

export const NothingAnsweredElement = styled.div<{
    props: {
        color: string;
        label: string;
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
        margin-right: ${(ref) => (ref.props.label && `${8 / SIZE}em`) || undefined};
        fill: ${(ref) => ref.props.color};
    }
`;

export const NothingAnswered = (props: { readonly label: string; readonly color: string }) => (
    <NothingAnsweredElement props={props}>
        {NothingIcon}
        <span>{props.label}</span>
    </NothingAnsweredElement>
);
