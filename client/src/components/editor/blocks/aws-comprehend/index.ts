import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsComprehend";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA3NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNjE3LjQ2IiB5MT0iLTY3NC41MyIgeDI9IjcyMy41MyIgeTI9Ii01NjguNDYiIGdyYWRpZW50VHJhbnNmb3JtPSJyb3RhdGUoLTkwIDY4My41IDI0LjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDU1ZjRlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTZjMGE3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZGF0YS1uYW1lPSJUdXJxdW9pc2UgR3JhZGllbnQiIGQ9Ik0wIDBoNzV2NzVIMHoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNDQuNSAzNC4ydi05LjdhMSAxIDAgMDAtLjI5LS43MWwtMTEtMTFhMSAxIDAgMDAtLjcxLS4yOWgtMTlhMSAxIDAgMDAtMSAxdjQzYTEgMSAwIDAwMSAxaDMwYTEgMSAwIDAwMS0xdi00LjQ0YTExLjggMTEuOCAwIDAxLTItMi4zdjUuNzRoLTI4di00MWgxN3YxMGExIDEgMCAwMDEgMWgxMHYxMWExMS41NiAxMS41NiAwIDAxMi0yLjN6bS0xMS0xMC43di03LjU5bDcuNTkgNy41OXptLTEwIDhoLTZ2LTJoNnptMTYgMGgtMTR2LTJoMTR6bTAgNmgtMjJ2LTJoMjJ6bTE1LjQ0IDI1aC00Ljg4YTEgMSAwIDAxLS45My0uNjJsLTEuMjEtM2ExIDEgMCAwMS4wOS0uOTQgMSAxIDAgMDEuODMtLjQ0aDcuMzJhMSAxIDAgMDEuODMuNDQgMSAxIDAgMDEuMDkuOTRsLTEuMjEgM2ExIDEgMCAwMS0uOTMuNjJ6bS00LjIxLTJoMy41NGwuNC0xaC00LjM0em0xMS42NC0xOWExMCAxMCAwIDAwLTE5Ljg3IDEuNjIgMTAgMTAgMCAwMDQuMjggOC4yIDMuODggMy44OCAwIDAxLjcyLjU5djMuNTlhMSAxIDAgMDAxIDFoOGExIDEgMCAwMDEtMXYtMy42YTQuMzMgNC4zMyAwIDAxLjcxLS41NyA5LjkyIDkuOTIgMCAwMDQuMjktOC4yIDEwLjE5IDEwLjE5IDAgMDAtLjEzLTEuNjV6bS01LjMyIDguMmMtLjU4LjQtMS41NSAxLjA3LTEuNTUgMi4xdjIuN2gtMnYtN2gydi0yaC02djJoMnY3aC0ydi0yLjY4YzAtMS0xLTEuNzMtMS41OC0yLjE0QTggOCAwIDExNTggMzcuMzJhNy44OSA3Ljg5IDAgMDEyLjM5IDQuNDcgOCA4IDAgMDEtMy4zNCA3Ljkxek0yOC41IDI1LjVoLTExdi0yaDExem0xIDE4aC0xMnYtMmgxMnptMTAgMGgtOHYtMmg4em0tOSA2aC0xM3YtMmgxM3oiIGRhdGEtbmFtZT0iSWNvbiBUZXN0IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS Comprehend";
        }
    })
    export class AWSComprehend extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    