
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "date-and-time";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iY2xvY2siIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWNsb2NrIGZhLXctMTYiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTYsOEMxMTksOCw4LDExOSw4LDI1NlMxMTksNTA0LDI1Niw1MDQsNTA0LDM5Myw1MDQsMjU2LDM5Myw4LDI1Niw4Wm05Mi40OSwzMTNoMGwtMjAsMjVhMTYsMTYsMCwwLDEtMjIuNDksMi41aDBsLTY3LTQ5LjcyYTQwLDQwLDAsMCwxLTE1LTMxLjIzVjExMmExNiwxNiwwLDAsMSwxNi0xNmgzMmExNiwxNiwwLDAsMSwxNiwxNlYyNTZsNTgsNDIuNUExNiwxNiwwLDAsMSwzNDguNDksMzIxWiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==",
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