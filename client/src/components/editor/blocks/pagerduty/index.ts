import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "pagerDuty";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNTYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNNi43MDQgNTQuNDM0SDB2LTMzLjY1YzAtMy40NTUgMS40MTgtNS41NDQgMi42MDQtNi43MDQgMi42My0yLjU4IDYuMi0yLjY1NiA2Ljc4Mi0yLjY1NmgxMC41NDZjMy43NjUgMCA1LjkzIDEuNTIgNy4xMTcgMi44IDIuMzQ2IDIuNTUzIDIuMzcyIDUuODUzIDIuMzIgNi43M3YxMi42ODdjMCAzLjY2Mi0xLjQ5NiA1LjgyOC0yLjczMyA2Ljk4OC0yLjU1MyAyLjM5OC01LjkzIDIuNDUtNi43MyAyLjQyNEg2LjcwNHptMTMuNDYtMTguMTAyYy4zNiAwIDEuMzY3LS4xMDMgMS45MDgtLjYyLjQxMy0uMzg3LjYyLTEuMDgzLjYyLTIuMXYtMTMuMDJjMC0uMzYtLjA3Ny0xLjMxNS0uNTkzLTEuODU3LS41LS41MTYtMS40NDQtLjYyLTIuMTY2LS42MmgtMTAuNmMtMi42MyAwLTIuNjMgMS45ODUtMi42MyAyLjY1NnYxNS41NXpNNTcuMjk2IDBINjR2MzMuNjc3YzAgMy40NTUtMS40MTggNS41NDQtMi42MDQgNi43MDQtMi42MyAyLjU4LTYuMiAyLjY1Ni02Ljc4MiAyLjY1Nkg0NC4wNjhjLTMuNzY1IDAtNS45My0xLjUyLTcuMTE3LTIuOC0yLjM0Ni0yLjU1My0yLjM3Mi01Ljg1My0yLjMyLTYuNzN2LTEyLjY3YzAtMy42NjIgMS40OTYtNS44MjggMi43MzMtNi45ODggMi41NTMtMi4zOTggNS45My0yLjQ1IDYuNzMtMi40MjRoMTMuMjAyem0tMTMuNDYgMTguMTE3Yy0uMzYgMC0xLjM2Ny4xMDMtMS45MDguNjItLjQxMy4zODctLjYyIDEuMDgzLS42MiAyLjF2MTMuMDJjMCAuMzYuMDc3IDEuMzE1LjU5MyAxLjg1Ny41LjUxNiAxLjQ0NC42MiAyLjE2Ni42MmgxMC41OThjMi42NTYtLjAyNiAyLjY1Ni0yIDIuNjU2LTIuNjgyVjE4LjExN3oiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzI1YzE1MSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "PagerDuty";
        }
    })
    export class PagerDuty extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    