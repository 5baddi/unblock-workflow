import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "discord";
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
            return "Discord";
        }
    })
    export class Discord extends NodeBlock
    {
    
    }