import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "uptimerobot";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2IiBmaWxsPSIjMkE4QzAwIi8+PGNpcmNsZSBjeD0iMjU2LjUiIGN5PSIyNTYuNSIgcj0iMTQxLjUiIGZpbGw9IiMyMDIwMUYiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyMCIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "UptimeRobot";
        }
    })
    export class UptimeRobot extends NodeBlock
    {
    
    }