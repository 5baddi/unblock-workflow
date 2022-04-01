import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "facebookGraphApi";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHBhdGggZD0iTTU5LjUgMzBDNTkuNSAxMy43MSA0Ni4yOS41IDMwIC41Uy41IDEzLjcxLjUgMzBjMCAxNC43MiAxMC43OSAyNi45MyAyNC44OSAyOS4xNFYzOC41M0gxNy45VjMwaDcuNDl2LTYuNWMwLTcuMzkgNC40LTExLjQ4IDExLjE0LTExLjQ4IDMuMjMgMCA2LjYuNTggNi42LjU4djcuMjZoLTMuNzJjLTMuNjYgMC00LjgxIDIuMjctNC44MSA0LjYxVjMwaDguMThsLTEuMzEgOC41M0gzNC42djIwLjYxQzQ4LjcxIDU2LjkzIDU5LjUgNDQuNzIgNTkuNSAzMHoiIGZpbGw9IiMxODc3ZjIiLz48cGF0aCBkPSJNNDEuNDggMzguNTNMNDIuNzkgMzBoLTguMTh2LTUuNTNjMC0yLjMzIDEuMTQtNC42MSA0LjgxLTQuNjFoMy43MlYxMi42cy0zLjM4LS41OC02LjYtLjU4Yy02Ljc0IDAtMTEuMTQgNC4wOC0xMS4xNCAxMS40OFYzMGgtNy41djguNTNoNy40OXYyMC42MWMxLjUuMjQgMy4wNC4zNiA0LjYxLjM2czMuMTEtLjEyIDQuNjEtLjM2VjM4LjUzaDYuODd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Facebook Graph API";
        }
    })
    export class FacebookGraphAPI extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    