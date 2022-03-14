import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Email } from "tripetto-block-email/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { EmailFabric } from "tripetto-runner-fabric/components/email";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-email",
})
export class EmailBlock extends Email implements IChatRendering {
    answer(): React.ReactNode {
        return this.emailSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <EmailFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.emailSlot}
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
                    disabled={!this.emailSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
