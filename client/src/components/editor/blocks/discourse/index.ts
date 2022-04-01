import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "discourse";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgLTEgMTA0IDEwNiI+PGcgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBkYXRhLW5hbWU9IkxheWVyIDMiPjxwYXRoIGQ9Ik01MS44NyAwQzIzLjcxIDAgMCAyMi44MyAwIDUxdjUyLjgxbDUxLjg2LS4wNWMyOC4xNiAwIDUxLTIzLjcxIDUxLTUxLjg3UzgwIDAgNTEuODcgMHoiIGZpbGw9IiMyMzFmMjAiLz48cGF0aCBkPSJNNTIuMzcgMTkuNzRhMzEuNjIgMzEuNjIgMCAwMC0yNy43OSA0Ni42N2wtNS43MiAxOC40IDIwLjU0LTQuNjRhMzEuNjEgMzEuNjEgMCAxMDEzLTYwLjQzeiIgZmlsbD0iI2ZmZjlhZSIvPjxwYXRoIGQ9Ik03Ny40NSAzMi4xMmEzMS42IDMxLjYgMCAwMS0zOC4wNSA0OGwtMjAuNTQgNC43IDIwLjkxLTIuNDdhMzEuNiAzMS42IDAgMDAzNy42OC01MC4yM3oiIGZpbGw9IiMwMGFlZWYiLz48cGF0aCBkPSJNNzEuNjMgMjYuMjlBMzEuNiAzMS42IDAgMDEzOC44IDc4bC0xOS45NCA2LjgyIDIwLjU0LTQuNjVhMzEuNiAzMS42IDAgMDAzMi4yMy01My44OHoiIGZpbGw9IiMwMGE5NGYiLz48cGF0aCBkPSJNMjYuNDcgNjcuMTFhMzEuNjEgMzEuNjEgMCAwMTUxLTM1IDMxLjYxIDMxLjYxIDAgMDAtNTIuODkgMzQuM2wtNS43MiAxOC40eiIgZmlsbD0iI2YxNWQyMiIvPjxwYXRoIGQ9Ik0yNC41OCA2Ni40MWEzMS42MSAzMS42MSAwIDAxNDcuMDUtNDAuMTIgMzEuNjEgMzEuNjEgMCAwMC00OSAzOS42M2wtMy43NiAxOC45eiIgZmlsbD0iI2UzMWIyMyIvPjwvZz48L2c+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Discourse";
        }
    })
    export class Discourse extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    