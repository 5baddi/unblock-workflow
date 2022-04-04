import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "theHive";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6I2ZmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjkwIDE1MEExNDAgMTQwIDAgMTExNTAgMTBhMTQwIDE0MCAwIDAxMTQwIDE0MCIgZmlsbD0iI2YzZDAyZiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTIwNC42MiAyMTAuNmExNS4xMyAxNS4xMyAwIDAxLTYuNjggMS4zOCAxNy40OSAxNy40OSAwIDAxLTE2LjExLTEwLjkzbC00LjgzLTExLjYtNy4zMS0xOC4yOGE1LjA1IDUuMDUgMCAwMC0uNy0yLjEybC0xMC4xLTI1LjMxYzE2LjE1IDIuODYgNDUuOTMgMjAuMTYgNTUuNjggNDMuNzIgMy40OCA5LjQ5LS43NiAxOS42Ni05LjkgMjMuMTRtLTU0Ljg3IDI3LjIxYy0xMS41OCAwLTIxLTguNS0yNC44NS0yMS41bDQ5Ljg1LjE2Yy0zLjkgMTMuMzMtMTMuNDEgMjEuMzgtMjUgMjEuMzRtLTQ4LTI2LjE0YTE0LjMgMTQuMyAwIDAxLTYuNjctMS40M2MtOC43Ni0zLjg5LTEzLjI5LTE0LjA5LTkuNC0yMi44NSA5LjkxLTIzLjg1IDM5LjgxLTQwLjk1IDU2LTQzLjM2TDEzMSAxNzBsLTcuNzkgMTkuMjktNSAxMS41N2ExOC4zNCAxOC4zNCAwIDAxLTE2LjUzIDEwLjgzbTQyLjYzLTQ1LjE2bDUuNjktMTMuNjkgNS41NyAxMy43MXptLTcuNzkgMTkuMjlsMy4xOS04LjA2IDIwLjM3LjA3IDMuMTMgOC4wOHptLTUgMTEuNTdsMzYuMTcuMTIgMy4xMyA4LjA5LTQyLjQ4LS4xNXptMTguNTYtOTAuODdjOS40OCAwIDE3LjUzIDkuMTggMTcuNSAxNi41NiAwIDguNzctMTQuNDMgOS40My0xNy4yMyA5LjQxLTMuMTYgMC0xNy4yMS0uNC0xNy4xOC05LjUzLS42Ny03LjM4IDcuNDMtMTYuNDggMTYuOTEtMTYuNDRtLTEzLjItLjQyYTMuNzUgMy43NSAwIDAxLTMuMzktMi4xNWwtNS44MS0xMi4zNGEzLjc0IDMuNzQgMCAxMTYuNzctMy4xOWw1LjgxIDEyLjM0YTMuNzQgMy43NCAwIDAxLTEuNzkgNSAzLjc5IDMuNzkgMCAwMS0xLjU5LjM2bTI2LjI0LS4wMmEzLjc5IDMuNzkgMCAwMS0xLjU5LS4zNiAzLjc0IDMuNzQgMCAwMS0xLjc5LTVsNS44Mi0xMi4zNWEzLjc0IDMuNzQgMCAxMTYuNzcgMy4yTDE2Ni41MSAxMDRhMy43NSAzLjc1IDAgMDEtMy4zOSAyLjE1Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjA0LjM2IDE1Ny44MWEzLjc0IDMuNzQgMCAwMS0zLjI2LTUuNTZsMTQuNDEtMjUuODctMzIuODctNTYuN2gtNjUuMjhMODQuNTQgMTI2LjNsMTUuNjYgMjUuODNhMy43NCAzLjc0IDAgMDEtNi40IDMuODdMNzcgMTI4LjI4YTMuNzIgMy43MiAwIDAxMC0zLjgxbDM1LTYwLjQxYTMuNzcgMy43NyAwIDAxMy4yNC0xLjg3aDY5LjZhMy43NSAzLjc1IDAgMDEzLjE2IDEuODdsMzUgNjAuNDFhMy43MyAzLjczIDAgMDEwIDMuN2wtMTUuNDQgMjcuNzJhMy43NSAzLjc1IDAgMDEtMy4yOCAxLjkyIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "TheHive";
        }
    })
    export class TheHive extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    