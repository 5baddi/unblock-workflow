import styled from "styled-components";
import { SIZE } from "../../const";

export const ParagraphMessage = styled.div`
    > h2 + p {
        font-size: 0.9em;
        padding: ${10 / SIZE / 0.9}em ${16 / SIZE / 0.9}em 0;

        &:last-child {
            padding-bottom: ${9 / SIZE / 0.9}em;
        }
    }

    > h3 + p {
        font-size: 0.9em;
        padding: ${10 / SIZE / 0.9}em ${16 / SIZE / 0.9}em 0;

        &:last-child {
            padding-bottom: ${9 / SIZE / 0.9}em;
        }
    }

    > * + h2 {
        padding-top: 0 !important;
    }

    > * + h3 {
        padding-top: 0 !important;
    }

    > * + p {
        padding-top: 0 !important;
    }

    > img + div {
        margin-top: 0 !important;
    }

    > div + div {
        margin-top: 0 !important;
    }
`;
