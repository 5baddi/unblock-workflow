import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleFirebaseRealtimeDatabase";
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
            return "Google Cloud Realtime Database";
        }
    })
    export class GoogleCloudRealtimeDatabase extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    