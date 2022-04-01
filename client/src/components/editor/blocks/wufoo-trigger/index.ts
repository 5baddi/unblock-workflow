import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "wufooTrigger";
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
            return "Wufoo Trigger";
        }
    })
    export class WufooTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    