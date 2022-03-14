import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Paragraph } from "tripetto-block-paragraph/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { ParagraphVideo } from "../../ui/message/paragraph/video";
import { ParagraphCaption } from "../../ui/message/paragraph/caption";
import { ParagraphExplanation } from "../../ui/message/paragraph/explanation";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-paragraph",
    alias: "paragraph",
})
export class ParagraphBlock extends Paragraph implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name ||
                props.description ||
                this.props.caption ||
                this.props.imageURL ||
                this.props.video ||
                this.node.explanation) && (
                <ParagraphMessage>
                    {this.props.imageURL && this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {props.name}
                    {this.props.caption && <ParagraphCaption>{props.markdownifyToJSX(this.props.caption)}</ParagraphCaption>}
                    {props.description}
                    {this.props.imageURL && !this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {this.props.video && <ParagraphVideo src={props.markdownifyToURL(this.props.video)} view={props.view} />}
                    {this.node.explanation && <ParagraphExplanation>{props.markdownifyToJSX(this.node.explanation)}</ParagraphExplanation>}
                </ParagraphMessage>
            )) ||
            undefined
        );
    }
}
