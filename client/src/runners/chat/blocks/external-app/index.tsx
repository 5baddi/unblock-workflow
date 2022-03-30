import * as React from "react";
import { tripetto, NodeBlock } from "tripetto-runner-foundation";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { BLOCK_NAME } from "../../../../components/editor/blocks/external-app/constants";
import { IExternalAppField } from "../../../../components/editor/blocks/external-app/interfaces";
import App from "./app";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME
})
export class ExternalApp extends NodeBlock<IExternalAppField> implements IChatRendering
{
    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode 
    {
        let app: IExternalAppField = {
            appName: this.props.appName,
            customAction: this.props.customAction
        };
    
        return (
            <App app={app} onSubmit={done} onCancel={cancel} glue={props.glue} user={props.user}/>
        );
    }
}