import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleCloudFirestore";
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
            return "Google Cloud Firestore";
        }
    })
    export class GoogleCloudFirestore extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    