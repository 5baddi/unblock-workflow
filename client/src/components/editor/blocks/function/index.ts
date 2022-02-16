import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "function";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY29kZSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY29kZSBmYS13LTIwIj48cGF0aCBkYXRhLXYtNzhjMjdhOWE9IiIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjc4LjkgNTExLjVsLTYxLTE3LjdjLTYuNC0xLjgtMTAtOC41LTguMi0xNC45TDM0Ni4yIDguN2MxLjgtNi40IDguNS0xMCAxNC45LTguMmw2MSAxNy43YzYuNCAxLjggMTAgOC41IDguMiAxNC45TDI5My44IDUwMy4zYy0xLjkgNi40LTguNSAxMC4xLTE0LjkgOC4yem0tMTE0LTExMi4ybDQzLjUtNDYuNGM0LjYtNC45IDQuMy0xMi43LS44LTE3LjJMMTE3IDI1Nmw5MC42LTc5LjdjNS4xLTQuNSA1LjUtMTIuMy44LTE3LjJsLTQzLjUtNDYuNGMtNC41LTQuOC0xMi4xLTUuMS0xNy0uNUwzLjggMjQ3LjJjLTUuMSA0LjctNS4xIDEyLjggMCAxNy41bDE0NC4xIDEzNS4xYzQuOSA0LjYgMTIuNSA0LjQgMTctLjV6bTMyNy4yLjZsMTQ0LjEtMTM1LjFjNS4xLTQuNyA1LjEtMTIuOCAwLTE3LjVMNDkyLjEgMTEyLjFjLTQuOC00LjUtMTIuNC00LjMtMTcgLjVMNDMxLjYgMTU5Yy00LjYgNC45LTQuMyAxMi43LjggMTcuMkw1MjMgMjU2bC05MC42IDc5LjdjLTUuMSA0LjUtNS41IDEyLjMtLjggMTcuMmw0My41IDQ2LjRjNC41IDQuOSAxMi4xIDUuMSAxNyAuNnoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Function";
        }
    })
    export class Function extends NodeBlock
    {
    
    }