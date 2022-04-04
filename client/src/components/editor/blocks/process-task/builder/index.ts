import { TOption } from "@marblecore/ui-form-dropdown/lib/option";
import { NodeBlock, tripetto, editor, Forms, definition } from "tripetto";
import API from "../../../../../api";
import { IProcessTaskOptionInterface } from "../interfaces";
import { BLOCK_NAME, BLOCK_ICON, BLOCK_VERSION, BLOCK_LABEL, DEFAULT_OPTIONS, SELECT_OPTION, NO_OPTION_FOUND } from "../constants";
import { USER_ID_KEY, USER_TENANT_ID_KEY } from "../../../../../global";
import { ENV } from "../../../../../settings";
import { IDefinition } from "../../../../../interfaces/index";

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
export class ProcessTask extends NodeBlock
{
    @definition("string", "required", "rw")
    definitionId: string = "-1";

    @definition("boolean")
    sendable: boolean = false;

    dropdown?: Forms.Dropdown<IProcessTaskOptionInterface>;

    loadDefinitions(): void
    {
        let endpoint = "/definitions";

        let tenantId = window.sessionStorage.getItem(USER_TENANT_ID_KEY);
        let userId = window.sessionStorage.getItem(USER_ID_KEY);

        if (tenantId) {
            endpoint = endpoint.concat(`/${tenantId}`);
        }
        
        if (userId) {
            endpoint = endpoint.concat(`/${userId}`);
        }

        this.dropdown?.disabled(true);
        this.dropdown?.options([...DEFAULT_OPTIONS]);
        this.dropdown?.await();

        API.get(endpoint)
            .then(response => {
                if (! response.data || ! response.data.definitions || ! Array.isArray(response.data.definitions)) {
                    this.dropdown?.options([...NO_OPTION_FOUND]);
                    this.dropdown?.select("-1");
                }

                this.dropdown?.options([]);

                let definitions: [] = response.data.definitions
                    .filter((definition: IDefinition) => {
                        if (! definition._id || ! definition.name) {
                            return false;
                        }

                        return true;
                    })
                    .map((definition: IDefinition) => {
                        return {
                            value: <string> definition._id,
                            label: <string> definition.name
                        };
                    });

                let _options = [...NO_OPTION_FOUND];
                if (definitions.length > 0) {
                    _options = [...SELECT_OPTION];
                    _options.push(...definitions ?? []);

                    this.dropdown?.options(_options as Array<TOption<IProcessTaskOptionInterface>>);
                    this.dropdown?.select(this.definitionId);
                } else {
                    this.dropdown?.select("-1");
                }

                if (typeof this.dropdown !== "undefined") {
                    this.dropdown.isAwaiting = false;
                }

                this.dropdown?.disabled(false);
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log("opening the editor");
                }

                if (typeof this.dropdown !== "undefined") {
                    this.dropdown.isAwaiting = false;
                }

                this.dropdown?.options([...NO_OPTION_FOUND]);
                this.dropdown?.select("-1");
                this.dropdown?.disabled(false);
            });
    }

    @editor
    defineEditor()
    {
        this.dropdown = new Forms.Dropdown(DEFAULT_OPTIONS, Forms.Dropdown.bind(this, "definitionId", this.definitionId));

        this.loadDefinitions();

        this.editor.name(false, false, "Name", false).focus();
        this.node.nameVisible = false;

        this.editor.option({
            name: "Within workflow",
            locked: true,
            form: {
                title: "Select within workflow",
                controls: [
                    this.dropdown
                ]
            }
        });
        
        this.editor.option({
            name: "Request",
            form: {
                title: "Request",
                controls: [
                    new Forms.Checkbox("Send the workflow as request to an Unblocker", Forms.Checkbox.bind(this, "sendable", false))
                ]
            },
            activated: (this.sendable === true)
        });
    }
}