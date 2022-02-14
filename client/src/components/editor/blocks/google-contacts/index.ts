import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "google-contacts";
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
            return "Google Contacts";
        }
    })
    export class GoogleContacts extends NodeBlock
    {
    
    }