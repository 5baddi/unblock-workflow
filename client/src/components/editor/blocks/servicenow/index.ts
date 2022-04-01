import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "servicenow";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNTkiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI0EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9IkEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNMzIuMTk2IDBBMzIuMjcgMzIuMjcgMCAwIDAgMi4zMTIgMjAuMjc1IDMyLjI3IDMyLjI3IDAgMCAwIDkuOTUgNTUuNTcxYzIuMjcgMi4xNjcgNS43ODIgMi4zNDkgOC4yNjQuNDMgOC4xNS02LjA0NSAxOS4yOTUtNi4wNDUgMjcuNDQ1IDAgMi41MDcgMS45ODUgNi4wOTggMS44IDguMzg5LS40M0EzMi4yNyAzMi4yNyAwIDAgMCAzMi4xOTYgMG0tLjE4IDQ4LjI3NWExNS42MyAxNS42MyAwIDAgMS0xNi4xMzMtMTYuMDI2Yy0uMTk2LTUuODU3IDIuODE2LTExLjM1NSA3Ljg1OC0xNC4zNDFzMTEuMzExLTIuOTg3IDE2LjM1MyAwIDguMDU1IDguNDg1IDcuODU4IDE0LjM0MWMuMTE1IDQuMjg0LTEuNTM3IDguNDI4LTQuNTY4IDExLjQ1OHMtNy4xNzQgNC42ODItMTEuNDU4IDQuNTY4IiBzdHJva2U9Im5vbmUiIGZpbGw9IiM4MWI1YTEiLz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "ServiceNow";
        }
    })
    export class ServiceNow extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    