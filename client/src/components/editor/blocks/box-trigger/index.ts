import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "boxTrigger";
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
            return "Box Trigger";
        }
    })
    export class BoxTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    