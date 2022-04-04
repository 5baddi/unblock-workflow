import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "quickbooks";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUwMCAyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjEyNTAiIGN5PSIxMjUwIiBmaWxsPSIjMmNhMDFjIiByPSIxMjUwIi8+PHBhdGggZD0iTTMwMS4zIDEyNDkuNmMuMSAyODIuNiAyMjggNTEyLjQgNTEwLjYgNTE0LjloNzIuM3YtMTg4LjloLTcyLjNjLTE3NS4yIDQ3LjgtMzU1LjktNTUuNS00MDMuNi0yMzAuNy0uNC0xLjQtLjctMi44LTEuMS00LjItNDkuMS0xNzcuNSA1My43LTM2MS40IDIzMC42LTQxMi41aDM2LjFhMzIyIDMyMiAwIDAxMTM3LjUgMEg5ODd2MTAwMi45Yy0uOSAxMDYuMSA4NC40IDE5Mi45IDE5MC41IDE5My45VjcyOS42SDgxM2MtMjg0LjYgMS41LTUxNCAyMzMuNC01MTIuNSA1MTh2LjF6bTEzODcuNS01MTkuOGgtNzIuM3YxOTguOWg3Mi4zYzE3NC44LTQ3LjcgMzU1LjEgNTUuMyA0MDIuOCAyMzAgLjQgMS4zLjcgMi43IDEuMSA0IDQ4LjggMTc2LjktNTMuNyAzNjAuMS0yMjkuOSA0MTEuMWgtMzYuMWEzMjIgMzIyIDAgMDEtMTM3LjUgMGgtMTc1LjZWNTcxYy45LTEwNi4xLTg0LjQtMTkyLjktMTkwLjUtMTkzLjl2MTM5Ny40aDM2NC41YzI4Ny4xLTQuNSA1MTYuMi0yNDAuOCA1MTEuOC01MjcuOS00LjQtMjgwLjgtMjMwLjktNTA3LjQtNTExLjgtNTExLjh6IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "QuickBooks Online";
        }
    })
    export class QuickBooksOnline extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    