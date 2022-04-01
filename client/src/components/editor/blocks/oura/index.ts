import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "oura";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMTIgMTIgMzUgMzUiPjxwYXRoIGQ9Ik0yNCAxNi41YzAgMS4yIDEuMyAxLjUgNiAxLjVzNi0uMyA2LTEuNS0xLjMtMS41LTYtMS41LTYgLjMtNiAxLjV6bTIgNC44Yy00LjEgMS40LTggNi44LTggMTEuMSAwIDcuNyA3LjkgMTMuOCAxNS4xIDExLjcgOS44LTIuOSAxMi4xLTE1LjQgMy45LTIxLjItMy41LTIuNC02LjktMi45LTExLTEuNnptMTAgNC40YzQuOSA0LjMgNC4zIDEyLjEtMSAxNC44LTQuMiAyLjItNy40IDEuOC0xMC45LTEuMS00LjMtMy42LTQuNC05LjMtLjItMTMuNSAzLjgtMy44IDgtMy45IDEyLjEtLjJ6Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Oura";
        }
    })
    export class Oura extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    