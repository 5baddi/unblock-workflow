import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "spotify";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNMzIgMEMxNC4zIDAgMCAxNC4zMzcgMCAzMmMwIDE3LjcgMTQuMzM3IDMyIDMyIDMyIDE3LjcgMCAzMi0xNC4zMzcgMzItMzJTNDkuNjYzIDAgMzIgMHptMTQuNjggNDYuMTg0Yy0uNTczLjk1Ni0xLjc5NyAxLjIyMy0yLjc1My42NS03LjUzMi00LjU4OC0xNi45NzUtNS42Mi0yOC4xNC0zLjA5Ny0xLjA3LjIzLTIuMTQtLjQyLTIuMzctMS41cy40Mi0yLjE0IDEuNS0yLjM3YzEyLjE5Ni0yLjggMjIuNjctMS42MDYgMzEuMDgyIDMuNTU2YTIgMiAwIDAxLjY4OCAyLjc1M3ptMy45LTguNzE3Yy0uNzI2IDEuMTg1LTIuMjU2IDEuNTMtMy40NC44NC04LjYwMi01LjI3Ni0yMS43MTYtNi44MDUtMzEuODg1LTMuNzQ3LTEuMzM4LjM4Mi0yLjcxNC0uMzQ0LTMuMDk3LTEuNjQ0LS4zODItMS4zMzguMzQ0LTIuNzE0IDEuNjgyLTMuMDk3IDExLjYyMi0zLjUxNyAyNi4wNzQtMS44MzUgMzUuOTc2IDQuMjQ0IDEuMTQ3LjY4OCAxLjUgMi4yMTcuNzY1IDMuNDAzem0uMzQ0LTkuMWMtMTAuMzIzLTYuMTE3LTI3LjMzNi02LjctMzcuMi0zLjcwOC0xLjU2OC40OTctMy4yNS0uNDItMy43NDctMS45ODhzLjQyLTMuMjUgMS45ODgtMy43NDdjMTEuMzE3LTMuNDQgMzAuMTI3LTIuNzUzIDQxLjk4IDQuMjgyIDEuNDE1Ljg0IDEuODczIDIuNjc2IDEuMDMyIDQuMS0uNzY1IDEuNDUzLTIuNjM4IDEuOTEyLTQuMDUzIDEuMDd6IiBzdHJva2U9Im5vbmUiIGZpbGw9IiMxZWQ3NjAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Spotify";
        }
    })
    export class Spotify extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    