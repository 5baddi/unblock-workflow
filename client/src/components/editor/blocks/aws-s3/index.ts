import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "awsS3";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA2NSIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDMxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTIwLjYyNCA1My42ODZMMCA2NHYxODEuMDJsMjAuNjI0IDEwLjI1NC4xMjQtLjE0OVY1My44MjhsLS4xMjQtLjE0MiIgZmlsbD0iIzhDMzEyMyIvPjxwYXRoIGQ9Ik0xMzEgMjI5TDIwLjYyNCAyNTUuMjc0VjUzLjY4NkwxMzEgNzkuMzg3VjIyOSIgZmlsbD0iI0UwNTI0MyIvPjxwYXRoIGQ9Ik04MS4xNzggMTg3Ljg2Nmw0Ni44MTggNS45Ni4yOTQtLjY3OC4yNjMtNzYuNzctLjU1Ny0uNi00Ni44MTggNS44NzR2NjYuMjE0IiBmaWxsPSIjOEMzMTIzIi8+PHBhdGggZD0iTTEyNy45OTYgMjI5LjI5NWwxMDcuMzcxIDI2LjAzNS4xNjktLjI2OS0uMDAzLTIwMS4xOTUtLjE3LS4xOC0xMDcuMzY3IDI1Ljk5NnYxNDkuNjEzIiBmaWxsPSIjOEMzMTIzIi8+PHBhdGggZD0iTTE3NC44MjcgMTg3Ljg2NmwtNDYuODMxIDUuOTZ2LTc4LjA0OGw0Ni44MzEgNS44NzR2NjYuMjE0IiBmaWxsPSIjRTA1MjQzIi8+PHBhdGggZD0iTTE3NC44MjcgODkuNjMxbC00Ni44MzEgOC41MzUtNDYuODE4LTguNTM1IDQ2Ljc1OS0xMi4yNTYgNDYuODkgMTIuMjU2IiBmaWxsPSIjNUUxRjE4Ii8+PHBhdGggZD0iTTE3NC44MjcgMjE5LjgwMWwtNDYuODMxLTguNTkxLTQ2LjgxOCA4LjU5MSA0Ni43NjEgMTMuMDUzIDQ2Ljg4OC0xMy4wNTMiIGZpbGw9IiNGMkIwQTkiLz48cGF0aCBkPSJNODEuMTc4IDg5LjYzMWw0Ni44MTgtMTEuNTg2LjM3OS0uMTE3Vi4zMTNMMTI3Ljk5NiAwIDgxLjE3OCAyMy40MTN2NjYuMjE4IiBmaWxsPSIjOEMzMTIzIi8+PHBhdGggZD0iTTE3NC44MjcgODkuNjMxbC00Ni44MzEtMTEuNTg2VjBsNDYuODMxIDIzLjQxM3Y2Ni4yMTgiIGZpbGw9IiNFMDUyNDMiLz48cGF0aCBkPSJNMTI3Ljk5NiAzMDkuNDI4bC00Ni44MjMtMjMuNDA1di02Ni4yMTdsNDYuODIzIDExLjU4Mi42ODkuNzgzLS4xODcgNzUuOTA2LS41MDIgMS4zNTEiIGZpbGw9IiM4QzMxMjMiLz48cGF0aCBkPSJNMTI3Ljk5NiAzMDkuNDI4bDQ2LjgyNy0yMy40MDV2LTY2LjIxN2wtNDYuODI3IDExLjU4MnY3OC4wNE0yMzUuMzY3IDUzLjY4NkwyNTYgNjR2MTgxLjAybC0yMC42MzMgMTAuMzFWNTMuNjg2IiBmaWxsPSIjRTA1MjQzIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AWS S3";
        }
    })
    export class AWSS3 extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    