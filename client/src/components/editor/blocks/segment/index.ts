import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "segment";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjUgNjEiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjx1c2UgeGxpbms6aHJlZj0iI2EiIHg9Ii41IiB5PSIuNSIvPjxzeW1ib2wgaWQ9ImEiIG92ZXJmbG93PSJ2aXNpYmxlIj48ZyBzdHJva2U9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM5Ljg3NSA0MC41NjdIMy4wNzNDMS4zODMgNDAuNTY3IDAgMzkuMTg0IDAgMzcuNDkzczEuMzgzLTMuMDczIDMuMDczLTMuMDczaDM2LjgwMmMxLjY5IDAgMy4wNzMgMS4zODMgMy4wNzMgMy4wNzNzLTEuMzgzIDMuMDczLTMuMDczIDMuMDczeiIgZmlsbD0iIzk5Y2ZhYyIvPjxwYXRoIGQ9Ik0zMi4wMzggNTkuMzljLTIuOTk2IDAtNS45OTMtLjQ2MS04LjgzNi0xLjMwNi0xLjYxMy0uNTM4LTIuNTM1LTIuMjI4LTEuOTk4LTMuODQyczIuMjI4LTIuNTM1IDMuODQyLTEuOTk4YTIzLjczIDIzLjczIDAgMDA2Ljk5MiAxLjA3NmMxMC40NDkgMCAxOS41MTUtNi42ODQgMjIuNTExLTE2LjY3Mi40NjEtMS42MTQgMi4yMjgtMi41MzUgMy44NDItMi4wNzRzMi41MzUgMi4yMjggMi4wNzQgMy44NDJDNTYuNTQ3IDUwLjkzOSA0NS4xNzYgNTkuMzkgMzIuMDM4IDU5LjM5eiIgZmlsbD0iIzQ5Yjg4MSIvPjxwYXRoIGQ9Ik02MC45MjcgMjQuOTcxSDI0LjEyNWMtMS42OSAwLTMuMDczLTEuMzgzLTMuMDczLTMuMDczczEuMzgzLTMuMDczIDMuMDczLTMuMDczaDM2LjgwMmMxLjY5IDAgMy4wNzMgMS4zODMgMy4wNzMgMy4wNzNzLTEuMzgzIDMuMDczLTMuMDczIDMuMDczeiIgZmlsbD0iIzk5Y2ZhYyIvPjxwYXRoIGQ9Ik02LjUzMSAyNC45N2MtLjMwNyAwLS42MTUtLjA3Ny0uOTIyLS4xNTQtMS42MTMtLjQ2MS0yLjUzNS0yLjIyOC0yLjA3NC0zLjg0MUM3LjQ1MyA4LjQ1MSAxOC44MjQgMCAzMi4wMzkgMGMyLjk5NiAwIDUuOTkzLjQ2MSA4LjgzNSAxLjMwNiAxLjYxMy41MzggMi41MzUgMi4yMjggMS45OTggMy44NDJzLTIuMjI4IDIuNTM1LTMuODQyIDEuOTk4YTIzLjczIDIzLjczIDAgMDAtNi45OTItMS4wNzZjLTEwLjQ0OSAwLTE5LjUxNSA2LjY4NC0yMi41MTEgMTYuNjcyLS40NjEgMS4zODMtMS42OSAyLjIyOC0yLjk5NiAyLjIyOHoiIGZpbGw9IiM0OWI4ODEiLz48ZyBmaWxsPSIjOTljZmFjIj48dXNlIHhsaW5rOmhyZWY9IiNDIi8+PHVzZSB4bGluazpocmVmPSIjQyIgeD0iLTM2LjQ5NSIgeT0iMzkuMDMiLz48L2c+PC9nPjwvc3ltYm9sPjxkZWZzPjxwYXRoIGlkPSJDIiBkPSJNNDcuMTc0IDEwLjIxOGMwLTEuNzAzIDEuMzcxLTMuMDczIDMuMDczLTMuMDczczMuMDczIDEuMzcxIDMuMDczIDMuMDczLTEuMzcxIDMuMDczLTMuMDczIDMuMDczLTMuMDczLTEuMzcxLTMuMDczLTMuMDczeiIvPjwvZGVmcz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Segment";
        }
    })
    export class Segment extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    