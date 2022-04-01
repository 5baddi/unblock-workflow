import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "microsoftToDo";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTMuNzEzIDcuODU0TC4zOTQgMTEuMTcyYTEuMTcgMS4xNyAwIDAwMCAxLjY1NUw1LjM2NyAxNy44bDQuOTc0LTQuOTc0LTQuOTc0LTQuOTcyYTEuMTY5IDEuMTY5IDAgMDAtMS42NTQgMHoiIGZpbGw9IiMxODVhYmQiLz48cGF0aCBkPSJNMjMuNjA2IDYuMmwtMy4zMTgtMy4zMmExLjE3IDEuMTcgMCAwMC0xLjY1NSAwbC00LjE0NiA0LjE0Nkw5LjUxMyAxMmwtNC4xNDYgNC4xNDZhMS4xNyAxLjE3IDAgMDAwIDEuNjU1bDMuMzE5IDMuMzE4YTEuMTcgMS4xNyAwIDAwMS42NTUgMGw0LjE0Ni00LjE0NkwxOS40NiAxMmw0LjE0Ni00LjE0NmExLjE3IDEuMTcgMCAwMDAtMS42NTR6IiBmaWxsPSIjNDFhNWVlIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Microsoft To Do";
        }
    })
    export class MicrosoftToDo extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    