import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "freshdesk";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAw1BMVEUlwW////8jwW8gwW79/v0AulIqwXAnwW8AvFk+w3c8w3YAvFwtwnEzwnOI06IBv2hCxHjE5s8ewG36/fsAvmUwwnIAvmI4w3UAuU4AvV8Au1Y2wnSy4MHo9ezj8+nc8OPs9/Cb2bBFxXv2/PiQ1ajx+vRny43u+PLQ7Nm+5Mu44sWo3bmZ167g8uXK6dR5z5jY7t+f2rKA0Z1Kxn3H6NKN1KZbyIYWwWzW7d2u375tzJEOwGyE0qBzzpXM6tYAuEMAtCmPtnc0AAAEFUlEQVRIx6WXCXOiMBiGk0DCFQxFbgTvs1Wrtvbe3f//qzaBaUMNXXX2HcYRJg/vx5frC4D/IRXW699peb+5adem1OtmoA2dLm63o8DEPyiLPp55y1NY50+693ejDKeMxrbVLjtP8UoJW6C/tg5mthWHBkLaD0JenGxquMneb7GZey7HEPiHniw2mkIdNEMe30ZZbBk+Amdk+B6+Ec6SLV8TzTM0cIE0KxtyWLILN7NcH1wkzTY7NVyzD0FkAWF7PQw3EbMRAlfDgn1mgf3dFomEI64zsA6LUWp9Y5HhxnlIwzgOJa7Cgu3usad9R30Hm0EQZVlEQ/QTLFi4SmwDSRSETyZ9XD6X5Xrx8hE5hKCf4QKwXJMsoanbm8NPrScpcwFqg4XxXeL5kqXA7AwqrNut5+fikOYGav/mdUAokixybgVRLCcfs+3dgwhh8OrUtAoPsTRGhJiCne5YkqVRihNr1eW3szRvdR4Qv5FP6rxztn9IiGfFeWx57PeWm5dx4KIWeNnsJsrign/Ik3OgvqYhTfPzUTLj9CpFBKnw3pFjyyDig6dH5/A1L30wSh67cDyLQtV5gBqvJG+UG98mI7/RkObmBsIet1bgRWbLcEi050kYsVgDUr5n7sdwTRlFp/ALthqfbL5AuMHidVLIffL7Im7VuePEDWdnI6KuMihl5BlfdDqpAndnzT4wonuoT/AJjCzc4+MwJcYJPD4w2oCDPux2slZ46CjwnPpEhRFpBE0Mr3JW4cETMMB3+D2hAfM/x7Lxxhj5/XIhrA/Ksij3aVgNdRDt5mVZTvXLwq6n4cTMa9hZQaET2MomrQnTq/3u0XRrOO3Brs51AuOd0lU1LK7JJ+z0oK46e0lPDpIrYWThB2V4gjOwXF3Tvjox0vsf4bsG7LLDVJmSlDcd6/A0YZBf+iyiMl+8p5TFgLDRALZlG8JlpH2ZaB5ewpZlKJr12/q5u/TZlzEKfa2AuroAhhF63w13uyMjVfoBe72d9MbDRKNIrg7ZI49PXXqByxwhJmIUJY0RsD/v81kzPCM3FxC2LfogDAml1BBsaMdxPgp/P6/ZWyiNLfODJ1DZbmrc4BJ/aJRgrmQFOziWryeu+YtjrRudTEu0v1kulzdzODRdgoBMdUevYbnFKrDr7OZFUZQ3Ryc0JBszbS0gZXOXqsM2eeoyHLgIyYchXlUj4aSsUAN3ufKYokbNYOMJrIxPChqVrqR9Y7PXKewK6NpSChE7Ow4+2euKOD+08bH4ZK8qH5Fmk2Qrfa8oXJEfepE5HDdYeLZklihKDg9QshcV64jfGLGHMNsNRBups8cEBIhre26UvN2tq+ikzh5QbDs3AjNJZ70CnthecDTKnLdjZ9UfV2++8lD2sOgXHFRQBb5efwH+IWcLp8J3pQAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Freshdesk";
        }
    })
    export class Freshdesk extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    