import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "keapTrigger";
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
            return "Keap Trigger";
        }
    })
    export class KeapTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    