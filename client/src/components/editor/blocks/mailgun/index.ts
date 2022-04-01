import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "mailgun";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNMzIuMDY2IDE5LjljLTYuNyAwLTEyLjEzIDUuNDMzLTEyLjEzIDEyLjFzNS40NDMgMTIuMSAxMi4xMyAxMi4xIDEyLjEzLTUuNDMzIDEyLjEzLTEyLjEtNS40NDMtMTIuMS0xMi4xMy0xMi4xek0xMy4xODEgMzJjMC0xMC40MDggOC40Ni0xOC44NTIgMTguODg1LTE4Ljg1MnMxOC44ODQgOC40NTQgMTguODg0IDE4Ljg2YzAgLjcyLS4wNjYgMS4zNzUtLjEzIDIuMDMtLjEzIDEuODMzIDEuMTggMy4yMDcgMy4wMTYgMy4yMDcgMy4wODIgMCAzLjQtMy45OTMgMy40LTUuMzAyIDAtMTMuOTQzLTExLjI4LTI1LjItMjUuMjQ2LTI1LjJTNi43NTQgMTguMDAxIDYuNzU0IDMxLjk0NHMxMS4yNzkgMjUuMiAyNS4yNDYgMjUuMmM3LjQgMCAxNC4wMzMtMy4yMDcgMTguNy04LjI0OGw1LjE4IDQuMzJBMzEuOTI4IDMxLjkyOCAwIDAxMzIgNjMuODg2Yy0xNy43MDUuMDAyLTMyLTE0LjMzNC0zMi0zMS45NDJDMCAxNC4yNyAxNC4zNiAwIDMyIDBjMTcuNzA1IDAgMzIgMTQuMzM2IDMyIDMxLjk0NCAwIDcuMDctMy40IDEyLjgzLTEwLjE2NCAxMi44My0zLjAxNiAwLTQuNzg3LTEuMzc1LTUuODM2LTIuODgtMy4zNDQgNS4zNjgtOS4yNDYgOC45MDItMTYuMDY2IDguOTAyLTEwLjI5NS4wNjUtMTguNzU0LTguMzgtMTguNzU0LTE4Ljc4NnptMTguODg1LTUuNTY0YzMuMDgyIDAgNS41NzQgMi40ODcgNS41NzQgNS40OTggMCAzLjA3Ny0yLjQ5MiA1LjU2NC01LjU3NCA1LjU2NHMtNS41NzQtMi40NzctNS41NzQtNS41NTRjLjA2Ni0zIDIuNDkyLTUuNDk4IDUuNTc0LTUuNDk4eiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjYzAyMTI2IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mailgun";
        }
    })
    export class Mailgun extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    