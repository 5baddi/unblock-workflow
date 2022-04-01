import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "pushbullet";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZykiIHRyYW5zZm9ybT0icm90YXRlKDM2MCkiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iOC41OSUiIHkxPSIxLjk1NCUiIHgyPSI3Ny40NzElIiB5Mj0iNzMuODk2JSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiM0Q0IzNkIiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjM0VBMTZGIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGlkPSJhIiBkPSJNMjU2IDEyOGMwIDcwLjY5Mi01Ny4zMDggMTI4LTEyOCAxMjhDNTcuMzA4IDI1NiAwIDE5OC42OTIgMCAxMjggMCA1Ny4zMDggNTcuMzA4IDAgMTI4IDBjNzAuNjkyIDAgMTI4IDU3LjMwOCAxMjggMTI4Ii8+PC9kZWZzPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iIzY3QkY3OSIgeGxpbms6aHJlZj0iI2EiLz48cGF0aCBkPSJNMjU2IDEyOGMwIDcwLjY5Mi01Ny4zMDggMTI4LTEyOCAxMjhDNTcuMzA4IDI1NiAwIDE5OC42OTIgMCAxMjggMCA1Ny4zMDggNTcuMzA4IDAgMTI4IDBjNzAuNjkyIDAgMTI4IDU3LjMwOCAxMjggMTI4IiBmaWxsPSIjNjdCRjc5IiBtYXNrPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTYzLjExMSAxODcuMDIyTDk2LjE3OCA3Mmw2NC41MzMgNjAuOTc4TDIwMCA5MC4xMzNsODcuNTMzIDg2LjI4OS0xMTAuODQ0IDEyNC44ODlMNjMuMTExIDE4Ny4wMjIiIGZpbGw9InVybCgjYykiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNNzcgMTg5LjZjLTE2LjczMyAwLTE2LjczMyAwLTE2LjczMy0xNi43MzNWODFjMC0xNi43MzMgMC0xNi43MzMgMTYuNzMzLTE2LjczM2gzLjMzNGMxNi43MzMgMCAxNi43MzMgMCAxNi43MzMgMTYuNzMzdjkxLjg2N2MwIDE2LjczMyAwIDE2LjczMy0xNi43MzMgMTYuNzMzSDc3em00NC4wNDEgMGMtNS42OTkgMC04LjUwOC0yLjgwOS04LjUwOC04LjUwOFY3Mi43NzRjMC01LjY5OCAyLjgwOS04LjUwNyA4LjUwOC04LjUwN2gzNy41MzdjMzIuMTc4IDAgNTIuNjI4IDMyLjI3MyA1Mi42MjggNjMuMDI1IDAgMzAuNzUyLTIwLjYyOCA2Mi4zMDgtNTIuNjI4IDYyLjMwOGgtMzcuNTM3eiIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIGQ9Ik0wIDBoMjU2djI1NkgweiIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Pushbullet";
        }
    })
    export class Pushbullet extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    