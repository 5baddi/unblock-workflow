import * as React from "react";
import { findFirst, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Dropdown } from "tripetto-block-dropdown/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { DropdownFabric } from "tripetto-runner-fabric/components/dropdown";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-dropdown",
})
export class DropdownBlock extends Dropdown implements IChatRendering {
    answer(): React.ReactNode {
        const reference = this.dropdownSlot.reference;
        const answer = findFirst(this.options, (option) => option.id === reference);

        return (answer && answer.name) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <DropdownFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    options={this.options}
                    value={this.dropdownSlot}
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
                    disabled={!this.dropdownSlot.hasValue}
                    onClick={done}
                />
            </>
        );
    }
}
