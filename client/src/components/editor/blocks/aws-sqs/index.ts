import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsSqs";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNSAwIDg1IDg1IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB4PSIyLjE4OCIgeT0iMi41Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIGZpbGw9IiM4NzY5MjkiIHN0cm9rZT0ibm9uZSI+PHBhdGggZD0iTTAgMjUuOTM4TC4wMjEgNjMuNDQgMzUgODBsMzQuOTgtMTYuNTZ2LTkuMzY4bC0yOS43NDUtMy41MDguMDItMjEuMTI3TDcwIDI1Ljk0OFYxNi41N0wzNSAwIDAgMTYuNTZ2OS4zNzh6Ii8+PHBhdGggZD0iTS4wMjEgNTQuMDYybDM0Ljk4IDkuOTQyVjgwTC4wMjEgNjMuNDR2LTkuMzc4eiIvPjxwYXRoIGQ9Ik00LjQ2NSA2NS41NDlMMCA2My40MzFWMTYuNTZsNC40NzUtMi4xMDktLjAxIDUxLjA5OHoiLz48L2c+PHBhdGggZD0iTTQwLjI1NSA1MC41NjRsLTM1Ljc5IDQuNzYyLjAxLTMwLjY2MSAzNS43OCA0Ljc3MnYyMS4xMjd6TTcwIDI1Ljk0OGwtMzUtOS45NTFWMGwzNSAxNi41N3Y5LjM3OHptLS4wMiAyOC4xMjRMMzUgNjQuMDA0VjgwbDM0Ljk4LTE2LjU2di05LjM2OHoiIHN0cm9rZT0ibm9uZSIgZmlsbD0iI2Q5YTc0MSIvPjxwYXRoIGQ9Ik0yMi4xMDkgNDguNTgxbDEyLjg5MiAxLjUyNlYyOS44MTVMMjIuMTA5IDMxLjM2djE3LjIyMXpNOS4xMjUgNDcuMDY1bDguMzY1Ljk4MlYzMS45MjRsLTguMzY1IDEuMDAxdjE0LjE0eiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjODc2OTI5Ii8+PHBhdGggZD0iTTQuNDc1IDI0LjY2NUwzNSAxNS45OTZsMzUgOS45NTEtMjkuNzQ1IDMuNDg5LTM1Ljc4LTQuNzcyeiIgZmlsbD0iIzYyNGExZSIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTQuNDY1IDU1LjMyNkwzNSA2NC4wMDRsMzQuOTgtOS45MzItMjkuNzI0LTMuNTA4LTM1Ljc5IDQuNzYyeiIgZmlsbD0iI2ZhZDc5MSIgc3Ryb2tlPSJub25lIi8+PHBhdGggZD0iTTY5Ljk4IDQ1LjkxOEwzNSA1MC4xMDdWMjkuODE1bDM0Ljk4IDQuMjE4djExLjg4NXoiIGZpbGw9IiNkOWE3NDEiIHN0cm9rZT0ibm9uZSIvPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS SQS";
        }
    })
    export class AWSSQS extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    