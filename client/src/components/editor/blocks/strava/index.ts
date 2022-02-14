import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "strava";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI1MDAiIGhlaWdodD0iMjUwMCI+PHBhdGggZD0iTTAgMGgxNnYxNkgweiIgZmlsbD0iI2ZjNGMwMiIvPjxnIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTYuOSA4LjhsMi41IDQuNSAyLjQtNC41aC0xLjVsLS45IDEuNy0xLTEuN3oiIG9wYWNpdHk9Ii42Ii8+PHBhdGggZD0iTTcuMiAyLjVsMy4xIDYuM0g0em0wIDMuOGwxLjIgMi41SDUuOXoiLz48L2c+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Strava";
        }
    })
    export class Strava extends NodeBlock
    {
    
    }