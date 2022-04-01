import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "zoom";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUgNjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTAgMzJDMCAxNC4yNzIgMTQuMjcyIDAgMzIgMHMzMiAxNC4yNzIgMzIgMzItMTQuMjcyIDMyLTMyIDMyUzAgNDkuNzI4IDAgMzJ6Ii8+PHBhdGggZD0iTTMuMTM3IDMyQTI4LjggMjguOCAwIDAxMzIgMy4xMzcgMjguOCAyOC44IDAgMDE2MC44NjIgMzIgMjguOCAyOC44IDAgMDEzMiA2MC44NjIgMjguOCAyOC44IDAgMDEzLjEzNyAzMnoiIGZpbGw9IiM0YThjZmYiLz48cGF0aCBkPSJNNDAuNzg0IDI4LjI1NGw4LjE1Ny01Ljk2MWMuNzEyLS41OCAxLjI1NS0uNDQ1IDEuMjU1LjYyN3YxOC4xNzdjMCAxLjIwNS0uNjc4IDEuMDY3LTEuMjU1LjYyN2wtOC4xNTctNS45NjF6bS0yNy42MDgtNS4yODl2MTMuNTUzYTUuNTUgNS41NSAwIDAwNS41NzUgNS41MjJoMTkuNzY1YTEuMDEgMS4wMSAwIDAwMS4wMTMtMS4wMDRWMjcuNDgzYTUuNTUgNS41NSAwIDAwLTUuNTc1LTUuNTIySDE0LjE4OWExLjAxIDEuMDEgMCAwMC0xLjAxMyAxLjAwNHoiLz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Zoom";
        }
    })
    export class Zoom extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    