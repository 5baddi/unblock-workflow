import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "googleSlides";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItNjAgLTYwIDYzMCA2MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0MC44IDE0MC4yVjQ3OWMwIDE4LjItMTQuOCAzMy0zMyAzM0gxMDIuOWMtMTguMiAwLTMzLTE0LjgtMzMtMzNWMzNjMC0xOC4yIDE0LjgtMzMgMzMtMzNoMTk3LjZ6IiBmaWxsPSIjZjViOTEyIi8+PHBhdGggZD0iTTMyMy42IDIzMy41SDE4OS4xYy0xMi41IDAtMjIuNiAxMC4xLTIyLjYgMjIuNnYxMzQuNWMwIDEyLjUgMTAuMSAyMi42IDIyLjYgMjIuNmgxMzQuNWMxMi41IDAgMjIuNi0xMC4xIDIyLjYtMjIuNlYyNTZjMC0xMi40LTEwLjEtMjIuNS0yMi42LTIyLjV6bS0uNyAxMzkuNWgtMTMzdi05MC41aDEzM3oiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzE5LjYgMTM0LjRsMTIxLjEgOTguMXYtOTIuMkwzNzIgMTAwLjV6IiBvcGFjaXR5PSIuMTkiLz48cGF0aCBkPSJNNDQxLjQgMTQwLjJIMzM0LjJjLTE4LjIgMC0zMy0xNC44LTMzLTMzVjB6IiBmaWxsPSIjZmFkYzg3Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Slides";
        }
    })
    export class GoogleSlides extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    