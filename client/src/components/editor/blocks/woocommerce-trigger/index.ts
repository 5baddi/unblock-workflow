import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "woocommerce-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIC01MCAyNTYgMjUzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KPHRpdGxlPldvb0NvbW1lcmNlIExvZ288L3RpdGxlPgo8bWV0YWRhdGE+CjxyZGY6UkRGPgo8Y2M6V29yayByZGY6YWJvdXQ9IiI+CjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0Pgo8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CjxkYzp0aXRsZS8+CjwvY2M6V29yaz4KPC9yZGY6UkRGPgo8L21ldGFkYXRhPgo8cGF0aCBkPSJtMjMuNzU5IDBoMjA4LjM4YzEzLjE4NyAwIDIzLjg2MyAxMC42NzUgMjMuODYzIDIzLjg2M3Y3OS41NDJjMCAxMy4xODctMTAuNjc1IDIzLjg2My0yMy44NjMgMjMuODYzaC03NC43MjdsMTAuMjU3IDI1LjExOC00NS4xMDktMjUuMTE4aC05OC42OTVjLTEzLjE4NyAwLTIzLjg2My0xMC42NzUtMjMuODYzLTIzLjg2M3YtNzkuNTQyYy0wLjEwNDY2LTEzLjA4MyAxMC41NzEtMjMuODYzIDIzLjc1OC0yMy44NjN6IiBmaWxsPSIjN2Y1NGIzIi8+CjxwYXRoIGQ9Im0xNC41NzggMjEuNzVjMS40NTY5LTEuOTc3MiAzLjY0MjMtMy4wMTc5IDYuNTU2MS0zLjIyNiA1LjMwNzMtMC40MTYyNiA4LjMyNTIgMi4wODEzIDkuMDUzNyA3LjQ5MjcgMy4yMjYgMjEuNzUgNi43NjQyIDQwLjE2OSAxMC41MTEgNTUuMjU5bDIyLjc5LTQzLjM5NWMyLjA4MTMtMy45NTQ1IDQuNjgyOS02LjAzNTggNy44MDQ5LTYuMjQzOSA0LjU3ODktMC4zMTIyIDcuMzg4NiAyLjYwMTYgOC41MzMzIDguNzQxNSAyLjYwMTYgMTMuODQxIDUuOTMxNyAyNS42IDkuODg2MiAzNS41OSAyLjcwNTctMjYuNDMzIDcuMjg0Ni00NS40NzYgMTMuNzM3LTU3LjIzNiAxLjU2MS0yLjkxMzggMy44NTA0LTQuMzcwNyA2Ljg2ODMtNC41Nzg5IDIuMzkzNS0wLjIwODEzIDQuNTc4OSAwLjUyMDMzIDYuNTU2MSAyLjA4MTMgMS45NzcyIDEuNTYxIDMuMDE3OSAzLjUzODIgMy4yMjYgNS45MzE3IDAuMTA0MDYgMS44NzMyLTAuMjA4MTMgMy40MzQxLTEuMDQwNyA0Ljk5NTEtNC4wNTg1IDcuNDkyNy03LjM4ODYgMjAuMDg1LTEwLjA5NCAzNy41NjctMi42MDE2IDE2Ljk2My0zLjUzODIgMzAuMTc5LTIuOTEzOCAzOS42NDkgMC4yMDgxMyAyLjYwMTYtMC4yMDgxMyA0Ljg5MTEtMS4yNDg4IDYuODY4My0xLjI0ODggMi4yODk0LTMuMTIyIDMuNTM4Mi01LjUxNTQgMy43NDYzLTIuNzA1NyAwLjIwODEzLTUuNTE1NC0xLjA0MDYtOC4yMjExLTMuODUwNC05LjY3OC05Ljg4NjItMTcuMzc5LTI0LjY2My0yMi45OTgtNDQuMzMyLTYuNzY0MiAxMy4zMi0xMS43NTkgMjMuMzExLTE0Ljk4NSAyOS45NzEtNi4xMzk4IDExLjc1OS0xMS4zNDMgMTcuNzk1LTE1LjcxNCAxOC4xMDctMi44MDk4IDAuMjA4MTMtNS4yMDMzLTIuMTg1NC03LjI4NDYtNy4xODA1LTUuMzA3My0xMy42MzMtMTEuMDMxLTM5Ljk2MS0xNy4xNzEtNzguOTg1LTAuNDE2MjYtMi43MDU3IDAuMjA4MTMtNS4wOTkyIDEuNjY1LTYuOTcyNHptMjIzLjY0IDE2LjMzOGMtMy43NDYzLTYuNTU2MS05LjI2MTgtMTAuNTExLTE2LjY1LTEyLjA3Mi0xLjk3NzItMC40MTYyNi0zLjg1MDQtMC42MjQzOS01LjYxOTUtMC42MjQzOS05Ljk5MDIgMC0xOC4xMDcgNS4yMDMzLTI0LjQ1NSAxNS42MS01LjQxMTQgOC44NDU1LTguMTE3MSAxOC42MjgtOC4xMTcxIDI5LjM0NiAwIDguMDEzIDEuNjY1IDE0Ljg4MSA0Ljk5NTEgMjAuNjA1IDMuNzQ2MyA2LjU1NjEgOS4yNjE4IDEwLjUxMSAxNi42NSAxMi4wNzIgMS45NzcyIDAuNDE2MjYgMy44NTA0IDAuNjI0MzkgNS42MTk1IDAuNjI0MzkgMTAuMDk0IDAgMTguMjExLTUuMjAzMyAyNC40NTUtMTUuNjEgNS40MTE0LTguOTQ5NiA4LjExNzEtMTguNzMyIDguMTE3MS0yOS40NSAwLjEwNDA2LTguMTE3MS0xLjY2NS0xNC44ODEtNC45OTUxLTIwLjUwMXptLTEzLjExMiAyOC44MjZjLTEuNDU2OSA2Ljg2ODMtNC4wNTg1IDExLjk2Ny03LjkwODkgMTUuNDAyLTMuMDE3OSAyLjcwNTctNS44Mjc2IDMuODUwNC04LjQyOTMgMy4zMzAxLTIuNDk3Ni0wLjUyMDMzLTQuNTc4OS0yLjcwNTctNi4xMzk4LTYuNzY0Mi0xLjI0ODgtMy4yMjYtMS44NzMyLTYuNDUyLTEuODczMi05LjQ2OTkgMC0yLjYwMTYgMC4yMDgxMy01LjIwMzMgMC43Mjg0Ni03LjU5NjcgMC45MzY1OS00LjI2NjcgMi43MDU3LTguNDI5MyA1LjUxNTQtMTIuMzg0IDMuNDM0MS01LjA5OTIgNy4wNzY0LTcuMTgwNSAxMC44MjMtNi40NTIgMi40OTc2IDAuNTIwMzMgNC41Nzg5IDIuNzA1NyA2LjEzOTggNi43NjQyIDEuMjQ4OCAzLjIyNiAxLjg3MzIgNi40NTIgMS44NzMyIDkuNDY5OSAwIDIuNzA1Ny0wLjIwODEzIDUuMzA3My0wLjcyODQ2IDcuNzAwOHptLTUyLjAzMy0yOC44MjZjLTMuNzQ2My02LjU1NjEtOS4zNjU5LTEwLjUxMS0xNi42NS0xMi4wNzItMS45NzcyLTAuNDE2MjYtMy44NTA0LTAuNjI0MzktNS42MTk1LTAuNjI0MzktOS45OTAyIDAtMTguMTA3IDUuMjAzMy0yNC40NTUgMTUuNjEtNS40MTE0IDguODQ1NS04LjExNzEgMTguNjI4LTguMTE3MSAyOS4zNDYgMCA4LjAxMyAxLjY2NSAxNC44ODEgNC45OTUxIDIwLjYwNSAzLjc0NjMgNi41NTYxIDkuMjYxOCAxMC41MTEgMTYuNjUgMTIuMDcyIDEuOTc3MiAwLjQxNjI2IDMuODUwNCAwLjYyNDM5IDUuNjE5NSAwLjYyNDM5IDEwLjA5NCAwIDE4LjIxMS01LjIwMzMgMjQuNDU1LTE1LjYxIDUuNDExNC04Ljk0OTYgOC4xMTcxLTE4LjczMiA4LjExNzEtMjkuNDUgMC04LjExNzEtMS42NjUtMTQuODgxLTQuOTk1MS0yMC41MDF6bS0xMy4yMTYgMjguODI2Yy0xLjQ1NjkgNi44NjgzLTQuMDU4NSAxMS45NjctNy45MDg5IDE1LjQwMi0zLjAxNzkgMi43MDU3LTUuODI3NiAzLjg1MDQtOC40MjkzIDMuMzMwMS0yLjQ5NzYtMC41MjAzMy00LjU3ODktMi43MDU3LTYuMTM5OC02Ljc2NDItMS4yNDg4LTMuMjI2LTEuODczMi02LjQ1Mi0xLjg3MzItOS40Njk5IDAtMi42MDE2IDAuMjA4MTMtNS4yMDMzIDAuNzI4NDYtNy41OTY3IDAuOTM2NTgtNC4yNjY3IDIuNzA1Ny04LjQyOTMgNS41MTU0LTEyLjM4NCAzLjQzNDEtNS4wOTkyIDcuMDc2NC03LjE4MDUgMTAuODIzLTYuNDUyIDIuNDk3NiAwLjUyMDMzIDQuNTc4OSAyLjcwNTcgNi4xMzk4IDYuNzY0MiAxLjI0ODggMy4yMjYgMS44NzMyIDYuNDUyIDEuODczMiA5LjQ2OTkgMC4xMDQwNiAyLjcwNTctMC4yMDgxMyA1LjMwNzMtMC43Mjg0NiA3LjcwMDh6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "WooCommerce Trigger";
        }
    })
    export class WooCommerceTrigger extends NodeBlock
    {
    
    }