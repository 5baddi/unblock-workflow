import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "convertkit";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTcyIiBoZWlnaHQ9IjE2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODIuNzIgMTI2LjMxNmMyOS43NyAwIDUyLjc4LTIyLjYyMiA1Mi43OC01MC41MjYgMC0yNi4xNDMtMjEuNjE3LTQyLjEwNi0zNS45MzUtNDIuMTA2LTE5Ljk0NSAwLTM1LjkzIDE0LjA4NC0zOC4xOTggMzQuOTg4LS40MTggMy44NTYtMy40NzYgNy4wOS03LjM1NSA3LjA2MS02LjQyMy0uMDQ2LTE1Ljc0Ni0uMS0yMS42NTgtLjA4LTIuNTU1LjAwOC00LjY2OS0yLjA2NS00LjU0My00LjYxOC44OS0xOC4xMjMgNi45MTQtMzUuMDcgMTguNDAyLTQ4LjA4N0M1OC45NzYgOC40ODggNzcuNTYxIDAgOTkuNTY1IDBjMzYuOTY5IDAgNzEuODY5IDMzLjc4NiA3MS44NjkgNzUuNzkgMCA0Ni41MDgtMzguMzEyIDg0LjIxLTg3LjkyNyA4NC4yMS0zNS4zODQgMC03MS4wMjEtMjMuMjU4LTgzLjQ2NC01NS43NzVhLjcwMi43MDIgMCAwMS0uMDMtLjM3N2MuMTY1LS45NjIuNDk0LTEuODQxLjgxOC0yLjcwNy40NzEtMS4yNTguOTMxLTIuNDg4Ljg2NC0zLjkwNmwtLjIxNS00LjUyOWE1LjUyMyA1LjUyMyAwIDAxMy4xOC01LjI2M2wxLjc5OC0uODQyYTYuOTgyIDYuOTgyIDAgMDAzLjkxMi01LjA3NSA2Ljk5MyA2Ljk5MyAwIDAxNi44ODctNS43MzZjNS4yODIgMCA5Ljg3NSAzLjUxNSAxMS41OSA4LjUxMiA4LjMwNyAyNC4yMTIgMjEuNTExIDQyLjAxNCA1My44NzMgNDIuMDE0eiIgZmlsbD0iI0ZCNjk3MCIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "ConvertKit";
        }
    })
    export class ConvertKit extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    