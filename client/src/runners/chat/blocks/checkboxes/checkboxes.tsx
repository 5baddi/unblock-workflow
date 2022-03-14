import * as React from "react";
import { filter, findFirst, map, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Checkboxes } from "tripetto-block-checkboxes/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { CheckboxesFabric } from "tripetto-runner-fabric/components/checkboxes";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { NothingAnswered } from "../../ui/message/nothing";
import { CheckboxAnswer } from "../../ui/message/checkbox";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-checkboxes",
})
export class CheckboxesBlock extends Checkboxes implements IChatRendering {
    answer(props: IChatRenderProps): React.ReactNode {
        const checkboxes = this.checkboxes<JSX.Element>(props);

        if (findFirst(checkboxes, (checkbox) => checkbox.value?.hasValue || false)) {
            const checked = map(
                filter(checkboxes, (checkbox) => checkbox.value?.value || false),
                (checkbox) => (
                    <CheckboxAnswer key={checkbox.id} checked={true} color={props.styles.answers.textColor}>
                        {checkbox.label}
                    </CheckboxAnswer>
                )
            );

            return (
                (checked.length > 0 && checked) || (
                    <NothingAnswered
                        label={props.l10n.pgettext("runner#2|💬 Messages|Nothing selected", "Nothing selected")}
                        color={props.styles.answers.textColor}
                    />
                )
            );
        }

        return undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <CheckboxesFabric
                    styles={props.styles.checkboxes}
                    view={props.view}
                    checkboxes={this.checkboxes(props)}
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
