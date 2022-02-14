import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "sms77";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAw1BMVEUB02sA0mkA0GQA0Wb///8A0GIE0mj9/v3C89kR1HH5/ftL3pEb1nXz/PcX1XMM022l7sgo2H3w/PbY9+eq78tl4qEg1ngQ1G8I0mrl+u/b+OnQ9uLL9d+38dOU674x2oP2/fnn+vDj+e2d7MOB6LF75q525qtq46RU35dF3Y3t+/Rx5Khg4Z422oUs2IDq+vK88taz8NGw8M5Y4Jok13rg+OzH9Nya7MFR35UU1HKh7cWL6bg93Io52oeP6rpc4ZvT9uQ0cxDNAAADnElEQVRIx82W15raQAyFozI2a+NKL6b33nYpC7t5/6eKbSADpsW5yBddCTP/6FgjafzjvzMAIMLAiABigYT05uw3o243s+xPkhDs8Gcooqm3vPcan0ytl9cjR0F4LRZzG7vOPC2nv9rdzCgzbO0SDWYjMVw9Dw8gzE6R3Xlnb+YRBfomBCrbw9Az2G2On+CA1rDAiUyWBAHAZe4ErTol1nYTAY/YfonnfUXc2T7gre8yD4YK3UNJaWklnRAev5M1nPIiiXDL5tLqVw5fpMSZcWmCEGXNRO0bAV4VQP6Li1WESNyZ2xeSfYxjW02trrICiq3pMpEvaE5Yl2Gwy0PJvpLe5E8EKXriLqSSl/hbSdsj/IZt18E/h0VfnSnn5XRQPwXEaDpMq/pJKWDTcChOs+NBS5+UkjldIMSBQUkMssdw2OOMiDdmRId7ePQq2oTiDSkaq18IoYaP9zeIB4NZnxGETuFDiQvnyykrYMipzSkuTLOCSQFcVe3YMC6mSQhhtvFv4DDyRF3El+0VzDBy1k38dcLAShVzsY+qcEwy0LzmUDwYx2oLz7W2fNVUIL0T0vfhMN3a83QDIhECBCoDjyBXDIpS9gg8Rrejpmd3TQRS9IqXbjsimfo9iHDEbQEPWf0nB5bqi+w89NyWYlpw/t8q1/32vI/jsqbu9LFu82CZ4HJmvG/XuULwG8Ye2w8GPjlTLSOQEDus8SIniES1wcvL8Wlz965wEBWuiDBXaHMxieGzb/7Iy9WUTNU292g/r8aE4Hi22nG2A1g/tSrJNTieuj4Nt6q1cv58KJXsycM19/Aqp4NaF+kGrrJHcC5oOMGixd90fbO/83qLEIFXRil/huHsYJP1EJa0f/f+3CgQbR/tgNGhn0sNVpF1ZLUHaoUgOmTP810+G3Ga4OZcqm4J4PozcJvijIAriauGMcbbS8hqfEgYEJFQ6DWjd0EDZsvcEXDn8ixImFBP+9YWXdWQsUFMSizf7Ro+TyTAbUWtDVzDU7CrqS2CozbRb/CnAs9g8MOmuOkks9k3AFy6vLYIfBZHhtpGyUbgYx2bFfW9hwQQ/hT7InvJoJ9b/itINgLXg8hAPT+sv1je5qsZl6oit+OGLnz2MSyyO/bDXtdfrsmNpRfsINFbGJVMww8rohVELWaeSzl3j+rgcfEyrJQ+Kn7mSbK3cMMweH1/e6A3H30Cb+tc3OCj7QGeX0G2DBvbQKE46K2yf2W/AMaFRH/QRZt3AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "sms77";
        }
    })
    export class sms77 extends NodeBlock
    {
    
    }