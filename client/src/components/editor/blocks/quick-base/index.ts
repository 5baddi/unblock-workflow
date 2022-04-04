import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "quickbase";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABVlBMVEUAAAB0SJ1xS55zSZ10SJ51SppyTJlzS6F0SJ50SJ10SJ11SZtvUpt1SJ50SJ11SaB0SJt0SaB0R510SJ10SJ11SZ51R510R510Rp50R51zSJ50R55zSJ10R55zSJ10R510Spx0R511SZ1zSJ50SJ50SJ1yRp51R513S6B1TJt0SJ11SJ10SJ5zSJ1zR5t0SJ11SJ50SZ5zSZ5zSZ1ySaB0SJ1zR511R511SZxzRp1yTqJ0RaB1RJ51SJ14RpxzQ6B3S6B2UZh2R551Qp50SJ5nP6d0SaFxRJtrTKFxQ5x0UJaEUo98TpBJLcA4I9B4SpltQ6NzQp96RpyEU496TJd2R5yFUpFsS6B3RpR4V5VRMrt5SJmEUY9mP6hfUaZ9b4l2Rpt2RZplTqR6Yo+BUpBAKMp7aI10SJ10SJ50R5x0R511SJ11SZ5zR512R5xyRp9zQaB/T5OkXyALAAAAZ3RSTlMA/DC+AyEJEHn147cNBu05KSXp2s6lXUAU4Ni7qJ1/dmzmxLexkodHGhj43NKalYxQRCzw5snIwHxyZmI0IP77tbKtop+EhG5rZWNOJBsK/dTUyse6tbCskYmGhXp3W1pXS0ZENS4nx7vcbwAAAtxJREFUSMftlFdf2zAUxW+os1wTx5kmIYtsIAHCLKOsAmV27z0VOwnQ7//SEkVXtuzwK+/5v/n4HuvK50owYsRd8Sn+2tmW7lfG4c5oiUp85/6rUiNXvaPbn0/PBAkx2uQfkVgjCZzEYYCylnRtOBudJjYiuwvAaHY9FDLbAgffYh4ichUq60AZk5nYa4LAeDZIXFnZBMq7ayYVkkLLTVxWZKJKS+rPUJqUbOtmyHDkwUIPUAnOg4U5chszYdpdDJWiJcaEIZQbdmFKoWV8awn0emXC6cqre5n4Tmz7inAOaeEUCs8Vl6bb0Yra1/STXZPLS7TxBVz68jFQwpaQJluAbBTQ3n5LpSJmPVPrC1KWIGVbBqrMtm4saX1lE0fQCNCBnuDrgh11EV/lqbKPQkjrV+BztAYCHzvsXZyG85tvce6mywB2sg4iF08v2YfD4s8NjgHAJM6hBg4OnhDKw++DWAvofuQDiOGDBA42g8z8GcQh9SQBZBZHDpwoIVMItjaL7rQCITZaJ+DEFzUtnxaHdB7NxrqrmRWiuc6HdBkw5gA48bOkzTxKaTTPwrI1ShGV/bDrL0z6SpAEj6oQBgcVtsHtH6xrfqpXfZAjvDMRJcVGLKW5RqXy28oLAh9wPDMSVbYihEu2g1ESxmQBJ7m3AZQyfm4xLBzJjM/m5auk6lT6xUPO0stgmiBFFZB8iFgqKa9RGdwGUCYcuVntr+49ShNOVKeVVVS6x0DRIoTTDS0X3+ylU90O1zyDHUsr/ELFDa63iZXOZY9Y6bHxOeYav/alBrkFc8VPy/QUcZtGvXSLORVm44ZSQQUL9eHuLrsWWzJeWBXh+GSmO8SdyCktiRt4mjQQyC8Nc7+46MeEsXuOwIF3X3Y3/3kPAD6e+6oCLrTKsZvITcHc85wCrF21KaYxD+5IyVyjVLwnMPUJ4ODl/QFrMAxJ8evamMDPc4DzMy9lyw8jRvw/fwH2bvNdHxiWPwAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Quick Base";
        }
    })
    export class QuickBase extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    