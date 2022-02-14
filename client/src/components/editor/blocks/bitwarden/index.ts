import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "bitwarden";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTUgNjYiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48cGF0aCBkPSJNNTMuMzMzIDIuNjY3djMyYzAgMi4zODgtLjQ2NSA0Ljc1Ni0xLjM5NiA3LjEwM3MtMi4wODQgNC40My0zLjQ1OCA2LjI1LTMuMDE1IDMuNTktNC45MTcgNS4zMTItMy42NiAzLjE1My01LjI3MiA0LjI5MmwtNS4wNCAzLjIzLTMuNzMgMi4wNjItMS43Ny44MzRjLS4zMzMuMTY2LS42OTUuMjUtMS4wODMuMjVhMi40IDIuNCAwIDAxLTEuMDgzLS4yNWwtMS43Ny0uODM0LTMuNzMtMi4wNjItNS4wNDItMy4yM2MtMS42MS0xLjE0LTMuMzY4LTIuNTctNS4yNy00LjI5MnMtMy41NC0zLjQ5Mi00LjkxNi01LjMxMi0yLjUyOC0zLjkwMy0zLjQ2LTYuMjVTMCAzNy4wNTUgMCAzNC42Njd2LTMyQTIuNTYgMi41NiAwIDAxLjc5MS43OTIgMi41NiAyLjU2IDAgMDEyLjY2NiAwaDQ4Yy43MiAwIDEuMzQ2LjI2NCAxLjg3NC43OTJhMi41NiAyLjU2IDAgMDEuNzkyIDEuODc1bS04IDMyVjhIMjYuNjY2djQ3LjM3NWMzLjMwNS0xLjc1IDYuMjY0LTMuNjUzIDguODc1LTUuNzA4IDYuNTI3LTUuMTEgOS43OS0xMC4xMSA5Ljc5LTE1IiBzdHJva2U9Im5vbmUiIGZpbGw9IiMzYzhkYmMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ltYm9sPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Bitwarden";
        }
    })
    export class Bitwarden extends NodeBlock
    {
    
    }