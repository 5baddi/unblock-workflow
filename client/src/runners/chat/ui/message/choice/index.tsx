import styled from "styled-components";
import * as React from "react";
import { MESSAGE_SIZE, SIZE } from "../../const";

export const ChoiceAnswerElement = styled.div<{
    props: {
        color: string;
        children: React.ReactNode;
    };
}>`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${8 / SIZE}em ${16 / SIZE}em;
    display: flex;
    align-items: center;
    color: ${(ref) => ref.props.color};
`;

export const ChoiceAnswer = (props: { readonly children: React.ReactNode; readonly color: string }) => (
    <ChoiceAnswerElement props={props}>{props.children}</ChoiceAnswerElement>
);
