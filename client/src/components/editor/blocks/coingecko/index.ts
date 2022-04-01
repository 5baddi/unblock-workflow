import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "coingecko";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzYgMjc2Ij48ZGVmcz48c3R5bGU+LmNscy0ze2ZpbGw6I2ZmZn0uY2xzLTR7ZmlsbDojOGJjNTNmfS5jbHMtNntmaWxsOiM1ODU5NWJ9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkNvaW5fR2Vja29fQUkiIGRhdGEtbmFtZT0iQ29pbiBHZWNrbyBBSSI+PHBhdGggZD0iTTI3NiAxMzcuMzlBMTM4IDEzOCAwIDExMTM3LjM5IDAgMTM4IDEzOCAwIDAxMjc2IDEzNy4zOXoiIGZpbGw9IiM4ZGM2M2YiLz48cGF0aCBkPSJNMjY1LjY1IDEzNy40NGExMjcuNjMgMTI3LjYzIDAgMTEtMTI4LjIxLTEyNyAxMjcuNjUgMTI3LjY1IDAgMDExMjguMjEgMTI3eiIgZmlsbD0iI2Y5ZTk4OCIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTE0MC4zNSAxOC42NmE3MC4xOCA3MC4xOCAwIDAxMjQuNTMgMCA3NC43NSA3NC43NSAwIDAxMjMuNDMgNy44NWM3LjI4IDQgMTMuNTcgOS40MyAxOS44MyAxNC41MnMxMi40OSAxMC4zIDE4LjQyIDE2YTkzLjMyIDkzLjMyIDAgMDExNS43MSAxOSAxMDguMjggMTA4LjI4IDAgMDExMSAyMi4xN2M1LjMzIDE1LjY2IDcuMTggMzIuNTMgNC41MiA0OC42MkgyNTdjLTIuNjctMTUuOTUtNi4yOS0zMS4xNS0xMi00NS42MUExNzcuNTEgMTc3LjUxIDAgMDAyMzUuNTYgODBhMjA5LjEgMjA5LjEgMCAwMC0xMi40Mi0yMCA3Mi4zMSA3Mi4zMSAwIDAwLTE2LjY0LTE2LjhjLTYuNDgtNC42Mi0xMy45My03LjYxLTIxLjE0LTEwLjQ1UzE3MSAyNyAxNjMuNDggMjQuODRzLTE1LjE2LTMuNzgtMjMuMTQtNS4zNXoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yMDIuNzQgOTIuMzljLTkuMjYtMi42OC0xOC44Ni02LjQ4LTI4LjU4LTEwLjMyLS41Ni0yLjQ0LTIuNzItNS40OC03LjA5LTkuMTktNi4zNS01LjUxLTE4LjI4LTUuMzctMjguNTktMi45My0xMS4zOC0yLjY4LTIyLjYyLTMuNjMtMzMuNDEtMS04OC4yNSAyNC4zMS0zOC4yMSA4My42Mi03MC42MSAxNDMuMjQgNC42MSA5Ljc4IDU0LjMgNjYuODQgMTI2LjIgNTEuNTMgMCAwLTI0LjU5LTU5LjA5IDMwLjktODcuNDUgNDUuMDEtMjMuMDkgNzcuNTMtNjUuODEgMTEuMTgtODMuODh6Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMjEzLjY0IDEzMS4yYTUuMzUgNS4zNSAwIDExLTUuMzgtNS4zMiA1LjM2IDUuMzYgMCAwMTUuMzggNS4zMnoiLz48cGF0aCBkPSJNMTM4LjQ4IDY5LjkxYzYuNDMuNDYgMjkuNjggOCAzNS42OCAxMi4xMi01LTE0LjUtMjEuODMtMTYuNDMtMzUuNjgtMTIuMTJ6IiBmaWxsPSIjMDA5MzQ1Ii8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTQ0LjYgMTA2LjU4YTI0LjY4IDI0LjY4IDAgMTEtMjQuNjktMjQuNjcgMjQuNjggMjQuNjggMCAwMTI0LjY4IDI0LjY2eiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEzNy4yOCAxMDYuOGExNy4zNiAxNy4zNiAwIDExLTE3LjM2LTE3LjM2IDE3LjM2IDE3LjM2IDAgMDExNy4zNiAxNy4zNnoiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0yMzMuNjMgMTQyLjA4Yy0yMCAxNC4wOS00Mi43NCAyNC43OC03NSAyNC43OC0xNS4xIDAtMTguMTYtMTYtMjguMTQtOC4xOC01LjE1IDQuMDYtMjMuMzEgMTMuMTQtMzcuNzIgMTIuNDVTNTUgMTYyIDQ4LjQ5IDEzMS4yM0M0NS45MSAxNjIgNDQuNTkgMTg0LjY1IDMzIDIxMC42MmMyMyAzNi44MyA3Ny44NCA2NS4yNCAxMjcuNjIgNTMtNS4zMS0zNy4zNSAyNy4zOC03My45MyA0NS43Mi05Mi42MiA3LTcuMDkgMjAuMy0xOC42NiAyNy4yOS0yOC45MXoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yMzIuODUgMTQzYy02LjIxIDUuNjYtMTMuNiA5Ljg1LTIxLjEyIDEzLjU1YTEzNC45IDEzNC45IDAgMDEtMjMuNyA4LjYzYy04LjE2IDIuMTEtMTYuNjcgMy43LTI1LjI5IDIuOTJzLTE3LjQzLTMuNzEtMjMuMTQtMTAuMTdsLjI3LS4zMWM3IDQuNTQgMTUuMDggNi4xNCAyMy4xMiA2LjM3YTEwOC4yNyAxMDguMjcgMCAwMDI0LjMtMiAxMzIuNzEgMTMyLjcxIDAgMDAyMy42MS03LjNjNy42My0zLjE1IDE1LjE4LTYuOCAyMS42OC0xMnoiLz48L2c+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "CoinGecko";
        }
    })
    export class CoinGecko extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    