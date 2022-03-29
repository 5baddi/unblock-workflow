import { tripetto, NodeBlock } from "tripetto-runner-foundation";
import { BLOCK_NAME } from "../constants";
import { IExternalAppField } from "../interfaces";
import { APP_TO_OPEN_KEY } from "../../../../../global";

@tripetto({
    identifier: BLOCK_NAME,
    type: "node"
})
export class ExternalApp extends NodeBlock<IExternalAppField>
{
    key(sLabel?: string): string 
    {
        return this.node.id;
    }

    rerender(): void
    {
        let app: IExternalAppField = {
            appName: this.props.appName,
            removeSelectedApp: this.props.removeSelectedApp,
            replaceOpenedApps: this.props.replaceOpenedApps,
            closeOpenedApps: this.props.closeOpenedApps,
        };

        window.sessionStorage.setItem(APP_TO_OPEN_KEY, JSON.stringify(app));
    }
}