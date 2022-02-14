import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "autopilot";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjM4IDI2IDM1IDM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjMThkNGIyIiBzdHJva2Utd2lkdGg9IjMiIGZpbGw9IiMxOGQ0YjIiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDUuNCA0Mi42aDE5LjlsMy40LTQuOEg0MmwzLjQgNC44em0zLjEgOC4zaDEzLjFsMy40LTQuOEg0NS40bDMuMSA0Ljh6bTU0LS43Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Autopilot";
        }
    })
    export class Autopilot extends NodeBlock
    {
    
    }