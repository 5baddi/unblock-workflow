import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "mandrill";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNTMiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTMyLjA1IDI3LjQ4N0wxMy4yODcgMHYyMy41M2wxMC42NSAxNS43MiA4LjExNC0xMS43NjUiIGZpbGw9IiMxYTE5MTgiLz48cGF0aCBkPSJNMzIuMDUgMjcuNDg3bDguMDEzIDExLjg2NyAxMC42NS0xNS41MThWMEwzMi4wNSAyNy40ODciIGZpbGw9IiNlZDlkNGEiLz48cGF0aCBkPSJNMzEuOTUgMjcuNDg3bC04LjAxMyAxMS43NjUgOC4wMTMgMTEuNzY1IDguMDEzLTExLjc2NS04LjAxMy0xMS43NjUiIGZpbGw9IiNiYTc3MzAiLz48cGF0aCBkPSJNMCA1MS4xMmgxMy4yODdWMjMuNjMzTDAgNC4wNThWNTEuMTIiIGZpbGw9IiM0Y2IyZDQiLz48cGF0aCBkPSJNMCAwdjQuMDU3TDEzLjI4NyAyMy41M1YwSDAiIGZpbGw9IiMxYzgyYWQiLz48cGF0aCBkPSJNNTAuNzEzIDIzLjgzNlY1MS4xMkg2NFY0LjM2Mkw1MC43MTMgMjMuODM2IiBmaWxsPSIjYzAyNDM5Ii8+PHBhdGggZD0iTTY0IDBINTAuNzEzdjIzLjczNEw2NCA0LjI2VjAiIGZpbGw9IiM4ZjIxMmYiLz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mandrill";
        }
    })
    export class Mandrill extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    