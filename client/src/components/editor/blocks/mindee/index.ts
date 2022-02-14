import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mindee";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTE4LjMyOSAwaDEzLjc0NnYzMkgxOC4zM3YtNC41N2g5LjE2NFY0LjU3MkgxOC4zM1Ywek00LjU4MiAxMy43MTRWMjcuNDNoOS4xNjVWMzJIMFYwaDEzLjc0N3Y0LjU3MUg0LjU4MnY5LjE0M3ptNC41ODIgMHYtNC41N2gxMy43NDd2NC41N0g5LjE2NHptMCA5LjE0M3YtNC41NzFoNC41ODN2NC41NzFIOS4xNjR6IiBmaWxsPSIjRkQzMjQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mindee";
        }
    })
    export class Mindee extends NodeBlock
    {
    
    }