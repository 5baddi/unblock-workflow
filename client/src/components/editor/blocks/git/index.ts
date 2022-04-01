import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "git";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NyIgaGVpZ2h0PSI5NyI+PHBhdGggZmlsbD0iI0YwNTEzMyIgZD0iTTkyLjcxIDQ0LjQwOEw1Mi41OTEgNC4yOTFhNS45MTggNS45MTggMCAwMC04LjM2OSAwbC04LjMzIDguMzMyTDQ2LjQ1OSAyMy4xOWE3LjAyMiA3LjAyMiAwIDAxNy4yMjkgMS42ODUgNy4wMyA3LjAzIDAgMDExLjY3IDcuMjc1bDEwLjE4NiAxMC4xODVhNy4wMjggNy4wMjggMCAwMTcuMjc1IDEuNjcxIDcuMDQzIDcuMDQzIDAgMDEtOS45NjEgOS45NTggNy4wNDMgNy4wNDMgMCAwMS0xLjUzMS03LjY1OGwtOS41LTkuNDk5djI0Ljk5N2E3LjA0MiA3LjA0MiAwIDExLTguMDk2IDExLjI5MSA3LjA0MiA3LjA0MiAwIDAxMi4zMDctMTEuNDk2di0yNS4yM2E3LjA0MSA3LjA0MSAwIDAxLTMuODIzLTkuMjM1TDMxLjc5OCAxNi43MTUgNC4yODggNDQuMjIyYTUuOTIgNS45MiAwIDAwMCA4LjM3MWw0MC4xMjEgNDAuMTE4YTUuOTE4IDUuOTE4IDAgMDA4LjM2OSAwTDkyLjcxIDUyLjc3OWE1LjkyIDUuOTIgMCAwMDAtOC4zNzF6Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Git";
        }
    })
    export class Git extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    