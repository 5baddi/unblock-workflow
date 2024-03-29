import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "spontit";
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
            return "Spontit";
        }
    })
    export class Spontit extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    