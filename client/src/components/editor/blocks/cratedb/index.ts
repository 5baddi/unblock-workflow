
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "cratedb";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjUlEQVRoge3asU4CQRCA4Rn21sTgslYWXqLYaOEbWPIGNDZGI5Y2FNrZ+AIWvoAajaUh1iaUvoKJjWjEwsrjMEaPZX0FdtawuMzXb4b/yF1uAgCMMcbYxMAQQ6XSeqW+vSfVvAZrRz+ICEX+kT21rs6KPMsosxPKIV9yrqJXd5sH5bSa2uFw5HNYKsFnt9N9vbu9+VfBAADWGGPNAFyCwZbAGmN85gYLDoWDY8fBsePg2HFw7Dg4dkGCfd+Hfc4n6/tHxz7DKaSqaKm022oIAGAtSKX1WqN5WOQ90raEmw/fjlP/ggXr8SWjEEBd5RNrBuTBofhcLH5oxY6DY8fBsePg2HFw7KYvGAW1OdwC4AOp66FUFV2t7zRmlNbWYc1DRPjJs6zTujynrng+yJd4dmExrV2378vp8pL7L4DPL+2t2sbX+1uXOp+KfA+jEMJnsO95qul7aIX+AOPGwbHj4NhxcOw4OHYc7AKFECgSAHRbHkK9RwN4BBf9XvZ4cXpC/YNo0R//asgYY4xNmF8CgIJRG7RvXwAAAABJRU5ErkJggg==",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "CrateDB";
    }
})
export class CrateDB extends NodeBlock
{

}