import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "unleashedSoftware";
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
            return "Unleashed Software";
        }
    })
    export class UnleashedSoftware extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    