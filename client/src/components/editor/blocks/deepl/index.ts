import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "deepl";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB3aWR0aD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjU3OSAxMi4yNjhMMzQuMjA0LjY0M2E0Ljc4MSA0Ljc4MSAwIDAwLTQuNSAwTDkuMzI5IDEyLjI2OGMtMS4zNzUuNzUtMi4yNSAyLjI1LTIuMjUgMy44NzV2MjMuNzVjMCAxLjYyNS44NzUgMy4xMjUgMi4yNSAzLjg3NWwzNS4xMjUgMjAuMjVWNDkuNjQzbDEwLjEyNS01Ljg3NWMxLjM3NS0uNzUgMi4yNS0yLjI1IDIuMjUtMy44NzV2LTIzLjc1Yy4xMjUtMS42MjUtLjg3NS0zLjEyNS0yLjI1LTMuODc1em0tMjUuNzUgMjYuMTI1YzAgMi4zNzUtMS44NzUgNC4yNS00LjI1IDQuMjVzLTQuMjUtMS44NzUtNC4yNS00LjI1IDEuODc1LTQuMjUgNC4yNS00LjI1YzEuMTI1IDAgMiAuMzc1IDIuNzUgMWw3LjUtNC4yNWMuMzc1Ljg3NS44NzUgMS43NSAxLjM3NSAyLjVsLTcuNSA0LjI1Yy4xMjUuMjUuMTI1LjUuMTI1Ljc1em0xMy01LjYyNWE0LjIxNSA0LjIxNSAwIDAxLTQuMjUtNC4yNWMwLS4yNSAwLS41LjEyNS0uNzVsLTEwLjI1LTUuODc1Yy0uNzUuNjI1LTEuNzUgMS0yLjc1IDEtMi4zNzUgMC00LjI1LTEuODc1LTQuMjUtNC4yNXMxLjg3NS00LjI1IDQuMjUtNC4yNSA0LjI1IDEuODc1IDQuMjUgNC4yNWMwIC4yNSAwIC41LS4xMjUuNzVsMTAuMjUgNS44NzVjLjc1LS42MjUgMS43NS0xLjEyNSAyLjg3NS0xLjEyNWE0LjIxNSA0LjIxNSAwIDAxNC4yNSA0LjI1Yy0uMTI1IDIuMzc1LTIgNC4zNzUtNC4zNzUgNC4zNzV6IiBmaWxsPSIjMDQyYjQ4Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "DeepL";
        }
    })
    export class DeepL extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    