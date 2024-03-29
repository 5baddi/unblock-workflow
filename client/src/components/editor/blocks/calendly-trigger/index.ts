import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "calendlyTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjcuNCAwIDM0NC42IDM2MCIgd2lkdGg9IjIzNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzY3NmI3NCI+PHBhdGggZD0iTTMxMy44IDM2MEg0NS41Yy0yMSAwLTM4LjEtMTcuMS0zOC4xLTM4LjFWNTMuNWMwLTIxIDE3LjEtMzguMSAzOC4xLTM4LjFoMjY4LjNjMjEgMCAzOC4xIDE3LjEgMzguMSAzOC4xdjI2OC4zYy4xIDIxLjEtMTcgMzguMi0zOC4xIDM4LjJ6TTQ1LjUgMzYuNWMtOS40IDAtMTcgNy42LTE3IDE3djI2OC4zYzAgOS40IDcuNiAxNyAxNyAxN2gyNjguM2M5LjQgMCAxNy03LjYgMTctMTdWNTMuNWMwLTkuNC03LjYtMTctMTctMTd6Ii8+PHBhdGggZD0iTTI1Ni42IDcyLjRjLTQuNSAwLTguMS0zLjYtOC4xLTguMVY4LjFjMC00LjUgMy42LTguMSA4LjEtOC4xczguMSAzLjYgOC4xIDguMXY1Ni4xYzAgNC41LTMuNiA4LjItOC4xIDguMnptLTE1NC43IDBjLTQuNSAwLTguMS0zLjYtOC4xLTguMVY4LjFjMC00LjUgMy42LTguMSA4LjEtOC4xczguMSAzLjYgOC4xIDguMXY1Ni4xYy4xIDQuNS0zLjYgOC4yLTguMSA4LjJ6bTg3LjUgMTgxLjRjLTMzLjYgMC02MC45LTI3LjMtNjAuOS02MC45czI3LjMtNjAuOSA2MC45LTYwLjljMTUuMiAwIDI5LjcgNS42IDQwLjkgMTUuOCAxLjQgMS4yIDEuNSAzLjQuMiA0LjctMS4yIDEuNC0zLjQgMS41LTQuNy4yLTEwLTkuMS0yMi45LTE0LjEtMzYuNC0xNC4xLTI5LjkgMC01NC4yIDI0LjMtNTQuMiA1NC4yczI0LjMgNTQuMiA1NC4yIDU0LjJjMTMuNSAwIDI2LjQtNSAzNi40LTE0LjEgMS40LTEuMiAzLjUtMS4xIDQuNy4yIDEuMiAxLjQgMS4xIDMuNS0uMiA0LjctMTEuMiAxMC40LTI1LjcgMTYtNDAuOSAxNnoiLz48L2c+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Calendly Trigger";
        }
    })
    export class CalendlyTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    