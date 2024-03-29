import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "openWeatherMap";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0ic3VuIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1zdW4gZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI1NiAxNjBjLTUyLjkgMC05NiA0My4xLTk2IDk2czQzLjEgOTYgOTYgOTYgOTYtNDMuMSA5Ni05Ni00My4xLTk2LTk2LTk2em0yNDYuNCA4MC41bC05NC43LTQ3LjMgMzMuNS0xMDAuNGM0LjUtMTMuNi04LjQtMjYuNS0yMS45LTIxLjlsLTEwMC40IDMzLjUtNDcuNC05NC44Yy02LjQtMTIuOC0yNC42LTEyLjgtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40Yy0xMi44IDYuNC0xMi44IDI0LjYgMCAzMWw5NC43IDQ3LjMtMzMuNSAxMDAuNWMtNC41IDEzLjYgOC40IDI2LjUgMjEuOSAyMS45bDEwMC40LTMzLjUgNDcuMyA5NC43YzYuNCAxMi44IDI0LjYgMTIuOCAzMSAwbDQ3LjMtOTQuNyAxMDAuNCAzMy41YzEzLjYgNC41IDI2LjUtOC40IDIxLjktMjEuOWwtMzMuNS0xMDAuNCA5NC43LTQ3LjNjMTMtNi41IDEzLTI0LjcuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45IDQ5LjktMTMxLjEgNDkuOS0xODEgMC00OS45LTQ5LjktNDkuOS0xMzEuMSAwLTE4MSA0OS45LTQ5LjkgMTMxLjEtNDkuOSAxODEgMCA0OS45IDQ5LjkgNDkuOSAxMzEuMSAwIDE4MXoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "OpenWeatherMap";
        }
    })
    export class OpenWeatherMap extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    