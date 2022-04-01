import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "syncromsp";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA0lBMVEUAo6sAo6sAAAAAo6sAo6sAo6sAoqoAo6sAoqoDpKwAnqYAnKX///8AoakAoKj8/v4Al6AAmqP4/P0Qp64AlJ4drbTZ8fIus7pmyM06t70AmaLt+Pm85+lIvcMZq7Lz+/vc8/R/0NRgxcpSwMYVqrEIo6vo9/fj9fbR7/DJ7O2p4OKd3N9Yw8hNv8Qir7bw+vrf9PXE6ux3zdEosLcMpq6T2NtEvME0tbvl9fav4uWN1tlxy9A/usASqLAJpq215Oei3eBqyc4OqLD1+/yY2t2G1Ne1mYKIAAAAB3RSTlP2SADGwXED3ac5GgAAA9BJREFUSMellwdv6kAMgGnfyNk3sgchhL33HqVAafv//9IzUaVHhQhQLKTkDn/yne34fJm/z0+/MhrT7hKmZX49Pf/NPP/RGLuT1RLkz3PmKc1quvWnzG9if0j/zmR+DmfOfHWX14j9uWntAUmFaVUAQM+7YUJAU5xzRU92J0z6XPV73byLnEZ3wQyUCobCGljC66Ik+maYWIxbYrY4wCHbEZGtiL4VZpqKl83YRMkkmv2iZ5Pt25etWi2FkLwC1oo7vHnZDHiguwjsa4QTUeHAbrWsvJl51P6izXYLb96z6ovsiTZg3qrKG2HgPcs+VVaunsXrMOUVCS/nvnlXvlp5hCswoZKbHPhbnZ3CKr5umYE0D71SoJnjoTr9Axd6X6XCxKL9oVv1tmZ+eng6b5aWjKXCxC5y9fJBIZizVngSKezr4/Q4Mw0nVltySd4OOw0XNfbFqtdGRItOtyybO86AWCzrDdFFYInvZa3ZrKXnNqP46LGixZHa8tNcD+VRHVGqqGHTfLplHO1N0I4w5F6c8TFYUs7zWnuQpHkqLLeFLmdINGBJH4kxEWwlrHrOT9g0OElB/uonathszhVlaUVM4vdSSOw1ONY3xltDJu/FsQMEBwMMhyUO2jWYdvpm9PSqIv/aVheJYPay2BwkucXolwID30Xmtt4xOQ9nuak8Jke2EM0mSBiBaTCpzsUinItWuTwSyTckp7mOaaqEZSgT/mJu42q4Df1oMIjIvxJpy4Uag4RgrJ1F4tnF9JS2V+wbhgSOgJu9Zn6MOLBEX06tCp9XJZzime/11h6J/eZYcLY8L9yQvi3yuYYK0NcnmtXjSBs4h79sY9fTxQrdoguFwFiInqEwXI+Rl+qYFS4E01PLZ+cTVrvCl4Ox89Go8bUo+dk21V27UHI+vJAiKb/B5yfjcO2sl8rO7U3+UhDC25gYFZn9/uK0R3ilAPJSTr6+l5ysvpo66L6GRnVUmBidBpXBMnkwtfRKuzB2yiLvLBrWbBO7847wJscJY9ZI0BSYUe3UJ8ZaVIzay1CQeAEab+LFyCaHzrWij5FXMz9Fx3bCg+9PDSdeEVvN7TlcyrDTbCk2p0avrrd7MYDb3Yli1oiHrRpFOR1OSl7Vqy8cFTR1oevCanXR2BRa07P0vEDXVqJTdYytn8/7NcNw26Ijib2tM2C8shRRuc8QtX4wEsU5/7/mM/g83LISvQsrRy1NYZdXCP/ZM/icZpxv/UoQVHzgSEN2XxMHEjkJMoAL3VC6AElK7/ljeaxlfqhZf+ia8NAF5aGr0UOXsoeug/8A/eWipoAbyRAAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "SyncroMSP";
        }
    })
    export class SyncroMSP extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    