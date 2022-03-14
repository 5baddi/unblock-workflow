import * as React from "react";
import styled from "styled-components";
import { L10n } from "tripetto-runner-foundation";

const TimestampElement = styled.div<{
    props: {
        timeStamp: number;
        color: string;
    };
}>`
    display: block;
    width: 100%;
    color: ${(ref) => ref.props.color};
    opacity: 0.7;
    text-align: center;
    font-size: 0.8em;
    pointer: default;
`;

export const Timestamp = (props: { readonly l10n: L10n.Namespace; readonly timeStamp: number; readonly color: string }) => (
    <TimestampElement props={props}>{props.l10n.locale.dateTimeFull(props.timeStamp)}</TimestampElement>
);
