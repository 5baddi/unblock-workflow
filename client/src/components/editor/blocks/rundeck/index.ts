import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "rundeck";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAASFBMVEX////5Fin+4+X8qa78naL5Jjb6X2j6U13/+fr/7O3+19r9wsX5N0T/8/T+ztH7c3r8uLv8l5z8ipD6TVj7goj7dn76Zm/6QEzveVjTAAAAsklEQVRIx+3WWw6FIAxFUR4CLSC+df4zvSM4Kbf+Gdb/jo0RixmGP+QJKSTGfFog5Y5HH6jeZzEmH0BcVyPixQLRyXV7UL11DD6huBYjcncALu4Y3CPODB9D7AAmOfYRuJsRuWiBheW6VBAHLw/OlwWOrJgbxOBcq8duj/6FzXsCYjMSchCZ4QOoeCSLcU4B6Pku9YuO1qpfsS7qlzttcOhV/+Oy56y/kaT85hI3TvGg9QO+zgotYna1swAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Rundeck";
        }
    })
    export class Rundeck extends NodeBlock
    {
    
    }