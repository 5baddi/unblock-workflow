import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "contentful";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACzVBMVEUAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v3wV1FOteFQteH/11/8/f79/v///f3xWlX///4tsN//12BYuOPwXljORzn/2GXwYFry+Pz/1lrwVk/++/lTtuHvPzXvLyD//fdhueNbuOP/12L/1En/1EXvSkPq8/rO5fT/+e5LtOE9suD/9doAd7wIgbYAgbb/2nD/113MSjz+9PTU5/T98O+72++22e+GxedHs+AzseAArN73v74Ae7IAbq7/5KT0m5m6so//22H/2lnwTUb/1DzvRDvOTjrMPzfKRTbvOS7wNCnvKhjIAQD2+v3i7/jc6/fF4PL87Oz86umWy+mSyuh2wOX/9eH74eA/suA4sd8mr98crt763Nz/8tf61tb/8NL50tGiu8/6zs04ncz4yskbjcAAiMD/6r8AfLcohLYdgrYIgrYvhbU0hbT2s7L0pKLzlJHzjYvyf3v/23npzHjxcW3/3l7/2VXuVlDwUUvZT0TUSj7JLTjuJQ3+9fX//Oun0eqbzeqZzOl/wub/+eVtveSsyN8Prd4ArN2Ludnd2ss4ksL2uLcRgrb2t7Xy0LQAcbHorar+4qbczaPiqaDgpJ3nl5T0yY7Juou1rYbyhYLxeHX/33P/32/4yWTyZmHwZmH4yVvtsVPpp1PeWFD/2k/PVk3xUkvMVEnppEjILUTIIDvnoTj/1SvmmRDWLA7KHADUAAA0tfvvAAAAQ3RSTlMA/vz6AgQIBQOJf3UV+fjCbF1aVxEH9+7r5dzXyoRnUEpFKSUc8ejhtq6fm3FvMCwiCryxr6WWjnphQD42DdLNxZg46i9pNgAABRtJREFUSMelloV700AYxpNUJ8wZG3PB3V2vtq50LbSTlm0wxsYYDHfXbbi7u7u7u7u729/Ad+nCJaE0PPDuedbker973+/ukivlVgqlUk7u1EqlgvpLyZUq/BES3zwmODimRUIrfKeC0SQFNvAvMbBGZGU/xMovvG3jYF9olMYBLR9YtRISqULDGPZLT1KpqXpNqyAsmieEFRGgplQKj7bR4RzImZLbisEezMtTdf1dfZFIXGMD3z/QcjUVFIqIp1s8LBYs3LAU5YUQQ1B3OINQTUold8NWxyzyKEx7Uarf4eoYlRSmxclVkPk31pjkklFE+1BKIRsIrIjkXxsFdCyfVlPxDDSK0W59pw8Y0H/6NDtcJ/HpMF9B3ZFIxmeTgBxwSr/AjJWfOSs3CRmNvFmrSmAFVQtYga39uN6cn6fTg3S6QYPNc3KJOc4YRIL7VuKHpjug3KzBeXq+5i+cbf9Fw16oqKLkZcZeqBxhOyB0du2aVTqw5IRxc+ZUQsNe4axDKghna8XwjT2HrckDKMNisWS4+Ix8HdDEWgHW2DiAXzGNLg7feKXnpmGrLFkZ+eaFgwdZLC7aPBAZiTVXdSTPWIN6PCjYXAjwJd35+XNmnxyYucjMuusHZdmB5qzxhIN5HbgmBac/GVWwpbCw54a1lv7dcMwp02Yt0lnyAM+086wrJVIK+KsJqYnxui+71xdu2bxh+AU74tRXvyAzK2vICWBJ7kDIraYa8Evu3Ct1zP31BQXXVyCuK3x0OzPk3JCBdgFcAxetqoIYYrxsXCfDmN2jRt3qgDsgDp+S279vEmFxoZF4uuvKEK/kEV07GQxj9r05DQN5ECBhITDXzfmLnL5rX7YhJbvLCGAlYFkdgIOQjBh3T01JMRiyuyyRhlEcwAF8eG4XSG3ondJdCoa0wQD78OEeuOSU1F6d4VrKudn/wrX+NXYQwIH/OmGxAMfxl6rzrtRsyN31pgjWJCcna4QwUxvgeFq8SXqP3rv3mIBOdo0ggCv4AlwvXLQ9e49+8erzPUwQNn350KUa3EK2Z2v2qKgvejBGv5x4+PD328BoyhKjGY+KJzt3HCXekLURHBwKylv4SI57OnHihKKi0rt9WBL3X2obbzWZjmwDawJHs49kexybvAwef/g0oWPHjkXfng2dgcn0xSMdB0xarfbA8z6cNcChCa53d4TwNfT1I4YnHXxXnLZz5MjtexwOE2a1abZ+YM2V7A+ZKS43CXSt9C0Lm0xpOQ7H+LGAYpnGP0Qaza/UAewLUC54ovG2vFP6vmjSof0YAGEQbK1jc+aBMQdXDoGCWevqfGsY/MaPQ6+BJUoz2SZbCQupvbAxa53AwC2fXqktNtk4T63Waht7ZAcULNghCu6ga4LPG0LTqN+2HGeOyWqzWm02a5qjZM9qxGNpwfmu5F6CxHzm1Z05zhKn01ky2bp9ZTpuI0dsG8hLztg4JKMFtAacZi4funXr5dWL+wj3NQPPBF5jQkchP4TEOCcWJaHZZRKompgGhJPo11Q78BX9DPNHoUhatAxVw91FtMIf+dFSLMNgVi1k2YaGSMZ4ZmVwRBFWmDwKoXIezBnYDLVIZjEdFw5F0X+sFkW0hIVxL/iiXhOE3IZnAC3nLSfz7I6m4hsxuCvD0GRxZHi40MaJXLke8ISoiq6YZUJYEU0T8ZcSkquhU4so/zASuXJ975Z4XDxTkjhrEFI7JtrH29snOrZOK4qHSksNXQXDua/1J0BR0xDIlyn3AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Contentful";
        }
    })
    export class Contentful extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    