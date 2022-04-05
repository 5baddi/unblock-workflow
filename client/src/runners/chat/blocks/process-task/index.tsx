import * as React from "react";
import { tripetto, NodeBlock } from "tripetto-runner-foundation";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { BLOCK_NAME } from "../../../../components/editor/blocks/process-task/constants";
import { IProcessTaskField } from "../../../../components/editor/blocks/process-task/interfaces";
import App from "./app";

@tripetto({
    type: "headless",
    identifier: BLOCK_NAME
})
export class ProcessTask extends NodeBlock<IProcessTaskField> implements IChatRendering
{
    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode 
    {
        let process: IProcessTaskField = {
            definitionId: this.props.definitionId,
            sendable: this.props.sendable
        };
    
        return (
            <App process={process} onSubmit={done} onCancel={cancel} glue={props.glue} user={props.user} controller={props.controller}/>
        );
    }
}