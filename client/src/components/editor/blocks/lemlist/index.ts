import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "lemlist";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ni42NjciIGhlaWdodD0iMjY2LjY2NyIgdmlld0JveD0iMCAwIDIwMCAyMDAiPjxwYXRoIGQ9Ik0zMS41IDEuNEMxOC44IDUuNCA5LjcgMTMuMyA0LjEgMjVMLjUgMzIuNVY3NGMwIDQwLjMuMSA0MS44IDIuMyA1MCAyLjcgMTAgOS4zIDI0LjIgMTUuMiAzMy4xIDIuNCAzLjUgOC4yIDEwLjIgMTMgMTQuOSAxMy41IDEzLjMgMjkuNiAyMS41IDUyIDI2LjQgNi40IDEuNSAxMy4xIDEuNiA0Ni41IDEuNGwzOS0uMyA3LTMuNGM4LjgtNC4zIDE2LjMtMTEuOSAyMC43LTIwLjhsMy4zLTYuOC4zLTY1LjVjLjMtNjkuNy4zLTY5LjYtNC42LTc5LjVDMTkwIDEzIDE4MyA2LjggMTcxLjYgMi41TDE2NSAwbC02NC44LjFDNTAuOC4xIDM0LjYuNCAzMS41IDEuNHptNDAuMiA1OWwyLjggMi40LjUgMjQuOWMuOCAzNy43LS4zIDM2LjYgMzcuMSAzNy4xIDIyLjkuMyAyNC44LjQgMjYuOCAyLjMgMi43IDIuNSAzLjUgNiAyLjQgOS42LTEuNyA1LjEtMy40IDUuNC0zMi4zIDUuMWwtMjYuNS0uMy01LjMtM2MtNy4zLTQtMTQuNy0xMi4zLTE2LjktMTguOC0xLjMtNC4xLTEuNy0xMC4xLTIuMS0yOC41LS40LTI1LjIgMC0yNy42IDQuNi0zMS4yIDMuMy0yLjYgNS41LTIuNSA4LjkuNHptNjUuNC0uOWM1LjcgMyA2LjIgMTEuMi45IDE0LTIuMyAxLjItNy4xIDEuNS0yMS44IDEuNS0xNy42IDAtMTkuMS0uMS0yMS42LTIuMS00LjgtMy44LTIuOS0xMS45IDMuNC0xNC4yLjgtLjMgOS4zLS42IDE4LjgtLjYgMTMuOC0uMSAxNy45LjIgMjAuMyAxLjR6TTEzMSA5NGMxLjMgMS4zIDIgMy4zIDIgNnMtLjcgNC43LTIgNmMtMS44IDEuOC0zLjMgMi0xOC4yIDItMTUuMiAwLTE2LjMtLjEtMTguNS0yLjItMy0yLjgtMy4xLTguMy0uMS0xMS41IDIuMS0yLjIgMi43LTIuMyAxOC41LTIuMyAxNSAwIDE2LjUuMiAxOC4zIDJ6IiBmaWxsPSIjNGQxOWZmIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Lemlist";
        }
    })
    export class Lemlist extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    