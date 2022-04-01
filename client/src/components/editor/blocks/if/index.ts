import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "if";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ibWFwLXNpZ25zIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1tYXAtc2lnbnMgZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUwNy4zMSA4NC42OUw0NjQgNDEuMzdjLTYtNi0xNC4xNC05LjM3LTIyLjYzLTkuMzdIMjg4VjE2YzAtOC44NC03LjE2LTE2LTE2LTE2aC0zMmMtOC44NCAwLTE2IDcuMTYtMTYgMTZ2MTZINTZjLTEzLjI1IDAtMjQgMTAuNzUtMjQgMjR2ODBjMCAxMy4yNSAxMC43NSAyNCAyNCAyNGgzODUuMzdjOC40OSAwIDE2LjYyLTMuMzcgMjIuNjMtOS4zN2w0My4zMS00My4zMWM2LjI1LTYuMjYgNi4yNS0xNi4zOCAwLTIyLjYzek0yMjQgNDk2YzAgOC44NCA3LjE2IDE2IDE2IDE2aDMyYzguODQgMCAxNi03LjE2IDE2LTE2VjM4NGgtNjR2MTEyem0yMzItMjcySDI4OHYtMzJoLTY0djMySDcwLjYzYy04LjQ5IDAtMTYuNjIgMy4zNy0yMi42MyA5LjM3TDQuNjkgMjc2LjY5Yy02LjI1IDYuMjUtNi4yNSAxNi4zOCAwIDIyLjYzTDQ4IDM0Mi42M2M2IDYgMTQuMTQgOS4zNyAyMi42MyA5LjM3SDQ1NmMxMy4yNSAwIDI0LTEwLjc1IDI0LTI0di04MGMwLTEzLjI1LTEwLjc1LTI0LTI0LTI0eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "IF";
        }
    })
    export class IF extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    