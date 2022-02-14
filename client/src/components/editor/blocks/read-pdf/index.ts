import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "read-pdf";
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
            return "Read PDF";
        }
    })
    export class ReadPDF extends NodeBlock
    {
    
    }