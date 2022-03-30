import { tripetto, HeadlessBlock } from "tripetto-runner-foundation";
import { BLOCK_NAME } from "../constants";
import { IExternalAppField } from "../interfaces";
import { APP_TO_OPEN_KEY } from "../../../../../global";

@tripetto({
    identifier: BLOCK_NAME,
    type: "headless"
})
export class ExternalApp extends HeadlessBlock<IExternalAppField>
{
    key(sLabel?: string): string 
    {
        return this.node.id;
    }

    do(): void
    {
        let blockHasBeenExecuted = window.sessionStorage.getItem(this.key());
        if (typeof blockHasBeenExecuted === "string" && blockHasBeenExecuted === "true") {
            return;
        }

        let app: IExternalAppField = {
            appName: this.props.appName,
            removeSelectedApp: this.props.removeSelectedApp,
            replaceOpenedApps: this.props.replaceOpenedApps,
            closeOpenedApps: this.props.closeOpenedApps,
        };
console.log(app);
        window.sessionStorage.setItem(APP_TO_OPEN_KEY, JSON.stringify(app));
        window.sessionStorage.setItem(this.key(), "true");
    }
}