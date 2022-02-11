import { NodeBlock, tripetto, editor, Forms } from "tripetto";
import ICON  from "./assets/icon.svg";

const BLOCK_NAME = "process-task";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: ICON,
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Process task";
    }
})
export class ProcessTask extends NodeBlock
{
    @editor
    defineEditor() {
        this.editor.form({
            title: "Explanation",
            controls: [
                new Forms
                    .Static(
                        "Generate a process based on already defined tasks."
                    )
                    .markdown(),
            ],
        });

        this.editor
            .name(false, false, "Name", false)
            .focus();
    }
}