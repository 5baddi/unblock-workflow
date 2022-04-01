import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "compression";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJmaWxlLWFyY2hpdmUiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtYXJjaGl2ZSBmYS13LTEyIiBkYXRhLXYtNzhjMjdhOWE9IiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzc3IDEwNUwyNzkuMSA3Yy00LjUtNC41LTEwLjYtNy0xNy03SDI1NnYxMjhoMTI4di02LjFjMC02LjMtMi41LTEyLjQtNy0xNi45ek0xMjguNCAzMzZjLTE3LjkgMC0zMi40IDEyLjEtMzIuNCAyNyAwIDE1IDE0LjYgMjcgMzIuNSAyN3MzMi40LTEyLjEgMzIuNC0yNy0xNC42LTI3LTMyLjUtMjd6TTIyNCAxMzZWMGgtNjMuNnYzMmgtMzJWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHpNOTUuOSAzMmgzMnYzMmgtMzJ6bTMyLjMgMzg0Yy0zMy4yIDAtNTgtMzAuNC01MS40LTYyLjlMOTYuNCAyNTZ2LTMyaDMydi0zMmgtMzJ2LTMyaDMydi0zMmgtMzJWOTZoMzJWNjRoMzJ2MzJoLTMydjMyaDMydjMyaC0zMnYzMmgzMnYzMmgtMzJ2MzJoMjIuMWM1LjcgMCAxMC43IDQuMSAxMS44IDkuN2wxNy4zIDg3LjdjNi40IDMyLjQtMTguNCA2Mi42LTUxLjQgNjIuNnoiIGRhdGEtdi03OGMyN2E5YT0iIiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Compression";
        }
    })
    export class Compression extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    