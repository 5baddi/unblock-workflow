import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "zendesk-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjRDMCAxMC43NDUyIDEwLjc0NTIgMCAyNCAwQzM3LjI1NDggMCA0OCAxMC43NDUyIDQ4IDI0QzQ4IDM3LjI1NDggMzcuMjU0OCA0OCAyNCA0OEMxMC43NDUyIDQ4IDAgMzcuMjU0OCAwIDI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS40NDc5IDE4LjY1MzJDMTkuNDk3MSAxOC42NTMyIDIyLjc3OTYgMTUuMjc4IDIyLjc3OTYgMTEuMTE0NUg4LjExNjA5QzguMTE2MDkgMTUuMjc4IDExLjM5ODYgMTguNjUzMiAxNS40NDc5IDE4LjY1MzJaTTIyLjc3OTYgMzUuODUxNVYxNy42NDgzTDguMTE2MDkgMzUuODUxNUgyMi43Nzk2Wk0yNS4xOTUzIDM1Ljg1MTZDMjUuMTk1MyAzMS42ODgxIDI4LjQ3NzkgMjguMzEyOSAzMi41MjcxIDI4LjMxMjlDMzYuNTc2MyAyOC4zMTI5IDM5Ljg1ODggMzEuNjg4MSAzOS44NTg4IDM1Ljg1MTZIMjUuMTk1M1pNMjUuMTk1MyAxMS4xMTQ1VjI5LjMxNzdMMzkuODYwNCAxMS4xMTQ1SDI1LjE5NTNaIiBmaWxsPSIjMDMzNjNEIi8+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Zendesk Trigger";
        }
    })
    export class ZendeskTrigger extends NodeBlock
    {
    
    }