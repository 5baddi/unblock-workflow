import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "vero";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI1IiBoZWlnaHQ9IjIyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxkZWZzPgogIDxsaW5lYXJHcmFkaWVudCB5Mj0iMC41MzQ2NiIgeTE9IjAuNDUzNTYiIHgyPSItMC4xNTkyNiIgeDE9IjEuMDQ3NDYiIGlkPSJhIj4KICAgPHN0b3Agc3RvcC1jb2xvcj0iIzI5MzZhMyIgb2Zmc2V0PSIwIi8+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMxNjIyODYiIG9mZnNldD0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IHkyPSIwLjE1NTgyIiB5MT0iMC42NzUzIiB4Mj0iMC45NTgyNSIgeDE9Ii0wLjE5MjAxIiBpZD0iYiI+CiAgIDxzdG9wIHN0b3AtY29sb3I9IiMyMjk3ZjQiIG9mZnNldD0iMCIvPgogICA8c3RvcCBzdG9wLWNvbG9yPSIjMzFhMGY5IiBvZmZzZXQ9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogPC9kZWZzPgogPGNsaXBQYXRoIGlkPSJjIj4KICA8cGF0aCBpZD0ic3ZnXzEiIGQ9Im0wLDBsNzIwLDBsMCwxNTAuNTIzbC03MjAsMGwwLC0xNTAuNTIzeiIvPgogPC9jbGlwUGF0aD4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBzdHJva2U9Im51bGwiIGlkPSJzdmdfNCIgZmlsbD0idXJsKCNhKSIgZD0ibTIxMS4xNDUsMTIxLjM4OTFjMTguMTgsLTE4LjE2MTQgMTguMTgsLTQ3LjYwNjcgMCwtNjUuNzY4MWMtMTguMTgsLTE4LjE2MTMyIC00Ny42NTYsLTE4LjE2MTM1IC02NS44MzYsMGwtMzIuOTE5LDMyLjg4NDFsMzIuODE3LDMyLjc4MzFjMC4wMzQsMC4wMzM4IDAuMDY4LDAuMDY3NCAwLjEwMSwwLjEwMTFjMTguMTYxLDE4LjE0MjEgNDcuNTk0LDE4LjE2MTMgNjUuNzc5LDAuMDU3OGwwLjA1OCwtMC4wNTh6Ii8+CiAgPHBhdGggc3Ryb2tlPSJudWxsIiBpZD0ic3ZnXzUiIGZpbGw9IiMxN2RhODgiIGQ9Im00Ni41NTU0LDE1NC4yNzVsLTMyLjkyMDIsLTMyLjg4NTRjLTE4LjE4MDI4LC0xOC4xNjEzIC0xOC4xODAyNiwtNDcuNjA2NiAwLC02NS43NjhjMTguMTgwMywtMTguMTYxMzMgNDcuNjU2NCwtMTguMTYxMzIgNjUuODM2NywwbDMyLjkyMDEsMzIuODg1OWwtNjUuODM2Niw2NS43Njc1eiIvPgogIDxwYXRoIHN0cm9rZT0ibnVsbCIgaWQ9InN2Z182IiBmaWxsPSJ1cmwoI2IpIiBkPSJtMjExLjE0NSwxMjEuMzg5M2MtMTguMTgsMTguMTYxMyAtNDcuNjU2LDE4LjE2MTMgLTY1LjgzNiwwYy0wLjAzNCwtMC4wMzM3IC0wLjA2OCwtMC4wNjc0IC0wLjEwMSwtMC4xMDExbC0zMi44MTYsLTMyLjc4MWwtNjUuODM2Myw2NS43Njc4bDE4LjgwODYsMTguNzg5YzI1Ljk3MTksMjUuOTQ1IDY4LjA4MDcsMjUuOTQ1IDk0LjA1MjcsMGw1MS43MjgsLTUxLjY3NDd6Ii8+CiA8L2c+Cjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Vero";
        }
    })
    export class Vero extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    