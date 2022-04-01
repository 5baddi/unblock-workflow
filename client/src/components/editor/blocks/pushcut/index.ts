import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "pushcut";
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
            return "Pushcut";
        }
    })
    export class Pushcut extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    