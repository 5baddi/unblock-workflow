import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "copper";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ4NS4zMzMiIGhlaWdodD0iNDg1LjMzMyIgdmlld0JveD0iMCAwIDM2NCAzNjQiPjxwYXRoIGQ9Ik0xNjIgMS41Yy0yMS41IDIuNi0zOS44IDgtNTguNSAxNy4xLTM4LjYgMTguOC02Ny44IDQ4LjItODUuNiA4NS45LTEzLjMgMjguNC0xOS43IDYyLjgtMTcgOTEuMiAxLjUgMTUuOSAzLjcgMjYuOCA5IDQ0LjQgMy45IDEyLjggMTYuNyAzNy41IDI2LjQgNTAuNCA2LjMgOC41IDI0LjYgMjcuMSAzNC4yIDM0LjcgMTEuNiA5LjMgMjcuNyAxOC40IDQ2IDI2LjMgMTAuOSA0LjcgMzQuOCAxMCA1MS45IDExLjYgMTAuNCAxIDE2LjIgMSAyNi43IDAgNjAuNC01LjQgMTEwLjctMzYuMiAxNDIuMi04Ny4xIDE5LjEtMzEgMjkuMS03Mi4zIDI1LjgtMTA3LjItMS4zLTE0LjgtNC43LTMxLjQtOS4xLTQ0LjctMTUuMS00NS44LTUwLjctODUuOS05NC0xMDUuOC01LjItMi40LTEwLjItNC44LTExLTUuMi0xLjktMS0xOS44LTYuNS0yNi04QzIwMi42LjMgMTgyLjEtMSAxNjIgMS41em01OC41IDc4LjNjMTYgNC40IDMzIDE0LjMgNDIgMjQuNCAyLjUgMi45IDYuNiA5LjMgOSAxNC4zIDkuNSAxOS42IDcuNyAzOC00LjkgNTAuNi03IDctMTAuNiA4LjMtMjIuNiA4LjQtOS4yIDAtMTEuMS0uMy0xNS4zLTIuNC02LjktMy42LTEzLjktMTEuNC0xNi42LTE4LjYtMy40LTguOS0zLjEtMTcuNCAxLTMxLjYgNi41LTIyLjQgMy45LTMzLjktOS4xLTQwLjQtNC4yLTIuMi0xNC45LTIuNS0yMC4yLS42LTguMSAyLjctMTcuNiAxMy4yLTIzLjQgMjUuNi02LjYgMTQuMy0xMC4xIDM0LjMtOS4xIDUyLjkgMS4xIDIyIDYuMyAzNy4xIDE3LjIgNTAuNyAxNS40IDE5IDQxLjIgMjYuNiA2OS4zIDIwLjMgMTEuNy0yLjYgMjMuMi04LjggMzQuNS0xOC43IDUuNS00LjggNy4yLTUuOCA5LjItNS4zIDEuNC40IDIuNSAxLjIgMi41IDEuOSAwIDEuOS04LjUgMTgtMTMuNyAyNi4yLTExLjcgMTgtMzAuMiAzNC43LTQ2LjggNDItMTYuNyA3LjQtMzkuNyA5LjktNjAuNyA2LjUtMTkuOS0zLjItNDAuMy0xMy42LTU0LjgtMjgtMjkuNC0yOS41LTM3LjItNzcuNC0xOS4xLTExNy40IDEzLjctMzAuMyA0My4zLTUzLjggNzcuNi02MS42IDExLjktMi43IDQyLjctMi4yIDU0IC44eiIgZmlsbD0iI2ZmMjU2NCIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Copper";
        }
    })
    export class Copper extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    