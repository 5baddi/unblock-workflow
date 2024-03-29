import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "postHog";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48cGF0aCBmaWxsPSIjRjlCRDJCIiBkPSJNMzMgMTc5LjM3OWwzOS4wMDQgMzguOTUxSDMzdi0zOC45NTF6bTAtOS43MzhsNDguNzU1IDQ4LjY4OWgzOS4wMDRMMzMgMTMwLjY4OXYzOC45NTJ6bTAtNDguNjlsOTcuNTEgOTcuMzc5aDM5LjAwM0wzMyA4MnYzOC45NTF6bTQ4Ljc1NSAwbDk3LjUwOSA5Ny4zNzl2LTM4Ljk1MUw4MS43NTQgODJ2MzguOTUxek0xMzAuNTEgODJ2MzguOTUxbDQ4Ljc1NCA0OC42OXYtMzguOTUyTDEzMC41MSA4MnoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMjY3LjAyMyAyMDIuNzVhMzcuNjkyIDM3LjY5MiAwIDAxLTI2LjYzMi0xMS4wMTZsLTU0LjIzMS01NC4xNTh2ODAuNzU0aDgwLjg2M3YtMTUuNTh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwOS41NjMgMjAyLjc1YzQuMzA4IDAgNy44LTMuNDg4IDcuOC03Ljc5MSAwLTQuMzAyLTMuNDkyLTcuNzktNy44LTcuNzktNC4zMDkgMC03LjgwMSAzLjQ4OC03LjgwMSA3Ljc5IDAgNC4zMDMgMy40OTIgNy43OTEgNy44MDEgNy43OTF6Ii8+PHBhdGggZmlsbD0iIzFENEFGRiIgZD0iTTMzIDIxOC4zM2gzOS4wMDRMMzMgMTc5LjM3OXYzOC45NTF6bTQ4Ljc1NS04Ny42NDFMMzMgODJ2MzguOTUxbDQ4Ljc1NSA0OC42OXYtMzguOTUyem0tNDguNzU1IDB2MzguOTUybDQ4Ljc1NSA0OC42ODl2LTM4Ljk1MUwzMyAxMzAuNjg5eiIvPjxwYXRoIGZpbGw9IiNGNTRFMDAiIGQ9Ik0xMzAuNTEgMTMwLjY4OUw4MS43NTUgODJ2MzguOTUxbDQ4Ljc1NSA0OC42OXYtMzguOTUyek04MS43NTUgMjE4LjMzaDM5LjAwNGwtMzkuMDA0LTM4Ljk1MXYzOC45NTF6bTAtODcuNjQxdjM4Ljk1Mmw0OC43NTUgNDguNjg5di0zOC45NTFsLTQ4Ljc1NS00OC42OXoiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "PostHog";
        }
    })
    export class PostHog extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    