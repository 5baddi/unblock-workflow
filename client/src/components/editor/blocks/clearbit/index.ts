import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "clearbit";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iNTAlIiB4Mj0iMTAwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0RFRjJGRSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0RCRjFGRSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMCUiIHgyPSI1MCUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1N0JDRkQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM1MUI1RkQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjM3LjUlIiB4Mj0iNjIuNSUiIHkxPSIwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMxQ0E3RkQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxNDhDRkMiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik03MiAzNnYxNi43N2wtLjAwNC44NjhjLS4wNiA2LjAzNS0uNzUgOC4zNTMtMiAxMC42ODhhMTMuNjMgMTMuNjMgMCAwMS01LjY3IDUuNjdsLS4zMjYuMTcxQzYxLjY1OCA3MS4zNjQgNTkuMTYgNzIgNTIuNzcgNzJIMzZWMzZoMzZ6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTY0LjMyNiAyLjAwM2ExMy42MyAxMy42MyAwIDAxNS42NyA1LjY3bC4xNzEuMzI3QzcxLjM2NCAxMC4zNDIgNzIgMTIuODQgNzIgMTkuMjNWMzZIMzZWMGgxNi43N2M2LjY4NyAwIDkuMTEyLjY5NiAxMS41NTYgMi4wMDN6Ii8+PHBhdGggZmlsbD0idXJsKCNjKSIgZD0iTTM2IDB2NzJIMTkuMjNsLS44NjgtLjAwNGMtNi4wMzUtLjA2LTguMzUzLS43NS0xMC42ODgtMmExMy42MyAxMy42MyAwIDAxLTUuNjctNS42N0wxLjgzMiA2NEMuNjM2IDYxLjY1OCAwIDU5LjE2IDAgNTIuNzdWMTkuMjNjMC02LjY4Ny42OTYtOS4xMTIgMi4wMDMtMTEuNTU2YTEzLjYzIDEzLjYzIDAgMDE1LjY3LTUuNjdMOCAxLjgzMkMxMC4zNDIuNjM2IDEyLjg0IDAgMTkuMjMgMEgzNnoiLz48L2c+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Clearbit";
        }
    })
    export class Clearbit extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    