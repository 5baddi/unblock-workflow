import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "sseTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY2xvdWQtZG93bmxvYWQtYWx0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDY0MCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jbG91ZC1kb3dubG9hZC1hbHQgZmEtdy0yMCI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUzNy42IDIyNi42YzQuMS0xMC43IDYuNC0yMi40IDYuNC0zNC42IDAtNTMtNDMtOTYtOTYtOTYtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyYy04OC40IDAtMTYwIDcxLjYtMTYwIDE2MCAwIDIuNy4xIDUuNC4yIDguMUM0MC4yIDIxOS44IDAgMjczLjIgMCAzMzZjMCA3OS41IDY0LjUgMTQ0IDE0NCAxNDRoMzY4YzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4IDAtNjEuOS00NC0xMTMuNi0xMDIuNC0xMjUuNHptLTEzMi45IDg4LjdMMjk5LjMgNDIwLjdjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwTDE3MS4zIDMxNS4zYy0xMC4xLTEwLjEtMi45LTI3LjMgMTEuMy0yNy4zSDI0OFYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDQ4YzguOCAwIDE2IDcuMiAxNiAxNnYxMTJoNjUuNGMxNC4yIDAgMjEuNCAxNy4yIDExLjMgMjcuM3oiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "SSE Trigger";
        }
    })
    export class SSETrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    