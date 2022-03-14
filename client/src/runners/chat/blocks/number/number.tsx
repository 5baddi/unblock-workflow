import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Number } from "tripetto-block-number/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { NumberFabric } from "tripetto-runner-fabric/components/number";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-number",
})
export class NumberBlock extends Number implements IChatRendering {
    answer(): React.ReactNode {
        // Variables are localized, but slot values are not. So we use a variable here to show the value.
        return this.variableFor(this.numberSlot)?.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <NumberFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    l10n={props.l10n}
                    value={this.numberSlot}
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
                    disabled={!this.numberSlot.hasValue}
                    onClick={done}
                />
            </>
        );
    }
}
