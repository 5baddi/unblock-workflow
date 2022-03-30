import { TOption } from "@marblecore/ui-form-dropdown/lib/option";
import { NodeBlock, tripetto, editor, Forms, definition } from "tripetto";
import { IExternalAppOption } from "../interfaces";
import { BLOCK_NAME, BLOCK_ICON, BLOCK_VERSION, BLOCK_LABEL, DEFAULT_OPTIONS } from "../constants";
import { APPS_LIST_KEY } from "../../../../../global";
import { ENV } from "../../../../../settings";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: BLOCK_ICON,
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "ui",
    get label() {
        // TODO: use translation
        return BLOCK_LABEL;
    }
})
export class ExternalApp extends NodeBlock
{
    private options?: Array<TOption<IExternalAppOption>>;

    @definition("string", "required", "rw")
    appName: string = "";

    @definition("string")
    customAction: string = "";

    dropdown?: Forms.Dropdown<IExternalAppOption>;

    loadApps(): void
    {
        this.dropdown?.disabled(true);
        this.dropdown?.options(DEFAULT_OPTIONS)
        this.dropdown?.await();

        try {
            let apps = JSON.parse(window.sessionStorage.getItem(APPS_LIST_KEY) || "undefined") || undefined;

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
            name: "Open an app",
            locked: true,
            form: {
                title: "Select an app",
                controls: [
                    this.dropdown,
                ]
            }
        });
        
        this.editor.option({
            name: "Custom action",
            form: {
                title: "Custom action on selected app",
                controls: [
                    new Forms.Radiobutton(
                        [
                            {
                                value: "replaceOpenedApps",
                                label: "Replace opened apps with selected app",
                                
                            },
                            {
                                value: "closeOpenedApps",
                                label: "Close all opened apps"
                            },
                            {
                                value: "removeSelectedApp",
                                label: "Remove selected app"
                            }
                        ], 
                        new Forms.Binding(this, "customAction", "")
                    )
                ]
            }
        });
    }
}