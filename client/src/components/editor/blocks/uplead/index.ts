import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "uplead";
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
            return "Uplead";
        }
    })
    export class Uplead extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    