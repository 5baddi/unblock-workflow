import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "kitemaker";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjIyNi42NjciIGhlaWdodD0iMjI2LjY2NyIgdmlld0JveD0iLTMwIC0yNSAyMjAgMjIwIj48cGF0aCBmaWxsPSIjNjYyNDgyIiBkPSJNMTA2LjUgMjUuNWMtMzAuMiAxNC01NiAyNS40LTU3LjIgMjUuNC0xLjcuMS02LjEtNS0yMC0yMi45QzExLjUgNS4xIDguNyAyLjQgNS4xIDQuN2MtMS40LjktMS42IDguOS0xLjkgNzkuMy0uMSA1NyAuMSA3OC42LjkgNzkuNiAzLjUgNC4zIDMuMyA0LjYgODUuMi03Ny40QzE0NS4xIDMwLjQgMTY4IDYuOCAxNjggNS4zYzAtMi42LTIuNS01LjMtNC44LTUuMi0uOSAwLTI2LjQgMTEuNS01Ni43IDI1LjR6Ii8+PHBhdGggZmlsbD0iI2U2MWI3MyIgZD0iTTY5LjQgMTI1LjJjLTEzLjMgMTMuNC0yNC40IDI1LjEtMjQuNyAyNi0uMy45LjIgMi42IDEuMSAzLjggMS42IDEuOCA2LjcgMi42IDU5LjkgOC41IDMyIDMuNSA1OC45IDYuMiA1OS43IDUuOSAxLjktLjcgMi45LTMuOCAyLjEtNi4yLS4zLS45LTE1LjktMTUuMi0zNC42LTMxLjctMjQuMS0yMS4yLTM0LjgtMzAuMS0zNi43LTMwLjMtMi4zLS4yLTUuOSAzLTI2LjggMjR6Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Kitemaker";
        }
    })
    export class Kitemaker extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    