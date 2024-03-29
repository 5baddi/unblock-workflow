import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "rssFeedRead";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0icnNzIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1yc3MgZmEtdy0xNCI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyOC4wODEgNDE1Ljk1OWMwIDM1LjM2OS0yOC42NzIgNjQuMDQxLTY0LjA0MSA2NC4wNDFTMCA0NTEuMzI4IDAgNDE1Ljk1OXMyOC42NzItNjQuMDQxIDY0LjA0MS02NC4wNDEgNjQuMDQgMjguNjczIDY0LjA0IDY0LjA0MXptMTc1LjY2IDQ3LjI1Yy04LjM1NC0xNTQuNi0xMzIuMTg1LTI3OC41ODctMjg2Ljk1LTI4Ni45NUM3LjY1NiAxNzUuNzY1IDAgMTgzLjEwNSAwIDE5Mi4yNTN2NDguMDY5YzAgOC40MTUgNi40OSAxNS40NzIgMTQuODg3IDE2LjAxOCAxMTEuODMyIDcuMjg0IDIwMS40NzMgOTYuNzAyIDIwOC43NzIgMjA4Ljc3Mi41NDcgOC4zOTcgNy42MDQgMTQuODg3IDE2LjAxOCAxNC44ODdoNDguMDY5YzkuMTQ5LjAwMSAxNi40ODktNy42NTUgMTUuOTk1LTE2Ljc5em0xNDQuMjQ5LjI4OEM0MzkuNTk2IDIyOS42NzcgMjUxLjQ2NSA0MC40NDUgMTYuNTAzIDMyLjAxIDcuNDczIDMxLjY4NiAwIDM4Ljk4MSAwIDQ4LjAxNnY0OC4wNjhjMCA4LjYyNSA2LjgzNSAxNS42NDUgMTUuNDUzIDE1Ljk5OSAxOTEuMTc5IDcuODM5IDM0NC42MjcgMTYxLjMxNiAzNTIuNDY1IDM1Mi40NjUuMzUzIDguNjE4IDcuMzczIDE1LjQ1MyAxNS45OTkgMTUuNDUzaDQ4LjA2OGM5LjAzNC0uMDAxIDE2LjMyOS03LjQ3NCAxNi4wMDUtMTYuNTA0eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "RSS Read";
        }
    })
    export class RSSRead extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    