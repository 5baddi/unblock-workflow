import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "home-assistant";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8cGF0aCBkPSJNNDQuMDQxIDM0My4yMjJWMjA5LjU4SDkuMjg4YTkuMzMzIDkuMzMzIDAgMCAxLTYuNjU1LTE1Ljg3NkwxODkuNjM5IDMuNDk3YzQuNTE3LTQuNTk0IDExLjkwMy00LjY1NyAxNi40OTgtLjE0bC4xMi4xMiA5Ny42MDEgOTguNzk0VjgzLjk3NGE3Ljc3OCA3Ljc3OCAwIDAgMSA3Ljc3OC03Ljc3OGgzMi40MWE3Ljc3OCA3Ljc3OCAwIDAgMSA3Ljc3OSA3Ljc3OHY2Ny4xMzhsNDEuNTY4IDQyLjYxOGE5LjMzMyA5LjMzMyAwIDAgMS02LjY4MiAxNS44NWgtMzQuODg2djEzMy42NDJhNy43NzggNy43NzggMCAwIDEtNy43NzggNy43NzhINTEuODE5YTcuNzc4IDcuNzc4IDAgMCAxLTcuNzc4LTcuNzc4em0yMDYuMzkzLTE2My4yNmExNS4wMjkgMTUuMDI5IDAgMCAwIDEuNDYtNi40ODZjMC04LjMwOC02LjcxLTE1LjA0My0xNC45ODktMTUuMDQzLTguMjc4IDAtMTQuOTg5IDYuNzM1LTE0Ljk4OSAxNS4wNDNzNi43MTEgMTUuMDQ0IDE0Ljk5IDE1LjA0NGMyLjMxNCAwIDQuNTA1LS41MjcgNi40NjItMS40NjdsMjEuNTE4IDIxLjU5NnYyMC45MThsLTI2Ljk4MSAyNy4wNzh2LTE5Ljg0YTE1LjA0NiAxNS4wNDYgMCAwIDAgOS45OTMtMTQuMTg3YzAtOC4zMDgtNi43MTEtMTUuMDQ0LTE0Ljk5LTE1LjA0NC04LjI3OCAwLTE0Ljk5IDYuNzM2LTE0Ljk5IDE1LjA0NCAwIDYuNTUgNC4xNzIgMTIuMTIyIDkuOTk0IDE0LjE4N3YyOS44NjhsLTI0Ljk4MyAyNS4wNzNWMTQ0LjQ2NGwyMC41MTktMjAuNTkyYTE0Ljg4NiAxNC44ODYgMCAwIDAgNi40NjIgMS40NjZjOC4yNzkgMCAxNC45OS02LjczNSAxNC45OS0xNS4wNDQgMC04LjMwOC02LjcxMS0xNS4wNDMtMTQuOTktMTUuMDQzLTguMjc4IDAtMTQuOTg5IDYuNzM1LTE0Ljk4OSAxNS4wNDMgMCAyLjMyMy41MjQgNC41MjIgMS40NiA2LjQ4NmwtMTguNDQ4IDE4LjUxNS0xOC40NDktMTguNTE1YTE1LjAyOSAxNS4wMjkgMCAwIDAgMS40Ni02LjQ4NmMwLTguMzA4LTYuNzEtMTUuMDQzLTE0Ljk4OS0xNS4wNDMtOC4yNzggMC0xNC45ODkgNi43MzUtMTQuOTg5IDE1LjA0MyAwIDguMzA5IDYuNzExIDE1LjA0NCAxNC45OSAxNS4wNDQgMi4zMTQgMCA0LjUwNS0uNTI3IDYuNDYyLTEuNDY2bDIwLjUxOCAyMC41OTJ2MTA1LjE2bC0zNS45NzQtMzYuMTA0di0yOC44NjVhMTUuMDQ2IDE1LjA0NiAwIDAgMCA5Ljk5My0xNC4xODdjMC04LjMwOS02LjcxMS0xNS4wNDQtMTQuOTktMTUuMDQ0LTguMjc4IDAtMTQuOTkgNi43MzUtMTQuOTkgMTUuMDQ0IDAgNi41NSA0LjE3MiAxMi4xMjIgOS45OTQgMTQuMTg3djE4LjgzN2wtMjcuOTgtMjguMDgxdi0yNy44NjNhMTUuMDQ2IDE1LjA0NiAwIDAgMCA5Ljk5My0xNC4xODdjMC04LjMwOC02LjcxMS0xNS4wNDQtMTQuOTktMTUuMDQ0LTguMjc4IDAtMTQuOTkgNi43MzYtMTQuOTkgMTUuMDQ0IDAgNi41NSA0LjE3MiAxMi4xMjIgOS45OTQgMTQuMTg3djMyLjAxN2wzMC45MDcgMzEuMDE4aC0xNy43N2MtMi4wNTgtNS44NDMtNy42MS0xMC4wMjktMTQuMTM3LTEwLjAyOS04LjI3OCAwLTE0Ljk5IDYuNzM1LTE0Ljk5IDE1LjA0MyAwIDguMzA5IDYuNzEyIDE1LjA0NCAxNC45OSAxNS4wNDQgNi41MjcgMCAxMi4wOC00LjE4NiAxNC4xMzctMTAuMDNoMjcuNzYzbDQzLjA0IDQzLjE5NnY3NS4wNzRsLTIyLjk4My0yMy4wNjZ2LTI4Ljg2NmExNS4wNDYgMTUuMDQ2IDAgMCAwIDkuOTkzLTE0LjE4N2MwLTguMzA4LTYuNzExLTE1LjA0My0xNC45OS0xNS4wNDMtOC4yNzggMC0xNC45OSA2LjczNS0xNC45OSAxNS4wNDMgMCA2LjU1IDQuMTcyIDEyLjEyMiA5Ljk5NCAxNC4xODd2MTguODM3bC0zMy40MzktMzMuNTU4YTE1LjAyOSAxNS4wMjkgMCAwIDAgMS40NjEtNi40ODZjMC04LjMwOC02LjcxLTE1LjA0My0xNC45OS0xNS4wNDMtOC4yNzggMC0xNC45ODkgNi43MzUtMTQuOTg5IDE1LjA0M3M2LjcxMSAxNS4wNDMgMTQuOTkgMTUuMDQzYzIuMzE0IDAgNC41MDYtLjUyNiA2LjQ2Mi0xLjQ2NmwzMy40MzkgMzMuNTU5aC0xNy43N2MtMi4wNTgtNS44NDMtNy42MS0xMC4wMy0xNC4xMzctMTAuMDMtOC4yNzggMC0xNC45OSA2LjczNi0xNC45OSAxNS4wNDRzNi43MTIgMTUuMDQzIDE0Ljk5IDE1LjA0M2M2LjUyNyAwIDEyLjA3OS00LjE4NiAxNC4xMzctMTAuMDI5aDI3Ljc2M2wyNy45OCAyOC4wODFoMTQuMTMybDI4Ljk4LTI5LjA4M2gyNi43NjNjMi4wNTggNS44NDIgNy42MSAxMC4wMjggMTQuMTM3IDEwLjAyOCA4LjI3OCAwIDE0Ljk5LTYuNzM1IDE0Ljk5LTE1LjA0M3MtNi43MTItMTUuMDQzLTE0Ljk5LTE1LjA0M2MtNi41MjcgMC0xMi4wNzkgNC4xODYtMTQuMTM3IDEwLjAyOUgyMjkuODRsLTI2LjkxIDI3LjAwNlYzMDUuOTNsMzIuMDQ5LTMyLjE2NGg1MS43NDZjMi4wNTggNS44NDMgNy42MSAxMC4wMjkgMTQuMTM2IDEwLjAyOSA4LjI3OSAwIDE0Ljk5LTYuNzM1IDE0Ljk5LTE1LjA0MyAwLTguMzA5LTYuNzExLTE1LjA0NC0xNC45OS0xNS4wNDQtNi41MjYgMC0xMi4wNzggNC4xODYtMTQuMTM2IDEwLjAzSDI0NC45N2wyOS45MDgtMzAuMDE2di0yNS4wNzJsMjEuNTE3LTIxLjU5NmExNC44ODYgMTQuODg2IDAgMCAwIDYuNDYzIDEuNDY3YzguMjc4IDAgMTQuOTktNi43MzYgMTQuOTktMTUuMDQ0cy02LjcxMi0xNS4wNDMtMTQuOTktMTUuMDQzLTE0Ljk5IDYuNzM1LTE0Ljk5IDE1LjA0M2MwIDIuMzIzLjUyNSA0LjUyMiAxLjQ2MSA2LjQ4NmwtMTQuNDUxIDE0LjUwNFYxNDguNTVhMTUuMDQ2IDE1LjA0NiAwIDAgMCA5Ljk5My0xNC4xODdjMC04LjMwOS02LjcxMS0xNS4wNDQtMTQuOTktMTUuMDQ0LTguMjc4IDAtMTQuOTkgNi43MzUtMTQuOTkgMTUuMDQ0IDAgNi41NSA0LjE3MiAxMi4xMjIgOS45OTQgMTQuMTg3djQ1LjkxNWwtMTQuNDUyLTE0LjUwNHpNMTIwLjk4NyAzMjMuOTA5Yy0zLjMxMSAwLTUuOTk2LTIuNjk0LTUuOTk2LTYuMDE3IDAtMy4zMjMgMi42ODUtNi4wMTcgNS45OTYtNi4wMTcgMy4zMTIgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxNyAwIDMuMzIzLTIuNjg0IDYuMDE3LTUuOTk2IDYuMDE3em00My45Ny00NS4xM2MtMy4zMTIgMC01Ljk5Ny0yLjY5NC01Ljk5Ny02LjAxNyAwLTMuMzIzIDIuNjg1LTYuMDE3IDUuOTk2LTYuMDE3IDMuMzEyIDAgNS45OTYgMi42OTQgNS45OTYgNi4wMTcgMCAzLjMyMy0yLjY4NCA2LjAxNy01Ljk5NiA2LjAxN3ptLTUxLjk2NC03LjAyYy0zLjMxMiAwLTUuOTk2LTIuNjk0LTUuOTk2LTYuMDE3IDAtMy4zMjMgMi42ODQtNi4wMTcgNS45OTYtNi4wMTcgMy4zMTEgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxNyAwIDMuMzIzLTIuNjg1IDYuMDE3LTUuOTk2IDYuMDE3em0tNC45OTctNTAuMTQ0Yy0zLjMxMSAwLTUuOTk1LTIuNjk0LTUuOTk1LTYuMDE4IDAtMy4zMjMgMi42ODQtNi4wMTcgNS45OTUtNi4wMTcgMy4zMTIgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxNyAwIDMuMzI0LTIuNjg0IDYuMDE4LTUuOTk2IDYuMDE4em0xMjQuOTEyIDcuMDJjLTMuMzExIDAtNS45OTUtMi42OTQtNS45OTUtNi4wMTcgMC0zLjMyNCAyLjY4NC02LjAxOCA1Ljk5NS02LjAxOCAzLjMxMiAwIDUuOTk2IDIuNjk0IDUuOTk2IDYuMDE4IDAgMy4zMjMtMi42ODQgNi4wMTctNS45OTYgNi4wMTd6bTY3Ljk1MiA0Ni4xMzNjLTMuMzEgMC01Ljk5NS0yLjY5NC01Ljk5NS02LjAxNyAwLTMuMzI0IDIuNjg0LTYuMDE4IDUuOTk1LTYuMDE4IDMuMzEyIDAgNS45OTYgMi42OTQgNS45OTYgNi4wMTggMCAzLjMyMy0yLjY4NCA2LjAxNy01Ljk5NiA2LjAxN3ptLTI1Ljk4MSA0OC4xMzhjLTMuMzEyIDAtNS45OTYtMi42OTQtNS45OTYtNi4wMTcgMC0zLjMyMyAyLjY4NC02LjAxNyA1Ljk5Ni02LjAxNyAzLjMxMSAwIDUuOTk2IDIuNjk0IDUuOTk2IDYuMDE3IDAgMy4zMjMtMi42ODUgNi4wMTctNS45OTYgNi4wMTd6bTI3Ljk4LTE0My40MTJjLTMuMzExIDAtNS45OTYtMi42OTUtNS45OTYtNi4wMThzMi42ODUtNi4wMTcgNS45OTYtNi4wMTdjMy4zMTEgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxNyAwIDMuMzIzLTIuNjg1IDYuMDE4LTUuOTk2IDYuMDE4em0tMzIuOTc3LTM5LjExM2MtMy4zMTEgMC01Ljk5Ni0yLjY5NC01Ljk5Ni02LjAxNyAwLTMuMzI0IDIuNjg1LTYuMDE4IDUuOTk2LTYuMDE4IDMuMzEyIDAgNS45OTYgMi42OTQgNS45OTYgNi4wMTggMCAzLjMyMy0yLjY4NCA2LjAxNy01Ljk5NiA2LjAxN3ptLTM5Ljk3Mi0yNC4wN2MtMy4zMTEgMC01Ljk5NS0yLjY5My01Ljk5NS02LjAxNyAwLTMuMzIzIDIuNjg0LTYuMDE3IDUuOTk1LTYuMDE3IDMuMzEyIDAgNS45OTYgMi42OTQgNS45OTYgNi4wMTcgMCAzLjMyNC0yLjY4NCA2LjAxOC01Ljk5NiA2LjAxOHptLTYzLjk1NSAwYy0zLjMxIDAtNS45OTUtMi42OTMtNS45OTUtNi4wMTcgMC0zLjMyMyAyLjY4NC02LjAxNyA1Ljk5NS02LjAxNyAzLjMxMiAwIDUuOTk2IDIuNjk0IDUuOTk2IDYuMDE3IDAgMy4zMjQtMi42ODQgNi4wMTgtNS45OTYgNi4wMTh6bS01MS45NjMgMjMuMDY3Yy0zLjMxMSAwLTUuOTk2LTIuNjk0LTUuOTk2LTYuMDE3IDAtMy4zMjQgMi42ODUtNi4wMTggNS45OTYtNi4wMTggMy4zMTEgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxOCAwIDMuMzIzLTIuNjg1IDYuMDE3LTUuOTk2IDYuMDE3em0zNy45NzMgMzcuMTA3Yy0zLjMxMSAwLTUuOTk1LTIuNjk0LTUuOTk1LTYuMDE3IDAtMy4zMjQgMi42ODQtNi4wMTggNS45OTUtNi4wMTggMy4zMTIgMCA1Ljk5NiAyLjY5NCA1Ljk5NiA2LjAxOCAwIDMuMzIzLTIuNjg0IDYuMDE3LTUuOTk2IDYuMDE3em04NC45NCAzLjAwOWMtMy4zMSAwLTUuOTk1LTIuNjk1LTUuOTk1LTYuMDE4czIuNjg0LTYuMDE3IDUuOTk1LTYuMDE3YzMuMzEyIDAgNS45OTYgMi42OTQgNS45OTYgNi4wMTcgMCAzLjMyMy0yLjY4NCA2LjAxOC01Ljk5NiA2LjAxOHoiIGlkPSJhIi8+CiAgPC9kZWZzPgogIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aCBkPSJNMCAwaDUwMHY1MDBIMHoiIGZpbGw9IiM0MUJERjUiLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyIDcwKSI+CiAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgIDwvbWFzaz4KICAgICAgPGcgbWFzaz0idXJsKCNiKSIgZmlsbD0iI0ZGRiI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzOTZ2MzUxSDB6Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Home Assistant";
        }
    })
    export class HomeAssistant extends NodeBlock
    {
    
    }