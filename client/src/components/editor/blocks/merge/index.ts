import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "merge";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29kZS1icmFuY2giIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNvZGUtYnJhbmNoIGZhLXctMTIiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0zODQgMTQ0YzAtNDQuMi0zNS44LTgwLTgwLTgwcy04MCAzNS44LTgwIDgwYzAgMzYuNCAyNC4zIDY3LjEgNTcuNSA3Ni44LS42IDE2LjEtNC4yIDI4LjUtMTEgMzYuOS0xNS40IDE5LjItNDkuMyAyMi40LTg1LjIgMjUuNy0yOC4yIDIuNi01Ny40IDUuNC04MS4zIDE2Ljl2LTE0NGMzMi41LTEwLjIgNTYtNDAuNSA1Ni03Ni4zIDAtNDQuMi0zNS44LTgwLTgwLTgwUzAgMzUuOCAwIDgwYzAgMzUuOCAyMy41IDY2LjEgNTYgNzYuM3YxOTkuM0MyMy41IDM2NS45IDAgMzk2LjIgMCA0MzJjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MGMwLTM0LTIxLjItNjMuMS01MS4yLTc0LjYgMy4xLTUuMiA3LjgtOS44IDE0LjktMTMuNCAxNi4yLTguMiA0MC40LTEwLjQgNjYuMS0xMi44IDQyLjItMy45IDkwLTguNCAxMTguMi00My40IDE0LTE3LjQgMjEuMS0zOS44IDIxLjYtNjcuOSAzMS42LTEwLjggNTQuNC00MC43IDU0LjQtNzUuOXpNODAgNjRjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTYtMTYtNy4yLTE2LTE2IDcuMi0xNiAxNi0xNnptMCAzODRjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTYgMTYgNy4yIDE2IDE2LTcuMiAxNi0xNiAxNnptMjI0LTMyMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNi0xNi03LjItMTYtMTYgNy4yLTE2IDE2LTE2eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Merge";
        }
    })
    export class Merge extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    