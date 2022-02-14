import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "asana-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSI1MCUiIGN5PSI1NSUiIGZ4PSI1MCUiIGZ5PSI1NSUiIHI9IjcyLjUwNyUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjkyNDA0IDAgMCAxIC4wMzggMCkiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjRkZCOTAwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0Y5NUQ4RiIgb2Zmc2V0PSI2MCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRjk1MzUzIiBvZmZzZXQ9Ijk5LjkxJSIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik00NS41OTQgMjguNWMtNi45OTQuMDAzLTEyLjY2NCA1LjY3My0xMi42NjcgMTIuNjY3LjAwMyA2Ljk5NSA1LjY3MyAxMi42NjQgMTIuNjY3IDEyLjY2OCA2Ljk5NS0uMDA0IDEyLjY2NC01LjY3MyAxMi42NjctMTIuNjY4LS4wMDMtNi45OTQtNS42NzItMTIuNjY0LTEyLjY2Ny0xMi42Njd6bS0zMi45MjcuMDAxQzUuNjczIDI4LjUwNS4wMDMgMzQuMTc0IDAgNDEuMTdjLjAwMyA2Ljk5NCA1LjY3MyAxMi42NjQgMTIuNjY3IDEyLjY2NyA2Ljk5NS0uMDAzIDEyLjY2NC01LjY3MyAxMi42NjgtMTIuNjY3LS4wMDQtNi45OTUtNS42NzMtMTIuNjY0LTEyLjY2OC0xMi42Njh6TTQxLjc5IDEyLjY2N2MtLjAwMiA2Ljk5NS01LjY3MSAxMi42NjUtMTIuNjY2IDEyLjY3LTYuOTk1LS4wMDQtMTIuNjY0LTUuNjc0LTEyLjY2Ny0xMi42N0MxNi40NiA1LjY3MyAyMi4xMy4wMDMgMjkuMTIzIDBjNi45OTQuMDA0IDEyLjY2MyA1LjY3MyAxMi42NjYgMTIuNjY3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjczMiAyLjczMikiIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Asana Trigger";
        }
    })
    export class AsanaTrigger extends NodeBlock
    {
    
    }