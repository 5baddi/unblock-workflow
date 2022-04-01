import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "noOperationDoNothing";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iYXJyb3ctcmlnaHQiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWFycm93LXJpZ2h0IGZhLXctMTQiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xOTAuNSA2Ni45bDIyLjItMjIuMmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMEw0NDEgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0Ni42IDQ2Ny4zYy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuMi0yMi4yYy05LjUtOS41LTkuMy0yNSAuNC0zNC4zTDMxMS40IDI5NkgyNGMtMTMuMyAwLTI0LTEwLjctMjQtMjR2LTMyYzAtMTMuMyAxMC43LTI0IDI0LTI0aDI4Ny40TDE5MC45IDEwMS4yYy05LjgtOS4zLTEwLTI0LjgtLjQtMzQuM3oiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "No Operation, do nothing";
        }
    })
    export class NoOperationDonothing extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    