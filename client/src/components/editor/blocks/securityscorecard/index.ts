import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "securityScorecard";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk1IiBoZWlnaHQ9IjE5NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNLTEtMWgxOTd2MTk3SC0xeiIvPjxnIGZpbGw9Im5vbmUiIGNsYXNzPSJtYXJrIj48cGF0aCBzdHJva2U9IiM2MTlFNzMiIGZpbGw9IiM0ZTg3OGMiIGNsYXNzPSJzdDAiIGQ9Ik0xNDAuNiAxMjYuOTE4djM2bDMxLjMtMTguMS0uMS0zNi4xLTMxLjItMTh6bS03NC44IDQzLjFsMzEuMiAxOCAzMS4yLTE4di0zNS45em0xMDYtNzUuN3YtMzUuOWwtMzEuMi0xOC0zMS4xIDE3Ljl6bS0xMDYtMTAuN3YzNmwzMS4yIDE4IDMxLjItMTcuOXYtMzYuMWwtMzEuMi0xOHptLTQzLjcgMjUuMnYzNmwzMS4yIDE4IDMxLjItMTh6bTMxLjItNjguNGwtMzEuMiAxOHYzNmwzMS4yIDE4em00My43IDEwLjhsMzEuMi0xOC0zMS4yLTE4LTMxLjIgMTh2MzZ6Ii8+PC9nPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "SecurityScorecard";
        }
    })
    export class SecurityScorecard extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    