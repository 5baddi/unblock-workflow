import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "set";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0icGVuIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1wZW4gZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI5MC43NCA5My4yNGwxMjguMDIgMTI4LjAyLTI3Ny45OSAyNzcuOTktMTE0LjE0IDEyLjZDMTEuMzUgNTEzLjU0LTEuNTYgNTAwLjYyLjE0IDQ4NS4zNGwxMi43LTExNC4yMiAyNzcuOS0yNzcuODh6bTIwNy4yLTE5LjA2bC02MC4xMS02MC4xMWMtMTguNzUtMTguNzUtNDkuMTYtMTguNzUtNjcuOTEgMGwtNTYuNTUgNTYuNTUgMTI4LjAyIDEyOC4wMiA1Ni41NS01Ni41NWMxOC43NS0xOC43NiAxOC43NS00OS4xNiAwLTY3LjkxeiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Set";
        }
    })
    export class Set extends NodeBlock
    {
    
    }