import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "airtable";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMTcwIj48cGF0aCBkPSJNODkgNC44TDE2LjIgMzQuOWMtNC4xIDEuNy00IDcuNC4xIDkuMWw3My4yIDI5YzYuNCAyLjYgMTMuNiAyLjYgMjAgMGw3My4yLTI5YzQuMS0xLjYgNC4xLTcuNC4xLTkuMWwtNzMtMzAuMUMxMDMuMiAyIDk1LjcgMiA4OSA0LjgiIGZpbGw9IiNmY2I0MDAiLz48cGF0aCBkPSJNMTA1LjkgODguOXY3Mi41YzAgMy40IDMuNSA1LjggNi43IDQuNWw4MS42LTMxLjdjMS45LS43IDMuMS0yLjUgMy4xLTQuNVY1Ny4yYzAtMy40LTMuNS01LjgtNi43LTQuNUwxMDkgODQuM2MtMS45LjgtMy4xIDIuNi0zLjEgNC42IiBmaWxsPSIjMThiZmZmIi8+PHBhdGggZD0iTTg2LjkgOTIuNmwtMjQuMiAxMS43LTIuNSAxLjJMOS4xIDEzMGMtMy4yIDEuNi03LjQtLjgtNy40LTQuNFY1Ny41YzAtMS4zLjctMi40IDEuNi0zLjMuNC0uNC44LS43IDEuMi0uOSAxLjItLjcgMy0uOSA0LjQtLjNsNzcuNSAzMC43YzQgMS41IDQuMyA3LjEuNSA4LjkiIGZpbGw9IiNmODJiNjAiLz48cGF0aCBkPSJNODYuOSA5Mi42bC0yNC4yIDExLjctNTkuNC01MGMuNC0uNC44LS43IDEuMi0uOSAxLjItLjcgMy0uOSA0LjQtLjNsNzcuNSAzMC43YzQgMS40IDQuMyA3IC41IDguOCIgZmlsbD0iI2JhMWU0NSIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Airtable";
        }
    })
    export class Airtable extends NodeBlock
    {
    
    }