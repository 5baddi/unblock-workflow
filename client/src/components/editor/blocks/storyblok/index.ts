import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "storyblok";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiMwOUIzQUYiPjxwYXRoIGQ9Ik01MS44IDQ5SDMxdjEwaDIwLjNjMS4yIDAgMi4zLS41IDMuMi0xLjMuOC0uOCAxLjMtMiAxLjMtMy41YTYgNiAwIDAwLTEuMS0zLjZjLS44LTEtMS43LTEuNi0yLjktMS42em0uNy0xMi4xYy45LS42IDEuMy0xLjkgMS4zLTMuNiAwLTEuNS0uNC0yLjYtMS4xLTMuMy0uNy0uNi0xLjYtMS0yLjYtMUgzMXY5aDE4LjdjMSAwIDItLjUgMi44LTEuMXoiLz48cGF0aCBkPSJNODMgMEg0LjVDMiAwIDAgMiAwIDQuNFY4M2MwIDIuNCAyIDMuOSA0LjQgMy45SDE2djE1LjdMMzAuNCA4N0g4M2MyLjQgMCAzLjktMS41IDMuOS00VjQuNWMwLTIuNC0xLjUtNC40LTQtNC40TDgzIDB6TTY5LjggNjMuN2MtMSAxLjgtMi41IDMuMy00LjMgNC40LTEuOSAxLjItNCAyLjMtNi40IDIuOC0yLjQuNi01IDEuMS03LjcgMS4xSDE2VjE2aDQwLjJjMiAwIDMuNy40IDUuMyAxLjMgMS41LjggMi45IDEuOSA0IDMuMmExNSAxNSAwIDAxMy40IDkuN2MwIDIuNi0uNyA1LjEtMiA3LjVhMTIuNSAxMi41IDAgMDEtNiA1LjRjMy4yLjkgNS43IDIuNSA3LjYgNC44IDEuOCAyLjQgMi43IDUuNSAyLjcgOS40IDAgMi41LS41IDQuNi0xLjUgNi40aC4xeiIvPjxwYXRoIGQ9Ik01MS44IDQ5SDMxdjEwaDIwLjNjMS4yIDAgMi4zLS41IDMuMi0xLjMuOC0uOCAxLjMtMiAxLjMtMy41YTYgNiAwIDAwLTEuMS0zLjZjLS44LTEtMS43LTEuNi0yLjktMS42em0uNy0xMi4xYy45LS42IDEuMy0xLjkgMS4zLTMuNiAwLTEuNS0uNC0yLjYtMS4xLTMuMy0uNy0uNi0xLjYtMS0yLjYtMUgzMXY5aDE4LjdjMSAwIDItLjUgMi44LTEuMXoiLz48cGF0aCBkPSJNODMgMEg0LjVDMiAwIDAgMiAwIDQuNFY4M2MwIDIuNCAyIDMuOSA0LjQgMy45SDE2djE1LjdMMzAuNCA4N0g4M2MyLjQgMCAzLjktMS41IDMuOS00VjQuNWMwLTIuNC0xLjUtNC40LTQtNC40TDgzIDB6TTY5LjggNjMuN2MtMSAxLjgtMi41IDMuMy00LjMgNC40LTEuOSAxLjItNCAyLjMtNi40IDIuOC0yLjQuNi01IDEuMS03LjcgMS4xSDE2VjE2aDQwLjJjMiAwIDMuNy40IDUuMyAxLjMgMS41LjggMi45IDEuOSA0IDMuMmExNSAxNSAwIDAxMy40IDkuN2MwIDIuNi0uNyA1LjEtMiA3LjVhMTIuNSAxMi41IDAgMDEtNiA1LjRjMy4yLjkgNS43IDIuNSA3LjYgNC44IDEuOCAyLjQgMi43IDUuNSAyLjcgOS40IDAgMi41LS41IDQuNi0xLjUgNi40aC4xeiIvPjwvZz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Storyblok";
        }
    })
    export class Storyblok extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    