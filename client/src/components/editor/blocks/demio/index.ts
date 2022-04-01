import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "demio";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI0NSA1NSAzMTAgMzEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xODYuMDE0IDcyLjczN2MtNS4wMTEuNTQzLTkuNTUzIDEuMjY3LTkuOTkgMS41OTItLjIyLjE2My0yLjA1NS41OTYtNC4wNzguOTYyLTMuNDM1LjYyMi0xNi4wNTggNC40MzctMTYuNTAxIDQuOTg3LS4xMS4xMzYtMS4xODkuNTkxLTIuMzk4IDEuMDExLTIuMDgzLjcyMy0xMC40MDkgNC42NTYtMTIuOTg3IDYuMTM0LTMuNDAxIDEuOTUxLTguNDE2IDUuMDM0LTguNTkxIDUuMjgyLS4xMS4xNTUtLjY1LjUxNi0xLjE5OS44MDEtMS4zMzcuNjk0LTUuNjIgMy43OTQtOC4xNDcgNS44OTUtMS4xMjQuOTM1LTIuNjQgMi4xOTMtMy4zNyAyLjc5Ny0yLjc5OCAyLjMxNS0xNC45IDE0LjYwOC0xNS40NzQgMTUuNzE3LS4zMzEuNjQxLS43NjMgMS4xNjYtLjk1OSAxLjE2Ni0uMTk2IDAtLjcxOS41ODQtMS4xNjIgMS4yOTktLjQ0My43MTQtMS4xNjkgMS42ODctMS42MTMgMi4xNjEtLjQ0NC40NzUtMS40NDMgMS44NTYtMi4yMTkgMy4wNzEtLjc3NyAxLjIxNC0xLjU5NyAyLjMyMS0xLjgyMyAyLjQ2MS0uMjI1LjEzOS0uNzYxLjk0MS0xLjE5IDEuNzgzLS40MjkuODQxLTEuMDExIDEuNzczLTEuMjkzIDIuMDctLjI4Mi4yOTgtMS4wNDIgMS41MjktMS42ODkgMi43MzUtLjY0NyAxLjIwNy0xLjU3MSAyLjc3OC0yLjA1NSAzLjQ5LS40ODQuNzEzLTEuMjEzIDIuMTA4LTEuNjIxIDMuMS0uNDA4Ljk5MS0uODUgMS44MDQtLjk4MiAxLjgwNC0uMTMyLjAwMS0uNzM3IDEuMjE2LTEuMzQ0IDIuNjk5YTEyNy43NiAxMjcuNzYgMCAwMS0yLjQ1OCA1LjUyNWMtLjc0NCAxLjU1NC0xLjM1MyAzLjA4Ni0xLjM1MyAzLjQwMiAwIC4zMTctLjM1MiAxLjIzMy0uNzgyIDIuMDM2LS40MzEuODA0LTEuMjUxIDMuMTM5LTEuODIzIDUuMTg5LS41NzIgMi4wNTEtMS4yMDcgNC4wODgtMS40MSA0LjUyOC0uNTczIDEuMjM2LTEuNDA5IDQuODAxLTIuMTU3IDkuMTktLjM3NCAyLjE5OC0uODQ4IDQuMzU2LTEuMDUyIDQuNzk2LTEuNzcgMy44MDItMy4wNCAxMTMuMzAzLTEuNDIzIDEyMi42NzIgMS4yNTcgNy4yODcgNC44NTYgMTIuOTI3IDEyLjA3OSAxOC45MzQgMy4xODUgMi42NDggOC44MjkgNC43IDE0LjQyNSA1LjI0NCA1LjEwNy40OTcgOTIuOTE1LjUwMyAxMDMuNDIyLjAwOCA4LjE4My0uMzg2IDE2Ljk1Ni0xLjMyOCAxOC4zODItMS45NzQuNDM5LS4xOTkgMS45NjgtLjU3IDMuMzk2LS44MjQgMy41MzUtLjYyOCA5LjMwMS0yLjAzMSA5Ljc5MS0yLjM4Mi4yMTktLjE1NyAxLjgzOC0uNjk3IDMuNTk2LTEuMTk4IDEuNzU4LS41MDIgMy43MzYtMS4xNTUgNC4zOTYtMS40NTEuNjU5LS4yOTYgMi43MjMtMS4wOTUgNC41ODYtMS43NzUgMS44NjMtLjY4MSAzLjQ4MS0xLjM2MyAzLjU5Ni0xLjUxNy4xMTUtLjE1NCAxLjI4OC0uNzA3IDIuNjA3LTEuMjI4IDEuMzE5LS41MjIgMi44NDctMS4yMzIgMy4zOTYtMS41NzguNTUtLjM0NyAyLjE2OC0xLjIyMiAzLjU5Ny0xLjk0NSAxLjQyOC0uNzI0IDMuODU2LTIuMTEzIDUuMzk0LTMuMDg3YTI4Ny42NDIgMjg3LjY0MiAwIDAxNC44OTYtMy4wMjdjMS4xNTMtLjY5IDIuMDk3LTEuNDIxIDIuMDk3LTEuNjI1IDAtLjIwNC4xODgtLjM3LjQxNy0uMzcuMjI5IDAgMS40MjEtLjc2NSAyLjY0OS0xLjY5OWExNDEuMjQ0IDE0MS4yNDQgMCAwMTMuMDc5LTIuMjkxYy40NjctLjMyNSAyLjI4Ny0xLjgzMiA0LjA0NS0zLjM0OCA3Ljg0MS02Ljc2IDE0Ljg5Ny0xNC4yODMgMjAuODUzLTIyLjIzMy45MDYtMS4yMDkgMS45NzktMi43NSAyLjM4NS0zLjQyNS40MDYtLjY3NiAxLjYyNS0yLjU2NCAyLjcwOS00LjE5NiAxLjA4My0xLjYzMyAyLjQ5LTMuOTk5IDMuMTI1LTUuMjYuNjM1LTEuMjYgMS4yOTUtMi4zNzggMS40NjYtMi40ODQuMTcxLS4xMDYuOTE1LTEuNTkyIDEuNjUzLTMuMzAzLjczOC0xLjcxIDEuNDU1LTMuMiAxLjU5NC0zLjMxLjEzOC0uMTEuNzU2LTEuNTQ4IDEuMzczLTMuMTk3LjYxNi0xLjY0OCAxLjI4My0zLjIwNSAxLjQ4Mi0zLjQ1OS4zNzMtLjQ3OSAyLjMyMS02LjM2IDIuMzIxLTcuMDA4IDAtLjIwMS4zNS0xLjEzMy43NzctMi4wNy40MjctLjkzOCAxLjI1Ni00LjEyIDEuODQxLTcuMDcxLjU4NS0yLjk1MiAxLjIxNy01LjcyNiAxLjQwNC02LjE2NiAxLjU4OC0zLjczOSAyLjQ3NC0yMy42NTQgMS41NS0zNC44NDMtLjY0NC03LjgwMS0zLjM5NS0yMi4yMDQtNC43OTItMjUuMDk3LS4yMTMtLjQzOS0uODItMi4yMzgtMS4zNDktMy45OTYtLjk5Mi0zLjI5NS00LjE4MS0xMS40MzQtNC42MTktMTEuNzg4LS4xMzYtLjExLS41NjEtMS4wMDktLjk0NC0xLjk5OC0uMzgzLS45ODktMS4wMDMtMi4zNTgtMS4zNzgtMy4wNDFhMzYzLjY4IDM2My42OCAwIDAxLTIuMjMxLTQuMTk2Yy0uODUyLTEuNjI0LTEuNjgxLTMuMDQzLTEuODQyLTMuMTUzLS4xNjEtLjExLS42MTQtLjgyOS0xLjAwNS0xLjU5OC0uMzkyLS43NjktMS40OTYtMi41LTIuNDU0LTMuODQ3LS45NTctMS4zNDctMS43NDEtMi42NDEtMS43NDEtMi44NzcgMC0uMjM2LS4yNDEtLjU3My0uNTM2LS43NDktLjI5NS0uMTc1LS44NzUtLjg1OS0xLjI4OS0xLjUxOC0yLjU3MS00LjA5OC0xNC4wMDEtMTYuNS0xOS4zNjktMjEuMDE3LTQuMDgyLTMuNDM1LTYuNjQzLTUuNDU2LTcuNDc5LTUuOTA0YTcuNDcxIDcuNDcxIDAgMDEtMS40NjMtMS4wNzRjLS44NzgtLjg3OC03LjY5OS01LjM3Mi04LjE1My01LjM3Mi0uMjA2IDAtLjU2MS0uMjI1LS43OS0uNS0uMjI4LS4yNzYtMS42NDQtMS4xMjQtMy4xNDYtMS44ODUtMS41MDEtLjc2MS0yLjgyNS0xLjUxNS0yLjk0MS0xLjY3Ny0uMTE2LS4xNjEtMS41NTUtLjg2Mi0zLjE5Ny0xLjU1Ny0xLjY0Mi0uNjk0LTMuMTgtMS40MTktMy40MTctMS42MS0uMjM3LS4xOTEtMS42NzUtLjgxNi0zLjE5Ni0xLjM4OC0xLjUyMi0uNTczLTMuNzE2LTEuNDc1LTQuODc2LTIuMDA2LTEuMTYtLjUzMS0yLjI2LS45NjUtMi40NDMtLjk2NS0uMTg0IDAtMi4xMjMtLjYwMi00LjMxLTEuMzM3LTIuMTg4LS43MzUtNi4wMzMtMS43NDItOC41NDYtMi4yMzgtMi41MTMtLjQ5Ni00LjkyOS0xLjA2Ni01LjM2OC0xLjI2Ni0zLjEtMS40MS0yOS43MTItMi40OC0zOC4zNjItMS41NDNtMjEuNDA4IDQ2LjU4NmMzLjUwMi41OTcgMTEuNTg2IDMuNTE0IDEzLjE1NyA0Ljc0Ny4zMy4yNTggMS40NjMuOTYzIDIuNTE3IDEuNTY1IDIuMzIyIDEuMzI2IDkuNTIxIDguMTUyIDEwLjcyOSAxMC4xNzMuNDc4LjggMS4xODkgMS44MTQgMS41OCAyLjI1NCAxLjQ2MyAxLjY0NiA0LjM1NCA4LjEgNS4xOTMgMTEuNTg4LjQ3NSAxLjk3OCAxLjA2NSA0LjAyOSAxLjMxMiA0LjU1Ni42OCAxLjQ1OS42MzEgNTEuMjYxLS4wNTIgNTEuNDg4LS4yNzUuMDkyLS40OTkuNTU4LS40OTkgMS4wMzUgMCA3LjIyOS05LjY3NSAyMi4yMzctMTcuMTcyIDI2LjYzOC0uOTM2LjU0OS0yLjAyOSAxLjMwMi0yLjQyOSAxLjY3Mi0uNC4zNzEtMi4wNDMgMS4yNDYtMy42NSAxLjk0Ny0xLjYwOC43LTMuMTAzIDEuNDEtMy4zMjMgMS41NzktNC41NzQgMy41MTQtMjMuODA3IDIuOTA5LTMyLjA2MS0xLjAwOC0xLjYxNC0uNzY2LTMuMDc5LTEuMzkzLTMuMjU3LTEuMzkzLS4xNzcgMC0uNjQ4LS4zNi0xLjA0NS0uNzk5LS4zOTgtLjQ0LS44NzktLjgtMS4wNy0uOC0uNjUzIDAtMy43MDUtMi4xOTctNC44NTYtMy40OTYtLjYzMi0uNzE0LTEuNDAxLTEuMjk5LTEuNzA4LTEuMjk5LS4zMDcgMC0uNTU4LS4xNDMtLjU1OC0uMzE5IDAtLjE3NS0uNjc1LTEuMDMxLTEuNDk5LTEuOS0yLjIxNy0yLjM0LTQuNjU2LTUuNzI2LTUuODk5LTguMTkxLS42MDQtMS4xOTctMS4yMjgtMi4yNjctMS4zODYtMi4zNzctLjQxNS0uMjg4LTEuODEyLTQuMjI3LTIuNDA5LTYuNzkzLS4yODItMS4yMDktLjY1My0yLjI5MS0uODI1LTIuNDA0LTEuMTkxLS43ODMtMS42MTctNTAuMDU3LS40NjYtNTMuOTQgMi44NTEtOS42MjEgMi43MjgtOS4yOTQgNS4wOTItMTMuNTcyLjc4NS0xLjQyIDEuNTU2LTIuNjc5IDEuNzEzLTIuNzk3LjE1OC0uMTE4Ljc5MS0uOTU5IDEuNDA4LTEuODY5IDEuMTk1LTEuNzYxIDUuMzEyLTUuOTI3IDguMjM5LTguMzM1IDEuNjE5LTEuMzMyIDIuNDc3LTEuODcgNi4xNzQtMy44NzIgNy42MzYtNC4xMzUgMTcuNzU5LTUuNjYxIDI3LjA1LTQuMDc4bS0xNC40MTUgMTQuNTg3Yy0zLjY1My45NjktNS42NjcgMS42ODUtNi4xNzggMi4xOTUtLjMwNy4zMDctLjY2NS41NTgtLjc5NS41NTgtLjM1IDAtMy4zODMgMi4wNDctNC43MzYgMy4xOTctMi4xNzMgMS44NDYtNS43MTkgNi42NDEtNi42NzUgOS4wMjUtLjUyMSAxLjMtMS4wOTUgMi40NjYtMS4yNzcgMi41OS0xLjQ0MS45OTEtMi4zNTUgNDQuOTI4LTEuMDk2IDUyLjY4NiAxLjQ3OCA5LjExMSA5LjMyMSAxOC4yIDE3Ljk2IDIwLjgxMyAxLjY0OC40OTkgMy40MjkgMS4xMDcgMy45NTcgMS4zNTMgMS4yOTYuNjAyIDEwLjUzNy41ODUgMTEuMjcxLS4wMjEuMzA2LS4yNTMgMS4yNDQtLjU4OSAyLjA4NS0uNzQ2IDEuOTk4LS4zNzMgNC45MzMtMS40OTYgNS43ODYtMi4yMTQuMzczLS4zMTMgMS4xMjctLjc3MyAxLjY3Ni0xLjAyMyA0LjA5Ni0xLjg2MSAxMS4xODktMTEuMTc0IDExLjE4OS0xNC42ODkgMC0uMzE2LjE3Ni0uNjM0LjM5Mi0uNzA4IDEuNzc3LS42MDQgMS43NzktNTQuMjc5LjAwMi01NC4yNzktLjE2MiAwLS40MDMtLjU0Mi0uNTM1LTEuMjA1LS4zMjgtMS42MzYtMi4yMjYtNS41ODgtMi42ODUtNS41ODgtLjIwNCAwLS4zNzEtLjI4Ni0uMzcxLS42MzUgMC0uOTY2LTYuNDctNy4xNTYtOC4zNDItNy45ODMtLjkwNy0uMzk5LTEuNjQ4LS44NDctMS42NDgtLjk5NSAwLS4zNjgtMy4xNTMtMS41NDItNS45MTQtMi4yMDItMi41OTMtLjYxOS0xMS44OTUtLjcwNS0xNC4wNjYtLjEyOW0xMC45NzMgMjcuNzc4YzMuMDg5IDIuMzU5IDMuMDEzIDEuODA3IDMuMDEzIDIxLjk4djE3Ljg2bC0xLjAxNiAxLjczNGMtMi42NTQgNC41MjgtOS41OTkgNC4zODUtMTIuMDUtLjI0OWwtLjkyLTEuNzR2LTE3LjczMmMwLTE5LjcyMi0uMDMxLTE5LjQ3MiAyLjY0Ni0yMS41NyAyLjk3LTIuMzI5IDUuNTMzLTIuNDE2IDguMzI3LS4yODNtNjUuNzkgNTUuNzIzYzMuODI5IDIuNzI3IDQuOTUgNi44IDIuOTM1IDEwLjY2My0uMzE1LjYwMy0uNTczIDEuMzI3LS41NzUgMS42MDktLjAwNiAxLjQwOC0zLjA0MiA5LjAyLTQuOTc1IDEyLjQ3NS0yLjE2OSAzLjg3Ny0zLjU5NCA2LjE0Mi00LjQzOCA3LjA1Mi0uNTM4LjU4MS0uOTc5IDEuMjA3LS45NzkgMS4zOTEgMCAuOTM4LTEwLjc5IDExLjg2NC0xNC4xODYgMTQuMzY1LTMuMTc0IDIuMzM3LTkuNDM4IDYuMzYzLTkuODk5IDYuMzYzLS4yMDIgMC0uOS4zNzktMS41NTEuODQzLS42NTEuNDY0LTIuNTYyIDEuMzc0LTQuMjQ2IDIuMDIyLTEuNjgzLjY0OC0zLjI0NiAxLjMyOC0zLjQ3MiAxLjUxLS43MzcuNTk0LTEwLjI5OSAzLjI4My0xNC4zOTggNC4wNDktOC4yMjcgMS41MzktMjIuNTAyIDEuMzk5LTMwLjM3LS4yOTVhNDEzLjg2MSA0MTMuODYxIDAgMDAtMy4xOTYtLjY4MSAyLjk3NSAyLjk3NSAwIDAxLS44LS4zMmMtLjIxOS0uMTM0LTEuOTAyLS42MjktMy43MzktMS4xMDItMS44MzctLjQ3My0zLjk5NS0xLjE5MS00Ljc5NS0xLjU5Ny0uODAxLS40MDUtMi43MTQtMS4yMzItNC4yNTMtMS44MzYtMS41MzgtLjYwNS0zLjA2Ny0xLjMxOS0zLjM5Ni0xLjU4Ny0uMzMtLjI2OC0xLjY3LTEuMDA5LTIuOTc4LTEuNjQ2LTEuMzA4LS42MzctMi42OTQtMS40NjYtMy4wOC0xLjg0MS0uMzg2LS4zNzYtMS40MjktMS4wNTQtMi4zMTctMS41MDctLjg4OS0uNDUzLTEuNjE1LS45NzItMS42MTUtMS4xNTQgMC0uMTgyLS4zNS0uNDkzLS43NzgtLjY5MS0yLjYzOS0xLjIyNS0xMS4yNDItOS45LTE1LjQxNi0xNS41NDUtMS4zMDUtMS43NjYtNS4zODUtOC40MzUtNS4zODUtOC44MDQgMC0uMTI4LS41NC0xLjMyMi0xLjIwMS0yLjY1NC01LjI1LTEwLjU4Mi01LjE3Ni0xNy4xODMuMjE1LTE5LjI4NCA0LjczOS0xLjg0NiA4LjU2Ni41MTQgMTAuMTYgNi4yNjUgMS4wMzggMy43NDggMy4yMTIgOC43MjkgNS41NDUgMTIuNzA3IDMuMTE3IDUuMzE1IDEyLjYwNiAxNS41NjUgMTQuNDEgMTUuNTY1LjI0MyAwIC40NDIuMTcyLjQ0Mi4zODMgMCAuMjExLjg1NC44NyAxLjg5OCAxLjQ2NSAxLjA0NC41OTUgMi4yNTcgMS4zODkgMi42OTcgMS43NjUgMS4wNDYuODkzIDguODQ4IDQuNjU0IDEwLjM5IDUuMDA5LjY1OS4xNTEgMS45My42MDEgMi44MjUuOTk5IDUuMzU1IDIuMzgyIDI1Ljc1NiAzLjY0MSAzMy4xMzkgMi4wNDUgNC43NjQtMS4wMyA3LjYtMS43NjIgNy45OTItMi4wNjIuMjE5LS4xNjkgMS4zODgtLjYyMiAyLjU5Ny0xLjAwNiAyLjYyMi0uODMzIDkuNjg1LTQuMzMgMTEuNDI2LTUuNjU3LjY4LS41MTkgMS40MTUtLjk0MyAxLjYzMi0uOTQzLjIxNyAwIC45Mi0uNTM0IDEuNTYxLTEuMTg3LjY0MS0uNjU0IDEuMzUzLTEuMTkzIDEuNTgyLTEuMTk5LjgyNC0uMDIyIDkuODgxLTkuMjI3IDExLjIxNi0xMS40LjQwNS0uNjU5Ljg2MS0xLjI5IDEuMDEyLTEuNDAyLjI4LS4yMDUgMi41MDYtMy45OSAzLjY0MS02LjE5IDEuMDM0LTIuMDA0IDEuODk2LTQuMTkgMS44OTYtNC44MDkgMC0uMzIyLjE1My0uNTg2LjM0LS41ODYuMTg4IDAgLjY1LTEuMjE0IDEuMDI5LTIuNjk3IDEuNzA4LTYuNjkzIDEuNzI5LTYuNzMyIDQuNjQ3LTguNjYyIDIuNDI1LTEuNjA1IDQuNzQ0LTEuNjczIDYuODExLS4yMDEiIGZpbGw9IiMwMGJmNmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Demio";
        }
    })
    export class Demio extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    