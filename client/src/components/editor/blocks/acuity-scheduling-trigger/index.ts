
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "acuity-scheduling-trigger";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/png;base64,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",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Acuity Scheduling Trigger";
    }
})
export class AcuitySchedulingTrigger extends NodeBlock
{

}