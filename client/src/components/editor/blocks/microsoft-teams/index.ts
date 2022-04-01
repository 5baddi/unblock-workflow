import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "microsoftTeams";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzgxLjQgMjM1NC41Ij48cGF0aCBkPSJNMjAxNS42IDg5OS4yYzE5LjUgMTkuNSA0Mi41IDM1IDY3LjkgNDUuOCA1MyAyMi4yIDExMi43IDIyLjIgMTY1LjggMCA1MS4yLTIxLjggOTItNjIuNSAxMTMuNy0xMTMuNyAyMi4yLTUzIDIyLjItMTEyLjcgMC0xNjUuOC0yMS44LTUxLjItNjIuNS05Mi0xMTMuNy0xMTMuNy01My0yMi4yLTExMi43LTIyLjItMTY1LjggMC01MS4yIDIxLjgtOTIgNjIuNS0xMTMuNyAxMTMuNy0yMi4yIDUzLTIyLjIgMTEyLjcgMCAxNjUuOCAxMC44IDI1LjMgMjYuNCA0OC40IDQ1LjggNjcuOXptLTYyLjQgMTk3Ljh2NjQyLjFoMTA3YzM2LjgtLjIgNzMuNC0zLjYgMTA5LjUtMTAuNCAzNi4zLTYuNCA3MS4zLTE4LjYgMTAzLjctMzYuMiAzMC42LTE2LjYgNTctNDAgNzcuMy02OC4yIDIxLjMtMzEuMyAzMi02OC42IDMwLjUtMTA2LjVWMTA5N2gtNDI4em0tMzQ2LjgtMjY5LjJjMjguNC4yIDU2LjYtNS41IDgyLjgtMTYuNyA1MS4yLTIxLjggOTEuOS02Mi41IDExMy42LTExMy43IDIyLjItNTMgMjIuMi0xMTIuNy0uMS0xNjUuOC0yMS44LTUxLjItNjIuNS05Mi0xMTMuNy0xMTMuNy0yNi4yLTExLjItNTQuNC0xNi45LTgyLjktMTYuNy0yOC4zLS4yLTU2LjMgNS41LTgyLjMgMTYuNy0xOS40IDguMy0yNS41IDE5LjEtNTIuMiAzMi4xdjMyOWMyNi44IDEzLjEgMzIuOCAyMy44IDUyLjIgMzIuMSAyNi4xIDExLjMgNTQuMiAxNi45IDgyLjYgMTYuN3ptLTEzNC44IDEwODEuMWMyNi44IDUuOCAzNi40IDEwLjMgNTUuNCAxMi45IDIwLjggMyA0MS44IDQuNSA2Mi44IDQuNiAzMi40LS4yIDY0LjgtMy42IDk2LjUtMTAuNCAzMi4zLTYuNSA2My4zLTE4LjYgOTEuNS0zNS43IDI3LjctMTcgNTEtNDAuMiA2OC4yLTY3LjcgMTktMzIuMSAyOC4zLTY5LjEgMjYuOS0xMDYuNHYtNzQzaC00MDEuM3Y5NDUuN3pNMCAyMTEzLjdsMTM5MS4zIDI0MC44VjBMMCAyNDAuOHYxODcyLjl6IiBmaWxsPSIjNTU1OGFmIi8+PHBhdGggZD0iTTEwMTYuNyA3MjIuNGwtNjQyLjEgMzkuMXYxNDguMWwyNDAuOC05Ljd2Njg2LjdsMTYwLjUgOS40Vjg5My42bDI0MC44LTEwLjdWNzIyLjR6IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Microsoft Teams";
        }
    })
    export class MicrosoftTeams extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    