import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { DateTime } from "tripetto-block-date/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { DateTimeFabric } from "tripetto-runner-fabric/components/datetime";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-date",
})
export class DateTimeBlock extends DateTime implements IChatRendering {
    answer(): React.ReactNode {
        // Variables are localized, but slot values are not. So we use a variable here to show the value.

        if (this.props.range) {
            const from = this.variableFor(this.dateSlot)?.string;
            const to = (this.toSlot && this.variableFor(this.toSlot)?.string) || "";

            if (from && to) {
                return `${from} - ${to}`;
            }
        }

        return this.variableFor(this.dateSlot)?.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <DateTimeFabric
                    id={props.id}
                    mode={this.props.time ? "datetime" : "date"}
                    styles={props.styles.inputs}
                    l10n={props.l10n}
                    value={this.dateSlot}
                    required={this.required}
                    error={props.isFailed && (!this.props.range || this.fromError)}
                    placeholder={props.placeholder}
                    ariaDescribedBy={props.ariaDescribedBy}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={((!this.props.range || !this.toSlot) && done) || undefined}
                    onCancel={cancel}
                />
                {this.props.range && this.toSlot && (
                    <DateTimeFabric
                        mode={this.props.time ? "datetime" : "date"}
                        styles={props.styles.inputs}
                        l10n={props.l10n}
                        value={this.toSlot}
                        required={this.required}
                        error={props.isFailed && (!this.props.range || this.toError)}
                        placeholder={this.toPlaceholder}
                        ariaDescribedBy={props.ariaDescribedBy}
                        onFocus={props.focus}
                        onBlur={props.blur}
                        onSubmit={done}
                    />
                )}
                {props.ariaDescription}
                <ButtonFabric
                    styles={props.styles.buttons}
                    icon={SubmitIcon}
                    label={props.submitLabel}
                    disabled={this.isFailed || !this.dateSlot.hasValue}
                    onClick={done}
                />
            </>
        );
    }
}
