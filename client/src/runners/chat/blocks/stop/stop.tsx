import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Stop } from "tripetto-block-stop/runner";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-stop",
})
export class StopBlock extends Stop implements IChatRendering {
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
}
