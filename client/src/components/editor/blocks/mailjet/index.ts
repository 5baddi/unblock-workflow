import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mailjet";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAuNSA5MCA0MDIuNiAyMjIuMiIgd2lkdGg9IjI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyOS4xIDE5NS41bC03IDQ2LjUtNDggNzAuMiAxNi4yLTguOUwzNTQgMTU4LjFsNDkuMS0yN3ptLTEuNy0xMi4zbDIwNi44LTQ3LTEzLjQtMS44LTU0LjMtNy42LTExNS4yLTE1LjlMLjUgOTBsNTUuMyA0MC42IDY5LjUgNTEuMXoiIGZpbGw9IiNmZWFkMGMiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mailjet";
        }
    })
    export class Mailjet extends NodeBlock
    {
    
    }