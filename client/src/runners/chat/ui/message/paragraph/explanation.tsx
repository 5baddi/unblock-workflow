import styled from "styled-components";
import { SIZE } from "../../const";

export const ParagraphExplanation = styled.p`
    margin: 0;
    padding: ${10 / SIZE / 0.8}em ${16 / SIZE / 0.8}em 0;
    font-size: 0.8em;

    &:last-child {
        padding-bottom: ${9 / SIZE}em;
    }
`;
