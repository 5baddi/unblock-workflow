import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "helpScout";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjMxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTE4LjQzMiAxODAuOTY5bDkwLjQ4NC05MC40ODVhNjMuNzE3IDYzLjcxNyAwIDAwMTguOTktNDUuNDI4QTY0LjI0NSA2NC4yNDUgMCAwMDEwOS40NzYgMEwxOC45OSA5MC40ODRBNjMuNzE3IDYzLjcxNyAwIDAwMCAxMzUuOTEzYzAgMTcuNjg3IDcuMDc1IDMzLjUxMiAxOC40MzIgNDUuMDU2em0yMTkuMTM2LTUyLjg3NmwtOTAuNDg0IDkwLjQ4NGE2My43MTcgNjMuNzE3IDAgMDAtMTguOTkgNDUuNDI5IDY0LjI0NSA2NC4yNDUgMCAwMDE4LjQzMSA0NS4wNTZsOTAuNDg0LTkwLjQ4NUE2My43MTcgNjMuNzE3IDAgMDAyNTYgMTczLjE1YzAtMTcuNjg3LTcuMDc1LTMzLjUxMy0xOC40MzItNDUuMDU2em0tLjU1OS0zNy40MjJBNjMuNzE3IDYzLjcxNyAwIDAwMjU2IDQ1LjI0MiA2NC4yNDUgNjQuMjQ1IDAgMDAyMzcuNTY4LjE4NkwxOC45OTEgMjE4LjU3N0M3LjI2IDIzMC4zMDcgMCAyNDYuMzIgMCAyNjQuMTkyYTY0LjI0NSA2NC4yNDUgMCAwMDE4LjQzMiA0NS4wNTZMMjM3LjAwOSA5MC42NzF6IiBmaWxsPSIjMTI5MkVFIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "HelpScout";
        }
    })
    export class HelpScout extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    