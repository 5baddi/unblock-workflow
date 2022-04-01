import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "affinity";
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
            return "Affinity";
        }
    })
    export class Affinity extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    