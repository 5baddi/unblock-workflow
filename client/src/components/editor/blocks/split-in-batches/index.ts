import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "splitInBatches";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0idGgtbGFyZ2UiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRoLWxhcmdlIGZhLXctMTYiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yOTYgMzJoMTkyYzEzLjI1NSAwIDI0IDEwLjc0NSAyNCAyNHYxNjBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDI5NmMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0VjU2YzAtMTMuMjU1IDEwLjc0NS0yNCAyNC0yNHptLTgwIDBIMjRDMTAuNzQ1IDMyIDAgNDIuNzQ1IDAgNTZ2MTYwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxOTJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjU2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHpNMCAyOTZ2MTYwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNGgxOTJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjI5NmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjRjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHptMjk2IDE4NGgxOTJjMTMuMjU1IDAgMjQtMTAuNzQ1IDI0LTI0VjI5NmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMjk2Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2MTYwYzAgMTMuMjU1IDEwLjc0NSAyNCAyNCAyNHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Split In Batches";
        }
    })
    export class SplitInBatches extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    