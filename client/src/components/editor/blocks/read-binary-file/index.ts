import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "readBinaryFile";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZmlsZS1pbXBvcnQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtaW1wb3J0IGZhLXctMTYiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNiAyODhjLTguOCAwLTE2IDcuMi0xNiAxNnYzMmMwIDguOCA3LjIgMTYgMTYgMTZoMTEydi02NHptNDg5LTE4M0w0MDcuMSA3Yy00LjUtNC41LTEwLjYtNy0xNy03SDM4NHYxMjhoMTI4di02LjFjMC02LjMtMi41LTEyLjQtNy0xNi45em0tMTUzIDMxVjBIMTUyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHYyNjRoMTI4di02NS4yYzAtMTQuMyAxNy4zLTIxLjQgMjcuNC0xMS4zTDM3OSAzMDhjNi42IDYuNyA2LjYgMTcuNCAwIDI0bC05NS43IDk2LjRjLTEwLjEgMTAuMS0yNy40IDMtMjcuNC0xMS4zVjM1MkgxMjh2MTM2YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMzc2Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Read Binary File";
        }
    })
    export class ReadBinaryFile extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    