import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "beeminder";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABelBMVEUAAAA6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw7Ozw7Oz46Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw6Ojw7Oz07Oz06Ojw6Ojw6Oj07Oz06Ojw6Ojw6Ojw6Ojw6Ojw7Ozw5OTw7Oz06Ojw6Oj06Ojw6Ojw6Ojw6Ojz/ywf/zgYyND03ODw1NjwvMj3/0wRCQUD2xxL/1Af/zwT/0QRPSz8vMj//0Qo9PUAyNUE0NTz/zwotMEAxM0BYUT5wZDp3ajn/0ggxND7vwxP/1QRGREA3OEBUTz5kWz2iiS6skCvtwBb4yQ7uvgw5OUI0NkFKRj9rYDx8bTiXgTG/oCPWsB3btBzhuBn0xBD6yw/9ywz/2QFSTT1cVDs6OjpsYDmCcTaZgzCTfTC6myfFoiTfthrovhlbUz1gWDxoXjqKdzSPejPCoSmylSm2mCjDoCHPqyD9zQz/0wv/1wR0ZjmpjizKpiPTrR/iuhjquw1UUEaPfD6tkjF8XVfuAAAAKXRSTlMA59K3oPqzMQkF9smWj0AsJ+7g2HpcGhGag2JSTPPMxq2piXRuNta/ZZKUy0EAAAOpSURBVEjH7ZVnW9pQGIbD0jqq1tm915NxEggBwpSNWFoHG7TuvbW7/e89SUA+kLbRr/X+ALmS685zzsl73sPc8D/zYhRwOUa0y2GHCxh9ad29DR3bSB8zbIPOc6vuEIBkkFDbPkBdEk0CeGVRHgSy66UYDx0+VloXgNsWZQdCO+fNskp4kSdErTQDsRB6LMrPILi3lPTa3G58eimSl5WKW4DTonwfEBfOuNoWGwjXNmve+gwPTFiUbw0AkdkE52VZllO4xOcI8OTWv72+KWPciM4qbIvAtAg80B72/S1x4qndZu+533sH/F6YbaN8yQKDI+MO++s390YYc3ofw6Af8G80L2VOpnPu74fOo3vm7h1AoB9HAIVMV6WW6w0cZYx7okgA3DUbsx3g1YXFPbcoABDdR2Gv5krb8ajmhKJL8XguKQD3u+W3Wi2Vw4nwt/1sSMvxx7dl1pvYmBdB8ec2PIFEIZ8FRrsX/gkEtZLWhil/yUX08PljObUaDGmxwdWUxNHpX+yLwMMu+RHERZnVkVL7ukKC8ZgeK/pKCc5YgC1VMClzwD8rXa7voU+3kgTarlp8J7EtGss8HCZy8ERh20jvVlUYCL7jgJdtE57m8dhEntvsyGy6PhOCztyvZsdlA4si7GbJJalTF1+XSTsZBx6lk7zCY8Bszvm2rNTXPvCa50/qvzunMtd6ayFHTLY2reeVQCu2PBMxCiUf9xMA/Idi3QhXvn4A7pm0D2QPLziOk87yqh4bmamkw5/don69W057OU45/8QDQ13yQ4C4j1KFVGnPr8WG3PmwxHmb1RW92nl1veIpbC0mgYE+xiyaROdz80E9Vvxx6Em9o9S2f7bmry7l1CS04G4m7aB6iECf5NpCxm2QyRRXIoKmE6L9mff/qbsuGJDYqfxp3tcic3JeVAUY2B8wf2B43Ol02sAveyS24LmkwV1szAEOp/P5w3+0sh4qN+gH60Cr9SQKDFk6qAS1qhVkx2XldT9cIxbkB639Vfv+Xuc7fU1jh8dYnwV5ktbaboPzVn3kIyV0EGalzaDVw8oJRI/TrHI6TVk4KHDc2Qxv9ZjsdYFkqhJtmxq0haTX/ECP9SOWj2132srsnABXr0V5aozavrJkuOFiUABeMFYZtlHbvSlrHa++GhG0Tm+d3lGAZOlBqaQWIgAGmaswOaB13qL8Te+948zVmOoBhGh8ibr9E8yVGQTAE8A2xFyDcWiMDTPXYmIM/U8nmRtuuD6/AQzW+dqtokXXAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Beeminder";
        }
    })
    export class Beeminder extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    