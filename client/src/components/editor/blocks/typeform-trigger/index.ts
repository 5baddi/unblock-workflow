import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "typeformTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTEyMS4yNC40NzRjMzMuMDE5LTIuNzE4IDU2LjczNCA2LjA0NSA4Mi4yNSAzMS41NDcgMjcuNTQ5IDI3LjUzMiA0NS44NjQgNjMuMjEyIDUwLjggMTAxLjIxOCA1LjQ5MiA0Mi4yNjYtMi4wNjIgNzMuODA3LTI1LjMyNiA5Ni44OTgtMjIuMjQ3IDIyLjA4LTU0Ljc0IDI5LjM2NC05OC4xNDYgMjUuNzM1bC0xLjc5Ny0uMTU4Yy0zNi45NjMtMy4zOTgtNjMuMTA3LTE1LjUxNy04OC40MzgtNDEuMTcxQzEzLjUyNiAxODcuMTQtLjczMiAxNTYuMDI2LjAyOSAxMjMuMzdjLjM3Mi0xNS45ODcgNC45MDEtMjkuNjEyIDEzLjYzNS00Mi45OCA1LjcyNi04Ljc2NSAxMS41NC0xNS42MDIgMjMuNzA0LTI4LjE0bDQuMDYtNC4xNTggNC40NzQtNC41MzZDNzQuNzMgMTQuNTggOTMuNzA3IDIuNzQxIDEyMS4yNC40NzV6bTgwLjI4OCAzMy41MUMxNzYuNTg2IDkuMDU3IDE1My42NzIuNTkgMTIxLjQ2OCAzLjI0MWMtMjcuMTQgMi4yMzQtNDUuNzggMTQuMDkxLTc0Ljk1IDQzLjYzNWwtMi4xMSAyLjE0MWMtMTQuMjEgMTQuNDQ4LTIwLjg3IDIxLjgzNS0yNi43MzggMzAuMzc4bC0uODU0IDEuMjYtLjgyOCAxLjI1MmMtOC40NjEgMTIuOTUtMTIuODI0IDI2LjA3OC0xMy4xODQgNDEuNTI4LS43NDMgMzEuODQ2IDEzLjE5NCA2Mi4yNTggMzkuNzU0IDg5LjE1NyAyNS4yNjcgMjUuNTkgNTEuMjI1IDM3LjQgODguNDkgNDAuNTE0bDEuODUuMTQ4YzQxLjc0NCAzLjIxIDcyLjg2Ny00LjAwMiA5NC4xMS0yNS4wODcgMjIuNTctMjIuNDAyIDI5LjkyLTUzLjA4OCAyNC41My05NC41Ny00Ljg1NS0zNy4zODItMjIuODg0LTcyLjUwMy01MC4wMS05OS42MTN6TTE2Ni45ODQgOTMuMzl2MTMuNTZoLTI4Ljc5N3Y3Ny43MTJoLTE0LjM0NVYxMDYuOTVIOTUuMDQ1VjkzLjM5aDcxLjk0eiIgZmlsbD0iIzI2MjYyNyIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Typeform Trigger";
        }
    })
    export class TypeformTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    