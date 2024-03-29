import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "readPDF";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZmlsZS1wZGYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtcGRmIGZhLXctMTIiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xODEuOSAyNTYuMWMtNS0xNi00LjktNDYuOS0yLTQ2LjkgOC40IDAgNy42IDM2LjkgMiA0Ni45em0tMS43IDQ3LjJjLTcuNyAyMC4yLTE3LjMgNDMuMy0yOC40IDYyLjcgMTguMy03IDM5LTE3LjIgNjIuOS0yMS45LTEyLjctOS42LTI0LjktMjMuNC0zNC41LTQwLjh6TTg2LjEgNDI4LjFjMCAuOCAxMy4yLTUuNCAzNC45LTQwLjItNi43IDYuMy0yOS4xIDI0LjUtMzQuOSA0MC4yek0yNDggMTYwaDEzNnYzMjhjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjI0QzAgMTAuNyAxMC43IDAgMjQgMGgyMDB2MTM2YzAgMTMuMiAxMC44IDI0IDI0IDI0em0tOCAxNzEuOGMtMjAtMTIuMi0zMy4zLTI5LTQyLjctNTMuOCA0LjUtMTguNSAxMS42LTQ2LjYgNi4yLTY0LjItNC43LTI5LjQtNDIuNC0yNi41LTQ3LjgtNi44LTUgMTguMy0uNCA0NC4xIDguMSA3Ny0xMS42IDI3LjYtMjguNyA2NC42LTQwLjggODUuOC0uMSAwLS4xLjEtLjIuMS0yNy4xIDEzLjktNzMuNiA0NC41LTU0LjUgNjggNS42IDYuOSAxNiAxMCAyMS41IDEwIDE3LjkgMCAzNS43LTE4IDYxLjEtNjEuOCAyNS44LTguNSA1NC4xLTE5LjEgNzktMjMuMiAyMS43IDExLjggNDcuMSAxOS41IDY0IDE5LjUgMjkuMiAwIDMxLjItMzIgMTkuNy00My40LTEzLjktMTMuNi01NC4zLTkuNy03My42LTcuMnpNMzc3IDEwNUwyNzkgN2MtNC41LTQuNS0xMC42LTctMTctN2gtNnYxMjhoMTI4di02LjFjMC02LjMtMi41LTEyLjQtNy0xNi45em0tNzQuMSAyNTUuM2M0LjEtMi43LTIuNS0xMS45LTQyLjgtOSAzNy4xIDE1LjggNDIuOCA5IDQyLjggOXoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Read PDF";
        }
    })
    export class ReadPDF extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    