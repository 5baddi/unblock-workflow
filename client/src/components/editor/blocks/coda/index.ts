
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "action-network";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2MCA2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRUU1QTI5O30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ1LjIsMTYuMmMzLjMsMCw2LjUsMS4zLDguOCwzLjNjMS41LDEuMywzLjgsMC4yLDMuOC0xLjhWNC43YzAtMi41LTIuMS00LjctNC43LTQuN0g2LjMKCUMzLjcsMCwxLjYsMi4xLDEuNiw0Ljd2NTAuN2MwLDIuNSwyLjEsNC42LDQuNyw0LjZoNDYuOGMyLjUsMCw0LjctMi4xLDQuNy00LjdWNDIuM2MwLTItMi4zLTMuMS0zLjgtMS44Yy0yLjQsMi4xLTUuNCwzLjMtOC44LDMuMwoJYy03LjYsMC0xMy43LTYuMi0xMy43LTEzLjhDMzEuNiwyMi40LDM3LjcsMTYuMiw0NS4yLDE2LjJ6Ii8+Cjwvc3ZnPgo=",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "Action network";
    }
})
export class ActionNetwork extends NodeBlock
{

}