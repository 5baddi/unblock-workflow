import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "github";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTQ4Ljc0NCAxNTAuNzQ0IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB4PSIuODcyIiB5PSIuODcyIi8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxwYXRoIGQ9Ik03My4yNTYgMEMzMi44MDEgMCAwIDM0LjAyOSAwIDc2LjAwMWMwIDMzLjU4NiAyMC45ODggNjIuMDY5IDUwLjEgNzIuMTE1IDMuNjYzLjY5OCA0Ljk5OS0xLjY1MiA0Ljk5OS0zLjY1NmwtLjEwNS0xNC4xNDljLTIwLjM3MiA0LjU5My0yNC42NzctOC45NjEtMjQuNjc3LTguOTYxLTMuMzM1LTguNzc3LTguMTMzLTExLjExNC04LjEzMy0xMS4xMTQtNi42NTgtNC43MTMuNTIzLTQuNjIyLjUyMy00LjYyMiA3LjM1NS41MjkgMTEuMjI3IDcuODMxIDExLjIyNyA3LjgzMSA2LjUzNyAxMS42MTYgMTcuMTUxIDguMjU3IDIxLjMxOSA2LjMwOS42NjYtNC45MDEgMi41NjQtOC4yNTcgNC42NS0xMC4xNTEtMTYuMjYxLTEuOTE5LTMzLjM2Ni04LjQ0Mi0zMy4zNjYtMzcuNTY1IDAtOC4zMDIgMi44NTctMTUuMDc1IDcuNTM1LTIwLjM5Ni0uNzQ3LTEuOTI5LTMuMjY5LTkuNjYzLjcyNC0yMC4xMjMgMCAwIDYuMTQzLTIuMDQxIDIwLjE0NSA3Ljc5MyA1Ljg0LTEuNjkyIDEyLjEwNS0yLjUyOSAxOC4zMTQtMi41NTUgNi4yMjMuMDI4IDEyLjQ5Mi44NzIgMTguMzQgMi41NjQgMTMuOTc4LTkuODQ0IDIwLjEyOC03Ljc5MyAyMC4xMjgtNy43OTMgNC4wMDYgMTAuNDcgMS40ODMgMTguMTkyLjczMyAyMC4xMTQgNC42OTUgNS4zMiA3LjUzIDEyLjA5MyA3LjUzIDIwLjM5NiAwIDI5LjE5OC0xNy4xMzMgMzUuNjI3LTMzLjQ1MyAzNy41MDkgMi42MzkgMi4zNTUgNC45NzEgNi45NzcgNC45NzEgMTQuMDY1bC0uMDk4IDIwLjg1NWMwIDIuMDIzIDEuMzMzIDQuMzg4IDUuMDQ0IDMuNjYzIDI5LjA5MS0xMC4wNzggNTAuMDYyLTM4LjU2MSA1MC4wNjItNzIuMTI5QzE0Ni41MTIgMzQuMDI5IDExMy43MSAwIDczLjI1NiAweiIgZmlsbD0iIzAwMCIgc3Ryb2tlPSJub25lIi8+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "GitHub";
        }
    })
    export class GitHub extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    