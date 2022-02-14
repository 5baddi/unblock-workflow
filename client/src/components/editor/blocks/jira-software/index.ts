import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "jira-software";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjguMjUgNzEuMjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9IjMuMTI1IiB5PSIzLjEyNSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjkxLjklIiB5MT0iNDAuMjIlIiB4Mj0iMjguNDklIiB5Mj0iODEuNjMlIj48c3RvcCBvZmZzZXQ9IjE4JSIgc3RvcC1jb2xvcj0iIzAwNTJjYyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzI2ODRmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iOC43JSIgeTE9IjU5LjE3JSIgeDI9IjcyLjI2JSIgeTI9IjE3Ljk5JSI+PHN0b3Agb2Zmc2V0PSIxOCUiIHN0b3AtY29sb3I9IiMwMDUyY2MiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNjg0ZmYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48c3ltYm9sIGlkPSJhIiBvdmVyZmxvdz0idmlzaWJsZSI+PGcgc3Ryb2tlPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxwYXRoIGQ9Ik02MS4xNjEgMzAuMjExTDMwLjk1IDAgLjc0IDMwLjIxMWEyLjU0IDIuNTQgMCAwMDAgMy41ODFsMzAuMjExIDMwLjIxIDMwLjIxMS0zMC4yMWEyLjU0IDIuNTQgMCAwMDAtMy41ODF6TTMwLjk1IDQxLjQ2bC05LjQ2Mi05LjQ2MiA5LjQ2Mi05LjQ2MiA5LjQ2MiA5LjQ2MnoiIGZpbGw9IiMyNjg0ZmYiLz48cGF0aCBkPSJNMzAuOTUgMjIuNTk5QzI0Ljc1NSAxNi40MDUgMjQuNzI0IDYuMzcgMzAuODgxLjEzOEwxMC4xMTQgMjAuNzc0bDExLjI2OCAxMS4yNjh6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0iTTQwLjQzNyAzMS45NzNMMzAuOTUgNDEuNDZhMTUuOTMgMTUuOTMgMCAwMTAgMjIuNTM2bDIwLjc0OS0yMC43NDl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9nPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Jira Software";
        }
    })
    export class JiraSoftware extends NodeBlock
    {
    
    }