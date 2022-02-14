import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "activation-trigger";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0icGxheS1jaXJjbGUiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBsYXktY2lyY2xlIGZhLXctMTYiPgogICAgPHBhdGggZGF0YS12LTc4YzI3YTlhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTExNS43IDI3MmwtMTc2IDEwMWMtMTUuOCA4LjgtMzUuNy0yLjUtMzUuNy0yMVYxNTJjMC0xOC40IDE5LjgtMjkuOCAzNS43LTIxbDE3NiAxMDdjMTYuNCA5LjIgMTYuNCAzMi45IDAgNDJ6IiBjbGFzcz0iIj48L3BhdGg+Cjwvc3ZnPg==",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Activation trigger";
    }
})
export class ActivationTrigger extends NodeBlock
{

}