import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "formstackTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUuMDA2IDU1LjAwNiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHVzZSB4bGluazpocmVmPSIjQSIgeD0iLjUwMyIgeT0iLjUwMyIvPjxzeW1ib2wgaWQ9IkEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiPjxwYXRoIGQ9Ik01MC42NjcgNS4zMzNoMy43MjNhMS42IDEuNiAwIDAgMSAxLjYgMS42VjQ2LjM4YTEuNiAxLjYgMCAwIDEtMS42IDEuNmgtMy43MjN6bTggNS4zMzNoMy43MjNhMS42IDEuNiAwIDAgMSAxLjYgMS42djI4Ljc4YTEuNiAxLjYgMCAwIDEtMS42IDEuNjFoLTMuNzIzek0wIDEuNkMwIC43MTQuNzE0IDAgMS42IDBoNDQuOGMuODg2IDAgMS42LjcxNCAxLjYgMS42djUwLjEzM2MwIC44ODYtLjcxNCAxLjYtMS42IDEuNkgxLjZjLS44ODYgMC0xLjYtLjcxNC0xLjYtMS42eiIgZmlsbD0iIzIxYjU3MyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTExLjIgOC41MzNoMjQuNjI0Yy4yMjcgMCAuNDI4LjE0My41MDMuMzU3cy4wMDcuNDUyLS4xNy41OTNMMTEuNTMzIDI5LjE4MmMtLjE2LjEyOC0uMzc5LjE1My0uNTY0LjA2NHMtLjMwMi0uMjc2LS4zMDItLjQ4MVY5LjA1NmMwLS4yOTUuMjM5LS41MzMuNTMzLS41MzN6bS0uNTMzIDMyLjAyNHYtOC4yNTJjMC0uMTY0LjA3NS0uMzE5LjIwNC0uNDJsNy4xNzMtNS42M2MuMDk0LS4wNzQuMjEtLjExNC4zMjktLjExNGgxMy4wMzZjLjIzNCAwIC40NC4xNTIuNTA5LjM3NXMtLjAxNS40NjYtLjIwOC41OThMMTEuNTAyIDQwLjk5NmMtLjE2My4xMTItLjM3NS4xMjQtLjU1LjAzMnMtLjI4NS0uMjc0LS4yODUtLjQ3MnptLjIyOCAzLjA5NWw3LjQ2Ny01LjIwM2MuMTYzLS4xMTQuMzc2LS4xMjcuNTUyLS4wMzVzLjI4Ny4yNzQuMjg3LjQ3M3Y1LjQyYzAgLjI5NS0uMjM5LjUzMy0uNTMzLjUzM0gxMS4xN2MtLjEzNiAwLS4yNjctLjA1NC0uMzY0LS4xNXMtLjE1MS0uMjI4LS4xNS0uMzY0di0uMjM2YzAtLjE3NS4wODUtLjMzOC4yMjgtLjQzOHoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Formstack Trigger";
        }
    })
    export class FormstackTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    