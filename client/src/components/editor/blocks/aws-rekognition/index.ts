import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsRekognition";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzQuMzc1IDg1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB4PSIyLjE4OCIgeT0iMi41Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTIuODg2IDUyLjhMMTYuOCA1MS4yNjhWMjguNzMyTDIuODg2IDI3LjJ2MjUuNnoiIGZpbGw9IiM1Mjk0Y2YiLz48ZyBmaWxsPSIjMTk0ODZmIj48cGF0aCBkPSJNNjcuMjA3IDI4Ljg5OGwtNi40NjIgMi40My0zNi4yMzctNS4zNDZMMzQuOTkgMGwzMi4yMTcgMjguODk4eiIvPjxwYXRoIGQ9Ik0zLjUwNCAyOC45NjZMMzUgMTIuMjM0IDQ1LjU0MyAyNiAxNi44MSAzMC4yMjRsLTEzLjMwNS0xLjI2eiIvPjwvZz48ZyBmaWxsPSIjMjA1Yjk5Ij48cGF0aCBkPSJNMzUgMjRMMCAzMC42MjRWMTYuNTU2TDM1IDBsMTcuMDE2IDE4LjQ3OEwzNSAyNHoiLz48cGF0aCBkPSJNNy4wMDggMTYuNDc4TDAgMTkuMzk1djQ0LjA1bDcuMDA4IDMuMzA3VjE2LjQ3OHoiLz48L2c+PHBhdGggZD0iTTcwIDE2LjU2NkwzNSAwdjI0bDM1IDYuNjI0di0xNC4wNnoiIGZpbGw9IiM1Mjk0Y2YiLz48ZyBmaWxsPSIjOTliY2UzIj48cGF0aCBkPSJNMS4xNTQgNTEuMjZMMzQuOTkgODBsMTAuNTU0LTI2LTI4LjczNC00LjIyNEwxLjE1NCA1MS4yNnoiLz48cGF0aCBkPSJNNjcuNjQgNTEuMTQybC02LjQ5My0yLjUyNy0zNi42NCA1LjQwNSAxMC40OCAyNS4yMiAzMi42NS0yOC4wOTd6Ii8+PC9nPjxwYXRoIGQ9Ik02Ny4yMDcgNTEuMTAzbC0xMy45NjUtMS4zMjd2LTE5LjU1TDY3LjIwNyAyOC45djIyLjIwNXpNMzUgNTZsMTUuMTMtMTZMMzUgMjQgMTYuMzU2IDQwIDM1IDU2eiIgZmlsbD0iIzIwNWI5OSIvPjxwYXRoIGQ9Ik01My42MjQgNDBMMzUgNTZWMjRsMTguNjM0IDE2eiIgZmlsbD0iIzUyOTRjZiIvPjxwYXRoIGQ9Ik0wIDQ5LjM3NkwzNSA1NmwxOS4yMSA3Ljg3M0wzNSA4MCAwIDYzLjQ0NFY0OS4zNzZ6IiBmaWxsPSIjMjA1Yjk5Ii8+PGcgZmlsbD0iIzUyOTRjZiI+PHBhdGggZD0iTTcwIDYzLjQzNUwzNSA4MFY1NmwzNS02LjYyNHYxNC4wNnoiLz48cGF0aCBkPSJNNjIuOTcgNjYuNzVMNzAgNjMuNDM0VjE2LjU2NmwtNy4wMy0zLjMyN1Y2Ni43NXoiLz48L2c+PC9nPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS Rekognition";
        }
    })
    export class AWSRekognition extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    