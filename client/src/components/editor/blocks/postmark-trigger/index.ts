import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "postmark-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEw0lEQVRoge2aTWhcVRTH//9z33uTTDITkzZpmjSpDVop2NKCSpQWRaqFbnRTQRBXouDHShciLooLwZ0oCG5FQbvQQsEPtIiC6EKUimJqP6xJm7T5apJpMh/v3XtczDQdW2jePKYzls5/MR+PO/N+c9655/zvfUM9jZtOXrMBkqgF3Si1oBulFnSj1IJulFrQa4iA1uWLEkATYPkhLgS1PBogFFBCXe3nvaJEkRaOT6a/+aEzsrGGkww8zWZsf68d2ljYsC70gxA2edQTQCuoE1Pt7x/qL0US8zMEjNgg0N7boru3Lu/bs3Tv9lxbYKGaIGeS5bSSEKOmlousMMUSxi9441Nt3/2ceeT+3DMHZgY25NUpazx9wonoFNbCltODMFURV6h14DUkJEgIFYYref/w0Z7zM96rz58f7luG1hZs1r4IoApPnun85IuuKCLJxZz/47FMKSRBVXR3lUZ3XPL8qnx3XCmas9PBP+eCfD4QqSA65/Y/uPDac5PpthIU8fMkATSUhBot4wjGTmdffGN4Yckn4Ry3b1165/WJTGfxCoPSKXPL3rGxjg8Or/vteKZSS5RBEB586dyju+dha0juJOlBVSBavfyEJSrZrXCqFDhBVb4TQnRno4dGw5Gh0sF3+etYxoiSmi94X36f3XPPUlsQMnaO1KW5VJ+N1xxZHUXnMDy48vTjcyfebssXfaWK4M9T6alpf2RTGP98jeyISiic27lt+fah/B8nPCFILOS88cn2keEVxKv6aLD3oDoAmY5weGP4+1+Vg2EoM7Nx631ZTTBMhpppt0SltzvlSkFqqnpNgFZoaKmXoUn1fAUFiNurmgBdCs3MfABWyo8x2tNVWzNvMLRA3OSF1KmJFCmAqrIjHW0aKP2P04MsRsFnR7unZwNDVcAptgwWN/fna3JN9YcmIQLINeXbyezF1KGvej79usexXM/VE/fwfUvZTARXwxKhLtCsesVC0Ts5ke5s9xWEqjopFL3pRR4/nf7pl/TYmQ7rDKkAIic77szt3b0EjV2i6wd9JUIiemYqePmtTVL5IU6dhJEUSqYUChU0CioA59DXXXz2idn+9YXYZaOe0P+RjeTiYuryO64+i6gSqoSjhQ73r7zw1OwDu3JwDVoErCG92kyrKlQBMjBR7/pwdNfygX1zd43kAVurmcaNgE4FbrCvuGqaQfieaw9cNhMN9EVbNxe23ZHfPFD0vAgOyiRL9DpDO4ctA/k3XzmbSVf8NAkRega+r75nIQ4KuEr7Y+1hRt2hFTQeurOlTEdYFUFCCSqg8a3cdVT39FBVhQP+05gV0Dpt1ACtbbHG6RaCvm6dosYdmVRJNiAVJAgSVBCkqexKQqlCFYiBCBQA4fSqWdkUaEDw90TmyLddkaMA84teoeiVPRDFnp/z3/uo3w8sFIHnHts7P1Sj87wR0Epicjr14ZGeMBQAJEUqaUBydiH4+PPu8tB0KhrdeWloY/OhAYCEMXBu1WNUNxIYU3bLELO6qqqnEk5EB1irdq32Zl25T9d5Oia6E6AY7M0/uX/OruWDfc9tWBcm8HFrECT66wQBiXX7Qnm5dDS9ekABewPqb1zdQh2xyWpBN0ot6EapBd0otaAbpZsS+l+4dfoP731vmAAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Postmark Trigger";
        }
    })
    export class PostmarkTrigger extends NodeBlock
    {
    
    }