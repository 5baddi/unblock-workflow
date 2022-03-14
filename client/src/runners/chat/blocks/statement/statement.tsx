import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Statement } from "tripetto-block-statement/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { ParagraphStatement } from "../../ui/message/paragraph/statement";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { ParagraphExplanation } from "../../ui/message/paragraph/explanation";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-statement",
    alias: "statement",
})
export class StatementBlock extends Statement implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name || props.description || this.props.imageURL) && (
                <ParagraphStatement
                    props={{
                        color: props.styles.questions.textColor,
                    }}
                >
                    {this.props.imageURL && this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {props.name}
                    {props.description}
                    {this.props.imageURL && !this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {this.node.explanation && <ParagraphExplanation>{props.markdownifyToJSX(this.node.explanation)}</ParagraphExplanation>}
                </ParagraphStatement>
            )) ||
            undefined
        );
    }
}
