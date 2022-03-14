import * as React from "react";
import styled, { css } from "styled-components";
import { onLoad } from "../../../helpers/resizer";
import { SIZE } from "../../const";

const ParagraphImageElement = styled.img<{
    width?: string;
}>`
    margin: ${16 / SIZE}em;
    padding: 0;
    border: none;
    max-width: calc(100% - ${32 / SIZE}em);

    ${(props) =>
        !props.width &&
        css`
            &:only-child {
                margin: 0;
                max-width: 100%;
            }
        `}
`;

export const ParagraphImage = (props: { readonly src: string; readonly width?: string }) => (
    <ParagraphImageElement src={props.src} width={props.width} onLoad={onLoad} />
);
