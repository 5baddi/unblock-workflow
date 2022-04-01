import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "twitter";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjU3IDIxMCIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHVzZSB4bGluazpocmVmPSIjYSIgeD0iLjUiIHk9Ii41Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxwYXRoIGQ9Ik04MC41MDcgMjA4LjAxM2M5Ni42MDQgMCAxNDkuNDQyLTgwLjAzNiAxNDkuNDQyLTE0OS40NDIgMC0yLjI3NCAwLTQuNTM3LS4xNTMtNi44QTEwNi44NzQgMTA2Ljg3NCAwIDAwMjU2IDI0LjU5NWExMDQuODQgMTA0Ljg0IDAgMDEtMzAuMTY3IDguMjY0IDUyLjcwOSA1Mi43MDkgMCAwMDIzLjA5MS0yOS4wNSAxMDUuMjYgMTA1LjI2IDAgMDEtMzMuMzUyIDEyLjc0OEMxOTkuMjkxLS43NTQgMTczLjQyMi00Ljk5MSAxNTIuNDY5IDYuMjIzcy0zMS43NzcgMzUuMDg4LTI2LjQwNCA1OC4yMzhBMTQ5LjExNyAxNDkuMTE3IDAgMDExNy44MTggOS41ODNjLTEzLjk0MSAyMy45OTktNi44MjEgNTQuNyAxNi4yNiA3MC4xMTNhNTIuMTMgNTIuMTMgMCAwMS0yMy44MzgtNi41NzR2LjY2NWMuMDA3IDI1LjAwMiAxNy42MzEgNDYuNTM3IDQyLjEzOCA1MS40ODdhNTIuNDQgNTIuNDQgMCAwMS0yMy43MTYuOTAxYzYuODgxIDIxLjM5NiAyNi41OTkgMzYuMDUzIDQ5LjA3IDM2LjQ3NWExMDUuMzkgMTA1LjM5IDAgMDEtNjUuMjI5IDIyLjUyOEExMDYuODQ0IDEwNi44NDQgMCAwMTAgMTg0LjQyYTE0OC42OTUgMTQ4LjY5NSAwIDAwODAuNTA3IDIzLjU1MiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMWRhMWYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Twitter";
        }
    })
    export class Twitter extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    