import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsSns";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQ5MCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTk4Ljg3NSAyMzIuMDMzbC0yNi40MzMtNy40MDgtMjUuMDAxLTI4LjUwOCAzMS4yNzItLjg2MyAyMC4xNjIgMzYuNzc5bS02MS4xMjUtMTguOGwtMTQuODc1LTQuMTY2LTE0LjA1OC0xNi4wMzQgMTcuMDgyLTIuODA5IDExLjg1MSAyMy4wMDkiIGZpbGw9IiM5OTVCODAiLz48cGF0aCBkPSJNMCAxOTEuMDE3bDE1LjIwNCAzLjA5MSAyLjIwNy0zLjg4MlY1OC41MDNsLTIuMjA3LTIuNTYxTDAgNjQuNnYxMjYuNDE3IiBmaWxsPSIjN0IzRjY1Ii8+PHBhdGggZD0iTTczLjkzMyA2OS43MDhMMTUuMjA4IDU1Ljk0MnYxMzguMTY2bDguNzk4LS44MTggMTMuNzQ0IDE5Ljk0MyAxMC42LTIyLjIwNSAyNS41ODMtMi4zNzhWNjkuNzA4IiBmaWxsPSIjQzE3QjlEIi8+PHBhdGggZD0iTTMzLjk1OCAxOTguMTMzbDI2LjA2MyA1LjI1IDEuNzE2LTQuMDQ1VjM3LjQ0bC0xLjcxNi0zLjY2NS0yNi4wNjMgMTMuMjA4djE1MS4xNSIgZmlsbD0iIzdCM0Y2NSIvPjxwYXRoIGQ9Ik0yMDguNzM0IDgxLjUxNkw2MC4wMjEgMzMuNzc1djE2OS42MTJsMTcuMjIxLTIuMjE2IDIxLjYzMyAzMC44NjIgMTcuMTI2LTM1Ljg1IDkyLjczMy0xMS45MzNWODEuNTE2IiBmaWxsPSIjQzE3QjlEIi8+PHBhdGggZD0iTTE4MS44MzMgMjU2LjQ5MmwtMzcuNTY2LTEwLjUyNS0zNS41MDktNDAuNSA0Ni4wMzMtLjQ2OCAyNy4wNDIgNTEuNDkzIiBmaWxsPSIjOTk1QjgwIi8+PHBhdGggZD0iTTg5LjU5MSAyMDguOTVsMzguMzMgNy40MTcgMi45NzctMi41NjZWNC4xMTdMMTI3LjkyMSAwbC0zOC4zMyAxOS4xNThWMjA4Ljk1IiBmaWxsPSIjN0IzRjY1Ii8+PHBhdGggZD0iTTI1NiA2NC4wMzNMMTI3LjkyNSAwdjIxNi4zNjdsMjIuNTk3LTQuNTI4IDMxLjMxMSA0NC42NTMgMjYuOTAxLTU2LjMwOS0uMDE3LS4wMDJMMjU2IDE5MC43MDhWNjQuMDMzIiBmaWxsPSIjQzE3QjlEIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS SNS";
        }
    })
    export class AWSSNS extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    