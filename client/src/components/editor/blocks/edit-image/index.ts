import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "edit-image";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iaW1hZ2UiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWltYWdlIGZhLXctMTYiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00NjQgNDQ4SDQ4Yy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4VjExMmMwLTI2LjUxIDIxLjQ5LTQ4IDQ4LTQ4aDQxNmMyNi41MSAwIDQ4IDIxLjQ5IDQ4IDQ4djI4OGMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4ek0xMTIgMTIwYy0zMC45MjggMC01NiAyNS4wNzItNTYgNTZzMjUuMDcyIDU2IDU2IDU2IDU2LTI1LjA3MiA1Ni01Ni0yNS4wNzItNTYtNTYtNTZ6TTY0IDM4NGgzODRWMjcybC04Ny41MTUtODcuNTE1Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMMjA4IDMyMGwtNTUuNTE1LTU1LjUxNWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDY0IDMzNnY0OHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Edit Image";
        }
    })
    export class EditImage extends NodeBlock
    {
    
    }