import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "erpnext";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBmaWxsPSIjNzU3NEZGIiBkPSJNNTEyIDQ0OGMwIDM1LjItMjguOCA2NC02NCA2NEg2NGMtMzUuMiAwLTY0LTI4LjgtNjQtNjRWNjRDMCAyOC44IDI4LjggMCA2NCAwaDM4NGMzNS4yIDAgNjQgMjguOCA2NCA2NHYzODR6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE1MC40ODMgMzcxLjY4NFYxNDEuMTVjMC0xNS4xNjcgOS41MzQtMjUuMTMzIDIzLjgzMy0yNS4xMzNoMTYyLjVjMTMuODY2IDAgMjAuOCA2LjkzMyAyMC44IDE4LjYzM3YyLjZjMCAxMi4xMzMtNi45MzQgMTguNjMzLTIwLjggMTguNjMzaC0xNDEuN3Y3OC40MzRIMzA0Ljc1YzE0LjMgMCAyMC44IDYuMDY2IDIwLjggMTcuNzY3djEuM2MwIDEyLjEzMy02LjkzNCAxOC42MzMtMjAuOCAxOC42MzNIMTk1LjExN3Y4NC45MzRoMTQ0LjNjMTMuODY3IDAgMjAuMzY3IDYuMDY2IDIwLjM2NyAxNy43Njd2Mi4xNjdjMCAxMi41NjYtNi41IDE5LjUtMjAuMzY3IDE5LjVoLTE2NS4xYy0xNC4zLS4wMDEtMjMuODM0LTkuNTM0LTIzLjgzNC0yNC43MDF6Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "ERPNext";
        }
    })
    export class ERPNext extends NodeBlock
    {
    
    }