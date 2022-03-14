import styled from "styled-components";
import * as React from "react";
import { starShape } from "tripetto-runner-fabric/shapes/star";
import { heartShape } from "tripetto-runner-fabric/shapes/heart";
import { thumbsUpShape } from "tripetto-runner-fabric/shapes/thumbs-up";
import { thumbsDownShape } from "tripetto-runner-fabric/shapes/thumbs-down";
import { personShape } from "tripetto-runner-fabric/shapes/person";
import { TShapes } from "tripetto-block-rating/runner";
import { MESSAGE_SIZE, SIZE } from "../../const";

const RatingAnswerElement = styled.div<{
    props: {
        color: string;
        value: number;
    };
}>`
    min-height: ${MESSAGE_SIZE / SIZE}em;
    padding: ${6 / SIZE}em ${8 / SIZE}em;
    display: flex;

    svg {
        width: 2em;
        height: 2em;
        fill: ${(ref) => ref.props.color};
    }
`;

export const RatingAnswer = (props: { readonly color: string; readonly shape: TShapes; readonly value: number }) => {
    const rating: React.ReactNode[] = [];

    for (let n = 0; n < props.value; n++) {
        switch (props.shape) {
            case "hearts":
                rating.push(heartShape);
                break;
            case "thumbs-up":
                rating.push(thumbsUpShape);
                break;
            case "thumbs-down":
                rating.push(thumbsDownShape);
                break;
            case "persons":
                rating.push(personShape);
                break;
            default:
                rating.push(starShape);
                break;
        }
    }

    return <RatingAnswerElement props={props}>{rating}</RatingAnswerElement>;
};
