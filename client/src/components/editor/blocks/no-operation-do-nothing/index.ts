import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "no-operation-do-nothing";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "iconBase",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "No Operation, do nothing";
        }
    })
    export class NoOperationDonothing extends NodeBlock
    {
    
    }