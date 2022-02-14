import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "gitlab-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGZpbGw9IiNFMjQzMjkiIGQ9Ik0zMC41IDU2Ljk2N2wxMC44NjMtMzMuMjAzSDE5LjYzN3oiLz48cGF0aCBmaWxsPSIjRkM2RDI2IiBkPSJNMzAuNSA1Ni45NjdMMTkuNjM3IDIzLjc2NEg0LjQxeiIvPjxwYXRoIGQ9Ik00LjQxIDIzLjc2NEwxLjExIDMzLjg2Yy0uMy45Mi4wMyAxLjkyOC44MTcgMi40OTZMMzAuNSA1Ni45NjcgNC40MSAyMy43NjR6IiBmaWxsPSIjRkNBMzI2Ii8+PHBhdGggZD0iTTQuNDEgMjMuNzY0aDE1LjIyNkwxMy4wOTMgMy43ODFjLS4zMzYtMS4wMjktMS44MDItMS4wMjktMi4xMzkgMEw0LjQxMSAyMy43NjR6IiBmaWxsPSIjRTI0MzI5Ii8+PHBhdGggZmlsbD0iI0ZDNkQyNiIgZD0iTTMwLjUgNTYuOTY3bDEwLjg2My0zMy4yMDNINTYuNTl6Ii8+PHBhdGggZD0iTTU2LjU5IDIzLjc2NGwzLjMgMTAuMDg2YTIuMjI0IDIuMjI0IDAgMDEtLjgxNyAyLjQ5N0wzMC41IDU2Ljk2N2wyNi4wOS0zMy4yMDN6IiBmaWxsPSIjRkNBMzI2Ii8+PHBhdGggZD0iTTU2LjU5IDIzLjc2NEg0MS4zNjJsNi41NDQtMTkuOTkyYy4zMzYtMS4wMyAxLjgwMi0xLjAzIDIuMTM5IDBsNi41NDMgMTkuOTkyeiIgZmlsbD0iI0UyNDMyOSIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "GitLab Trigger";
        }
    })
    export class GitLabTrigger extends NodeBlock
    {
    
    }