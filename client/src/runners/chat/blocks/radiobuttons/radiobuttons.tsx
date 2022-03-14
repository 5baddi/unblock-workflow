import * as React from "react";
import { findFirst, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Radiobuttons } from "tripetto-block-radiobuttons/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { RadiobuttonsFabric } from "tripetto-runner-fabric/components/radiobuttons";
import { TextMessage } from "../../ui/message/text";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-radiobuttons",
})
export class RadiobuttonsBlock extends Radiobuttons implements IChatRendering {
    answer(props: IChatRenderProps): React.ReactNode {
        const reference = this.radioSlot.reference;
        const answer = findFirst(this.buttons<JSX.Element>(props), (button) => button.id === reference);

        return (answer && <TextMessage>{answer.label}</TextMessage>) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <RadiobuttonsFabric
                    styles={props.styles.radiobuttons}
                    view={props.view}
                    buttons={this.buttons(props)}
                    value={this.radioSlot}
                    ariaDescribedBy={props.ariaDescribedBy}
                    allowUnselect={false}
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
                    disabled={!this.radioSlot.hasValue}
                    onClick={done}
                />
            </>
        );
    }
}
