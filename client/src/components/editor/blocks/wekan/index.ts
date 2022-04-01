import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "wekan";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABVlBMVEUAAAAAaYQAaYSZvMipxs8DaoUHaoUIbIYje5MofZRfnq+UucaBrbyIssABaIMBaIQIbIcJbIcObogRcYsXdI0iepJFjqJSladoobJem6xdmatvpLSRucUFbIYFaIQAZoINb4kHa4YLbIcbd5Aado8UcYsofpY2hpwtgJcUcosAZ4MnepI/ip8rfZUtfZQ7iJ0xgJc6h5wme5NCjKBLkKRKkaQkdo96rLuLt8R0qbhto7ROjaGmxc8Fa4UeeJARcYoYdo8KbIc4hZsfeJAbdo4bdY4le5Iwgpkddo86iJ0/i6AadI0xgZhVmKsne5M+ip9dna9Ok6Zhnq9Tlagzgpgxf5Zjna8+iJ0tfpR1qrlfna5TlahLjqJfm61oobFhnK1Jj6RIj6NrobFqoLF0qLeXvMikxM5SkKSEssAAaYQAZ4MAZoEAY38AZIAAYn4AYH0LbYgAXXu87oKbAAAAaXRSTlMA7aoGAvv38823gBgRDPz39e/p5NbBmId4U0koIPfz7ezp4NnNy8O4tK+qqKKim5qXioV8d25qTUg3GRcT9/Pm4NnJycPCvru6samgnpqVkI+Oh358eHNycGlpaGBaWVlSUkRCOS0jHx6djMvOAAABnUlEQVRIx+3WVW/DMBSG4a9LSiutvMKYmZmZmZnB5yTp9v9vBtLustZVpGmV8lxYuXljyYnjwGb7S3feiCOPyGoKv1F7mUnkQczdKsyVG6IgoxymfBVUOCY3TFVqQgLDVBsJGTDVLizEZXb8g3QuMiain6vWgWYuJiYON4U+i68bsAeIs3RMHBuaUMfiJOq+5ndMYN+QjInqTzHe78NZzpm5mCGq9SOhy8Xk7A/gsLoRqie3AiQ0blaVBpaLq9MItOpGEtkqLQV4WTtAWnLB9D0oLZrgUdxo0UkEoux6VhclY20Xl5qgqiwSuU4/HshYx2jEzVIxhR97dEGNUBpcxz6c6K4nZJIvA065BZuqJcGbyPJaMoCe9y1gzAOlgiQflRA8giF3pReIhf3A0flkR30TSb5hFHxFS6fHC3/d9T0w3BcNDsZkY8GDuNrRZ8eVdJ9rBJnQ2/wCy2+M4EZviGhuO87s7BrumH7jonYVfw/0PXwqvS/Jf4+lTwzrZ5X1U9L6+Wz9zwBKN3OBeblLwW9ul2scedQspWCzlYYP3g8EvyKzepkAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Wekan";
        }
    })
    export class Wekan extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    