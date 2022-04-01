import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "xero";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0zMCA1OS41MzhjMTYuMzM2IDAgMjkuNTM4LTEzLjIwMiAyOS41MzgtMjkuNTM4UzQ2LjMzNi40NjIgMzAgLjQ2Mi40NjIgMTMuNjY0LjQ2MiAzMCAxMy42NjQgNTkuNTM4IDMwIDU5LjUzOHoiIGZpbGw9IiMwMEIyRDUiLz48cGF0aCBkPSJNMTQuNTg4IDI5LjkwOGw1LjAzNS01LjAzNWEuOTUuOTUgMCAwMC4yNTYtLjYxNi45Mi45MiAwIDAwLS45MjUtLjkyNWMtLjI1NiAwLS40NjEuMDkyLS42NjcuMjU2bC01LjAzNCA1LjAzNS01LjAzNS01LjAzNWEuOTUuOTUgMCAwMC0uNjE2LS4yNTYuOTIuOTIgMCAwMC0uOTI1LjkyNWMwIC4yNTYuMDkyLjQ2MS4yNTYuNjY3bDUuMDM1IDUuMDM0LTUuMDQ1IDUuMDI3Yy0uMjA2LjE1NC0uMjU3LjQxLS4yNTcuNjY3IDAgLjUxNC40MTEuOTI1LjkyNS45MjVhLjg1Ljg1IDAgMDAuNjE3LS4yNTdsNS4wMzQtNS4wMzQgNS4wMzUgNS4wMzRhLjg1Ljg1IDAgMDAuNjY3LjI1Ny45Mi45MiAwIDAwLjkyNS0uOTI1Ljg1Ljg1IDAgMDAtLjI1Ni0uNjE3bC01LjAyNS01LjEyN3ptMjkuOTUgMGMwIC45MjUuNzIgMS42NDMgMS42NDQgMS42NDMuOTIzIDAgMS42NDMtLjcyIDEuNjQzLTEuNjQzcy0uNzItMS42NDMtMS42NDMtMS42NDNjLS44NzQgMC0xLjY0NC43Ny0xLjY0NCAxLjY0M3ptLTQuOTg0IDBhNi42NDYgNi42NDYgMCAwMDYuNjI3IDYuNjI2IDYuNjQ2IDYuNjQ2IDAgMDA2LjYyNi02LjYyNiA2LjY0NiA2LjY0NiAwIDAwLTYuNjI2LTYuNjI3IDYuNjQ2IDYuNjQ2IDAgMDAtNi42MjcgNi42Mjd6bTEuOTAxIDBhNC43NyA0Ljc3IDAgMDE0Ljc3OC00Ljc3OCA0Ljc3IDQuNzcgMCAwMTQuNzc4IDQuNzc4IDQuNzM1IDQuNzM1IDAgMDEtNC43NzggNC43NzggNC43NjkgNC43NjkgMCAwMS00Ljc3OC00Ljc3OHptLTIuMzYzLTYuNDc0aC0uMjU2YTMuNzggMy43OCAwIDAwLTIuMzEyLjc3Yy0uMDkyLS40MS0uNDYxLS43Mi0uODczLS43MmEuODY1Ljg2NSAwIDAwLS44NzMuODc0djExLjE0OGMwIC41MTQuNDEuOTI1LjkyNS45MjVhLjkyLjkyIDAgMDAuOTI1LS45MjV2LTYuODMyYzAtMi4yNjIuMjA2LTMuMTg1IDIuMTU3LTMuNDQ0aC4zN2MuNTEzIDAgLjkyNC0uMzY5LjkyNC0uODczLS4wNTItLjU2NS0uNDYxLS45MjUtLjk3Ni0uOTI1bC0uMDEuMDAyem0tNi4yMTUgNS4yM2MtLjQxLTEuODQ5LTEuMzg3LTMuMzM4LTIuOTI4LTQuMzE1LTIuMjYxLTEuNDM4LTUuMjQtMS4zMzYtNy4zOTcuMjA2LTEuNzQ3IDEuMjMzLTIuNzc0IDMuMzM5LTIuNzc0IDUuNDQ2IDAgLjUxNC4wNTIgMS4wOC4yMDYgMS41OTIuNjY3IDIuNjIgMi45MjggNC42MTYgNS42IDQuOTMyYTYuMDcgNi4wNyAwIDAwMi4zNjItLjE1NCA3LjIxNSA3LjIxNSAwIDAwMi4wMDMtLjgzYy42NjgtLjQxMSAxLjE4Mi0uOTc2IDEuNjk2LTEuNTkzbC4wNTItLjA1MmMuMzY5LS40NjEuMzA4LTEuMDgtLjA5My0xLjM4Ny0uMzA4LS4yNTctLjg3My0uMzctMS4zMzUuMjA2LS4wOTMuMTU0LS4yMDYuMjU2LS4zMDkuNDFhNS4zOSA1LjM5IDAgMDEtMS4yOTIgMS4wOCA0LjU5MiA0LjU5MiAwIDAxLTIuMjA5LjU2NWMtMi42Mi0uMDUxLTQuMDA2LTEuODQ4LTQuNTItMy4xODRhNS40MTMgNS40MTMgMCAwMS0uMjA2LS43N3YtLjE1NWg5LjQ1MmMxLjIzMy0uMDUyIDEuOTAyLS45NzYgMS42OTYtMi4wMDNsLS4wMDQuMDA2em0tMTEuMDk1LjE1NHYtLjA5MmMuNTE0LTIuMDU1IDIuNDE1LTMuNTk2IDQuNjE1LTMuNTk2IDIuMjYyIDAgNC4xNjEgMS41OTIgNC42NzUgMy42OTlsLTkuMjktLjAxeiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yOS41MzggNTkuMDc3YzE2LjMzNiAwIDI5LjUzOS0xMy4yMDMgMjkuNTM5LTI5LjUzOUM1OS4wNzcgMTMuMjAzIDQ1Ljg3NCAwIDI5LjUzOCAwIDEzLjIwMyAwIDAgMTMuMjAzIDAgMjkuNTM4YzAgMTYuMzM2IDEzLjIwMyAyOS41MzkgMjkuNTM4IDI5LjUzOXoiIGZpbGw9IiMwMEIyRDUiLz48cGF0aCBkPSJNMTQuMTI3IDI5LjQ0Nmw1LjAzNC01LjAzNGEuOTUuOTUgMCAwMC4yNTctLjYxNy45Mi45MiAwIDAwLS45MjUtLjkyNWMtLjI1NyAwLS40NjIuMDkyLS42NjcuMjU3TDEyLjc5IDI4LjE2bC01LjAzNC01LjAzNGEuOTUuOTUgMCAwMC0uNjE3LS4yNTcuOTIuOTIgMCAwMC0uOTI1LjkyNWMwIC4yNTcuMDkyLjQ2Mi4yNTcuNjY3bDUuMDM0IDUuMDM1LTUuMDQ0IDUuMDI2Yy0uMjA2LjE1NC0uMjU3LjQxLS4yNTcuNjY3IDAgLjUxNS40MS45MjUuOTI1LjkyNWEuODUuODUgMCAwMC42MTYtLjI1Nmw1LjAzNS01LjAzNSA1LjAzNCA1LjAzNWEuODUuODUgMCAwMC42NjguMjU2LjkyLjkyIDAgMDAuOTI1LS45MjUuODUuODUgMCAwMC0uMjU3LS42MTZsLTUuMDI0LTUuMTI4em0yOS45NSAwYzAgLjkyNS43MiAxLjY0MyAxLjY0MyAxLjY0M3MxLjY0My0uNzIgMS42NDMtMS42NDMtLjcyLTEuNjQzLTEuNjQzLTEuNjQzYy0uODczIDAtMS42NDMuNzctMS42NDMgMS42NDN6bS00Ljk4NSAwYTYuNjQ2IDYuNjQ2IDAgMDA2LjYyNyA2LjYyNyA2LjY0NiA2LjY0NiAwIDAwNi42MjctNi42MjcgNi42NDYgNi42NDYgMCAwMC02LjYyNy02LjYyNyA2LjY0NiA2LjY0NiAwIDAwLTYuNjI3IDYuNjI3em0xLjkwMiAwYTQuNzcgNC43NyAwIDAxNC43NzgtNC43NzggNC43NyA0Ljc3IDAgMDE0Ljc3OCA0Ljc3OCA0LjczNSA0LjczNSAwIDAxLTQuNzc4IDQuNzc4IDQuNzY5IDQuNzY5IDAgMDEtNC43NzgtNC43Nzh6bS0yLjM2My02LjQ3M2gtLjI1N2MtLjgzIDAtMS42NDMuMjU2LTIuMzExLjc3LS4wOTMtLjQxLS40NjItLjcyLS44NzMtLjcyYS44NjUuODY1IDAgMDAtLjg3NC44NzR2MTEuMTQ4YzAgLjUxNC40MTEuOTI1LjkyNS45MjVhLjkyLjkyIDAgMDAuOTI1LS45MjV2LTYuODMzYzAtMi4yNjIuMjA2LTMuMTg1IDIuMTU3LTMuNDQzaC4zN2MuNTE0IDAgLjkyNS0uMzcuOTI1LS44NzMtLjA1Mi0uNTY1LS40NjItLjkyNS0uOTc2LS45MjVsLS4wMTEuMDAyem0tNi4yMTUgNS4yM2MtLjQxMS0xLjg1LTEuMzg4LTMuMzM5LTIuOTI4LTQuMzE2LTIuMjYyLTEuNDM4LTUuMjQtMS4zMzUtNy4zOTguMjA2LTEuNzQ2IDEuMjMzLTIuNzc0IDMuMzM5LTIuNzc0IDUuNDQ2IDAgLjUxNS4wNTIgMS4wOC4yMDYgMS41OTMuNjY4IDIuNjIgMi45MjggNC42MTUgNS42IDQuOTMyLjc5LjEwNCAxLjU5My4wNTEgMi4zNjMtLjE1NGE3LjIxNSA3LjIxNSAwIDAwMi4wMDMtLjgzMWMuNjY3LS40MTEgMS4xODEtLjk3NiAxLjY5NS0xLjU5M2wuMDUyLS4wNTFjLjM3LS40NjIuMzA4LTEuMDgtLjA5Mi0xLjM4OC0uMzA5LS4yNTYtLjg3My0uMzY5LTEuMzM2LjIwNi0uMDkyLjE1NC0uMjA2LjI1Ny0uMzA4LjQxMS0uMzcuNDEtLjc3MS43Ny0xLjI5MyAxLjA4YTQuNTkyIDQuNTkyIDAgMDEtMi4yMDguNTY1Yy0yLjYyLS4wNTItNC4wMDctMS44NDktNC41Mi0zLjE4NWE1LjQxMyA1LjQxMyAwIDAxLS4yMDctLjc3di0uMTU1aDkuNDUzYzEuMjMzLS4wNTEgMS45MDEtLjk3NSAxLjY5NS0yLjAwM2wtLjAwMy4wMDd6bS0xMS4wOTYuMTU0di0uMDkyYy41MTQtMi4wNTUgMi40MTUtMy41OTcgNC42MTYtMy41OTcgMi4yNjEgMCA0LjE2IDEuNTkzIDQuNjc0IDMuN2wtOS4yOS0uMDExeiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Xero";
        }
    })
    export class Xero extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    