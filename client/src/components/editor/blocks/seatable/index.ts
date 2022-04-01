import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "seatable";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTE2Ljc4NyA0My4yMTNMMjguNTc0IDU1bDE2Ljk0My0xNi45NDJhNy44NzIgNy44NzIgMCAwMDAtMTEuMTMybC02LjIyLTYuMjIxLS4xMTItLjExMS0xOC42MTEgMTguNTcuMTMuMTMxeiIgZmlsbD0idXJsKCNnMSkiLz48cGF0aCBkPSJNMjAuNzA0IDM5LjI5NWwyMi41MS0yMi41MDdMMzEuNDI1IDUgMTQuNDgzIDIxLjk0MmE3Ljg3MiA3Ljg3MiAwIDAwMCAxMS4xMzN6IiBmaWxsPSIjZmY4MDAwIi8+PGRlZnMgaWQ9ImQxIj48bGluZWFyR3JhZGllbnQgaWQ9ImcxIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJzY2FsZSgtMTAuMDg0MDcpIHJvdGF0ZSg3MC45NTIgLjk0OCAtNC4wNjUpIj48c3RvcCBvZmZzZXQ9IjAiIGlkPSJzdG9wOTA1IiBzdG9wLWNvbG9yPSIjZmY4MDAwIiBzdG9wLW9wYWNpdHk9IjEiLz48c3RvcCBvZmZzZXQ9IjEiIGlkPSJzdG9wOTA3IiBzdG9wLWNvbG9yPSIjZWMyODM3IiBzdG9wLW9wYWNpdHk9IjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "SeaTable";
        }
    })
    export class SeaTable extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    