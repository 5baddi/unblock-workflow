import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "sendgrid";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTAgMjEuMjVoMjEuMzc0djIxLjM3NEgweiIvPjxwYXRoIGQ9Ik0wIDIxLjI1aDIxLjM3NHYyMS4zNzRIMHoiIGZpbGw9IiM5OWUxZjQiLz48cGF0aCBkPSJNMjEuMzc0IDQyLjYyNmgyMS4yNXYyMS4yNWgtMjEuMjV6Ii8+PHBhdGggZD0iTTIxLjM3NCA0Mi42MjZoMjEuMjV2MjEuMjVoLTIxLjI1eiIgZmlsbD0iIzk5ZTFmNCIvPjxwYXRoIGQ9Ik0wIDYzLjg3N2gyMS4zNzRWNjRIMHptMC0yMS4yNWgyMS4zNzR2MjEuMjVIMHoiIGZpbGw9IiMxYTgyZTIiLz48cGF0aCBkPSJNMjEuMzc0IDBoMjEuMjV2MjEuMjVoLTIxLjI1em0yMS4yNTIgMjEuMzc0SDY0djIxLjI1SDQyLjYyNnoiIGZpbGw9IiMwMGIzZTMiLz48cGF0aCBkPSJNMjEuMzc0IDQyLjYyNmgyMS4yNVYyMS4yNWgtMjEuMjV6IiBmaWxsPSIjMDA5ZGQ5Ii8+PHBhdGggZD0iTTQyLjYyNiAwSDY0djIxLjI1SDQyLjYyNnptMCAyMS4yNUg2NHYuMTIzSDQyLjYyNnoiIGZpbGw9IiMxYTgyZTIiLz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "SendGrid";
        }
    })
    export class SendGrid extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    