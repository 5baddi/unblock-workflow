import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "raindrop";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItMiAtNSA0MiA0MiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik05LjUuOTE3YTkuNSA5LjUgMCAwMTkuNSA5LjV2OS41SDkuNWE5LjUgOS41IDAgMDEwLTE5eiIvPjxwYXRoIGlkPSJjIiBkPSJNMCAxOS45MTd2LTkuNWwuMDA0LS4yN2E5LjUgOS41IDAgMTE5LjQ5NiA5Ljc3SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzE5ODhFMCIgZD0iTTI4LjE5MiA0LjdjNS4wNzcgNC45MzMgNS4wNzcgMTIuOTMgMCAxNy44NjMtLjE3LjE2NS0uMzQzLjMyNS0uNTE5LjQ3OUwxOSAzMWwtOC42NzMtNy45NThjLS4xNzYtLjE1NC0uMzUtLjMxNC0uNTItLjQ3OS01LjA3Ni00LjkzMi01LjA3Ni0xMi45MyAwLTE3Ljg2MyA1LjA3Ny00LjkzMyAxMy4zMDktNC45MzMgMTguMzg1IDB6Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxMS4wODMpIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48dXNlIGZpbGw9IiMyQ0Q0RUQiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZmlsbD0iIzBEQjRFMiIgZD0iTTI4LjE5Mi02LjM4NGM1LjA3NyA0LjkzMyA1LjA3NyAxMi45MzEgMCAxNy44NjQtLjE3LjE2NS0uMzQzLjMyNC0uNTE5LjQ3OEwxOSAxOS45MTdsLTguNjczLTcuOTU5Yy0uMTc2LS4xNTQtLjM1LS4zMTMtLjUyLS40NzgtNS4wNzYtNC45MzMtNS4wNzYtMTIuOTMgMC0xNy44NjQgNS4wNzctNC45MzMgMTMuMzA5LTQuOTMzIDE4LjM4NSAweiIgbWFzaz0idXJsKCNiKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOSAxMS4wODMpIj48bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYyIvPjwvbWFzaz48dXNlIGZpbGw9IiMzMTY5RkYiIHhsaW5rOmhyZWY9IiNjIi8+PHBhdGggZmlsbD0iIzMxNTNGRiIgZD0iTTkuMTkyLTYuMzg0YzUuMDc3IDQuOTMzIDUuMDc3IDEyLjkzMSAwIDE3Ljg2NC0uMTcuMTY1LS4zNDMuMzI0LS41MTkuNDc4TDAgMTkuOTE3bC04LjY3My03Ljk1OWMtLjE3Ni0uMTU0LS4zNS0uMzEzLS41Mi0uNDc4LTUuMDc2LTQuOTMzLTUuMDc2LTEyLjkzIDAtMTcuODY0IDUuMDc3LTQuOTMzIDEzLjMwOS00LjkzMyAxOC4zODUgMHoiIG1hc2s9InVybCgjZCkiLz48L2c+PC9nPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Raindrop";
        }
    })
    export class Raindrop extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    