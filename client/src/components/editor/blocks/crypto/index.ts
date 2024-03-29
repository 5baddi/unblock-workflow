import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "crypto";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ia2V5IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1rZXkgZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUxMiAxNzYuMDAxQzUxMiAyNzMuMjAzIDQzMy4yMDIgMzUyIDMzNiAzNTJjLTExLjIyIDAtMjIuMTktMS4wNjItMzIuODI3LTMuMDY5bC0yNC4wMTIgMjcuMDE0QTIzLjk5OSAyMy45OTkgMCAwIDEgMjYxLjIyMyAzODRIMjI0djQwYzAgMTMuMjU1LTEwLjc0NSAyNC0yNCAyNGgtNDB2NDBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDI0Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjR2LTc4LjA1OWMwLTYuMzY1IDIuNTI5LTEyLjQ3IDcuMDI5LTE2Ljk3MWwxNjEuODAyLTE2MS44MDJDMTYzLjEwOCAyMTMuODE0IDE2MCAxOTUuMjcxIDE2MCAxNzYgMTYwIDc4Ljc5OCAyMzguNzk3LjAwMSAzMzUuOTk5IDAgNDMzLjQ4OC0uMDAxIDUxMiA3OC41MTEgNTEyIDE3Ni4wMDF6TTMzNiAxMjhjMCAyNi41MSAyMS40OSA0OCA0OCA0OHM0OC0yMS40OSA0OC00OC0yMS40OS00OC00OC00OC00OCAyMS40OS00OCA0OHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Crypto";
        }
    })
    export class Crypto extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    