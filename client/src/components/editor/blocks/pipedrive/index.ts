import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "pipedrive";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PG1hc2sgaWQ9Im1hc2swMDEiIG1hc2stdHlwZT0iYWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzI2MjkyQyI+PHBhdGggZD0iTTIuNzM2OTQgMEgyOS4yNjMxQzMwLjc3NDYgMCAzMiAxLjIyNTA3IDMyIDIuNzM2OTVWMjkuMjYzMUMzMiAzMC43NzQ2IDMwLjc3NDkgMzIgMjkuMjYzMSAzMkgyLjczNjk0QzEuMjI1MzcgMzIgMCAzMC43NzQ5IDAgMjkuMjYzMVYyLjczNjk1QzAgMS4yMjUzNyAxLjIyNTA4IDAgMi43MzY5NCAwWiIgZmlsbD0iIzI2MjkyQyI+PC9wYXRoPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI21hc2swMDEpIiBmaWxsPSIjMjYyOTJDIj48cGF0aCBkPSJNMi43MzY5NCAwSDI5LjI2MzFDMzAuNzc0NiAwIDMyIDEuMjI1MDcgMzIgMi43MzY5NVYyOS4yNjMxQzMyIDMwLjc3NDYgMzAuNzc0OSAzMiAyOS4yNjMxIDMySDIuNzM2OTRDMS4yMjUzNyAzMiAwIDMwLjc3NDkgMCAyOS4yNjMxVjIuNzM2OTVDMCAxLjIyNTM3IDEuMjI1MDggMCAyLjczNjk0IDBaIiBmaWxsPSIjMjYyOTJDIj48L3BhdGg+PC9nPjxtYXNrIGlkPSJtYXNrMSIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iNyIgeT0iNCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMjYyOTJDIj48cGF0aCBkPSJNMTMuMzM0OCAxMy4xNzY2QzEzLjMzNDggMTUuMzE5NCAxNC40MjE5IDE3LjYzMTEgMTYuODE0MSAxNy42MzExQzE4LjU4ODEgMTcuNjMxMSAyMC4zODE5IDE2LjI0NjEgMjAuMzgxOSAxMy4xNDUxQzIwLjM4MTkgMTAuNDI2NCAxOC45NzE4IDguNjAxMjcgMTYuODczMSA4LjYwMTI3QzE1LjE2MyA4LjYwMTI3IDEzLjMzNDggOS44MDI1OCAxMy4zMzQ4IDEzLjE3NjZaTTE3LjcxNTggNC42MzE1OUMyMi4wMDUxIDQuNjMxNTkgMjQuODg5MSA4LjAyODczIDI0Ljg4OTEgMTMuMDg1NkMyNC44ODkxIDE4LjA2MjkgMjEuODUwOSAyMS41Mzc4IDE3LjUwNzYgMjEuNTM3OEMxNS40MzY4IDIxLjUzNzggMTQuMTEwMyAyMC42NTA5IDEzLjQxNjggMjAuMDA4OUMxMy40MjE3IDIwLjE2MTEgMTMuNDI1IDIwLjMzMTYgMTMuNDI1IDIwLjUxMzZWMjcuMjYzMkg4Ljk4MTY0VjkuMjc5N0M4Ljk4MTY0IDkuMDE4MjQgOC44OTgwMiA4LjkzNTUyIDguNjM4OTcgOC45MzU1Mkg3LjExMDg1VjQuOTk3MjlIMTAuODM5M0MxMi41NTYgNC45OTcyOSAxMi45OTU0IDUuODcwOTcgMTMuMDc5IDYuNTQ0NDRDMTMuNzc1OSA1Ljc2MzQyIDE1LjIyMDQgNC42MzE1OSAxNy43MTU4IDQuNjMxNTlaIiBmaWxsPSIjMjYyOTJDIj48L3BhdGg+PC9tYXNrPjxnIG1hc2s9InVybCgjbWFzazEpIiBmaWxsPSIjMjYyOTJDIj48cGF0aCBkPSJNMTMuMzM0OCAxMy4xNzY2QzEzLjMzNDggMTUuMzE5NCAxNC40MjE5IDE3LjYzMTEgMTYuODE0MSAxNy42MzExQzE4LjU4ODEgMTcuNjMxMSAyMC4zODE5IDE2LjI0NjEgMjAuMzgxOSAxMy4xNDUxQzIwLjM4MTkgMTAuNDI2NCAxOC45NzE4IDguNjAxMjcgMTYuODczMSA4LjYwMTI3QzE1LjE2MyA4LjYwMTI3IDEzLjMzNDggOS44MDI1OCAxMy4zMzQ4IDEzLjE3NjZaTTE3LjcxNTggNC42MzE1OUMyMi4wMDUxIDQuNjMxNTkgMjQuODg5MSA4LjAyODczIDI0Ljg4OTEgMTMuMDg1NkMyNC44ODkxIDE4LjA2MjkgMjEuODUwOSAyMS41Mzc4IDE3LjUwNzYgMjEuNTM3OEMxNS40MzY4IDIxLjUzNzggMTQuMTEwMyAyMC42NTA5IDEzLjQxNjggMjAuMDA4OUMxMy40MjE3IDIwLjE2MTEgMTMuNDI1IDIwLjMzMTYgMTMuNDI1IDIwLjUxMzZWMjcuMjYzMkg4Ljk4MTY0VjkuMjc5N0M4Ljk4MTY0IDkuMDE4MjQgOC44OTgwMiA4LjkzNTUyIDguNjM4OTcgOC45MzU1Mkg3LjExMDg1VjQuOTk3MjlIMTAuODM5M0MxMi41NTYgNC45OTcyOSAxMi45OTU0IDUuODcwOTcgMTMuMDc5IDYuNTQ0NDRDMTMuNzc1OSA1Ljc2MzQyIDE1LjIyMDQgNC42MzE1OSAxNy43MTU4IDQuNjMxNTlaIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+PC9nPjwvc3ZnPgo=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Pipedrive";
        }
    })
    export class Pipedrive extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    