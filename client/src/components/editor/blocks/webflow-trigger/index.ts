import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "webflow-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcgNjYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9IjEiIHk9IjEiLz48c3ltYm9sIGlkPSJhIiBvdmVyZmxvdz0idmlzaWJsZSI+PGcgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik0wIDMyQzAgMTQuMjcyIDE0LjI3MiAwIDMyIDBzMzIgMTQuMjcyIDMyIDMyLTE0LjI3MiAzMi0zMiAzMlMwIDQ5LjcyOCAwIDMyeiIgZmlsbD0iIzQzNTNmZiIvPjxwYXRoIGQ9Ik00MS40IDI4LjJsLTIuOSA5LjE0YzAtLjctMi0xNS44Ni0yLTE1Ljg2LTQuNiAwLTcuMDQgMy4yNi04LjMyIDYuNzJsLTMuNTQgOS4xNmMwLS42Ni0uNS05LjA4LS41LTkuMDhhNy40OCA3LjQ4IDAgMDAtNy4yNi02Ljc4bDMuNzYgMjIuOTZjNC44IDAgNy40LTMuMjYgOC43NC02LjcybDMtNy44YzAgLjMyIDIgMTQuNTIgMiAxNC41MmE5LjI0IDkuMjQgMCAwMDguOC02LjQ2bDYuOC0xNi41MmMtNC44IDAtNy4zMiAzLjI2LTguNiA2LjcyeiIvPjwvZz48L3N5bWJvbD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Webflow Trigger";
        }
    })
    export class WebflowTrigger extends NodeBlock
    {
    
    }