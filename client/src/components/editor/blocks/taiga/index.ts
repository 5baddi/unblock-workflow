import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "taiga";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij48cGF0aCBkPSJNMjI0LjI4OCA0My45MTZsLTExLjk2MyA4NC4yLTg0LjItMTEuOTYzIDExLjk2My04NC4yIDg0LjIgMTEuOTYzeiIgb3BhY2l0eT0iLjgiIGZpbGw9IiNBMjk1QUUiLz48cGF0aCBkPSJNMzEuODg1IDIxMi4yOTFsMTEuOTYzLTg0LjIgODQuMiAxMS45NjMtMTEuOTYzIDg0LjItODQuMi0xMS45NjN6IiBvcGFjaXR5PSIuOCIgZmlsbD0iIzVENkY2RCIvPjxwYXRoIGQ9Ik00My44NDggMzIuMDY1bDg0LjIgMTEuOTYyLTExLjk2MyA4NC4yLTg0LjItMTEuOTYzIDExLjk2My04NC4yeiIgb3BhY2l0eT0iLjgiIGZpbGw9IiM4Q0Q1OTIiLz48cGF0aCBkPSJNMjEyLjIyNiAyMjQuMjY0bC04NC4yLTExLjk2MyAxMS45NjMtODQuMiA4NC4yIDExLjk2My0xMS45NjMgODQuMnoiIG9wYWNpdHk9Ii44IiBmaWxsPSIjNjY1RTc0Ii8+PHBhdGggZD0iTTExOS42NDIgMjU1LjU5NWwtNTEuMDgtNjcuOTk3IDY3Ljk5OC01MS4wOCA1MS4wOCA2Ny45OTgtNjcuOTk4IDUxLjA4eiIgb3BhY2l0eT0iLjgiIGZpbGw9IiMzQzM2NDciLz48cGF0aCBkPSJNMjU1LjQ2MyAxMzYuMzlsLTY3Ljk5NyA1MS4wNzktNTEuMDgtNjcuOTk3IDY3Ljk5OC01MS4wOCA1MS4wOCA2Ny45OTh6IiBvcGFjaXR5PSIuOCIgZmlsbD0iIzgzNzE5MyIvPjxwYXRoIGQ9Ik0xMzYuNDM3LjU1NGw1MS4wNzkgNjcuOTk3LTY3Ljk5NyA1MS4wOC01MS4wOC02Ny45OThMMTM2LjQzNy41NTN6IiBvcGFjaXR5PSIuOCIgZmlsbD0iI0EyRjRBQyIvPjxwYXRoIGQ9Ik0uNDYzIDExOS43bDY3Ljk5OC01MS4wOCA1MS4wNzkgNjcuOTk4LTY3Ljk5NyA1MS4wOEwuNDYzIDExOS43eiIgb3BhY2l0eT0iLjgiIGZpbGw9IiM3RUE2ODUiLz48cGF0aCBkPSJNMTI3Ljk2MyA5NS43NDJsMzIuMzMyIDMyLjMzMy0zMi4zMzIgMzIuMzMyLTMyLjMzMi0zMi4zMzIgMzIuMzMyLTMyLjMzM3oiIGZpbGw9IiMzQzM2NDciLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Taiga";
        }
    })
    export class Taiga extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    