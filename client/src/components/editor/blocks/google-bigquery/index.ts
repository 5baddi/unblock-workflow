import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleBigQuery";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNTgiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTE0LjQ4IDU0LjQ3M0wuNTU4IDMwLjM1OWE0LjE2MyA0LjE2MyAwIDAxMC00LjE2NEwxNC40OCAyLjA4MkE0LjE2MyA0LjE2MyAwIDAxMTguMDggMGgyNy44NTdjMS40OC4wMDcgMi44NDUuOCAzLjU4NSAyLjA4MmwxMy45MiAyNC4xMTNhNC4xNjMgNC4xNjMgMCAwMTAgNC4xNjRMNDkuNTIgNTQuNDczYTQuMTYzIDQuMTYzIDAgMDEtMy42IDIuMDgySDE4LjA3YTQuMTY3IDQuMTY3IDAgMDEtMy41OTMtMi4wODJ6IiBmaWxsPSIjNDM4NmZhIi8+PHBhdGggZD0iTTQwLjY5NyAyMC41MTJzMy44NyA5LjI4My0xLjQwNiAxNC41NDUtMTQuODgzIDEuODk0LTE0Ljg4MyAxLjg5NEw0My45NSA1Ni41NDdoMS45ODRhNC4xNjMgNC4xNjMgMCAwMDMuNi0yLjA4Mmw5LjIxNi0xNS45NTh6IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik00NS4yNjYgMzkuNTA3TDQxIDM1LjIzYS42Ny42NyAwIDAwLS4xNTgtLjEyIDExLjYzIDExLjYzIDAgMDAtMS40OTktMTUuODU5IDExLjYzIDExLjYzIDAgMDAtMTYuMzk2IDE2LjQzNiAxMS42MyAxMS42MyAwIDAwMTUuODYzIDEuNDYuNjk1LjY5NSAwIDAwLjExMy4xNWw0LjI3NyA0LjI3N2EuNjcuNjcgMCAwMC45NDcgMGwxLjEyLTEuMTJhLjY3LjY3IDAgMDAwLS45NDd6TTMxLjY0IDM2Ljc0MWE4Ljc1IDguNzUgMCAwMS02LjE4OC0xNC45MzcgOC43NSA4Ljc1IDAgMDExNC45MzcgNi4xODggOC43NSA4Ljc1IDAgMDEtOC43NDkgOC43NDl6bS01LjU5My05LjIxNnYzLjYxNmE2LjQyNiA2LjQyNiAwIDAwMi4zMzggMi4zNzV2LTYuMDEzem00LjM3NS0yLjk5OHY5Ljc3MmE2LjQ1IDYuNDUgMCAwMDIuMzM4IDB2LTkuNzcyem02Ljc2NCA2LjYwNnYtMi4xNDJIMzQuODV2NC41YTYuNDMgNi40MyAwIDAwMi4zMzgtMi4zNjh6Ii8+PC9nPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google BigQuery";
        }
    })
    export class GoogleBigQuery extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    