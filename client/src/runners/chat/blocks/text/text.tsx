import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Text } from "tripetto-block-text/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { TextFabric } from "tripetto-runner-fabric/components/text";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-text",
})
export class TextBlock extends Text implements IChatRendering {
    answer(): React.ReactNode {
        return this.textSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <TextFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.textSlot}
                    required={this.required}
                    error={props.isFailed}
                    placeholder={props.placeholder}
                    maxLength={this.maxLength}
                    autoComplete={this.autoComplete}
                    suggestions={this.suggestions}
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
                    disabled={!this.textSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
