import { TOption } from "@marblecore/ui-form-dropdown/lib/option";
import { definition } from "@tripetto/map/lib/decorators/definition";
import { NodeBlock, tripetto, editor, Forms } from "tripetto";
import API from '../../../../api';
import { IDefinition } from '../../../../interfaces/index';
import { IProcessTaskOptionInterface } from './interfaces';

const BLOCK_NAME = "process-task";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMSA3OS44OSA3NS45NiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5ZGQzZWQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5hY3Rpb25uZXR3b3JrPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjQwLjQyIiBjeT0iNS40MyIgcj0iNS40MyIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2LjMyLDE1LjkyYzkuOTQtMi4xMSwxNS4wNiw1LjI1LDE2LjUyLDExLjQ3LjkyLDMuOTMsNC4yOCwzLjg3LDYuNTgsMi43M1M1NiwyOC40OCw1MywyMS4yM2MtMS44Mi00LjQxLTQuMTQtOC40NC04LjI2LTExLjA4QTYuNDIsNi40MiwwLDAsMSwzNC42Niw4LjNhNi44OCw2Ljg4LDAsMCwxLS40NC0xLjE0Yy04Ljg1LjEtMTQuNyw4LTE2LjQ1LDEzLjI2YTE4Ljg1LDE4Ljg1LDAsMCwxLDguNTUtNC41Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjQzIiBjeT0iMjkuODciIHI9IjUuNDMiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMS4yMyw0Ni40NWMxLTEwLjExLDkuNTEtMTIuOCwxNS44OC0xMi4zMyw0LC4yOSw1LTIuOTMsNC41Ny01LjQ3cy40LTYuNzgtNy40MS02LjFDMTkuNTIsMjMsMTUsMjQsMTEuMjMsMjcuMTJhNi4zNyw2LjM3LDAsMCwxLC4zNCw0LjY3LDYuNjIsNi42MiwwLDAsMS0uOTMsMS44Niw2LjM5LDYuMzksMCwwLDEtNC4xOSwyLjU3LDYuMzEsNi4zMSwwLDAsMS0xLjIyLjA4QzIuNjgsNDQuNzgsOC41Miw1Mi43MywxMyw1NmExOC45MiwxOC45MiwwLDAsMS0xLjc1LTkuNTEiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE4LjA4IiBjeT0iNzAuMTMiIHI9IjUuNDMiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zNS42NSw2OS43M2MtOS4zMy00LTkuMjUtMTMtNi44My0xOC45MSwxLjUyLTMuNzQtMS4yNS01LjY0LTMuNzktNlMxOC43LDQyLjMxLDE2Ljk0LDUwYy0xLjA3LDQuNjQtMS41MSw5LjI3LjMyLDEzLjgxYTYuNDQsNi40NCwwLDAsMSw0LjU1LDEuMTIsNi40Nyw2LjQ3LDAsMCwxLDIuNjMsNi4yNCw3LjU1LDcuNTUsMCwwLDEtLjMsMS4xOGM3LjI3LDUsMTYuNjQsMiwyMS4wOS0xLjNhMTguOCwxOC44LDAsMCwxLTkuNTgtMS4yNyIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNjAuNTgiIGN5PSI3MC41MyIgcj0iNS40MyIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY1LjgzLDUzLjc2Yy02LjgxLDcuNTUtMTUuMjgsNC42LTIwLjExLjQyLTMtMi42NC01Ljc0LS42Mi02LjkzLDEuNjZTMzQuNDIsNjEsNDEuMSw2NS4xNmM0LjA2LDIuNSw4LjMsNC40LDEzLjE5LDQuMTFhNi40Myw2LjQzLDAsMCwxLDIuNTEtNCw2Ljc2LDYuNzYsMCwwLDEsMS44Ni0uOTMsNi4zOCw2LjM4LDAsMCwxLDQuOS40NCw1Ljk0LDUuOTQsMCwwLDEsMSwuNjZjNy4xLTUuMjgsNy4xNy0xNS4xNCw1LjUyLTIwLjRhMTguOTEsMTguOTEsMCwwLDEtNC4yNyw4LjY3Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI3NC40NiIgY3k9IjMwLjY4IiByPSI1LjQzIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjAuMTMsMjAuNTFjNS4wOCw4LjgxLS4zNCwxNi01LjgsMTkuMjVDNTAuODcsNDEuODUsNTIsNDUsNTMuNzYsNDYuODdzMy42LDUuNzYsOS41Ny42OGMzLjY0LTMuMDgsNi43NS02LjU0LDgtMTEuMjdBNi40Miw2LjQyLDAsMCwxLDcwLDI2LjA5YTYuMjEsNi4yMSwwLDAsMSwuOTQtLjc3Yy0yLjgzLTguMzktMTIuMTktMTEuNDktMTcuNjktMTEuNTVhMTguOTQsMTguOTQsMCwwLDEsNi45Miw2Ljc0Ii8+PC9zdmc+Cg==",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Process Task";
    }
})
export class ProcessTask extends NodeBlock
{
    private options: Array<TOption<IProcessTaskOptionInterface>> = [];

    async loadDefinitions(): Promise<void>
    {
        let endpoint = "/definitions";

        API.get(endpoint)
            .then(result => {
                if (! result) {
                    this.options = [];
                }

                let definitions = Object.assign({} as Array<IDefinition>, result);
                let _definitions = definitions.filter(definition => {
                    if (! definition._id || ! definition.name) {
                        return false;
                    }

                    return true;
                });

                this.options = _definitions.map(definition => {
                    return {
                        value: <string> definition._id,
                        label: <string> definition.name
                    };
                });
            });
    }

    @editor
    async defineEditor() 
    {        
        this.editor.name(false, false, "Name", false);

        this.editor.option({
            name: "Within workflow",
            locked: true,
            form: {
                title: "Select within workflow",
                controls: [
                    new Forms.Dropdown(this.options, null)
                ]
            }
        });
    }
}