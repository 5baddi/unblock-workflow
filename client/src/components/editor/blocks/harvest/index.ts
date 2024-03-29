import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "harvest";
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
            return "Harvest";
        }
    })
    export class Harvest extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    