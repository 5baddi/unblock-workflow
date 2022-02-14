import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "stackby";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,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",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Stackby";
        }
    })
    export class Stackby extends NodeBlock
    {
    
    }