import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "profitwell";
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
            return "ProfitWell";
        }
    })
    export class ProfitWell extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    