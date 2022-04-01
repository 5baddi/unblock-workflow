import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "Brandfetch";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB8klEQVRoge3Zv87BYBQG8O9O/EtrYEMkSCUSdnfQCxCRuAYuwGoRF9DFbDV1ZWRgMQiNQWNwvlm9Wuoc5ThP8m5O+/xypJr4gx/LX9QF3h0Bc4+AuUfA3CNg7hEw9wiYewTMPQKmyna7hWw2C7FYzPfoug6Hw4GsByk4nU4HAv1OLpdD74QOHo1GLyFVBzNo4NPp9FB5TdOgUqlAv98Hy7JgMBiAYRiQTCbfgkYD3yvabDafus75fFZep9FooPREAa/Xa/SNUG0ZfcPeOI4D3W4XxuPxU9frdDqfDVbFNM3QpW3b/j6wt/B0Og09+5XgR+O67s3sfr9H6UQGPh6PocDtdvtmLpFIoPUiA9fr9avSmUzm7mdt2777O4yJBSAE+23XcRwlzntWqxV6r0jAfkhd18F1Xapa0YCr1aovulAoUNWiAc/n86ceWPl8XgmnCAm4VCpdFS8Wi4Ezu93uBrxcLtG7kYC9xS3LCjVHseW3gMPO/RzYMAz0bh8DLpfL3/nQUr0H++VyuSi/yvF4HLsaABCAN5vNTXnTNGE4HMJkMoFerwe1Wk2JpN4uAAG41WoFYvxOKpXCrnQVdHBYqKZp2FWUiRQ8m82wbx8YdLD3NXGxWGDf4qXIf0vcI2DuETD3CJh7BMw9AuYeAXOPgLnnH2Qk2hBEa++aAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Brandfetch";
        }
    })
    export class Brandfetch extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    