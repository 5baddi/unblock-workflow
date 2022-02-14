import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "g-suite-admin";
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
            return "G Suite Admin";
        }
    })
    export class GSuiteAdmin extends NodeBlock
    {
    
    }