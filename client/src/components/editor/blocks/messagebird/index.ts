import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "messagebird";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUzLjQ3IDE0LjI5NWMtMi4zNzEgMC00LjQ5IDEuMTg2LTUuNzgzIDIuOTgybC04LjcyNyAxMi4yMWExLjc1NCAxLjc1NCAwIDAxLTEuNDM2Ljc1NSAxLjc2MyAxLjc2MyAwIDAxLTEuNzYtMS43NmMwLS4zNy4xMDktLjcxOC4yNzgtLjk3bDcuMzYxLTExLjAyNWMuNzU0LTEuMTEzIDEuMTg1LTIuNDc4IDEuMTg1LTMuOTUxYTcuMDQ2IDcuMDQ2IDAgMDAtNy4wNjUtNy4wNzRILjQ2MnY3LjA3NGgzMS43NDdhMy41NjQgMy41NjQgMCAwMS0zLjU1NiAzLjU1NkguNDYyYzAgMi41MTMuNTM5IDQuOTIgMS40NzIgNy4wNzRoMjMuMTc0YTMuNTY0IDMuNTY0IDAgMDEtMy41NTYgMy41NTZINC4wMTdhMTcuNjUgMTcuNjUgMCAwMDE0LjE4NiA3LjA3NGg4LjcyN2MuOTcuMDAyIDEuNzU3Ljc4OSAxLjc2IDEuNzZhMS43NjMgMS43NjMgMCAwMS0xLjc2IDEuNzZoLTguNzY0TDYuMzE0IDU1LjAyaDIxLjQ0YzkuODAzIDAgMTguMTM2LTYuMzkzIDIxLjA0Ni0xNS4yMjdMNTIuNzg4IDI3LjdhMjIuMzA1IDIyLjMwNSAwIDAxNi43NTEtOS45ODQgNy4wNDQgNy4wNDQgMCAwMC02LjA2OS0zLjQxMXYtLjAxem0wIDQuODQ4Yy0uNzE5IDAtMS4zMy0uNjA5LTEuMzMtMS4zMjkuMDEtLjczLjYtMS4zMiAxLjMzLTEuMzMuNzMuMDEgMS4zMTkuNiAxLjMyOCAxLjMzIDAgLjc1NC0uNjA5IDEuMzMtMS4zMjkgMS4zM3oiIGZpbGw9IiMyNDgxRDciLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "MessageBird";
        }
    })
    export class MessageBird extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    