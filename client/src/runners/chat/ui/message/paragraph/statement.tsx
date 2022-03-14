import styled from "styled-components";
import { ParagraphMessage } from "./index";
import { SIZE } from "../../const";

const statementIcon = (color: string) => {
    return btoa(
        `<?xml version="1.0" encoding="utf-8"?>
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 10240 10240">
            <path d="M6400 8320l1920 0c353,0 640,-287 640,-640l0 -1920c0,-353 -287,-640 -640,-640l-960 0c0,-499 0,-1464 1310,-1587 165,-16 290,-153 290,-319l0 -966c0,-91 -34,-169 -100,-232 -66,-63 -145,-92 -236,-88 -2864,146 -2864,2164 -2864,3192l0 2560c0,353 287,640 640,640z" fill="${color}" />
            <path d="M1920 8320l1920 0c353,0 640,-287 640,-640l0 -1920c0,-353 -287,-640 -640,-640l-960 0c0,-499 0,-1464 1310,-1587 165,-16 290,-153 290,-319l0 -966c0,-91 -34,-169 -100,-232 -66,-63 -145,-92 -236,-88 -2864,146 -2864,2164 -2864,3192l0 2560c0,353 287,640 640,640z" fill="${color}" />
        </svg>`
    );
};

export const ParagraphStatement = styled(ParagraphMessage)<{
    props: {
        color: string;
    };
}>`
    padding-left: 2em;
    background-image: ${(ref) => `url("data:image/svg+xml;base64,${statementIcon(ref.props.color)}")`};
    background-repeat: no-repeat;
    background-size: 2em 2em;
    background-position: ${8 / SIZE}em ${6 / SIZE}em;

    > h2 {
        font-size: 1.6em;
        line-height: 1.3em;
        padding: ${8 / SIZE / 1.6}em ${16 / SIZE / 1.6}em ${4 / SIZE / 1.6}em;

        &:last-child {
            padding-bottom: ${9 / SIZE / 1.6}em;
        }
    }

    > img {
        max-width: calc(100% - ${32 / SIZE}em);
    }
`;
