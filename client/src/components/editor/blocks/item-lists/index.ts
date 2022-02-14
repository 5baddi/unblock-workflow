import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "item-lists";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjEwIDIxMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6I0ZGNkQ1QTt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOC44LDE4LjhDOC40LDE4LjgsMCwyNy4xLDAsMzcuNXM4LjQsMTguOCwxOC44LDE4LjhzMTguOC04LjQsMTguOC0xOC44UzI5LjEsMTguOCwxOC44LDE4Ljh6IE0xOC44LDgxLjIKICAgIEM4LjQsODEuMiwwLDg5LjYsMCwxMDBzOC40LDE4LjgsMTguOCwxOC44czE4LjgtOC40LDE4LjgtMTguOFMyOS4xLDgxLjIsMTguOCw4MS4yeiBNMTguOCwxNDMuOEM4LjQsMTQzLjgsMCwxNTIuMSwwLDE2Mi41CiAgICBzOC40LDE4LjgsMTguOCwxOC44czE4LjgtOC40LDE4LjgtMTguOFMyOS4xLDE0My44LDE4LjgsMTQzLjh6IE0xOTMuOCwxNTBoLTEyNWMtMy41LDAtNi4yLDIuOC02LjIsNi4ydjEyLjVjMCwzLjUsMi44LDYuMiw2LjIsNi4yCiAgICBoMTI1YzMuNSwwLDYuMi0yLjgsNi4yLTYuMnYtMTIuNUMyMDAsMTUyLjgsMTk3LjIsMTUwLDE5My44LDE1MHogTTE5My44LDI1aC0xMjVjLTMuNSwwLTYuMiwyLjgtNi4yLDYuMnYxMi41CiAgICBjMCwzLjUsMi44LDYuMiw2LjIsNi4yaDEyNWMzLjUsMCw2LjItMi44LDYuMi02LjJWMzEuMkMyMDAsMjcuOCwxOTcuMiwyNSwxOTMuOCwyNXogTTE5My44LDg3LjVoLTEyNWMtMy41LDAtNi4yLDIuOC02LjIsNi4ydjEyLjUKICAgIGMwLDMuNSwyLjgsNi4yLDYuMiw2LjJoMTI1YzMuNSwwLDYuMi0yLjgsNi4yLTYuMlY5My44QzIwMCw5MC4zLDE5Ny4yLDg3LjUsMTkzLjgsODcuNXoiLz4KPC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Item Lists";
        }
    })
    export class ItemLists extends NodeBlock
    {
    
    }