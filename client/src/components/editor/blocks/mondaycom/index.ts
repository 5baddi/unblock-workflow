import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mondaycom";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04LjE4NCA0Ny4zOTNBNy4xOTUgNy4xOTUgMCAwMTEuOSA0My42NzRhNy4yMTUgNy4yMTUgMCAwMS4xOTYtNy4zMDdsMTIuOTQ1LTIwLjczYTcuMTgyIDcuMTgyIDAgMDE2LjM1Ni0zLjM3NiA3LjE5NiA3LjE5NiAwIDAxNi4wOTcgMy44MjQgNy4yMTIgNy4yMTIgMCAwMS0uMjU4IDcuMmwtMTIuOTUgMjAuNzI3YTcuMTg2IDcuMTg2IDAgMDEtNi4xMDMgMy4zNzlsLjAwMS4wMDJ6IiBmaWxsPSIjRkYzRDU3Ii8+PHBhdGggZD0iTTMwLjQ5NCA0Ny4zOTNhNy4xOTYgNy4xOTYgMCAwMS02LjI5NS0zLjcxMyA3LjIxMiA3LjIxMiAwIDAxLjE5NC03LjMxM2wxMi45NTQtMjAuNzNhNy4xNzQgNy4xNzQgMCAwMTYuNDExLTMuNjM0QTcuMTkzIDcuMTkzIDAgMDE1MCAxNS45MjNhNy4yMTEgNy4yMTEgMCAwMS0uNDc2IDcuMzZsLTEyLjkzIDIwLjczYTcuMTg2IDcuMTg2IDAgMDEtNi4xMDIgMy4zNzhsLjAwMy4wMDJ6IiBmaWxsPSIjRkZDQjAwIi8+PHBhdGggZD0iTTQ1LjU5MSA0MC4zNTdjMC0zLjg5NSAzLjIxNC03LjAzNCA3LjIwNS03LjAzNCAzLjk5IDAgNy4yMDQgMy4xMzcgNy4yMDQgNy4wMzRzLTMuMjE0IDcuMDM0LTcuMjA0IDcuMDM0Yy0zLjk5MSAwLTcuMjA1LTMuMTM3LTcuMjA1LTcuMDM0eiIgZmlsbD0iIzAwRDY0NyIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Monday.com";
        }
    })
    export class Mondaycom extends NodeBlock
    {
    
    }