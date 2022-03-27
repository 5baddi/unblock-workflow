import { TOption } from "@marblecore/ui-form-dropdown/lib/option";
import { NodeBlock, tripetto, editor, Forms, definition, slots } from "tripetto";
import API from '../../../../../api';
import { IProcessTaskOptionInterface } from '../interfaces';
import { BLOCK_NAME, BLOCK_ICON, BLOCK_VERSION, BLOCK_LABEL } from '../constants';
import { USER_ID_KEY, USER_TENANT_ID_KEY } from '../../../../../global';

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
    private options: Array<TOption<IProcessTaskOptionInterface>> = [];

    @definition("string")
    definitionId: string = "";
    
    @definition("boolean")
    sendable: boolean = false;

    dropdown?;

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

        API.get(endpoint)
            .then(response => {
                if (! response.data || ! response.data.definitions || ! Array.isArray(response.data.definitions)) {
                    this.dropdown.options = [];
                }

                let definitions = response.data.definitions.filter(definition => {
                    if (! definition._id || ! definition.name) {
                        return false;
                    }

                    return true;
                });

                this.options = definitions.map(definition => {
                    return {
                        value: <string> definition._id,
                        label: <string> definition.name
                    };
                });

                this.dropdown.options(this.options);

                if (Array.isArray(this.options) && this.options.length > 0) {
                    this.dropdown.isAwaiting = false;
                }
            });
    }

    @editor
    defineEditor() 
    {
        if (! Array.isArray(this.options) || this.options.length === 0) {
            let defaultOptions = [
                {
                    label: 'Loading workflows...',
                    value: '-1',
                }
            ];

            this.dropdown = (new Forms.Dropdown(defaultOptions, Forms.Text.bind(this, "definitionId", "")))
                .await();

            this.loadDefinitions();
        }

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
            }
        });
    }
}