import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "google-docs";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMTggMCA5MCA4MCIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHVzZSB4bGluazpocmVmPSIjQSIgeD0iLjUiIHk9Ii41Ii8+PHN5bWJvbCBpZD0iQSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIHN0cm9rZT0ibm9uZSI+PHBhdGggZmlsbD0iIzU0OGRmNiIgZD0iTTM2IDBsMjIgMjJ2NTNhNC45OSA0Ljk5IDAgMCAxLTUgNUg1YTQuOTkgNC45OSAwIDAgMS01LTVWNWE0Ljk5IDQuOTkgMCAwIDEgNS01eiIvPjxwYXRoIGQ9Ik0xNCA0MGgzMHYzSDE0em0wIDdoMzB2M0gxNHptMCA4aDMwdjNIMTR6bTAgN2gyMXYzSDE0eiIvPjxwYXRoIGZpbGw9IiNhYmQwZmIiIGQ9Ik0zNiAwbDIyIDIySDQxYy0yLjc3IDAtNS0yLjQ4LTUtNS4yNXoiLz48cGF0aCBmaWxsPSIjM2U1YmI5IiBkPSJNNDAuNzUgMjJMNTggMjkuMTI1VjIyeiIvPjwvZz48L3N5bWJvbD48L3N2Zz4K",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Docs";
        }
    })
    export class GoogleDocs extends NodeBlock
    {
    
    }