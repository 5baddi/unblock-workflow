import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "interval";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iaG91cmdsYXNzIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1ob3VyZ2xhc3MgZmEtdy0xMiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTM2MCA2NGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRWMjRjMC0xMy4yNTUtMTAuNzQ1LTI0LTI0LTI0SDI0QzEwLjc0NSAwIDAgMTAuNzQ1IDAgMjR2MTZjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0IDAgOTAuOTY1IDUxLjAxNiAxNjcuNzM0IDEyMC44NDIgMTkyQzc1LjAxNiAyODAuMjY2IDI0IDM1Ny4wMzUgMjQgNDQ4Yy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2MTZjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDMzNmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR2LTE2YzAtMTMuMjU1LTEwLjc0NS0yNC0yNC0yNCAwLTkwLjk2NS01MS4wMTYtMTY3LjczNC0xMjAuODQyLTE5MkMzMDguOTg0IDIzMS43MzQgMzYwIDE1NC45NjUgMzYwIDY0eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Interval";
        }
    })
    export class Interval extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    