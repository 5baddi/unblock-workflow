import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { PhoneNumber } from "tripetto-block-phone-number/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { PhoneNumberFabric } from "tripetto-runner-fabric/components/phone-number";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-phone-number",
})
export class PhoneNumberBlock extends PhoneNumber implements IChatRendering {
    answer(): React.ReactNode {
        return this.phoneNumberSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <PhoneNumberFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.phoneNumberSlot}
                    required={this.required}
                    error={props.isFailed}
                    placeholder={props.placeholder}
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
                    disabled={!this.phoneNumberSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
