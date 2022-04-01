import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "htmlExtract";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY3V0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jdXQgZmEtdy0xNCI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI3OC4wNiAyNTZMNDQ0LjQ4IDg5LjU3YzQuNjktNC42OSA0LjY5LTEyLjI5IDAtMTYuOTctMzIuOC0zMi44LTg1Ljk5LTMyLjgtMTE4Ljc5IDBMMjEwLjE4IDE4OC4xMmwtMjQuODYtMjQuODZjNC4zMS0xMC45MiA2LjY4LTIyLjgxIDYuNjgtMzUuMjYgMC01My4wMi00Mi45OC05Ni05Ni05NlMwIDc0Ljk4IDAgMTI4czQyLjk4IDk2IDk2IDk2YzQuNTQgMCA4Ljk5LS4zMiAxMy4zNi0uOTNMMTQyLjI5IDI1NmwtMzIuOTMgMzIuOTNjLTQuMzctLjYxLTguODMtLjkzLTEzLjM2LS45My01My4wMiAwLTk2IDQyLjk4LTk2IDk2czQyLjk4IDk2IDk2IDk2IDk2LTQyLjk4IDk2LTk2YzAtMTIuNDUtMi4zNy0yNC4zNC02LjY4LTM1LjI2bDI0Ljg2LTI0Ljg2TDMyNS42OSA0MzkuNGMzMi44IDMyLjggODUuOTkgMzIuOCAxMTguNzkgMCA0LjY5LTQuNjggNC42OS0xMi4yOCAwLTE2Ljk3TDI3OC4wNiAyNTZ6TTk2IDE2MGMtMTcuNjQgMC0zMi0xNC4zNi0zMi0zMnMxNC4zNi0zMiAzMi0zMiAzMiAxNC4zNiAzMiAzMi0xNC4zNiAzMi0zMiAzMnptMCAyNTZjLTE3LjY0IDAtMzItMTQuMzYtMzItMzJzMTQuMzYtMzIgMzItMzIgMzIgMTQuMzYgMzIgMzItMTQuMzYgMzItMzIgMzJ6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "HTML Extract";
        }
    })
    export class HTMLExtract extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    