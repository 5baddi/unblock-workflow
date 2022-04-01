import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "vonage";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAApVBMVEUAAAAAAAAAAAAAAAAAAAAAAAABAgIAAAAAAAADAgQDAwMAAAAAAAACAQICAgIAAAEDAwMBAQECAAYBAQEBAQIBAQECAQIBAAEBAQEAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQMAAAAAAAAAAAACAgICAgIAAAECAQIBAQIBAAECAgMAAAAAAAEAAAAAAAABAQMAAAIFBQUAAAMAAgIAAACoS1mWAAAANnRSTlMABfoD/Pe3+fMjNeHPTrWeOIATwz+6pI1wVUMXD+7n5aqVKR3TzMCHhW1qSi8L2GVjXTszK3TV59WcAAACK0lEQVRIx+2VbVfiMBSEU2hICwJFKCKuArqyuIjv3v//0xwJ4YI3aeh353A45DLDpO1zgvrVr+Jqqsmw1/pWr7ecYlnpHSyddzjFIFFd2qusisKaE+vRDkvKjNbaaEMFV/vC/yjTW2W0gPN7dEkpbdWgPkbh7PnMOSltq8RO/yJmpXNOy/B/50upBZ8dTtywQRdYhtQ8I+PCXVesrm4Qs8Ob80AaTV2+vLOD/Vzwfj7D1SVv8BkuF77ViNnx00ZetTW9Ebls5w+bmmrO1a/wecNjLh4gwl+MaCdDwxAgmd0d3rP8uGDI1WDUF17BIWn4CUrPEwYgnV0YKrjYgWKY2sQPiPx1CcoCS5H2AAJJUK7vsD4BED8oAxluSUAgHyidY0axKPyAsGHOP/5gwzFABCj2spKTAAmAcmkdfIL4ADkGhS3LkwFhUNgzZY88QbzVDwIUAcia5wFQoBGWMUAkKNZUBgB5EcUCFIuvG7YrAJGgGPuc3awfBkSCAtMEHwUgDQmIBCVltmOASFAatMKHOCBSmyfi3fGzDwEiThTsLomdICFQZtTm4kNA7sMxfjIwMSClAKQy/DhCJnSCRNTEK3yCRNMH2Q/jABFHanwTffGvHxUX6/3RVb94TMYVr+oWj2hfPBO3OnbX7/mKX+sWD1xW01zV0katiVx2dlWnGN73zBanhjTDfpqmu/MDun6rl80X5LLZ+K5m7+26eG9vVeQqko2xXk8Jq6L2C7ZUlKZlyYELAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Vonage";
        }
    })
    export class Vonage extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    