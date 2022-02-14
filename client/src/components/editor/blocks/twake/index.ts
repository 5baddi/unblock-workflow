import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "twake";
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
            return "Twake";
        }
    })
    export class Twake extends NodeBlock
    {
    
    }