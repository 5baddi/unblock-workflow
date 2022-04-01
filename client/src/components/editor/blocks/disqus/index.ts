import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "disqus";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAG1BMVEUqoP/////y+f+Iyf+03v9nuv9ErP/N6f/b7/9YnVr6AAADgklEQVR42u2bTU/bQBCGIzl2ex2HCq5rQuujMSH0iBNKrxWhtEeLQMg1KA29BqS0P7u0qjSQjTc7mxklkfY5Q17Px86uZ8c1j8fj8Xg8Ho/HsyYGz5Q1IaLe0dk/usdXNX5uWz8T+E+cjtvMdoStewUvScbtGiP9joJ50i6bEVErgQXETaZQRCcKFvOBxU3RRwVVpG2O3wcDe22h50cvZSsKXCow0/yyWn4qWMb+KtkajmAp8acVBHKwIHYPw40CG5olg4NEnJSDJXtumRQosGVfygCMs5ABaIKgAWgC3QBRE3IgEVMTKVRA44Ao8B2I7NGWczQCKuckgTqQaUiFGDNVJsTIjCBwBw7sEMJ8CCDkI/SQqI/q4MSOaw6lD6/4naxaLqKRsQoMeq17WMipbSFdWmYGrcdVSurQIIBvDKCzW5JCYC6UYcc5UaOpUQAVXIMQWJb6YOq4Kbyx/bcb5bYSLqyfK3dbCYW1QKg5KaPEGAXsjZ2QY2wWCJVDlOuU3Mgd9s1rikCg6Gs5pwhEBT2NCoKAHuaMUKt1gcu/zaKjK1PETmnbJQqg9+K0W1Yn9YyapboAQPxUVp4PDjgEIP5RGYQGaRnoAnrhr1PL3bWNAOxXrYRdJoE4wygTT/EXZgE9WwriSsvNArqvD4nb8qFZQH/SC6JAYRRAsoqgcQngG9NbosDIUuA9nhFIxSiyFXiHK01GoLEugYkXWLvA2tNUaqHRS8VEuhZlFRsIf7nOtXLNvOEUmgDjlolph5Zxb/qh0jZ95mPL3Pmd/eA11A5eHEfHp8qkaLAffgvtbzmP7/o71Iz7BeSO3q0odAHCusxYXwLRobjOmF9j77SWFO+LeDTvzwZzKyHQWgm8zRA9XhPedo7ekcpYG1JRR29IsbbUvunNZdamYN9QVDgE+lNKW5Puov49pTFLD3JvSmgt09P09kS5N8dDtUTgtoe9d5bOMjTPXvDw8Oh8QYEFUuqKBWMseUlUgCNxRoix4EVdIO2hobCH6PewuMqEY3wudY2J53bZGB+QL+mExh5ymRAjhVCOYoyFDQhkDECGUgboMU6ScYd5BAtjHCe/useDknWIDGOcpGdHX0uhMbggHT8/uuAgX3jlMoq4ycOUVuOgGz7QunQkd/OHis1j0dsx2F09mr5Fw/XinwfgBw7jz/MfOGzRJxoej8fj8Xg8Ho/HxB+9WeZbbwp6OQAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Disqus";
        }
    })
    export class Disqus extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    