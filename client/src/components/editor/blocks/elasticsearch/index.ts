import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "elasticsearch";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSI2IDUgNTQgNTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYzLjEgKDkyNDUyKSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5lbGFzdGljLXNlYXJjaC1sb2dvLWNvbG9yLTY0cHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iZWxhc3RpYy1zZWFyY2gtbG9nby1jb2xvci02NHB4IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cmVjdCBpZD0iYm91bmRpbmctYm94IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iZ3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCA0Ljk5OTUwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDcuNzI0Niw5LjcwOCBMNDcuNzI3Niw5LjcwMiBDNDIuNzc0NiwzLjc3NCAzNS4zMjg2LDAgMjYuOTk5NiwwIEMxNi40MDA2LDAgNy4yMzI2LDYuMTEyIDIuODEzNiwxNSBMMzguMDA1NiwxNSBDNDAuNTMwNiwxNSA0Mi45ODg2LDE0LjEzIDQ0LjkyMDYsMTIuNTA0IEM0NS45MjQ2LDExLjY1OSA0Ni44NjM2LDEwLjczOSA0Ny43MjQ2LDkuNzA4IiBpZD0iRmlsbC0xIiBmaWxsPSIjRkVDNTE0Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDI3LjAwMDUgQzAsMjkuNDIyNSAwLjMyNCwzMS43Njc1IDAuOTIyLDM0LjAwMDUgTDM0LDM0LjAwMDUgQzM3Ljg2NiwzNC4wMDA1IDQxLDMwLjg2NjUgNDEsMjcuMDAwNSBDNDEsMjMuMTM0NSAzNy44NjYsMjAuMDAwNSAzNCwyMC4wMDA1IEwwLjkyMiwyMC4wMDA1IEMwLjMyNCwyMi4yMzM1IDAsMjQuNTc4NSAwLDI3LjAwMDUiIGlkPSJGaWxsLTQiIGZpbGw9IiMzNDM3NDEiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTQ3LjcyNDYsNDQuMjkzIEw0Ny43Mjc2LDQ0LjI5OSBDNDIuNzc0Niw1MC4yMjcgMzUuMzI4Niw1NC4wMDEgMjYuOTk5Niw1NC4wMDEgQzE2LjQwMDYsNTQuMDAxIDcuMjMyNiw0Ny44ODkgMi44MTM2LDM5LjAwMSBMMzguMDA1NiwzOS4wMDEgQzQwLjUzMDYsMzkuMDAxIDQyLjk4ODYsMzkuODcxIDQ0LjkyMDYsNDEuNDk3IEM0NS45MjQ2LDQyLjM0MiA0Ni44NjM2LDQzLjI2MiA0Ny43MjQ2LDQ0LjI5MyIgaWQ9IkZpbGwtNiIgZmlsbD0iIzAwQkZCMyI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Elasticsearch";
        }
    })
    export class Elasticsearch extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    