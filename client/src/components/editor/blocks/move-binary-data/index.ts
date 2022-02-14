import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "move-binary-data";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "iconBase",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Move Binary Data";
        }
    })
    export class MoveBinaryData extends NodeBlock
    {
    
    }