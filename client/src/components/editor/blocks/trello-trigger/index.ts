import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "trello-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGw9IiMwMDc5QkYiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMjUiLz48cmVjdCBmaWxsPSIjRkZGIiB4PSIxMTMiIHk9IjI2IiB3aWR0aD0iNjEiIGhlaWdodD0iODcuNSIgcng9IjEyIi8+PHJlY3QgZmlsbD0iI0ZGRiIgeD0iMjYiIHk9IjI2IiB3aWR0aD0iNjEiIGhlaWdodD0iMTM3LjUiIHJ4PSIxMiIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Trello Trigger";
        }
    })
    export class TrelloTrigger extends NodeBlock
    {
    
    }