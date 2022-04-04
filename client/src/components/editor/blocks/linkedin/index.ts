import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "linkedIn";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAeFBMVEUAAAAAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7cAd7dCC76VAAAAJ3RSTlMAvu24u3z4Th2N9SDMCakSWjLUxYpiSu/o4+C0k3g5KCQZnGxGQOYWUAHIAAABL0lEQVRIx+2Uy26DMBBFATsuUN4QIECBNEn9/3/YGo8rFCP5scgmPqs7So4Q+Ho8x7uR3rCvZiyO3LymemSpLEdUl7Ms99oykuWOArFK9mU5gDd6hMttsJNPWw4rGxnD8LCRCzFVFvIsJvTqJ2cwlMRChvaktd05N0uat4n5OQMXSBZyTCjhBSXxH4SlIMG4/lHL0SejvFA6riytPk2KfLuyLVLJ9/9j/uJp2l3fk0L+4AMWLfda5gq+9WWZvLeSgclYnotSxLuhnKPd0gtjMzmjDPj26WAkL3Sj8jiJkXyG4l35WBvJDZdJCO0xkiMnO/lJbvdraN8wqOeoWPrQ/wk2D8ilxsXoEIP9hfgs+URsc/jhWO6oFscy0pYbWS5jTXe4ejIzDjTos9VzOLT5BfjxoqsO1pP+AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "LinkedIn";
        }
    })
    export class LinkedIn extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    