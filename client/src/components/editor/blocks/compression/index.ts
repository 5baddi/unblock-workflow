
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "compression";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZmlsZS1hcmNoaXZlIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1maWxlLWFyY2hpdmUgZmEtdy0xMiI+CiAgICA8cGF0aCBkYXRhLXYtNzhjMjdhOWE9IiIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzc3IDEwNUwyNzkuMSA3Yy00LjUtNC41LTEwLjYtNy0xNy03SDI1NnYxMjhoMTI4di02LjFjMC02LjMtMi41LTEyLjQtNy0xNi45ek0xMjguNCAzMzZjLTE3LjkgMC0zMi40IDEyLjEtMzIuNCAyNyAwIDE1IDE0LjYgMjcgMzIuNSAyN3MzMi40LTEyLjEgMzIuNC0yNy0xNC42LTI3LTMyLjUtMjd6TTIyNCAxMzZWMGgtNjMuNnYzMmgtMzJWMEgyNEMxMC43IDAgMCAxMC43IDAgMjR2NDY0YzAgMTMuMyAxMC43IDI0IDI0IDI0aDMzNmMxMy4zIDAgMjQtMTAuNyAyNC0yNFYxNjBIMjQ4Yy0xMy4yIDAtMjQtMTAuOC0yNC0yNHpNOTUuOSAzMmgzMnYzMmgtMzJ6bTMyLjMgMzg0Yy0zMy4yIDAtNTgtMzAuNC01MS40LTYyLjlMOTYuNCAyNTZ2LTMyaDMydi0zMmgtMzJ2LTMyaDMydi0zMmgtMzJWOTZoMzJWNjRoMzJ2MzJoLTMydjMyaDMydjMyaC0zMnYzMmgzMnYzMmgtMzJ2MzJoMjIuMWM1LjcgMCAxMC43IDQuMSAxMS44IDkuN2wxNy4zIDg3LjdjNi40IDMyLjQtMTguNCA2Mi42LTUxLjQgNjIuNnoiIGNsYXNzPSIiPjwvcGF0aD4KPC9zdmc+",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Compression";
    }
})
export class Compression extends NodeBlock
{

}