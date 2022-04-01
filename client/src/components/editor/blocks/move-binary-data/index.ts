import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "moveBinaryData";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZXhjaGFuZ2UtYWx0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1leGNoYW5nZS1hbHQgZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTAgMTY4di0xNmMwLTEzLjI1NSAxMC43NDUtMjQgMjQtMjRoMzYwVjgwYzAtMjEuMzY3IDI1Ljg5OS0zMi4wNDIgNDAuOTcxLTE2Ljk3MWw4MCA4MGM5LjM3MiA5LjM3MyA5LjM3MiAyNC41NjkgMCAzMy45NDFsLTgwIDgwQzQwOS45NTYgMjcxLjk4MiAzODQgMjYxLjQ1NiAzODQgMjQwdi00OEgyNGMtMTMuMjU1IDAtMjQtMTAuNzQ1LTI0LTI0em00ODggMTUySDEyOHYtNDhjMC0yMS4zMTQtMjUuODYyLTMyLjA4LTQwLjk3MS0xNi45NzFsLTgwIDgwYy05LjM3MiA5LjM3My05LjM3MiAyNC41NjkgMCAzMy45NDFsODAgODBDMTAyLjA1NyA0NjMuOTk3IDEyOCA0NTMuNDM3IDEyOCA0MzJ2LTQ4aDM2MGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTE2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Move Binary Data";
        }
    })
    export class MoveBinaryData extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    