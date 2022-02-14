import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "dhl";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2MCA2MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZDQzAwO30KCS5zdDF7ZmlsbDojRDQwNTExO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTU2LDYwSDRjLTIuMiwwLTQtMS44LTQtNFY0YzAtMi4yLDEuOC00LDQtNGg1MmMyLjIsMCw0LDEuOCw0LDR2NTJDNjAsNTguMiw1OC4yLDYwLDU2LDYweiIvPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTYuMiwzMi4zSDZ2Mmg4LjdMMTYuMiwzMi4zeiBNMTguOSwyOC42SDZ2MmgxMS40TDE4LjksMjguNnogTTM2LjEsMjcuOWMtMC41LDAuNy0xLjMsMS44LTEuOCwyLjUKCQkJCWMtMC4zLDAuMy0wLjcsMSwwLjgsMWg3LjhjMCwwLDEuMy0xLjgsMi40LTMuMmMxLjUtMiwwLjEtNi4yLTUuMi02LjJIMTkuMmwtMy42LDQuOWgyMEMzNi42LDI2LjksMzYuNiwyNy4zLDM2LjEsMjcuOXogTTYsMzhoNgoJCQkJbDEuNS0ySDZWMzh6IE00MC4yLDM4SDU0di0ySDQxLjZMNDAuMiwzOHogTTQ3LjEsMjguNmwtMS41LDJINTR2LTJINDcuMXogTTQxLjYsMzMuMWgtOC45bC0zLjQsMGMtMS41LDAtMS4xLTAuNi0wLjgtMQoJCQkJYzAuNS0wLjcsMS40LTEuOCwxLjgtMi41YzAuNS0wLjcsMC44LTEtMC4yLTFoLTlMMTQuMiwzOGgxNy43QzM3LjEsMzgsNDAuMywzNC44LDQxLjYsMzMuMXogTTQyLjksMzQuM0g1NHYtMmgtOS42TDQyLjksMzQuM3oiCgkJCQkvPgoJCTwvZz4KCTwvZz4KPC9nPgo8L3N2Zz4K",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "DHL";
        }
    })
    export class DHL extends NodeBlock
    {
    
    }