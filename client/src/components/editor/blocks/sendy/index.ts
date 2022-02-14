import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "sendy";
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
            return "Sendy";
        }
    })
    export class Sendy extends NodeBlock
    {
    
    }