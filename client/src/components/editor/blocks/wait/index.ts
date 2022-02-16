import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "wait";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0icGF1c2UtY2lyY2xlIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1wYXVzZS1jaXJjbGUgZmEtdy0xNiI+PHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bS0xNiAzMjhjMCA4LjgtNy4yIDE2LTE2IDE2aC00OGMtOC44IDAtMTYtNy4yLTE2LTE2VjE3NmMwLTguOCA3LjItMTYgMTYtMTZoNDhjOC44IDAgMTYgNy4yIDE2IDE2djE2MHptMTEyIDBjMCA4LjgtNy4yIDE2LTE2IDE2aC00OGMtOC44IDAtMTYtNy4yLTE2LTE2VjE3NmMwLTguOCA3LjItMTYgMTYtMTZoNDhjOC44IDAgMTYgNy4yIDE2IDE2djE2MHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Wait";
        }
    })
    export class Wait extends NodeBlock
    {
    
    }