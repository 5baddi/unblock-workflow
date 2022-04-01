import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "reddit";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEzIDUxNCIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHVzZSB4bGluazpocmVmPSIjYSIgeD0iLjUiIHk9Ii41Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMCA3Ni44QzAgMzQuMjUzIDM0LjI1MyAwIDc2LjggMGgzNTguNEM0NzcuNzQ3IDAgNTEyIDM0LjI1MyA1MTIgNzYuOHYzNTguNGMwIDQyLjU0Ny0zNC4yNTMgNzYuOC03Ni44IDc2LjhINzYuOEMzNC4yNTMgNTEyIDAgNDc3Ljc0NyAwIDQzNS4yeiIgZmlsbD0iI2ZmNDUwMCIvPjxwYXRoIGQ9Ik03OSAzMDVjMC02OC4xNDIgNzguOTQyLTEyMyAxNzctMTIzczE3NyA1NC44NTggMTc3IDEyMy03OC45NDIgMTIzLTE3NyAxMjNTNzkgMzczLjE0MiA3OSAzMDV6Ii8+PGcgZmlsbD0iI2ZmNDUwMCI+PHBhdGggZD0iTTE5OSAzNDdjMzUgMjkgNzkgMjkgMTE0IDBsMTIgMTFjLTQyIDM1LTk2IDM1LTEzOCAweiIvPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48dXNlIHhsaW5rOmhyZWY9IiNiIiB4PSItMTE4Ii8+PC9nPjwvZz48ZyBzdHJva2U9IiNmZmYiIGZpbGw9Im5vbmUiPjx1c2UgeGxpbms6aHJlZj0iI2IiIHg9Ijc1IiB5PSItMTYwIiBzdHJva2Utd2lkdGg9IjI1Ii8+PHBhdGggZD0iTTg3IDI4MmMtNDUtMjItNS05MiA0MC01MG0yOTggNTBjNDUtMjIgNS05Mi00MC01MG0tMTI3LTQ1bDI0LTgzIDgwIDE2IiBzdHJva2Utd2lkdGg9IjIyIi8+PC9nPjwvc3ltYm9sPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjg3IDI4NWEyNy45NCAyNy45NCAwIDExNTYgMCAyNy45NCAyNy45NCAwIDExLTU2IDB6Ii8+PC9kZWZzPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Reddit";
        }
    })
    export class Reddit extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    