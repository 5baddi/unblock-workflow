import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "localFileTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0iZm9sZGVyLW9wZW4iIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTc2IDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZvbGRlci1vcGVuIGZhLXctMTgiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik01NzIuNjk0IDI5Mi4wOTNMNTAwLjI3IDQxNi4yNDhBNjMuOTk3IDYzLjk5NyAwIDAgMSA0NDQuOTg5IDQ0OEg0NS4wMjVjLTE4LjUyMyAwLTMwLjA2NC0yMC4wOTMtMjAuNzMxLTM2LjA5M2w3Mi40MjQtMTI0LjE1NUE2NCA2NCAwIDAgMSAxNTIgMjU2aDM5OS45NjRjMTguNTIzIDAgMzAuMDY0IDIwLjA5MyAyMC43MyAzNi4wOTN6TTE1MiAyMjRoMzI4di00OGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4SDI3MmwtNjQtNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMnYyNzguMDQ2bDY5LjA3Ny0xMTguNDE4Qzg2LjIxNCAyNDIuMjUgMTE3Ljk4OSAyMjQgMTUyIDIyNHoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Local File Trigger";
        }
    })
    export class LocalFileTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    