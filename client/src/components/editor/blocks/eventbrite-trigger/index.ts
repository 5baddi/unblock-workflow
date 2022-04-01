import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "eventbriteTrigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABGlBMVEUAAADwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTfwVTf////wUzXwTi/vTCzwUDHvSyvwUjP95uL//f3wVzr6xbv+9fL2k4DvSSn/+vn+7er96ub6wbb4qJn2l4T0gmzya1H+9/b3nIrzeGDzc1nzbVPyZEnxXD/xWj381c77zcX7ysH5t6r1jnr0fGXyaE394Nv83NX5vK/4rqH3pZT3oJDxXUD+8O31iHP0fmfxYUV4TGGrAAAALXRSTlMA6wn6GNHCnpkc3L2qoI2HcGlfR0AjFeXisnZaLx/z8u7Ht6aTg005NQ9RTgdlSfndAAACr0lEQVRIx+2WZ1fiQBSGKYKgUhTEXta67u4kk5lgQkLvvdlX/f9/Qw9zE8DMRPyszxc4JM+5d95peH745oST8bNIJLR7sen7orm5HtxCgDdwvv8FNXnqR/ME9xZUD9YQh1/JRdyNY8Qn9u9TN4SEBMPuqm+2ZVklRJXRlJVNV3lnaipUbTUaY+39c2ovubjRqaoN724zklRN648thdix+cRZIQBrj2nJJnPXolb3yyJ3yQtl6egGPEsvYav3hEBeAxfXrqWPFBDYK1dc9xKWlVmTOOgEOt91K6yUsxKPosKeb/t4Iz5iTWt2VPn+fbFgj/66jpl9IY5aeZAY/2sdhVKqlm/hh64qCwM/mTxR2zn2arpiyix6VAB7xEp7U055hRUuQd0KnahEobiZhsygb87u9jMZytRMpGKKUaM2uM1eQwYd1veGU56LK6eZ5LXx2EuDNxdZTCCrrczkvf7LQ5d9m2XIZiskkEkly4pIHHLPGOIWyE0mO0jrxXobIXd5XHV42fTAqGsKxSwucdvyU26+0+6gPEZUYSIQFU0V7tliXi+W24RiImOFzMrrTpkd8rRo7eBGGzqVsWGMNWVa/dIpByGxKot7QGEXqWbpfdx53RjBGjnkHGRx2Bi6xOhVTIUQbHburfE/MXmHdz35YaatvKuF52bz5T4vAQZFE7g3zyp7Rh9mFuTMYunBjjxO8eQ/1hGmc1fJK5y/Z7bAK61qBad7U8Fw4QrO/X0/2Lj40e0/YeEkA+f2fVHvzrVsEIIYqwtcVZiU7yDmTL/UUWTE2A6L5asAAmRM26OhURqWW9hW0eFv138xzAZfeQeryOYo4XElFURCtqCuGF9U5J4ceD4nEeCp3rhnIXzrAYcag7KL6InT7RlzdW/J8yVSyXgsFIksR3f/hj0/fGveABo4E82rLSxPAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Eventbrite Trigger";
        }
    })
    export class EventbriteTrigger extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    