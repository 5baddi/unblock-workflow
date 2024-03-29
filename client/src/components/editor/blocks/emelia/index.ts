import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "emelia";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMiAyIDQ1IDQ1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yOS43MTQgNi41MzlIOS4wNzhhMi4xMDkgMi4xMDkgMCAwMC0yLjAwNyAyLjc2Mmw1LjQ4NCAxNi44NjMgNC4yMTktMS44MTdhMi42OSAyLjY5IDAgMDEtLjAyNC0uMzQgMi42NDEgMi42NDEgMCAxMTEuMDIzIDIuMDgxIDI0MTYuNzEgMjQxNi43MSAwIDAxLTQuNDE1IDIuNTQ1bDUuMTU2IDE1Ljg1MmEuODY1Ljg2NSAwIDAwMS42NDUgMGwxMS40OC0zNS4yOTNhMi4wMjYgMi4wMjYgMCAwMC0xLjkyNS0yLjY1M3oiIG9wYWNpdHk9Ii45IiBmaWxsPSIjZjRiNDU0Ii8+PHBhdGggZD0iTTM3LjE1NCAyMS4yNjFMMS4wNzEgMTIuNTc3YS44NjUuODY1IDAgMDAtLjg2MSAxLjRsMTAuOTA5IDEyLjggNS42NTYtMi40MzZhMi42OTQgMi42OTQgMCAwMS0uMDI0LS4zNCAyLjY0MSAyLjY0MSAwIDExMS4wMjMgMi4wODEgMjE3OC4xNSAyMTc4LjE1IDAgMDEtNC44NiAyLjhsMTEuMjkxIDEzLjI1NWEyLjExIDIuMTEgMCAwMDMuNC0uMjY0bDEwLjgtMTcuNTg2YTIuMDI2IDIuMDI2IDAgMDAtMS4yNTEtMy4wMjZ6IiBmaWxsPSIjZWY2ZDRhIiBvcGFjaXR5PSIuOSIvPjxwYXRoIGQ9Ik0zNy42MzYgMTIuNTc3TDEuNTUzIDIxLjI2MUEyLjAyNSAyLjAyNSAwIDAwLjMwMSAyNC4yOWwzLjQ3MiA1LjY1NiAxMy01LjZhMi42ODkgMi42ODkgMCAwMS0uMDI0LS4zNCAyLjY0MSAyLjY0MSAwIDExMS4wMjMgMi4wODFjLTMuMSAxLjc5MS05LjA3MyA1LjIzNC0xMi4xMDggNi45NGw1LjQzMiA4Ljg0OGEyLjExIDIuMTEgMCAwMDMuNC4yNjRsMjMuOTk1LTI4LjE2MWEuODY1Ljg2NSAwIDAwLS44NTUtMS40MDF6IiBmaWxsPSIjMjAzNTRjIiBvcGFjaXR5PSIuOSIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Emelia";
        }
    })
    export class Emelia extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    