import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "slack";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTUwLjg1MiAxNTAuODUyIiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48dXNlIHhsaW5rOmhyZWY9IiNhIiB4PSIuOTI2IiB5PSIuOTI2Ii8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIHN0cm9rZS13aWR0aD0iMS44NTIiPjxwYXRoIGQ9Ik00MC43NDEgOTMuNTVjMC04LjczNSA2LjYwNy0xNS43NzIgMTQuODE1LTE1Ljc3MnMxNC44MTUgNy4wMzcgMTQuODE1IDE1Ljc3MnYzOC44MjRjMCA4LjczNy02LjYwNyAxNS43NzQtMTQuODE1IDE1Ljc3NHMtMTQuODE1LTcuMDM3LTE0LjgxNS0xNS43NzJ6IiBmaWxsPSIjZTAxZTVhIiBzdHJva2U9IiNlMDFlNWEiLz48cGF0aCBkPSJNOTMuNTUgMTA3LjQwOGMtOC43MzUgMC0xNS43NzItNi42MDctMTUuNzcyLTE0LjgxNXM3LjAzNy0xNC44MTUgMTUuNzcyLTE0LjgxNWgzOC44MjZjOC43MzUgMCAxNS43NzIgNi42MDcgMTUuNzcyIDE0LjgxNXMtNy4wMzcgMTQuODE1LTE1Ljc3MiAxNC44MTV6IiBmaWxsPSIjZWNiMjJkIiBzdHJva2U9IiNlY2IyMmQiLz48cGF0aCBkPSJNNzcuNzc4IDE1Ljc3MkM3Ny43NzggNy4wMzcgODQuMzg1IDAgOTIuNTkzIDBzMTQuODE1IDcuMDM3IDE0LjgxNSAxNS43NzJ2MzguODI2YzAgOC43MzUtNi42MDcgMTUuNzcyLTE0LjgxNSAxNS43NzJzLTE0LjgxNS03LjAzNy0xNC44MTUtMTUuNzcyeiIgZmlsbD0iIzJmYjY3YyIgc3Ryb2tlPSIjMmZiNjdjIi8+PHBhdGggZD0iTTE1Ljc3MiA3MC4zNzFDNy4wMzcgNzAuMzcxIDAgNjMuNzYzIDAgNTUuNTU2czcuMDM3LTE0LjgxNSAxNS43NzItMTQuODE1aDM4LjgyNmM4LjczNSAwIDE1Ljc3MiA2LjYwNyAxNS43NzIgMTQuODE1cy03LjAzNyAxNC44MTUtMTUuNzcyIDE0LjgxNXoiIGZpbGw9IiMzNmM1ZjEiIHN0cm9rZT0iIzM2YzVmMSIvPjxnIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiPjxwYXRoIGQ9Ik03Ny43NzggMTMzLjMzM2MwIDguMjA4IDYuNjA3IDE0LjgxNSAxNC44MTUgMTQuODE1czE0LjgxNS02LjYwNyAxNC44MTUtMTQuODE1LTYuNjA3LTE0LjgxNS0xNC44MTUtMTQuODE1SDc3Ljc3OHoiIGZpbGw9IiNlY2IyMmQiIHN0cm9rZT0iI2VjYjIyZCIvPjxwYXRoIGQ9Ik0xMzMuMzM0IDcwLjM3MWgtMTQuODE1VjU1LjU1NmMwLTguMjA3IDYuNjA3LTE0LjgxNSAxNC44MTUtMTQuODE1czE0LjgxNSA2LjYwNyAxNC44MTUgMTQuODE1LTYuNjA3IDE0LjgxNS0xNC44MTUgMTQuODE1eiIgZmlsbD0iIzJmYjY3YyIgc3Ryb2tlPSIjMmZiNjdjIi8+PHBhdGggZD0iTTE0LjgxNSA3Ny43NzhIMjkuNjN2MTQuODE1YzAgOC4yMDctNi42MDcgMTQuODE1LTE0LjgxNSAxNC44MTVTMCAxMDAuOCAwIDkyLjU5M3M2LjYwNy0xNC44MTUgMTQuODE1LTE0LjgxNXoiIGZpbGw9IiNlMDFlNWEiIHN0cm9rZT0iI2UwMWU1YSIvPjxwYXRoIGQ9Ik03MC4zNzEgMTQuODE1VjI5LjYzSDU1LjU1NmMtOC4yMDcgMC0xNC44MTUtNi42MDctMTQuODE1LTE0LjgxNVM0Ny4zNDggMCA1NS41NTYgMHMxNC44MTUgNi42MDcgMTQuODE1IDE0LjgxNXoiIGZpbGw9IiMzNmM1ZjEiIHN0cm9rZT0iIzM2YzVmMSIvPjwvZz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Slack";
        }
    })
    export class Slack extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    