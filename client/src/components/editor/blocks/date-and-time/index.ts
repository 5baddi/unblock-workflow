import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "date-and-time";
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
            return "Date & Time";
        }
    })
    export class DateAndTime extends NodeBlock
    {
    
    }