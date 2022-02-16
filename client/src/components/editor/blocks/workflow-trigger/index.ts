import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "workflow-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ibmV0d29yay13aXJlZCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbmV0d29yay13aXJlZCBmYS13LTIwIj48cGF0aCBkYXRhLXYtNzhjMjdhOWE9IiIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNjQwIDI2NHYtMTZjMC04Ljg0LTcuMTYtMTYtMTYtMTZIMzQ0di00MGg3MmMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjMyYzAtMTcuNjctMTQuMzMtMzItMzItMzJIMjI0Yy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjEyOGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDcydjQwSDE2Yy04Ljg0IDAtMTYgNy4xNi0xNiAxNnYxNmMwIDguODQgNy4xNiAxNiAxNiAxNmgxMDR2NDBINjRjLTE3LjY3IDAtMzIgMTQuMzMtMzIgMzJ2MTI4YzAgMTcuNjcgMTQuMzMgMzIgMzIgMzJoMTYwYzE3LjY3IDAgMzItMTQuMzMgMzItMzJWMzUyYzAtMTcuNjctMTQuMzMtMzItMzItMzJoLTU2di00MGgzMDR2NDBoLTU2Yy0xNy42NyAwLTMyIDE0LjMzLTMyIDMydjEyOGMwIDE3LjY3IDE0LjMzIDMyIDMyIDMyaDE2MGMxNy42NyAwIDMyLTE0LjMzIDMyLTMyVjM1MmMwLTE3LjY3LTE0LjMzLTMyLTMyLTMyaC01NnYtNDBoMTA0YzguODQgMCAxNi03LjE2IDE2LTE2ek0yNTYgMTI4VjY0aDEyOHY2NEgyNTZ6bS02NCAzMjBIOTZ2LTY0aDk2djY0em0zNTIgMGgtOTZ2LTY0aDk2djY0eiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Workflow Trigger";
        }
    })
    export class WorkflowTrigger extends NodeBlock
    {
    
    }