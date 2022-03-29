import { TOption } from "@marblecore/ui-form-dropdown/lib/option";
import { NodeBlock, tripetto, editor, Forms, definition } from "tripetto";
import { IZendeskOption } from "../interfaces";
import { BLOCK_NAME, BLOCK_ICON, BLOCK_VERSION, BLOCK_LABEL, DEFAULT_OPTIONS } from "../constants";
import { APPS_LIST_KEY } from '../../../../../global';
import { ENV } from "../../../../../settings";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: BLOCK_ICON,
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return BLOCK_LABEL;
    }
})
export class Zendesk extends NodeBlock
{
    private options?: Array<TOption<IZendeskOption>>;

    @definition("string", "required", "rw")
    appName: string = "";

    dropdown?: Forms.Dropdown<IZendeskOption>;

    loadApps(): void
    {
        this.dropdown?.disabled(true);
        this.dropdown?.options(DEFAULT_OPTIONS)
        this.dropdown?.await();

        try {
            let apps = JSON.parse(window.sessionStorage.getItem(APPS_LIST_KEY) || "null") || undefined;

            if (typeof apps !== "undefined" && Array.isArray(apps)) {
                this.options = Object.values(apps).map(appName => {
                    return {
                        value: <string> appName,
                        label: <string> appName
                    };
                });
        
                this.dropdown?.options(this.options ?? DEFAULT_OPTIONS);
                this.dropdown?.select(this.appName);
        
                if (! Array.isArray(this.options) || this.options.length === 0) {
                    this.dropdown?.options(DEFAULT_OPTIONS);
                }
        
                if (typeof this.dropdown !== "undefined") {
                    this.dropdown.isAwaiting = false;
                }
        
                this.dropdown?.disabled(false);
            }
        } catch(e) {
            if (ENV === "development") {
                console.log("opening the editor");
            }

            if (typeof this.dropdown !== "undefined") {
                this.dropdown.isAwaiting = false;
            }

            this.dropdown?.options(DEFAULT_OPTIONS);
            this.dropdown?.disabled(false);
        }
    }

    @editor
    defineEditor()
    {
        this.dropdown = new Forms.Dropdown(DEFAULT_OPTIONS, Forms.Dropdown.bind(this, "appName", this.appName));

        this.loadApps();

        this.editor.name(false, false, "Name", false).focus();
        this.node.nameVisible = false;

        this.editor.option({
            name: "App",
            locked: true,
            form: {
                title: "Select an app",
                controls: [
                    this.dropdown
                ]
            }
        });
    }
}