import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "icalendar";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY2FsZW5kYXIiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDQ4IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNhbGVuZGFyIGZhLXctMTQiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxOTJoNDI0YzYuNiAwIDEyIDUuNCAxMiAxMnYyNjBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjIwNGMwLTYuNiA1LjQtMTIgMTItMTJ6bTQzNi00NHYtMzZjMC0yNi41LTIxLjUtNDgtNDgtNDhoLTQ4VjEyYzAtNi42LTUuNC0xMi0xMi0xMmgtNDBjLTYuNiAwLTEyIDUuNC0xMiAxMnY1MkgxNjBWMTJjMC02LjYtNS40LTEyLTEyLTEyaC00MGMtNi42IDAtMTIgNS40LTEyIDEydjUySDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEydjM2YzAgNi42IDUuNCAxMiAxMiAxMmg0MjRjNi42IDAgMTItNS40IDEyLTEyeiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "iCalendar";
        }
    })
    export class iCalendar extends NodeBlock
    {
    
    }