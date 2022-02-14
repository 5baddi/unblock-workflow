import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "google-drive";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODEgNzMiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTYuMDQ4IDYxLjI2bDMuNTI4IDYuMDk0Yy43MzMgMS4yODMgMS43ODcgMi4yOTEgMy4wMjQgMy4wMjRsMTIuNi0yMS44MUgwYTguMyA4LjMgMCAwMDEuMSA0LjEyNHoiIGZpbGw9IiMwMDY2ZGEiLz48cGF0aCBkPSJNNDAgMjIuOTFMMjcuNCAxLjFjLTEuMjM3LjczMy0yLjI5MSAxLjc0MS0zLjAyNCAzLjAyNEwxLjEgNDQuNDQ1QTguMjk4IDguMjk4IDAgMDAwIDQ4LjU2OGgyNS4yeiIgZmlsbD0iIzAwYWM0NyIvPjxwYXRoIGQ9Ik02Ny40IDcwLjM3OGMxLjIzNy0uNzMzIDIuMjkxLTEuNzQxIDMuMDI0LTMuMDI0bDEuNDY2LTIuNTIgNy4wMS0xMi4xNDJhOC4zIDguMyAwIDAwMS4xLTQuMTI0SDU0Ljc5OGw1LjM2MyAxMC41Mzh6IiBmaWxsPSIjZWE0MzM1Ii8+PHBhdGggZD0iTTQwIDIyLjkxTDUyLjYgMS4xQzUxLjM2My4zNjcgNDkuOTQzIDAgNDguNDc3IDBIMzEuNTI0Yy0xLjQ2NiAwLTIuODg3LjQxMi00LjEyNCAxLjF6IiBmaWxsPSIjMDA4MzJkIi8+PHBhdGggZD0iTTU0Ljc5OSA0OC41NjhIMjUuMmwtMTIuNiAyMS44MWMxLjIzNy43MzMgMi42NTcgMS4xIDQuMTI0IDEuMWg0Ni41NTJjMS40NjYgMCAyLjg4Ny0uNDEyIDQuMTI0LTEuMXoiIGZpbGw9IiMyNjg0ZmMiLz48cGF0aCBkPSJNNjcuMjYyIDI0LjI4NEw1NS42MjQgNC4xMjRDNTQuODkxIDIuODQxIDUzLjgzNyAxLjgzMyA1Mi42IDEuMUw0MCAyMi45MWwxNC44IDI1LjY1OWgyNS4xNTVhOC4zIDguMyAwIDAwLTEuMS00LjEyNHoiIGZpbGw9IiNmZmJhMDAiLz48L2c+PC9zeW1ib2w+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Drive";
        }
    })
    export class GoogleDrive extends NodeBlock
    {
    
    }