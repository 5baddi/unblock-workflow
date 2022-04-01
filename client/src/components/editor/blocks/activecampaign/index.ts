import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "activeCampaign";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABGlBMVEUAAAAEIkENW6kIP3UGMFoFJ0gNXKwNXKsMW6kMWacLVqELVZ8LUJYYY68JQnsIPHAGL1gIMFgFKUwHLVQGLlcMWKQMV6ELUpkMUpgYZbILTpIKSooJQ34GNGMKMFYHNmQMP3MHNWMGLVUDJUgMWqoNXrAMWaUMU5sLT5MKTpIVZLMJS40LTY8LTpELTZAKSokKSooKR4UKR4QJPnUJQnsIOWsIOmwJP3YHNWMJP3UlTXUGMFoGLVQKWacLVZ8MU5kMVJ0LVaAMU5sLSooWWJgWVJEQUpQKSIUKRoEKQ30mZqYcUIUKR4QJP3UKR4UKRoEURHU+a5oJPXIJQXkFLFINXKsNXq8NX7ENXa0NYLMMX7AMXa4LXa4LW6oT2SqMAAAAVXRSTlMAC/Z6MwP7+O/r5NW6todGJiISCQbl38zFubiWdEJBPjUqHBf69uXYxcLBv7axrKuhkH1yaGdeXVNSQxUP9NHPzsnFsa+joqCXjoWEg4NzcWNaV1YwyjdTTAAAAbFJREFUSMftlldXAjEQhZdFkKYiXYqAHQHpIoi995rMboD//zfcycp7Mr74wDxlz8mXm7l7kxNjXvPSr4/NP8D7oU86vDThuVUqvDZlEBoS4WtgbMwbtM7XwzZjDFJHJDrWAM4Yt+88JPwwJcXDNPGNmoXi8EDrfBAEFA+tk+jVpkDxrVxMh3qv9H1y0Es6tGXvruiEBCASlaPjA2n7+DauHs8pE8F8wrU9hJ2L04F6tnGzkbJre9ayHHHeUuy8lAacv5h3P78CAsVTip172iY6xSMl+RltCrlYbqSGr5xzOb/rOtXfwcUgXFCjE89+nC8y5ZntuBi8GIrilw7NeODVPR1dFGfbqqb7Wn5hcbhHGG3fdeiAelpK9WS2+DuOZk0dZen7bBe9IKAFdcoZqdoyKcs+fdYrZe30gj66cAVjR9ZcJlxKHRNkQCiyGYwm+L0jbTTRCci7aI9wF0Uz0mQgmZyUJlcK+mi5ZqPJixST26ZA2TOCycUInmfh98a00fgbyjJIFwlJvgD8txNvwtCvG2lydUh+GZw8xYlvEmbvfZNfQ1t5j0Gtx4Ixr3n9j/oBashh5eG5xuQAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "ActiveCampaign";
        }
    })
    export class ActiveCampaign extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }