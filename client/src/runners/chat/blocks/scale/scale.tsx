import * as React from "react";
import { findFirst, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Scale } from "tripetto-block-scale/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { ScaleFabric } from "tripetto-runner-fabric/components/scale";
import { ParagraphMessage } from "../../ui/message/paragraph";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-scale",
})
export class ScaleBlock extends Scale implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name || props.description) && (
                <ParagraphMessage>
                    {props.name}
                    {props.description}
                </ParagraphMessage>
            )) ||
            undefined
        );
    }

    answer(): React.ReactNode {
        if (this.props.mode === "options") {
            const reference = this.scaleSlot.reference;
            const answer = findFirst(this.props.options, (option) => option.id === reference);

            return (answer && answer.name) || undefined;
        } else {
            return (this.scaleSlot.hasValue && this.scaleSlot.string) || undefined;
        }
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <ScaleFabric
                    styles={props.styles.scale}
                    view={props.view}
                    options={this.options}
                    value={this.scaleSlot}
                    required={this.required}
                    ariaDescribedBy={props.ariaDescribedBy}
                    labelLeft={this.props.labelLeft && props.markdownifyToJSX(this.props.labelLeft, false)}
                    labelCenter={this.props.labelCenter && props.markdownifyToJSX(this.props.labelCenter, false)}
                    labelRight={this.props.labelRight && props.markdownifyToJSX(this.props.labelRight, false)}
                    justify={this.props.justify}
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
