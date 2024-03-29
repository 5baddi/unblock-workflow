import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "hackerNews";
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
            return "Hacker News";
        }
    })
    export class HackerNews extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    