import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsSes";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzQuMzc1IDg1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB4PSIyLjE4OCIgeT0iMi41Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTE2LjU1OCAxMi43NUwwIDM4LjU5MWwxNi41NTggMjUuODQxIDEzLjIyNy0zLjMyNC42NTQtNDQuODY5LTEzLjg4MS0zLjQ4OXoiIGZpbGw9IiM4NzY5MjkiLz48cGF0aCBkPSJNMzUuMDQ5IDU5Ljc4NmwtMTguNDkxIDQuNjQ1VjEyLjc1bDE4LjQ5MSA0LjY0NXY0Mi4zOTF6IiBmaWxsPSIjZDlhNzQxIi8+PGcgZmlsbD0iIzg3NjkyOSI+PHBhdGggZD0iTTMyLjg0OSAyMS42MTRMMzUuMDUgODAgNzAgNjIuODY3bC0uMDEtNDMuNjE1LTguOTE0IDEuNDQ4LTI4LjIyOC45MTN6Ii8+PHBhdGggZD0iTTQ2LjE4NCAzMy4xNDlsMTAuOTA2LS42MzIgMTAuNzc4LTE5LjE2NEw0MC42MTIgMCAzMC40MzkgNC4zNjRsMTUuNzQ1IDI4Ljc4NXoiLz48L2c+PHBhdGggZD0iTTQwLjYxMiAwbDI3LjI1NiAxMy4zNTNMNTcuMDkgMzIuNTE3IDQwLjYxMiAweiIgZmlsbD0iI2Q5YTc0MSIvPjxwYXRoIGQ9Ik0zNS4wNDkgNS41MzlMNTcuMDkgNDQuNzQybDMuNzg4IDIyLjU5NUwzNS4wNDkgODBsLTEwLjQ2LTUuMTMxVjkuNjRsMTAuNDYtNC4xMDF6IiBmaWxsPSIjODc2OTI5Ii8+PHBhdGggZD0iTTY5Ljk5MSAxOS4yNTFMNzAgNjIuODY3IDM1LjA1IDgwVjUuNTM5bDIyLjA0MSAzOS4yMDNMNjkuOTkgMTkuMjUxeiIgZmlsbD0iI2Q5YTc0MSIvPjwvZz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS SES";
        }
    })
    export class AWSSES extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    