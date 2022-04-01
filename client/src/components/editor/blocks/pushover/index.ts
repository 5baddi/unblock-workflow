import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "pushover";
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
            return "Pushover";
        }
    })
    export class Pushover extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    