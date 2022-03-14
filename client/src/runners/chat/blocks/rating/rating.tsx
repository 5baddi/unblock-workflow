import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Rating } from "tripetto-block-rating/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { RatingFabric } from "tripetto-runner-fabric/components/rating";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { RatingAnswer } from "../../ui/message/rating";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-rating",
    alias: "rating",
})
export class RatingBlock extends Rating implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name || props.description || this.props.imageURL) && (
                <ParagraphMessage>
                    {this.props.imageURL && this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {props.name}
                    {props.description}
                    {this.props.imageURL && !this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                </ParagraphMessage>
            )) ||
            undefined
        );
    }

    answer(props: IChatRenderProps): React.ReactNode {
        return (
            (this.ratingSlot.value && (
                <RatingAnswer value={this.ratingSlot.value} color={props.styles.answers.textColor} shape={this.shape} />
            )) ||
            undefined
        );
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <RatingFabric
                    styles={props.styles.rating}
                    value={this.ratingSlot}
                    required={this.required}
                    ariaDescribedBy={props.ariaDescribedBy}
                    shape={this.shape}
                    steps={this.steps}
                    autoSubmit={true}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                />
                {props.ariaDescription}
            </>
        );
    }
}
