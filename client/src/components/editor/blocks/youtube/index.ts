import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "youTube";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAewQAAHsEBw2lUUwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOLSURBVHic7ZrNSltBFMf/kdAmtiER/CQUXBVqIC5aaBH0CVqQgkv1FQpdxPYJ3JQiheo2a7d5AoOUSt0IEZcuWhK1ojbfJeR0MQRFc5oz00kT2/ODIbnkMHPmd+/k3rkzAQIIyg0Gep1Av6JiGFQMg4phUDEMKoZBxTCoGAYVw6BiGFQMg4phUDEMKoZBxTCoGIag9xpjMSASAe7dMyUWM5/hMBCNXsYFAua333F+DtCV92gXF0C1CpTL5rdy2ZRi0Rx7xF3M0BCwsAA8eQIkEsCDB8DYGHDnjsf0LPj5EygUgK9fgVwO+PIF2NwEzs7c6iNzTuQlECB6+5aoUqG+p1IhSqVMzpb9tBezvt7r7tqzsdFlMfPzve6iOy9fWomxuyu9fu02XvuBV6+swgPi5ZNIxNwVAgGXtHoPkbkL/vghCpdfMcnk7ZUCmNwTCXG4XMz0tEs6/UUyKQ6Vi3n0yCWV/mJqShwqFzMx4ZJKexoNIJv1V5+U8XFxqFzMyIhLKu1pNIC5OeDFC+Dw0F+9nRgdFYfKxQwPu6TyezIZc3mvrAClkv/6r2NzcsUPPfm8v4etavVm/fE4UTpN1Gz6a+c6+XwXHvAGBx1OkQXfvgHLy8CzZ8Dnz91pIxwWh8rF3L3rkoo9OzvAzAywtAQcHfmt26YP4hm1z0u83VBqV2IxotVVolrNT7vNpnimLRMTCvlJrIVUTKs8fEiUyfhpOxTqwiTyf+JWDKV63U+73ocS4G+cE3UWMzBAtLhIVCj4a1PS7pUif+dbr/+dO9PTp8Damvn0Tb0uDpX/x1QqLqnIiceBdBr49Kk7UgCzwiBELub01CWVzoTDQCoFHByYZ5duvvP5/l0cKh9KFpWKef4c+PABmJz0X3c7Tk7EoXIxFpV2bjUIbG0Bs7P+6pRwfCwOlQ+lQsEllfYEg39fCmA1xZCLyeVcUukvLPogF7O355JKf2HRB10+YZBfMcUisL3tmlbvyWbFUgDb/THv39um0z+8e2cXbzX9B27nov7Hj3Z9tJpEXp1pp1JE5XKvu9uZSoXozRunbSDyP9/rtDYOPX5slj7jcbNuEwo5VffH1GqXG4f294Hd3T/aOOQuhiMaBe7fN9vLIpHLY59bzUol871YNFvNWsce8S/mH0FfbTKoGAYVw6BiGFQMg4phUDEMKoZBxTCoGAYVw6BiGFQMg4phUDEMKobhF0xEbb6Jqe94AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "YouTube";
        }
    })
    export class YouTube extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    