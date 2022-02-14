import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "chargebee-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAAD9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azX9azXS0qjqAAAAMHRSTlMAAta1CPr3HAyb8mNPLBLq5MmGZ1wi28+soEQX7pZ9dkk/MijDurCMims54b6lb1YyU8hoAAACDklEQVRIx+2V2bKiMBBAmyTs+w6CIi64O/n/rxtKJwIjJPA4Nfc8acOpTnfSAX7493G2QZN6Zeml+GwVS0xiNSXtYeBIm6lKEaJf3C5kjrvz6SioFruVTKcIJEG1D8oBa1wXUy6+w2lVxhFFuU+0j4KOjwdOjUHQnHJ/DVZ4iaXXatTo2OuhPuEWXm9fLOhxPQjldeeuyV/NqGT+su1ucZuRkt5PMRElDmCEbdK2MNcmKnaZi2EUrd7GMEHEXGMPi8mYfFruqjd2NLrE+/P9oF9nyCuW+P4JhcorcBbL4dc2WSxyEcoBe9Vi5yJlEc8RyTp7ldVo0w8rkZyzN3ddExjR4sw7TmZhzSRhEddZ3m2TRar5+3z8hDZ/xlMSnzCPnbDu9NcPhLItzKAZG0hJnHVYYhnDYtSS2RksJ+fcQi0qAbDtKXknU84oWPQJtizvxanpmcCQJ3VtiA1lUlbdzk7rfs/bzwFSVR/bsaDhjHukvvfJsbBXm8S+UboXTwfDQFjXG6S0/dde18oGrN20TI4DOzHaA3drzAJWPqVy2Fa+5qTWDn05AKJJbS+eafsHtUlRUgAHB/dkJT+ddJzI7U+3kopjVgiGUwroF7J/IWAac+7RFeo0D6X3daQCiRBNZs2XVrmDr4e2zQ1aVhrMwwl9+Z1Zzw42ptQPHZiPFJv5IXENWXGvdRhL8MN/y2+uRpQ1fWz5HAAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Chargebee Trigger";
        }
    })
    export class ChargebeeTrigger extends NodeBlock
    {
    
    }