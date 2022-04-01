import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "bitly";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMjh2MTI4SDB6Ii8+PHBhdGggZD0iTTYzLjcwOCAwQzI4LjQ0MyAwIDAgMjguMzA2IDAgNjUuMzIyYzAgMTkuMTkzIDEwLjI2NiAzNy43MzYgMjQuNzAzIDQ4Ljg3NyAyLjc4IDIuMTQ1IDYuMDkxIDEuOTQ5IDcuOTg5LjEwOSAxLjU5OS0xLjU1IDEuNDY3LTUuMjgyLTEuNTA3LTcuODk3LTExLjU0MS0xMC4xNDktMTkuNTItMjUuNTE0LTE5LjUyLTQwLjg2MSAwLTI3LjU2NCAyNC40NzQtNTAuNzU2IDUyLjA0NC01MC43NTYgMzMuNTU4IDAgNTEuNTAzIDI3LjI1MiA1MS41MDMgNTAuMzUxIDAgMTQuMTE0LTYuOTAyIDMxLjE1NS0xOS4zNjEgNDIuMDI1LjAxOS0uMDQ5IDIuNTg4LTUuMTAxIDIuNTg4LTE0Ljk0IDAtMTYuNzQ4LTEwLjYxMi0yNS44MjEtMjIuOTI2LTI1LjgyMS04LjkxNCAwLTE0LjI1MSAzLjE4Ny0xNy44ODMgNi4xNTggMC02LjgyMi4yMjgtMTkuNTYzLjIyOC0xOS41NjMgMC04LjQwOS0yLjk0Ni0xNS4xNC0xMy4yMTMtMTUuMjg3LTUuOTQzLS4wODQtMTAuMzUzIDIuNjQxLTEzLjEwMyA4LjgwMy0uOTkxIDIuMzExLS42MjYgNC44MjIgMS4zMzMgNS45NiAxLjYyMS45NDEgNC4yODcuMjQzIDUuNjA2LTEuNTE3Ljg4MS0xLjEgMS4zNzUtMS4zMzUgMi4xNDEtMS4yNTIgMS4yNjEuMTM2IDEuMzA5IDIuMTY4IDEuMzU5IDMuNDY4LjAzOC45OTggMS4wMDggMTUuNDk0LjQ3NyA1Mi43NDYgMCAxMC4yNzUgOC4wNTkgMjIuMDc3IDI3LjM1NSAyMi4wNzcgOC4zMDcgMCAxNC42ODYtMi4zMjIgMjMuOTUzLTcuNTg3QzEwNy44NzEgMTEyLjM5OCAxMjggOTQuNjIgMTI4IDY0LjU1IDEyOCAyNi45NzcgOTcuNTcyIDAgNjMuNzA4IDB6bTYuMDUyIDExMy42MDJjLTcuMTgzLjEyNi0xMi40MjItMi4xODMtMTIuNzQzLTguNDYxLS4xMi0yLjM1Ni0uMDgyLTQuODY1LjAzMy02LjM3OC42OTUtOS4xNzQgNy4xMS0xNS43NzQgMTMuNDQzLTE3LjA0MSA3Ljg3Ni0xLjU3NiAxMy4xMjMgMi4wMjYgMTMuMTIzIDEyLjMzNy0uMDAxIDYuOTY4LTEuOTM1IDE5LjMzNC0xMy44NTYgMTkuNTQzeiIgZmlsbD0iI0RENUEyQiIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Bitly";
        }
    })
    export class Bitly extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    