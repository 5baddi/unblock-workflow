import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "intercom";
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
            return "Intercom";
        }
    })
    export class Intercom extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    