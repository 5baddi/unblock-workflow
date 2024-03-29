import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "snowflake";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjMgNjYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNOC42NDUgMTUuMzA0bDEzLjAwOCA3LjhhMy43MiAzLjcyIDAgMDA0LjU4OS0uNjAxIDQuMDEgNC4wMSAwIDAwMS4yMjctMi45MDhWMy45NjJhMy44MSAzLjgxIDAgMDAtMS44NjEtMy40MiAzLjgxIDMuODEgMCAwMC0zLjg5MyAwIDMuODEgMy44MSAwIDAwLTEuODYxIDMuNDJ2OC44OTZsLTcuMzg3LTQuNDNhMy43OSAzLjc5IDAgMDAtMi45MjItLjQgMy43MTIgMy43MTIgMCAwMC0yLjMgMS44NDQgNC4wNTIgNC4wNTIgMCAwMDEuNCA1LjQyMm0zMS4yNyA3LjhsMTMuMDA4LTcuOGE0LjA1NiA0LjA1NiAwIDAwMS40LTUuNDI0IDMuNzUgMy43NSAwIDAwLTUuMjItMS40NTJsLTcuMyA0LjM3di04Ljg0QTMuODEgMy44MSAwIDAwMzkuOTQuNTM0YTMuODEgMy44MSAwIDAwLTMuODg5IDAgMy44MSAzLjgxIDAgMDAtMS44NjMgMy40MTR2MTUuMzIzYTQuMDggNC4wOCAwIDAwLjQ5NCAyLjM2NyAzLjc0NSAzLjc0NSAwIDAwMi4zIDEuODQ0IDMuNzEgMy43MSAwIDAwMi45MjItLjRtLTExLjU2NyA4Ljg5NGMuMDEzLS4yNS4xMDgtLjUuMjcyLS42OGwxLjUyLTEuNThhMS4wNiAxLjA2IDAgMDEuNjU4LS4yODJoLjA1N2ExLjA1IDEuMDUgMCAwMS42NTYuMjgybDEuNTIgMS41OGExLjEyIDEuMTIgMCAwMS4yNzIuNjgxdi4wNmExLjEzIDEuMTMgMCAwMS0uMjcyLjY4M0wzMS41IDM0LjNhMS4wNCAxLjA0IDAgMDEtLjY1Ni4yODRoLS4wNTdhMS4wNDMgMS4wNDMgMCAwMS0uNjU4LS4yODRsLTEuNTItMS41OGExLjEzIDEuMTMgMCAwMS0uMjcyLS42ODN6bS00LjYwNC0uNjV2MS4zNjRhMS41NCAxLjU0IDAgMDAuMzcyLjkzbDUuMTYgNS4zNTdhMS40MiAxLjQyIDAgMDAuODk1LjM4NmgxLjMxMmExLjQyIDEuNDIgMCAwMC44OTUtLjM4Nmw1LjE2LTUuMzU3YTEuNTQgMS41NCAwIDAwLjM3Mi0uOTN2LTEuMzY0YTEuNTQgMS41NCAwIDAwLS4zNzItLjkzbC01LjE2LTUuMzU3YTEuNDIgMS40MiAwIDAwLS44OTUtLjM4NkgzMC4xNmExLjQyIDEuNDIgMCAwMC0uODk1LjM4NmwtNS4xNiA1LjM2N2ExLjU1IDEuNTUgMCAwMC0uMzcyLjkzbS0yMS44MTgtMy43MWw3LjM2NSA0LjQxNy03LjM2NSA0LjQxM0E0LjA2IDQuMDYgMCAwMC41MTYgNDEuODhhMy43NSAzLjc1IDAgMDAyLjMgMS44NDQgMy43NDYgMy43NDYgMCAwMDIuOTIyLS4zOTJsMTMuMDA4LTcuOGE0LjExMyA0LjExMyAwIDAwMS45LTMuNDkyIDQuMTYgNC4xNiAwIDAwLTEuOS0zLjQ5MmwtMTMuMDA4LTcuOGEzLjc5IDMuNzkgMCAwMC0yLjkyMi0uNCAzLjcxMiAzLjcxMiAwIDAwLTIuMyAxLjg0NCA0LjA1MyA0LjA1MyAwIDAwMS40IDUuNDIybTM4Ljk5NSA0LjQ0MmE0IDQgMCAwMDEuOTEgMy40NzdsMTMgNy44YTMuNzQ1IDMuNzQ1IDAgMDA1LjIyLTEuNDUxIDQuMDUgNC4wNSAwIDAwLTEuNC01LjQyNGwtNy4zNTYtNC40MTQgNy4zNjUtNC40MTdhNC4wNTQgNC4wNTQgMCAwMDEuNC01LjQyMiAzLjc0IDMuNzQgMCAwMC0yLjMtMS44NDQgMy43MDQgMy43MDQgMCAwMC0yLjkyLjRsLTEzIDcuOGE0IDQgMCAwMC0xLjkxIDMuNTA3bS0xNi42NTUgOC40NDZhMy43IDMuNyAwIDAwLTIuNjExLjQ2NGwtMTMuMDA4IDcuOGE0LjA1NSA0LjA1NSAwIDAwLTEuNCA1LjQyMiAzLjc0MyAzLjc0MyAwIDAwMi4zIDEuODQzIDMuNzUgMy43NSAwIDAwMi45MjItLjM5Mmw3LjM4Ny00LjQzdjguODNhMy44MSAzLjgxIDAgMDA1Ljc1NSAzLjQyNSAzLjgxIDMuODEgMCAwMDEuODU4LTMuNDI1VjQ0LjQwNmEzLjkxIDMuOTEgMCAwMC0zLjIwNS0zLjkwM20yOC42NiA4LjI3NmwtMTMuMDA4LTcuOGEzLjc1IDMuNzUgMCAwMC0yLjkyMi0uMzkyIDMuNzQgMy43NCAwIDAwLTIuMyAxLjg0MyA0LjA5IDQuMDkgMCAwMC0uNDk0IDIuMzd2MTUuMjVhMy44MSAzLjgxIDAgMDA1Ljc1NSAzLjQyNSAzLjgxIDMuODEgMCAwMDEuODU5LTMuNDI1di04Ljc2NGw3LjI4NyA0LjM3YTMuNzkgMy43OSAwIDAwMi45MjIuNCAzLjcxMiAzLjcxMiAwIDAwMi4zLTEuODQ0YzEuMDU3LTEuOS40NC00LjI4LTEuNC01LjQyMiIgc3Ryb2tlPSJub25lIiBmaWxsPSIjMjliNWU4IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Snowflake";
        }
    })
    export class Snowflake extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    