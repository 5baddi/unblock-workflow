import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "gumroadTrigger";
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
            return "Gumroad Trigger";
        }
    })
    export class GumroadTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    