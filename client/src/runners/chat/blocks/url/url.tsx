import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { URL } from "tripetto-block-url/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { URLFabric } from "tripetto-runner-fabric/components/url";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-url",
})
export class URLBlock extends URL implements IChatRendering {
    answer(): React.ReactNode {
        return this.urlSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <URLFabric
                    id={props.id}
                    styles={props.styles.inputs}
                    value={this.urlSlot}
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
                    disabled={!this.urlSlot.string}
                    onClick={done}
                />
            </>
        );
    }
}
