import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "humanticAi";
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
            return "Humantic AI";
        }
    })
    export class HumanticAI extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    