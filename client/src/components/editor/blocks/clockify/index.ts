import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "clockify";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMTQgMGgyMjd2MjU2SDE0eiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY1LjEyNCA4Ny45OWw1OC43NzctNTguODE0IDE2LjgyNSAxNi44MjMtNTguNzc4IDU4LjgxNS0xNi44MjQtMTYuODIzem0tMjMuODE3IDYwLjEwNWMtMTEuNTAzIDAtMjAuODIyLTkuMzYtMjAuODIyLTIwLjkxOCAwLTExLjU0NiA5LjMxOS0yMC45MTggMjAuODIyLTIwLjkxOCAxMS41MDMgMCAyMC44MjIgOS4zNzIgMjAuODIyIDIwLjkxOCAwIDExLjU1OC05LjMxOSAyMC45MTgtMjAuODIyIDIwLjkxOHpNMjQxIDIwOC44NDVsLTE2LjgyNCAxNi44MzUtNTguNzc4LTU4LjgxNiAxNi44MjUtMTYuODM1TDI0MSAyMDguODQ1eiIgZmlsbD0iIzIyMiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQxLjkxMyAyMTcuNjM3YzExLjg0OCAwIDIzLjEzNi0yLjM2NCAzMy40ODItNi41NjdsMjguNzA4IDI4Ljc0QzE4NS42OTIgMjUwLjA4OSAxNjQuNSAyNTYgMTQxLjkxMyAyNTYgNzEuMjc0IDI1NiAxNCAxOTguNjg5IDE0IDEyOC4wMDYgMTQgNTcuMzExIDcxLjI3NSAwIDE0MS45MTMgMGMyMi4zNjEgMCA0My4zNjIgNS43NjcgNjEuNjQxIDE1Ljg1NmwtMjguMjMxIDI4LjI2MWMtMTAuMzMzLTQuMTc5LTIxLjU4NS02LjU0My0zMy40MS02LjU0My00OS40NyAwLTg5LjU3NSA0MC4zMDktODkuNTc1IDkwLjAzOCAwIDQ5LjcxNiA0MC4xMDQgOTAuMDI1IDg5LjU3NSA5MC4wMjV6IiBmaWxsPSIjMDNBOUY0Ii8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Clockify";
        }
    })
    export class Clockify extends NodeBlock
    {
    
    }