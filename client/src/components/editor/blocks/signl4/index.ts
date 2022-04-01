import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "signl4";
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
            return "SIGNL4";
        }
    })
    export class SIGNL4 extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    