import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "elasticSecurity";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIyIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5zZWN1cml0eS1sb2dvLWNvbG9yLTMycHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ic2VjdXJpdHktbG9nby1jb2xvci0zMnB4IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBpZD0iYm91bmRpbmctYm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KICAgICAgICA8cGF0aCBkPSJNOSw3LjAwODE4MjcxIEw5LDUuNjg0MzQxODllLTE0IEwyOSw1LjY4NDM0MTg5ZS0xNCBMMjksMTYuNzQ0MTg2IEMyOSwyMC42NTc0MDgzIDIyLjYyMTY2MiwyMy4yMjEwNTEyIDE5Ljk4NDU4NzUsMjQgTDE5Ljk4NDU4NzUsNy4wMDgxODI3MSBMOSw3LjAwODE4MjcxIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZBNzQ0RSIvPgogICAgICAgIDxwYXRoIGQ9Ik0zLDIwLjA3Mjc1NzUgTDMsMTAgTDE3LDEwIEwxNywzMiBDNy42NjY2NjY2NywyNy45ODAwNDY0IDMsMjQuMDA0Mjk4OSAzLDIwLjA3Mjc1NzUgWiIgaWQ9IlBhdGgiIGZpbGw9IiMxREJBQjAiLz4KICAgICAgICA8cGF0aCBkPSJNOSwxMCBMMTcsMTAgTDE3LDI0IEMxNC4wMTY1Mzk5LDIyLjg1OTA1ODMgOSwyMC4yNDM1MzYzIDksMTYuOTU2NTYyIEw5LDEwIFoiIGlkPSJQYXRoIiBmaWxsPSIjMzQzNzQxIi8+CiAgICA8L2c+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Elastic Security";
        }
    })
    export class ElasticSecurity extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    