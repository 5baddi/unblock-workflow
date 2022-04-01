import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "matrix";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEX///8AAAA3Nzfc3NyWlpYMDAzAwMD6+vopKSl1dXUUFBRKSkq0tLT39/cyMjIlJSXU1NS7u7suLi4eHh4GBgbf39/Q0NCkpKSBgYFpaWnKysqysrKcnJyQkJCMjIxUVFRGRkZEREQ2NjYRERHy8vLv7+/t7e3l5eXY2NjDw8O1tbWGhoZZWVlPT086OjoYGBjPH1EBAAAA2UlEQVRIx+3UxxLCIBCA4V0VTaKB9KKm2+v7v51ZczUFZ5xxMvwXlsPHCQCVSiLOnRw6s0qHR/AxXFvTbrywjhFvwT70ty1b8HQAnk0UVhjAPPmBCftZcg1oG6ZpOBzbHqKVICXggO/CoXjOEDNsikWzsrUERpbpGlIT/Ub7pQRmNsDOpUMAYFOvDwlc0HCvkU2Dh6hJYJ2GZY0v9AcYX+KVwr/FdLdjGooabwgzRDEQnx3xjGiIXWHM6Zlx183//jNQeOTYX5g91IRtG648rdsGRoUOqFTj7wXJNQw4Ue/oewAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Matrix";
        }
    })
    export class Matrix extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    