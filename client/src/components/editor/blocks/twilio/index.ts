import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "twilio";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUgNjUiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9IiNlMzFlMjYiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTMxLjk1MyAwQzE0LjMzNyAwIDAgMTQuMzM3IDAgMzEuOTUzczE0LjMzNyAzMS45NTMgMzEuOTUzIDMxLjk1M0M0OS42NjMgNjQgNjQgNDkuNjYzIDY0IDMxLjk1M1M0OS42NjMgMCAzMS45NTMgMHptMCA1NS41NjdjLTEyLjkzMSAwLTIzLjUyLTEwLjU4OS0yMy41Mi0yMy42MTQgMC0xMi45MzEgMTAuNTg5LTIzLjUyIDIzLjUyLTIzLjUyIDEzLjAyNSAwIDIzLjYxNCAxMC41ODkgMjMuNjE0IDIzLjUyIDAgMTMuMDI1LTEwLjU4OSAyMy42MTQtMjMuNjE0IDIzLjYxNHoiLz48dXNlIHhsaW5rOmhyZWY9IiNDIi8+PHVzZSB4bGluazpocmVmPSIjQyIgeT0iMTUuOTMiLz48cGF0aCBkPSJNMTcuMzM1IDM5LjkxOGE2LjY0IDYuNjQgMCAwMTYuNjUzLTYuNjUzIDYuNjUzIDYuNjUzIDAgMTEwIDEzLjMwNiA2LjY0IDYuNjQgMCAwMS02LjY1My02LjY1M3ptMC0xNS45M2E2LjY0IDYuNjQgMCAwMTYuNjUzLTYuNjUzIDYuNjQgNi42NCAwIDAxNi42NTMgNi42NTMgNi42NCA2LjY0IDAgMDEtNi42NTMgNi42NTMgNi42NCA2LjY0IDAgMDEtNi42NTMtNi42NTN6Ii8+PC9nPjwvc3ltYm9sPjxkZWZzPjxwYXRoIGlkPSJDIiBkPSJNMzMuMjY1IDIzLjk4OGE2LjY0IDYuNjQgMCAxMTEzLjMwNiAwIDYuNjQgNi42NCAwIDExLTEzLjMwNiAweiIvPjwvZGVmcz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Twilio";
        }
    })
    export class Twilio extends NodeBlock
    {
    
    }