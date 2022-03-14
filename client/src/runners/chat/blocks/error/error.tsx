import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Error } from "tripetto-block-error/runner";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-error",
})
export class ErrorBlock extends Error implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name || props.description) && (
                <ParagraphMessage>
                    {props.name}
                    {props.description}
                </ParagraphMessage>
            )) ||
            undefined
        );
    }
}
