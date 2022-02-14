
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "clickup";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMTAgMCAxNTUgMTU1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSI2OC4wMSUiIHkyPSI2OC4wMSUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjODkzMEZEIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzQ5Q0NGOSIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iNjguMDElIiB5Mj0iNjguMDElIiBpZD0iYiI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGMDJGMCIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNGRkM4MDAiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik0uNCAxMTkuMTJsMjMuODEtMTguMjRDMzYuODYgMTE3LjM5IDUwLjMgMTI1IDY1LjI2IDEyNWMxNC44OCAwIDI3Ljk0LTcuNTIgNDAuMDItMjMuOWwyNC4xNSAxNy44QzExMiAxNDIuNTIgOTAuMzQgMTU1IDY1LjI2IDE1NWMtMjUgMC00Ni44Ny0xMi40LTY0Ljg2LTM1Ljg4eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik02NS4xOCAzOS44NEwyMi44IDc2LjM2IDMuMjEgNTMuNjQgNjUuMjcuMTZsNjEuNTcgNTMuNTItMTkuNjggMjIuNjR6Ii8+PC9nPjwvc3ZnPg==",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "ClickUp";
    }
})
export class ClickUp extends NodeBlock
{

}