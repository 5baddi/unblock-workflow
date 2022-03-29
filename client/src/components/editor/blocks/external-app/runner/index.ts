import { tripetto, HeadlessBlock } from "tripetto-runner-foundation";
import { BLOCK_NAME, BLOCK_NAMESPACE } from "../constants";
import { IExternalAppField } from "../interfaces";
import { APP_TO_OPEN_KEY } from "../../../../../global";

@tripetto({
    identifier: BLOCK_NAME,
    namespace: BLOCK_NAMESPACE,
    type: "headless"
})
export class ExternalApp extends HeadlessBlock<IExternalAppField>
{
    do(): void
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