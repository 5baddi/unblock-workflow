import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mailcheck";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS41MjQgMjVsMS4xNzUtNy40ODNMMTMuNzUzIDI1aDEuNDFsMy4yMTctNy40ODNMMTkuNTU1IDI1aDMuNTI0bC0yLjMxNC0xM0gxNy4yNmwtMi43MSA2LjkzMUwxMS44MTggMTJIOC4zMTNMNiAyNWgzLjUyNHptMjAuMDI1LTQuODI4bDEuNTktNC4zMjcgMS41OSA0LjMyN2gtMy4xOHpNMzQuNDgzIDI1aDMuNzc3bC01LjE4Ny0xM2gtMy44NjhMMjQuMDIgMjVoMy43NzdsLjgxMy0yLjI1OWg1LjA2TDM0LjQ4MyAyNXptNS4zMzEtMTN2MTNoMy41NDJWMTJoLTMuNTQyem02LjM5NyAwdjEzSDU0di0yLjg2MmgtNC4yNDdWMTJINDYuMjF6TTEzLjk2OCAzNy41MzlhNy4zNTkgNy4zNTkgMCAwMC0xLjI2NS0uNDEgNS43OTIgNS43OTIgMCAwMC0xLjIyLS4xMjljLS43MjcgMC0xLjQyMy4xMzUtMi4wODYuNDA2YTUuNDQ3IDUuNDQ3IDAgMDAtMi45NDcgMi44NkE1LjMxMiA1LjMxMiAwIDAwNiA0Mi40NzNjMCAuODAyLjE1MiAxLjU0My40NTYgMi4yMmE1LjY4MyA1LjY4MyAwIDAwMS4yMSAxLjc1NUE1LjQxNiA1LjQxNiAwIDAwMTEuNDcgNDhhNS40IDUuNCAwIDAwMS4wNjMtLjEwNSA4LjQ3MiA4LjQ3MiAwIDAwMS4xNi0uMzIzbC4yNzYtLjA5N3YtMy4yMDZjLS42OS43MzgtMS40NjkgMS4xMDUtMi4zMzMgMS4xMDVhMi43NjkgMi43NjkgMCAwMS0yLjU5LTEuNzQgMi45OTcgMi45OTcgMCAwMS0uMjE2LTEuMTQ4YzAtLjQwNi4wNzItLjc4Mi4yMTUtMS4xMzMuMTQ0LS4zNTEuMzM3LS42NTIuNTg2LS45MDcuMjQ4LS4yNTQuNTQ0LS40NTMuODktLjYwMi4zNDQtLjE0Ny43Mi0uMjIxIDEuMTI2LS4yMjEuOTIgMCAxLjY5My4zODEgMi4zMiAxLjE0N3YtMy4yMzF6bTQuNDE5LS4yNDlIMTUuNjh2MTAuNDJoMi43MDd2LTQuMjk4aDMuOTA4djQuMjk4SDI1VjM3LjI5aC0yLjcwNnY0LjAyMmgtMy45MDhWMzcuMjl6bTE0LjcyIDBoLTUuOTI0djEwLjQyaDUuOTI0di0yLjI5NEgyOS44OXYtMS43OTdoMy4wMzh2LTIuMjk0SDI5Ljg5di0xLjc0aDMuMjE3VjM3LjI5em05LjQ0NS4yNDlhNy40MSA3LjQxIDAgMDAtMS4yNjItLjQxQTUuODU3IDUuODU3IDAgMDA0MC4wNjcgMzdjLS43MjcgMC0xLjQyMy4xMzUtMi4wODUuNDA2YTUuNTE0IDUuNTE0IDAgMDAtMS43NDkgMS4xMzMgNS40NDYgNS40NDYgMCAwMC0xLjIwMSAxLjcyOCA1LjM0MSA1LjM0MSAwIDAwLS40NDcgMi4yMDNjMCAuODAxLjE1MSAxLjU0Mi40NTUgMi4yMTlhNS42ODQgNS42ODQgMCAwMDEuMjEgMS43NTUgNS40MiA1LjQyIDAgMDA0Ljg2NiAxLjQ0OGMuMzYtLjA2OS43NDYtLjE3NyAxLjE2LS4zMjNsLjI3Ni0uMDk3VjQ0LjI3Yy0uNjkuNzM4LTEuNDY5IDEuMTA1LTIuMzMzIDEuMTA1YTIuNzY5IDIuNzY5IDAgMDEtMi41OS0xLjc0IDIuOTk3IDIuOTk3IDAgMDEtLjIxNi0xLjE0OGMwLS40MDYuMDcyLS43ODIuMjE1LTEuMTMzLjE0NC0uMzUxLjMzNy0uNjUyLjU4Ni0uOTA3LjI0OC0uMjU0LjU0NC0uNDUzLjg4OS0uNjAyLjM0NS0uMTQ3LjcyLS4yMjEgMS4xMjctLjIyMS45MiAwIDEuNjkzLjM4MSAyLjMyIDEuMTQ3VjM3LjU0aC4wMDJ6bTQuNDItLjI0OWgtMi43MDd2MTAuNDJoMi43MDZ2LTQuNTJsMy41MjIgNC41MTlINTRsLTQuNTE2LTUuNDg2IDQuMTMtNC45MzRoLTMuMzQybC0zLjMgNC4yOThWMzcuMjl6TTU0IDI5LjVINnYzaDQ4di0zeiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSItMSIgeDI9IjYwIiB5Mj0iNjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNDg0OUMyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjMyN0E1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mailcheck";
        }
    })
    export class Mailcheck extends NodeBlock
    {
    
    }