
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "emailreadimap";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iaW5ib3giIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWluYm94IGZhLXctMTgiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01NjcuOTM4IDI0My45MDhMNDYyLjI1IDg1LjM3NEE0OC4wMDMgNDguMDAzIDAgMCAwIDQyMi4zMTEgNjRIMTUzLjY4OWE0OCA0OCAwIDAgMC0zOS45MzggMjEuMzc0TDguMDYyIDI0My45MDhBNDcuOTk0IDQ3Ljk5NCAwIDAgMCAwIDI3MC41MzNWNDAwYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoNDgwYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWMjcwLjUzM2E0Ny45OTQgNDcuOTk0IDAgMCAwLTguMDYyLTI2LjYyNXpNMTYyLjI1MiAxMjhoMjUxLjQ5N2w4NS4zMzMgMTI4SDM3NmwtMzIgNjRIMjMybC0zMi02NEg3Ni45MThsODUuMzM0LTEyOHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "EmailReadImap";
    }
})
export class EmailReadImap extends NodeBlock
{

}