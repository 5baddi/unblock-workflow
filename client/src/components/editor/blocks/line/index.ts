import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "line";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA9lBMVEUAuQAAuQAAAAAAugAAuQAAuQAAuQAAuQAAvwAA/wAAuQAAugAAuQAAuQAAuAAAuQAAuQD///8AwgD9/v0AswAAtgD0+vQkuyQAuAAAxQAguiAAsADO6M72+/YmuybS6tIcuhwGuQYArQAZuhnC48Kd1Z0UuhTp9emn2adhxGESuRIPuQ/d790LuQsAugD4/PjU69SX05dYwlgyvDIAygAAvwAAqgDi8eK437iw3LBUwlQ/vj/s9uzm8+bX7NeHzod0yXRDv0M6vTrJ5smT0pOBzIF8y3xmxWZOwE7j8uO94b2q2qqh16GLz4ttx21JwEnE5cQsvCyCXsYQAAAAEHRSTlP8yAD8xbGAOAQC966WlUhGxBaCEQAAA+tJREFUSMed1wlX2kAQAOAYQG29dtmZ3FyiATkKgnKIImDVaq22///PdHYTagmJgOOTQODLzmz25e1oOsWuru9s76W31op0ZntHEgrCX3T9aOvStrNrhm1fbh0qpsmXAzuraSlt/cja+1LLtDMXmvaNbRDftNRFRqa9q+9ffGUbx9eLA31X0w/tFPtEaPYRpb2V1T6Fs1u6tnOZVG+9XHScYrmZVPfljrZtxwzcLJpOCREBEK26aZZLcXlva5nlkv08I2a9PT7c30/ORvISvllnkUjZe1o6WrJvIliTYbuSE5xCGDde9ZFORbmWTWuR+SrlETqDCiklRXjsV2fEozMWweUaXN0JxUI3f2sM/oBT/wibiMOWGjASQhA/B6uYjPPw1uA8kHHcY+gkYLKvRkCT+M2IdCw2YSKUTeb8eoTFOFzETk7aj/UNs+rLuFnCG2lXaQ+cZZyHgbSr9Xcwo9jHjni/qeo4fy9fRRCqbFpJEWzCSdzAIubMKZiLuG51g7tU8YKlaXgNfu2pWWh4hhi32+1x4UnhBpZLC9iBX1wldd77zgX9Pfd+8Jceoyu1Zj3PABnHrwqLDvoLWE2Xyun4XOET94xXER8Fz3XcgmE5+XwXb7kIpsxZwCa0YzDM4JQbVxJjg7daIih6APkFXMZ+HPYZePxN4efGuP0U4N8R7OPTMv55fHsP3f7jccHAOrhw/BjguwguYuM/LOb43HDwTKaNrDubsnBSTyLYBG+OTznFfGTugVWDsGYR3ughmJHZHobYfSh43h3/rfAvToWPCDMcjAteP8C34ETSfghXrouuC72bu16HV3u3dO4VXM9ABNftnamfGCOsLeAmY9dqoqrfrn78uOpeF+hqAzilM5UrNs5Np/JssH48cJbWtsqbi5wKOra4MFQlrZz8lyHUyA9YjOBmuLiXQ0Q+tWngCKahX5bwcqiVXY55DEFhnSfJC+TZMq5ZfmWFVgvEiX16FnF6/bGmgrHWjMXMwVmfC/GBHaPls3hMGk848SRbQKvMkjArMritSC5iKNVLNhmzpgnWC3F1gYitQs1nyVilXgLrl2eE4t0a92A22QrMSmYJ4M/90Ov/P2xjKu/vSkzcMS0AwIlBLLBDRJOthSlqtB3qundcKFqZQLnM1sZs/nSR9tmSKW+Gwyfq0wSYw+JxOgnXrRnNuVFFzDdZLE5re0n71hpOjdzzCGpO/PcpO6O2j/FRsjojwHwpcdu7nbxxJY1q25e8cf1wy+zXVmyZ9SPKe/Ogkg9lm3DwuTZhX98NGpTUpg2KRg1K2BrtU2u0fqRka3QQtkakDzdtyo4Ue28HM+u2g3v/2sG/I+cHGDR4cusAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Line";
        }
    })
    export class Line extends NodeBlock
    {
    
    }