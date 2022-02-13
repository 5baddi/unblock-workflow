import { NodeBlock, tripetto } from "tripetto";
import ICON  from "./assets/icon.svg";

const BLOCK_NAME = "automation";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: ICON,
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Automation";
    }
})
export class Automation extends NodeBlock
{

}