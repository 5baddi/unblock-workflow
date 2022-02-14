
import { NodeBlock, tripetto } from "tripetto";
import ICON  from "./assets/compression-icon.svg";

const BLOCK_NAME = "compression";
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
        return "Compression";
    }
})
export class Compression extends NodeBlock
{

}