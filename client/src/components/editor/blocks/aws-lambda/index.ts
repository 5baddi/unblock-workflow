import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsLambda";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9Ii0zLjAyMyAtMC4yMiA0MjAuOTIzIDQzMy41NCIgd2lkdGg9IjI0NDMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwOC40NSAyMjcuODljLTEuNTkgMi4yNi0yLjkzIDQuMTItNC4yMiA2cS0zMC44NiA0NS40Mi02MS43IDkwLjgzLTI4LjY5IDQyLjI0LTU3LjQ0IDg0LjQzYTMuODggMy44OCAwIDAxLTIuNzMgMS41OXEtNDAuNTktLjM1LTgxLjE2LS44OGMtLjMgMC0uNjEtLjA5LTEuMi0uMThhMTQuNDQgMTQuNDQgMCAwMS43Ni0xLjY1cTI4LjMxLTQzLjg5IDU2LjYyLTg3Ljc2IDI1LjExLTM4Ljg4IDUwLjI1LTc3Ljc0IDI3Ljg2LTQzLjE4IDU1LjY5LTg2LjQyYzIuNzQtNC4yNSA1LjU5LTguNDIgOC4xOS0xMi43NWE1LjI2IDUuMjYgMCAwMC41Ni0zLjgzYy01LTE1Ljk0LTEwLjEtMzEuODQtMTUuMTktNDcuNzQtMi4xOC02LjgxLTQuNDYtMTMuNTgtNi41LTIwLjQzLS42Ni0yLjItMS43NS0yLjg3LTQtMi44Ni0xNyAuMDctMzMuOS4wNS01MC44NS4wNS0zLjIyIDAtMy4yMyAwLTMuMjMtMy4xOCAwLTIwLjg0IDAtNDEuNjgtLjA2LTYyLjUyIDAtMi4zMi43Ni0yLjg0IDIuOTQtMi44NHE1MS4xOS4wOSAxMDIuNCAwYTMuMjkgMy4yOSAwIDAxMy42IDIuNDNxMjcgNjcuOTEgNTQgMTM1Ljc3IDMxLjUgNzkuMTQgNjMgMTU4LjNjNi41MiAxNi4zOCAxMy4wOSAzMi43NSAxOS41NCA0OS4xNy43NyAyIDEuNTcgMi4zOCAzLjU5IDEuNzYgMTcuODktNS41MyAzNS44Mi0xMC45MSA1My43LTE2LjQ1IDIuMjUtLjcgMy4wNy0uMjMgMy43NyAyIDYuMSAxOS4xNyAxMi4zMiAzOC4zIDE4LjUgNTcuNDUuMjEuNjYuMzcgMS4zMy42MiAyLjI1LTEuMjguNDctMi40OCAxLTMuNzEgMS4zNHEtNjEgMTkuMzMtMTIxLjkzIDM4LjY4Yy0xLjk0LjYxLTIuNTItLjA1LTMuMTctMS42OHEtMTguNjEtNDcuMTYtMzcuMzEtOTQuMjgtMTguMjktNDYuMTQtMzYuNi05Mi4yOGMtMS44My00LjYyLTMuNjMtOS4yNi01LjQ2LTEzLjg4LS4yOS0uNzktLjY5LTEuNDgtMS4yNy0yLjd6IiBmaWxsPSIjZmE3ZTE0Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS Lambda";
        }
    })
    export class AWSLambda extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    