import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "nasa";
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
            return "NASA";
        }
    })
    export class NASA extends NodeBlock
    {
    
    }