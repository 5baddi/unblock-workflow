import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "rename-keys";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZWRpdCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtZWRpdCBmYS13LTE4Ij48cGF0aCBkYXRhLXYtNzhjMjdhOWE9IiIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDAyLjYgODMuMmw5MC4yIDkwLjJjMy44IDMuOCAzLjggMTAgMCAxMy44TDI3NC40IDQwNS42bC05Mi44IDEwLjNjLTEyLjQgMS40LTIyLjktOS4xLTIxLjUtMjEuNWwxMC4zLTkyLjhMMzg4LjggODMuMmMzLjgtMy44IDEwLTMuOCAxMy44IDB6bTE2Mi0yMi45bC00OC44LTQ4LjhjLTE1LjItMTUuMi0zOS45LTE1LjItNTUuMiAwbC0zNS40IDM1LjRjLTMuOCAzLjgtMy44IDEwIDAgMTMuOGw5MC4yIDkwLjJjMy44IDMuOCAxMCAzLjggMTMuOCAwbDM1LjQtMzUuNGMxNS4yLTE1LjMgMTUuMi00MCAwLTU1LjJ6TTM4NCAzNDYuMlY0NDhINjRWMTI4aDIyOS44YzMuMiAwIDYuMi0xLjMgOC41LTMuNWw0MC00MGM3LjYtNy42IDIuMi0yMC41LTguNS0yMC41SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGgzNTJjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWMzA2LjJjMC0xMC43LTEyLjktMTYtMjAuNS04LjVsLTQwIDQwYy0yLjIgMi4zLTMuNSA1LjMtMy41IDguNXoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Rename Keys";
        }
    })
    export class RenameKeys extends NodeBlock
    {
    
    }