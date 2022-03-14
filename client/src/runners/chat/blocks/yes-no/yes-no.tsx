import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { YesNo } from "tripetto-block-yes-no/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { YesNoFabric } from "tripetto-runner-fabric/components/yes-no";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-yes-no",
    alias: "yes-no",
})
export class YesNoBlock extends YesNo implements IChatRendering {
    private getLabel(props: IChatRenderProps, answer: string): string | undefined {
        switch (answer) {
            case "yes":
                return props.markdownifyToString(this.props.altYes || "") || props.l10n.pgettext("runner#6|🔷 Yes/No", "Yes");
            case "no":
                return props.markdownifyToString(this.props.altNo || "") || props.l10n.pgettext("runner#6|🔷 Yes/No", "No");
        }

        return undefined;
    }

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
        return (this.answerSlot.reference && this.getLabel(props, this.answerSlot.reference)) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <YesNoFabric
                    styles={props.styles.yesNo}
                    value={this.answerSlot}
                    yes={{
                        label: this.getLabel(props, "yes") || "",
                    }}
                    no={{
                        label: this.getLabel(props, "no") || "",
                    }}
                    required={this.required}
                    ariaDescribedBy={props.ariaDescribedBy}
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
