import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Checkbox } from "tripetto-block-checkbox/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { CheckboxFabric } from "tripetto-runner-fabric/components/checkbox";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { CheckboxAnswer } from "../../ui/message/checkbox";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-checkbox",
    alias: "checkbox",
})
export class CheckboxBlock extends Checkbox implements IChatRendering {
    answer(props: IChatRenderProps): React.ReactNode {
        return (
            (this.checkboxSlot.hasValue && (
                <CheckboxAnswer checked={this.checkboxSlot.value} color={props.styles.answers.textColor}>
                    {props.markdownifyToJSX(props.placeholder)}
                </CheckboxAnswer>
            )) ||
            undefined
        );
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <CheckboxFabric
                    styles={props.styles.checkboxes}
                    value={this.checkboxSlot}
                    required={this.required}
                    error={props.isFailed}
                    label={props.label}
                    ariaDescribedBy={props.ariaDescribedBy}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                />
                {props.ariaDescription}
                <ButtonFabric styles={props.styles.buttons} icon={SubmitIcon} label={props.submitLabel} onClick={done} />
            </>
        );
    }
}
