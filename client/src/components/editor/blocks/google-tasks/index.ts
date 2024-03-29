import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleTasks";
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
            return "Google Tasks";
        }
    })
    export class GoogleTasks extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    