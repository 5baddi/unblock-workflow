import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "bitbucketTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHkyPSIuNjU2IiB4Mj0iLjMzIiB5MT0iLS4xNyIgeDE9Ii43NjIiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMDA1MkNDIiBvZmZzZXQ9Ii4xOCIvPjxzdG9wIHN0b3AtY29sb3I9IiMyNjg0RkYiIG9mZnNldD0iMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0iIzI2ODRGRiIgZD0iTTEuNzIxIDMuODczYTEuNDY1IDEuNDY1IDAgMDExLjEyOS0uNTA5bDQyLjc3Mi4wMDdhMS40NjYgMS40NjYgMCAwMTEuNDY2IDEuN2wtNi4yMjIgMzguMTkzYTEuNDY2IDEuNDY2IDAgMDEtMS40NjUgMS4yMzFIOS41NTVhMS45OTMgMS45OTMgMCAwMS0xLjk1LTEuNjYzTDEuMzg2IDUuMDY0Yy0uMDctLjQyNy4wNTMtLjg2My4zMzYtMS4xOTF6bTE3LjggMjYuNzg3aDkuNTI2bDIuMzA4LTEzLjQ3NUgxNi45NDFsMi41OCAxMy40NzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIHN0cm9rZT0ibnVsbCIgZmlsbD0idXJsKCNhKSIgZD0iTTQ0LjQxOCAxOC40MzdoLTEyLjY0bC0yLjEyIDEyLjM4M2gtOC43NTVMMTAuNTY3IDQzLjA5Yy4zMjcuMjgzLjc0NS40NCAxLjE3OC40NDRIMzkuMThhMS4zNDcgMS4zNDcgMCAwMDEuMzQ3LTEuMTMybDMuODkyLTIzLjk2NXoiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Bitbucket Trigger";
        }
    })
    export class BitbucketTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    