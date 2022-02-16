import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "start";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0icGxheSIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtcGxheSBmYS13LTE0Ij48cGF0aCBkYXRhLXYtNzhjMjdhOWE9IiIgZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDI0LjQgMjE0LjdMNzIuNCA2LjZDNDMuOC0xMC4zIDAgNi4xIDAgNDcuOVY0NjRjMCAzNy41IDQwLjcgNjAuMSA3Mi40IDQxLjNsMzUyLTIwOGMzMS40LTE4LjUgMzEuNS02NC4xIDAtODIuNnoiIGNsYXNzPSIiPjwvcGF0aD48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Start";
        }
    })
    export class Start extends NodeBlock
    {
    
    }