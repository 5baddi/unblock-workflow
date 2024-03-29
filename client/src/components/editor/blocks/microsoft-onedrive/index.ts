import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "microsoftOneDrive";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEgODEiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiPjxwYXRoIGQ9Ik02LjY2NyAwUTAgMCAwIDYuNjY3djY2LjY2N1EwIDgwIDYuNjY3IDgwaDY2LjY2N1E4MCA4MCA4MCA3My4zMzNWNi42NjdRODAgMCA3My4zMzMgMHoiIGZpbGw9IiMwOTRhYjIiLz48cGF0aCBkPSJNNjAuMjU2IDQyLjAyM2MyLjg3LjQwNSA0Ljk2NSAyLjk3NSA0LjgzMiA1LjkyOSAwIDIuNTk0LTEuNDIxIDUuNjU1LTQuODMyIDUuNjU1SDMyLjU3NGMtNS4zMDYgMC03LjIzMi0zLjcwNi03LjIzMi03LjUyNCAwLTYuNDQ0IDYuOTc5LTYuNjIxIDYuOTc5LTYuNjIxcy41NjktNi45OTIgNi42NjQtOC40MWMzLjgwNi0xLjExMyA3Ljg3NS40NzcgOS45OCAzLjg5OWE4LjIwNSA4LjIwNSAwIDAxNy4wNTgtLjI1OGMyLjgxMiAxLjI1NyA0LjUxOCA0LjIxMiA0LjIzMiA3LjMzeiIvPjxwYXRoIGQ9Ik0yMy41ODMgNDUuNjA1YzAtNy4wODIgNy40MTItOC4xMzkgNy40MTItOC4xMzkuNzA3LTQuMTA4IDMuNjk5LTcuNDM1IDcuNjgyLTguNTQgNC4wMjEtMS4yODYgOC40MDQuMTg5IDEwLjg1NiAzLjY1M2E2LjMgNi4zIDAgMDEzLjYzNS0uNzM3Yy0uNTEzLTQuMTc3LTMuMjQ3LTcuNzM2LTcuMTI2LTkuMjc3LTUuMTQxLTIuMTUzLTExLjA1OC4wMjYtMTMuNjE4IDUuMDE1YTguNDAzIDguNDAzIDAgMDAtOC4xMjYtLjE2Yy0zLjE4MSAxLjc2My01LjAwMiA1LjI4Mi00LjYxOSA4LjkyNC0zLjY3NS4zMjMtNi40MzggMy41MjMtNi4yNTQgNy4yNDIuMTE0IDMuODE3IDMuMTM5IDYuODkyIDYuOTIgNy4wMzRoNC42NWE5LjA4NCA5LjA4NCAwIDAxLTEuNDEzLTUuMDE1eiIgZmlsbD0iI2Y5ZjlmOSIvPjxwYXRoIGQ9Ik0uODQgMi42OWw3Ny43NTMgNzUuODE2QTQuMzkgNC4zOSAwIDAwODAgNzUuMjc5VjQuMzk4QTQuMzkyIDQuMzkyIDAgMDA3NS42MTIgMEg0Ljg4NUE0LjM5IDQuMzkgMCAwMC44NCAyLjY5eiIgZmlsbC1vcGFjaXR5PSIuMTkiLz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Microsoft OneDrive";
        }
    })
    export class MicrosoftOneDrive extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    