import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "microsoftOutlook";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEgODEiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNNzcuOSAxOS4ySDQ2Ljg2VjBMMCA4LjIzMlY3MS45OEw0Ni44NiA4MFY2MS44NDdINzcuOWMxLjI2NiAwIDIuMS0xLjA1NSAyLjEtMi4xVjIxLjMyYzAtMS4yNjYtLjg0NC0yLjEtMi4xLTIuMXpNMjEuOTUyIDU0LjQ2Yy0xNS40LTEuMDU1LTE0Ljc3Ni0yOS4xMy40MjItMjkuOTc0IDE2LjY3NS0uODQ0IDE2LjI1MyAzMS4wMy0uNDIyIDI5Ljk3NHptNTUuNTE1IDQuNjQ0SDQ2Ljg2VjM1LjA0bDkuNSA5LjA3N2MuNDIyLjQyMi44NDQuNjMzIDEuNDc3LjYzM3MxLjA1NS0uMiAxLjQ3OC0uNjMzTDc3LjQ2NyAyNy4yM3YzMS44NzN6bTAtMzUuNDYybC0xOS42MyAxOC4xNTNMNDYuODYgMzEuNDV2LTkuN2gzMC4zOTZ2MS45aC4yem0tNTUuMDkyIDYuNTQzYy04LjIzMi40MjItOC40NDMgMTguMzY0LS4yIDE4LjU3NSA4LjY1NC40MjIgOC42NTQtMTguOTk3LjItMTguNTc1eiIgZmlsbD0iIzIzNzJiYSIgc3Ryb2tlPSJub25lIi8+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Microsoft Outlook";
        }
    })
    export class MicrosoftOutlook extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    