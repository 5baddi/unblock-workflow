import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "dropbox";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcgNjIiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9IjEiIHk9IjEiLz48c3ltYm9sIGlkPSJhIiBvdmVyZmxvdz0idmlzaWJsZSI+PHBhdGggZD0iTTE4Ljg3NC4wMkwwIDEyLjE4bDEzLjA2NiAxMC41MjZMMzIgMTEuMDMybS0zMiAyMmwxOC44NzQgMTIuNEwzMiAzNC40MjIgMTMuMDY2IDIyLjY4Nk0zMiAzNC40MjJsMTMuMTg4IDExLjAxTDY0IDMzLjE1MiA1MC45OTQgMjIuNjg2TTY0IDEyLjI4TDQ1LjE4OCAwIDMyIDExLjAxbDE4Ljk5NCAxMS42NzRNMzIuMDYgMzYuNzc4TDE4Ljg3MiA0Ny43MjZsLTUuNjg2LTMuNjl2NC4xNzRMMzIuMDYgNTkuNTIyIDUwLjkzNCA0OC4yMXYtNC4xNzRsLTUuNjg2IDMuNjkiIHN0cm9rZT0ibm9uZSIgZmlsbD0iIzAwN2VlNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Dropbox";
        }
    })
    export class Dropbox extends NodeBlock
    {
    
    }