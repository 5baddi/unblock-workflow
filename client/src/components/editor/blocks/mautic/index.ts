import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "mautic";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzQ5Ljc3OXB4IiBoZWlnaHQ9IjM0OS43NzlweCIgdmlld0JveD0iMCAwIDM0OS43NzkgMzQ5Ljc3OSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzQ5Ljc3OSAzNDkuNzc5Ig0KCSB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNzQuODksMzQ5Ljc3OUM3OC42MTIsMzQ5Ljc3OSwwLDI3MS40NjIsMCwxNzQuODlTNzguNjEyLDAsMTc0Ljg5LDBjMjMuMjYsMCw0NS45MzEsNC40MTcsNjcuMTI5LDEzLjU0Mw0KCWM1Ljg4OSwyLjY1LDguODMzLDkuNDIyLDYuNDc4LDE1LjYwNWMtMi42NDksNS44ODgtOS40MjEsOC44MzMtMTUuNjA0LDYuNDc3Yy0xOC41NDktNy42NTUtMzcuOTgtMTEuNDgyLTU4LjAwMi0xMS40ODINCgljLTgzLjMyMywwLTE1MS4wNDEsNjcuNzE4LTE1MS4wNDEsMTUxLjA0MVM5MS41NjcsMzI2LjIyNSwxNzQuODksMzI2LjIyNWM4My4zMjMsMCwxNTEuMDQxLTY3LjcxOCwxNTEuMDQxLTE1MS4wNDENCgljMC0xNy45Ni0yLjk0NC0zNS4zMzItOS4xMjctNTEuODE5Yy0yLjM1NS02LjE4MywwLjg4My0xMi45NTUsNy4wNjYtMTUuMzFjNi4xODMtMi4zNTUsMTIuOTU0LDAuODgzLDE1LjMxLDcuMDY2DQoJYzcuMDY2LDE5LjEzOCwxMC42LDM5LjQ1MywxMC42LDYwLjA2M0MzNDkuNzc5LDI3MS4xNjcsMjcxLjQ2MiwzNDkuNzc5LDE3NC44OSwzNDkuNzc5Ii8+DQo8Zz4NCgk8cG9seWdvbiBmaWxsPSIjRkRCOTMzIiBwb2ludHM9IjI1MS40NCwxNTYuOTMgMjI0LjM1NCwxODUuMTk0IDIzOS4zNjksMjQ4LjQ5NiAyNzMuNTIyLDI0OC40OTYgCSIvPg0KPC9nPg0KPHBvbHlnb24gZmlsbD0iI0ZEQjkzMyIgcG9pbnRzPSIyNDAuMjUzLDczLjMxMiAyNDkuNjc0LDgyLjczNCAxNzQuODksMTYxLjkzNSAxMTAuOTk5LDk2LjI3NyA3NC4xOTYsMjQ4LjQ5NiAxMDguMzUsMjQ4LjQ5NiANCgkxMjguNjY1LDE2My45OTYgMTc0Ljg5LDIxNC4zNDMgMjczLjgxNywxMDYuNTgzIDI4My4yMzksMTE2LjI5OSAyOTIuNjYsNjMuMDA3ICIvPg0KPC9zdmc+DQo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mautic";
        }
    })
    export class Mautic extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    