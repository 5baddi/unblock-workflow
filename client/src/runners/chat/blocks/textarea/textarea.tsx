import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Textarea } from "tripetto-block-textarea/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { TextareaFabric } from "tripetto-runner-fabric/components/textarea";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-textarea",
})
export class TextareaBlock extends Textarea implements IChatRendering {
    answer(): React.ReactNode {
        return this.textareaSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <TextareaFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.textareaSlot}
                    required={this.required}
                    error={props.isFailed}
                    autoSize={true}
                    placeholder={props.placeholder}
                    maxLength={this.maxLength}
                    ariaDescribedBy={props.ariaDescribedBy}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                />
                {props.ariaDescription}
                <ButtonFabric
                    styles={props.styles.buttons}
                    icon={SubmitIcon}
                    label={props.submitLabel}
                    disabled={!this.textareaSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
