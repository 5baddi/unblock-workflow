import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "respondToWebhook";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiMzNzQ3NGYiIGQ9Ik0zNSwzN2MtMi4yLDAtNC0xLjgtNC00czEuOC00LDQtNHM0LDEuOCw0LDRTMzcuMiwzNywzNSwzN3oiLz48cGF0aCBmaWxsPSIjMzc0NzRmIiBkPSJNMzUsNDNjLTMsMC01LjktMS40LTcuOC0zLjdsMy4xLTIuNWMxLjEsMS40LDIuOSwyLjMsNC43LDIuM2MzLjMsMCw2LTIuNyw2LTZzLTIuNy02LTYtNiBjLTEsMC0yLDAuMy0yLjksMC43bC0xLjcsMUwyMy4zLDE2bDMuNS0xLjlsNS4zLDkuNGMxLTAuMywyLTAuNSwzLTAuNWM1LjUsMCwxMCw0LjUsMTAsMTBTNDAuNSw0MywzNSw0M3oiLz48cGF0aCBmaWxsPSIjMzc0NzRmIiBkPSJNMTQsNDNDOC41LDQzLDQsMzguNSw0LDMzYzAtNC42LDMuMS04LjUsNy41LTkuN2wxLDMuOUM5LjksMjcuOSw4LDMwLjMsOCwzM2MwLDMuMywyLjcsNiw2LDYgczYtMi43LDYtNnYtMmgxNXY0SDIzLjhDMjIuOSwzOS42LDE4LjgsNDMsMTQsNDN6Ii8+PHBhdGggZmlsbD0iI2U5MWU2MyIgZD0iTTE0LDM3Yy0yLjIsMC00LTEuOC00LTRzMS44LTQsNC00czQsMS44LDQsNFMxNi4yLDM3LDE0LDM3eiIvPjxwYXRoIGZpbGw9IiMzNzQ3NGYiIGQ9Ik0yNSwxOWMtMi4yLDAtNC0xLjgtNC00czEuOC00LDQtNHM0LDEuOCw0LDRTMjcuMiwxOSwyNSwxOXoiLz48cGF0aCBmaWxsPSIjZTkxZTYzIiBkPSJNMTUuNywzNEwxMi4zLDMybDUuOS05LjdjLTItMS45LTMuMi00LjUtMy4yLTcuM2MwLTUuNSw0LjUtMTAsMTAtMTBjNS41LDAsMTAsNC41LDEwLDEwIGMwLDAuOS0wLjEsMS43LTAuMywyLjVsLTMuOS0xYzAuMS0wLjUsMC4yLTEsMC4yLTEuNWMwLTMuMy0yLjctNi02LTZzLTYsMi43LTYsNmMwLDIuMSwxLjEsNCwyLjksNS4xbDEuNywxTDE1LjcsMzR6Ii8+PC9zdmc+Cg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Respond to Webhook";
        }
    })
    export class RespondtoWebhook extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    