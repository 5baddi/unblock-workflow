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
    do(): void
    {
        console.log(this.props);
        window.sessionStorage.setItem(APP_TO_OPEN_KEY, this.props.appName);
    }
}