import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "freshservice";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJsYXllciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSB2aWV3Qm94PSIyMCAyODAgMTAwIDEwMCIgPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMwOEM3RkI7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik02OC41LDM3Ni4xTDY4LjUsMzc2LjFjLTI1LjksMC00Ny0yMS00Ny00N2MwLTI1LjksMjEtNDcsNDctNDdoMzUuMmM2LjUsMCwxMS43LDUuMywxMS43LDExLjd2MzUuMgoJCUMxMTUuNCwzNTUuMSw5NC40LDM3Ni4xLDY4LjUsMzc2LjEiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ny44LDM1Mi40YzAuNiwwLjQsMS40LDAuMywxLjgtMC4zbDE0LjgtMjAuNmwzLjQtNC44YzAuOC0xLjEsMC0yLjctMS40LTIuN2gtNi42SDY0LjJsNS41LTE2LjYKCQljMC4yLTAuNSwwLTEuMS0wLjUtMS41Yy0wLjYtMC40LTEuNC0wLjMtMS44LDAuM2wtMTQuOCwyMC42bC0zLjQsNC44Yy0wLjgsMS4xLDAsMi43LDEuNCwyLjdoNi42aDE1LjdsLTUuNSwxNi42CgkJQzY3LjEsMzUxLjQsNjcuMywzNTIsNjcuOCwzNTIuNCIvPgo8L2c+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Freshservice";
        }
    })
    export class Freshservice extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    