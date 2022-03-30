import * as React from "react";
import { tripetto, NodeBlock } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { Error } from "tripetto-block-error/runner";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { BLOCK_NAME } from "../../../../components/editor/blocks/external-app/constants";
import { IExternalAppField } from "../../../../components/editor/blocks/external-app/interfaces";
import App from "./app";
import GlueWeb from "@glue42/web";
import GlueWorkspaces from "@glue42/workspaces-api";

const settings = {
    web: {
        config: { libraries: [GlueWorkspaces] },
        factory: GlueWeb,
    },
};

@tripetto({
    type: "node",
    identifier: BLOCK_NAME
})
export class ExternalApp extends NodeBlock<IExternalAppField> implements IChatRendering
{
    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode 
    {
        console.log(props);
        let app: IExternalAppField = {
            appName: this.props.appName,
            closeOpenedApps: this.props.closeOpenedApps,
            removeSelectedApp: this.props.removeSelectedApp,
            replaceOpenedApps: this.props.replaceOpenedApps,
        };
    
        return (
            <App app={app} onSubmit={done} onCancel={cancel}/>
        );
    }
}