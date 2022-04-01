import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "dropcontact";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuNTY5MiAxNi4yMTlDMjguMTQ2OSAxNS41MzcxIDI2LjU1MzUgMTUuMTU1MiAyNC44NzA5IDE1LjE1NTJDMTguODYxNSAxNS4xNTUyIDEzLjk4OTkgMjAuMDI2OCAxMy45ODk5IDI2LjAzNjJDMTMuOTg5OSAzMi4wNDU2IDE4Ljg2MTUgMzYuOTE3MiAyNC44NzA5IDM2LjkxNzJDMjguOTYyMSAzNi45MTcyIDMyLjUyNiAzNC42NTkyIDM0LjM4NDMgMzEuMzIxNUwzMS43NjE0IDI5Ljg2NDNDMzAuNDE1NCAzMi4yODE4IDI3LjgzNDEgMzMuOTE3MiAyNC44NzA5IDMzLjkxNzJDMjAuNTE4MyAzMy45MTcyIDE2Ljk4OTkgMzAuMzg4OCAxNi45ODk5IDI2LjAzNjJDMTYuOTg5OSAyMS42ODM2IDIwLjUxODMgMTguMTU1MiAyNC44NzA5IDE4LjE1NTJDMjYuMDg5NiAxOC4xNTUyIDI3LjI0MzcgMTguNDMxOCAyOC4yNzM4IDE4LjkyNTdMMjkuNTY5MiAxNi4yMTlaTTM0Ljc3NzkgMS45ODQ0NFYyNy43NDYxSDMxLjY2OVYwLjg5OTM2M0MyOS41NDU5IDAuMzEzMTcxIDI3LjMwOTUgMCAyNSAwQzExLjE5MjkgMCAwIDExLjE5MjkgMCAyNUMwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEMzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVDNTAgMTQuNjYyNiA0My43MjU5IDUuNzkwNyAzNC43Nzc5IDEuOTg0NDRaIiBmaWxsPSIjMEFCQTlGIi8+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Dropcontact";
        }
    })
    export class Dropcontact extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    