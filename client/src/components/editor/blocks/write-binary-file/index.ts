import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "writeBinaryFile";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZmlsZS1leHBvcnQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtZXhwb3J0IGZhLXctMTgiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zODQgMTIxLjljMC02LjMtMi41LTEyLjQtNy0xNi45TDI3OS4xIDdjLTQuNS00LjUtMTAuNi03LTE3LTdIMjU2djEyOGgxMjh6TTU3MSAzMDhsLTk1LjctOTYuNGMtMTAuMS0xMC4xLTI3LjQtMy0yNy40IDExLjNWMjg4aC02NHY2NGg2NHY2NS4yYzAgMTQuMyAxNy4zIDIxLjQgMjcuNCAxMS4zTDU3MSAzMzJjNi42LTYuNiA2LjYtMTcuNCAwLTI0em0tMzc5IDI4di0zMmMwLTguOCA3LjItMTYgMTYtMTZoMTc2VjE2MEgyNDhjLTEzLjIgMC0yNC0xMC44LTI0LTI0VjBIMjRDMTAuNyAwIDAgMTAuNyAwIDI0djQ2NGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgzMzZjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMzUySDIwOGMtOC44IDAtMTYtNy4yLTE2LTE2eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Write Binary File";
        }
    })
    export class WriteBinaryFile extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    