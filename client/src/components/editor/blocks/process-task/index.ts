import { NodeBlock, tripetto, editor, Forms, slots } from "tripetto";
import ICON  from "./assets/icon.svg";

const BLOCK_NAME = "process-task";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: ICON,
    alias: BLOCK_NAME,
    get label() {
        // TODO: use translation
        return "Process task";
    }
})
export class ProcessTask extends NodeBlock
{
    @slots
    defineSlot(): void {
        // this.slots.feature({
        //     type: Slots.String,
        //     reference: "name",
        //     label: "Name",
        //     default: "Unnamed process task",
        //     exportable: false,
        // });
    }

    @editor
    defineEditor() {
        this.editor.form({
            title: "Explanation",
            controls: [
                new Forms
                    .Static(
                        "Generate a process based on already defined process tasks.."
                    )
                    .markdown(),
            ],
        });

        this.editor.name(false, false, "Name", false);

        // this.editor.option({
        //     name: "Name",
        //     form: {
        //         title: "Name",
        //         controls: [
        //             new Forms.Text("singleline")
        //                 .placeholder("Unnamed process task")
        //                 .action("@", insertVariable(this))
        //                 .autoFocus()
        //                 .autoSelect(),
        //         ]
        //     },
        //     locked: true
        // });
    }
}