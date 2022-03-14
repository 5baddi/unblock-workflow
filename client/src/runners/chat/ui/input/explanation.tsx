import styled from "styled-components";
import * as React from "react";

export const ExplanationElement = styled.div<{
    props: {
        color?: string;
    };
}>`
    width: 100%;
    color: ${(ref) => ref.props.color};
    font-size: 0.8em;
    margin-top: 8px !important;
    line-height: 1.3em;

    a {
        color: ${(ref) => ref.props.color};
        text-decoration: underline;

        &:hover {
            color: ${(ref) => ref.props.color};
            text-decoration: underline;
        }
    }
`;

export const Explanation = (props: { readonly aria?: string; readonly color?: string; readonly children?: React.ReactNode }) => (
    <ExplanationElement id={props.aria} props={props}>
        {props.children}
    </ExplanationElement>
);
