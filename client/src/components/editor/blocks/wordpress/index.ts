import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "wordpress";
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
            return "Wordpress";
        }
    })
    export class Wordpress extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    