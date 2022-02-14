import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "error-trigger";
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
            return "Error Trigger";
        }
    })
    export class ErrorTrigger extends NodeBlock
    {
    
    }