import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "hubspot";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjIuODgzIDY5Ljg4MyIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHVzZSB4bGluazpocmVmPSIjYSIgeD0iMi40NDIiIHk9IjIuNDQyIi8+PHN5bWJvbCBpZD0iYSIgb3ZlcmZsb3c9InZpc2libGUiPjxwYXRoIGQ9Ik01NS41MDQgMzAuNDAxYTE2LjI2IDE2LjI2IDAgMDAtNS45MDQtNS44NjRjLTEuODY1LTEuMDg0LTMuNzk0LTEuNzczLTUuOTcyLTIuMDd2LTcuNzk4YTUuNzExIDUuNzExIDAgMDAzLjUyNS01LjM1NyA1Ljg2IDUuODYgMCAwMC01Ljg1OS01Ljg4OSA1LjkxIDUuOTEgMCAwMC01LjkwOCA1Ljg4OWMwIDIuMzkzIDEuMjcgNC40MzQgMy40NTIgNS4zNTd2Ny43NTRhMTcuMDM2IDE3LjAzNiAwIDAwLTUuMTk1IDEuNjMxTDEyLjc2OSA4LjI0N2MuMTQ2LS41NTIuMjczLTEuMTIzLjI3My0xLjcyNEE2LjUyMiA2LjUyMiAwIDAwNi41MTkgMCA2LjUyIDYuNTIgMCAwMDAgNi41MjRhNi41MjMgNi41MjMgMCAwMDYuNTI0IDYuNTI0IDYuNDcgNi40NyAwIDAwMy4zNS0uOTUybDEuMzY3IDEuMDM1IDE4LjcyNiAxMy41MDFjLS45OTEuOTA4LTEuOTE0IDEuOTQzLTIuNjUxIDMuMTA1LTEuNDk0IDIuMzY4LTIuNDA3IDQuOTcxLTIuNDA3IDcuODEzdi41ODZhMTYuMzg4IDE2LjM4OCAwIDAwMS4wMjUgNS42NDVDMjYuNSA0NS4zMjQgMjcuMzMgNDYuNzMgMjguMzYxIDQ4bC02LjIyMSA2LjIzNWE1LjAxNSA1LjAxNSAwIDAwLTUuMjk4IDEuMTYyYy0uOTQ3Ljk0Mi0xLjQ4IDIuMjI3LTEuNDc1IDMuNTY1cy41MjcgMi42MTIgMS40NzkgMy41NjQgMi4yMjcgMS40OCAzLjU2NSAxLjQ4YTUuMDEgNS4wMSAwIDAwMy41NjUtMS40OCA1LjA0NyA1LjA0NyAwIDAwMS40NzUtMy41NjQgNS4wMyA1LjAzIDAgMDAtLjIzNC0xLjUxNGw2LjQyNi02LjQyNmExNi4wOSAxNi4wOSAwIDAwMi44NTYgMS41NjMgMTYuNyAxNi43IDAgMDA2LjY4NSAxLjQwNmguNDM5YTE1Ljc2IDE1Ljc2IDAgMDA3LjYyNy0xLjkyOSAxNS43NyAxNS43NyAwIDAwNS45NzctNS42M2MxLjQ5OS0yLjM5MyAyLjMxOS01LjA0NCAyLjMxOS03Ljk1OXYtLjE0NmMwLTIuODY2LS42NjQtNS41MDgtMi4wNTEtNy45M3ptLTcuODQ3IDEzLjQ4N2MtMS43NDMgMS45MzgtMy43NSAzLjEzNS02LjAxNiAzLjEzNWgtLjQzYy0xLjI5NCAwLTIuNTY0LS4zNTYtMy43OTktMS4wMTFhOC43OSA4Ljc5IDAgMDEtMy4zMy0zLjAzMmMtLjg5OC0xLjI3LTEuMzg3LTIuNjU2LTEuMzg3LTQuMTI2di0uNDM5YzAtMS40NDUuMjc4LTIuODE3Ljk3Ny00LjExMS43NDctMS40NjUgMS43NTgtMi41MTUgMy4xMDEtMy4zODlhNy42IDcuNiAwIDAxNC4yOTctMS4yOTRoLjE0N2MxLjQxNiAwIDIuNzY5LjI3OCA0LjAzOC45MjhhOC41NTggOC41NTggMCAwMTMuMTc0IDIuODg2IDkuMTggOS4xOCAwIDAxMS40MjEgNC4wNTNsLjAzNC45MTNjMCAxLjk4Ny0uNzYyIDMuODI4LTIuMjggNS40OTh6IiBzdHJva2U9Im5vbmUiIGZpbGw9IiNmODc2MWYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "HubSpot";
        }
    })
    export class HubSpot extends NodeBlock
    {
    
    }