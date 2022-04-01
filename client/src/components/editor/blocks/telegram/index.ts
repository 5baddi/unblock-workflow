import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "telegram";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjYgNjYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTAgMzJjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlM0OS42NzMgMCAzMiAwIDAgMTQuMzI3IDAgMzIiIGZpbGw9IiMzN2FlZTIiLz48cGF0aCBkPSJNMjEuNjYxIDM0LjMzOGwzLjc5NyAxMC41MDhzLjQ3NS45ODMuOTgzLjk4MyA4LjA2OC03Ljg2NCA4LjA2OC03Ljg2NGw4LjQwNy0xNi4yMzctMjEuMTE5IDkuODk4eiIgZmlsbD0iI2M4ZGFlYSIvPjxwYXRoIGQ9Ik0yNi42OTUgMzcuMDM0bC0uNzI5IDcuNzQ2cy0uMzA1IDIuMzczIDIuMDY4IDBsNC42NDQtNC4yMDMiIGZpbGw9IiNhOWM2ZDgiLz48cGF0aCBkPSJNMjEuNzMgMzQuNzEybC03LjgwOS0yLjU0NXMtLjkzMi0uMzc4LS42MzMtMS4yMzdjLjA2Mi0uMTc3LjE4Ni0uMzI4LjU1OS0uNTg4IDEuNzMxLTEuMjA2IDMyLjAyOC0xMi4wOTYgMzIuMDI4LTEyLjA5NnMuODU2LS4yODggMS4zNjEtLjA5N2MuMjMxLjA4OC4zNzguMTg3LjUwMy41NDguMDQ1LjEzMi4wNzEuNDExLjA2OC42ODktLjAwMy4yMDEtLjAyNy4zODYtLjA0NS42NzgtLjE4NCAyLjk3OC01LjcwNiAyNS4xOTgtNS43MDYgMjUuMTk4cy0uMzMgMS4zLTEuNTE0IDEuMzQ1Yy0uNDMyLjAxNi0uOTU2LS4wNzEtMS41ODItLjYxLTIuMzIzLTEuOTk4LTEwLjM1Mi03LjM5NC0xMi4xMjYtOC41OGEuMzQuMzQgMCAwMS0uMTQ2LS4yMzljLS4wMjUtLjEyNS4xMDgtLjI4LjEwOC0uMjhzMTMuOTgtMTIuNDI3IDE0LjM1Mi0xMy43MzFjLjAyOS0uMTAxLS4wNzktLjE1MS0uMjI2LS4xMDctLjkyOS4zNDItMTcuMDI1IDEwLjUwNi0xOC44MDEgMTEuNjI5LS4xMDQuMDY2LS4zOTUuMDIzLS4zOTUuMDIzIi8+PC9nPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Telegram";
        }
    })
    export class Telegram extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    