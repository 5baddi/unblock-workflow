import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "getresponse-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAn1BMVEUAr+z////9//8Ap+sAqusArewnsewjsewgsewZsOwVsOwdsOwMsOwIr+z3/P4rsu3a7/t4xvEbsOz5/f/y+v6d0vQQsOwAruzn9fzf8fvQ6fm64Pel1/WSz/OHy/LT6/rF5Pi03fax3Par2fWYz/ONzPJnwfBLuu5Btu42tu3J5vnA4veAyPFdv/BRvO/t+P3h8vx8yPFpwfARs+1wxPDO5iEAAAACCklEQVRIx+2VZ7eiMBCGmcykUAUEsffebtv//9tWEpDdq17x6z28yjnTnjCBJFiNGjX6LXJKw5Wy8yJr89IgRP4aLSkqGqBoMF2T/QIb812iDUUjAJijqM/6Dg/BWFYX2hByx68NCxwAyw2PbwNg0D7V77uFwwuhzY71DozpvuuyKyhhSf0cfrMzvyYbMbj8DIwLyL0Finrsn7au155LEeS3DjYU17qvYbtmzpnV1e6E5DPUEzg2LFubiMTBxdONt56sSRtTMLVDLEL0yUDHRj/TgvigYCfkFkFFExNiYxTeI9SRuA2B6cK3Fjeronxk+p+iL++jgtMoAdMi+yR1zSjaF2E4WCjVPRQ3fYB703P4JjAJBt0jkS3jaof6tpIcd/NLRVEyRPH/Sl9qWI87iThSpqQQ+SU7F+88S3RKs7OSrRqfVjT0FmuLsBDfjPqBpgw7oNj/9vb9LCxo03+3P0+X41U6nPYCDZWpGbne7Zn09W7oqhSubjXsECu2ksu/wopi/6oaMhij0D3f0tZUD35XOtM7P9x5dkZp8AhnDNgsI/F4zyg892+mXAbCNXrxz0ufjmEx5Sto0DGR8J58RBRRtE++PeVk/8ExrnFUKJdwtzr0AgO2k95htUOyVb0TzpUckW9Px2W6/Dhtc0e6Vm05SjqcCBGJuC2VY70oz1FCSNfxrEaNGtXXX1PgG5nLt9OQAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "GetResponse Trigger";
        }
    })
    export class GetResponseTrigger extends NodeBlock
    {
    
    }