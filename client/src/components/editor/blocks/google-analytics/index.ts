import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "google-analytics";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDE5MnYxOTJIMHoiLz48cGF0aCBmaWxsPSIjRjlBQjAwIiBkPSJNMTMwIDI5djEzMmMwIDE0Ljc3IDEwLjE5IDIzIDIxIDIzIDEwIDAgMjEtNyAyMS0yM1YzMGMwLTEzLjU0LTEwLTIyLTIxLTIycy0yMSA5LjMzLTIxIDIxeiIvPjxwYXRoIGZpbGw9IiNFMzc0MDAiIGQ9Ik03NSA5NnY2NWMwIDE0Ljc3IDEwLjE5IDIzIDIxIDIzIDEwIDAgMjEtNyAyMS0yM1Y5N2MwLTEzLjU0LTEwLTIyLTIxLTIycy0yMSA5LjMzLTIxIDIxeiIvPjxjaXJjbGUgZmlsbD0iI0UzNzQwMCIgY3g9IjQxIiBjeT0iMTYzIiByPSIyMSIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Analytics";
        }
    })
    export class GoogleAnalytics extends NodeBlock
    {
    
    }