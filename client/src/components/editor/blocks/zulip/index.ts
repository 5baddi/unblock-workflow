import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "zulip";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMjRBREZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzdCNzFGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTEyOCAwYzcwLjY5MiAwIDEyOCA1Ny4zMDggMTI4IDEyOCAwIDcwLjY5Mi01Ny4zMDggMTI4LTEyOCAxMjhDNTcuMzA4IDI1NiAwIDE5OC42OTIgMCAxMjggMCA1Ny4zMDggNTcuMzA4IDAgMTI4IDB6bS02LjMyIDExOC4yMjJsLTQ1Ljg5MiA0MC45NzljLTQuNzI4IDMuNzItNy44MyA5Ljg2LTcuODMgMTYuNzY2IDAgMTEuMjc5IDguMjc0IDIwLjUwOCAxOC4zODYgMjAuNTA4aDg2LjI0N2MxMC4xMTIgMCAxOC4zODYtOS4yMyAxOC4zODYtMjAuNTA4IDAtMTEuMjgtOC4yNzQtMjAuNTA3LTE4LjM4Ni0yMC41MDdIMTA3LjNjLS45NjggMC0xLjU4LTEuMTYtMS4xMDgtMi4xMDRsMTYuODMzLTMzLjcwM2MuNjE1LS45ODMtLjQ5My0yLjE2MS0xLjM0NS0xLjQzem01MC45MS01OC44Nkg4Ni4zNDVjLTEwLjExMiAwLTE4LjM4NiA5LjIyNy0xOC4zODYgMjAuNTA4IDAgMTEuMjc5IDguMjc0IDIwLjUwOCAxOC4zODYgMjAuNTA4aDY1LjI5MmMuOTY4IDAgMS41OCAxLjE2IDEuMTA4IDIuMTAzbC0xNi44MzQgMzMuNzA0Yy0uNjE1Ljk4My40OTQgMi4xNjEgMS4zNDYgMS40M2w0NS44OTItNDAuOTg0YzQuNzI3LTMuNzIzIDcuODI5LTkuODYgNy44MjktMTYuNzY3IDAtMTEuMjc4LTguMjc0LTIwLjUwNy0xOC4zODYtMjAuNTAxeiIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Zulip";
        }
    })
    export class Zulip extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    