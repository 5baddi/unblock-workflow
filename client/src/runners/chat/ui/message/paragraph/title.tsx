import styled from "styled-components";
import { SIZE } from "../../const";

export const ParagraphTitle = styled.h2`
    margin: 0;
    padding: ${10 / SIZE}em ${16 / SIZE}em 0;
    font-size: 1em;
    font-weight: normal;

    &:last-child {
        padding-bottom: ${9 / SIZE}em;
    }
`;
