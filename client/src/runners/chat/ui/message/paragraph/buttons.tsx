import styled from "styled-components";
import { SIZE } from "../../const";

export const ParagraphButtons = styled.div`
    display: flex;
    margin: ${16 / SIZE}em;
    padding: 0;
    border: none;

    > * + * {
        margin-left: ${16 / SIZE}em !important;
    }
`;
