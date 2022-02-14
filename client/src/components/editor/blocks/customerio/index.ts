import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "customerio";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTEyNy44NDMgMTAyLjQyM2E1MS4yMSA1MS4yMSAwIDEwLTUxLjIxLTUxLjE4NiA1MS4xODYgNTEuMTg2IDAgMDA1MS4yMSA1MS4xODZ6IiBmaWxsPSIjRkZDRDAwIi8+PHBhdGggZD0iTTEyOC4xNjEgMTI4LjAxNmgtLjE3MWMtMzUuMTI3LS4wMDktNjUuNzc3LTIzLjgzNC03NC40NTMtNTcuODcyLTIuNTcxLTEwLjIzOC0xMC44OTgtMTguOTA3LTIxLjQ1NC0xOC45MDdIMGMwIDcwLjY4NiA1Ny4zMDMgMTI3Ljk5IDEyNy45OSAxMjcuOTloLjE3MXYtNTEuMjExeiIgZmlsbD0iIzAwRUNCQiIvPjxwYXRoIGQ9Ik0xMjcuODQzIDEyOC4wMTZoLjE0N2MzNS4xMyAwIDY1Ljc4NS0yMy44MjkgNzQuNDUyLTU3Ljg3MiAyLjU5Ny0xMC4yMzggMTAuOTIzLTE4LjkwNyAyMS40OC0xOC45MDdoMzIuMDgyYy0uMDEzIDcwLjY5LTU3LjMyMyAxMjcuOTktMTI4LjAxNCAxMjcuOTloLS4xNDd2LTUxLjIxMXoiIGZpbGw9IiNBRjY0RkYiLz48cGF0aCBkPSJNMjE4LjUwOSAxNDEuNzNhMTI3Ljk5IDEyNy45OSAwIDAxLTE4MS4wMTMgMGwzNi4xOTctMzYuMTk3YzMwIDI5Ljk4IDc4LjYxOCAyOS45OCAxMDguNjE4IDBsMzYuMTk4IDM2LjE5OHoiIGZpbGw9IiM3MTMxRkYiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Customer.io";
        }
    })
    export class Customerio extends NodeBlock
    {
    
    }