import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Password } from "tripetto-block-password/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { PasswordFabric } from "tripetto-runner-fabric/components/password";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { PasswordAnswer } from "../../ui/message/password";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-password",
})
export class PasswordBlock extends Password implements IChatRendering {
    answer(props: IChatRenderProps): React.ReactNode {
        return (this.passwordSlot.string && <PasswordAnswer color={props.styles.answers.textColor} />) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <PasswordFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.passwordSlot}
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
                    disabled={!this.passwordSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
