import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "medium";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAyVBMVEUSEA7///8AAAD9/f0QDQsOCwkqKSguLSwMCQckIyK1tbUTEQ+BgIDJyckfHh0VExH8/PwrKyocGxrS0tHCwsKrq6smJST5+fmwsK8iISDPz88aGRjz8/PY2Ni4uLjHx8fAwMBXV1YsKyooJyYYFhXv7+/o6Oicm5uJiYg4Nzb19fXg4ODMzMy8vLypqKigoJ+FhYV4eHdAPz40NDPq6urj4+Otra2Xl5eDgoJycXGop6d7e3pra2pkY2NMS0poaGdgX19TUlIFAgB0ugV+AAACqUlEQVRIx+2VaXOiQBCG6ZcZhEzkMqKI13rEaBI1Mcluzj3+/4/aGYFBI6nCL1u1VT5UQTHdL93TM/QYJ078K7idwW3+2cZsXmrTBDWNtW8R3C21aQTDDgnbyynEDt6B1rPddv8so79CYogiZxdvha0NIT6LXfSo4A3xTmALDdIMtakgAR6pZW5p0QBBkbiLby3Tl+PyRk8ID/NmDn4vyKSU1je4OjkLbW1owvJKCmaP8Eqpk7z3dWjhebgkMx0+Q01qy9Q1rLS4O8ckSynClR6+g8OMUjUL0NNuSx16jI4e/VEulvAAdfIztwewiVCfVOXS4vOvxRZuKMOk7xiz9IuqXNXE3Tz0dVpvMZHl6lYS16neyyu7RiQHVbm6dTIriQfr3LEnxUJEslz1ZkVxI1tUyTNiFqpynVcXv+SedVj2SJZrirPK4vl062qqPRqr3XWLfkVxBzqOVM3V7nquLG4AH4ssdPc+QUcW7oi0N7jIfZ/wq0WzY8Q1vOcbZarKtXGPEDsWOrnz7JqGmB8jdnBHGQtTrvbmCHEkIv1rktrio8riDiJj9/dfwbKOSdvzQjzq1cKkmniMgYzsCGZhlokHsHhQQaya2I2MPJI9j4uH1P8VjlFBLGTg9xb5dwhsFkD+SPJ6VF1ap/11D2MunEvyaXovHULcd8k06QUBZzXdiL7snhN14Pjb/sMTe4Rb+bL4QMiSuNg0TWxYed+9VS5SUkeU9ky6wZiFbr7XFTPU2OGEVYF9U+GrM0W+D0hNccIxJF9ZlEk1VafkpFqTRnnE+EkPslwhGrTH8mDaLMZ5e9lMWbav4BoJVmu4HubDi+GFZjh4QqhlpYc/Qm4wOeJyw/uDTyQlk3ZHVk4Qc6EOqe1DBLU9IiZK1pkXsHQkfdj7cOPEif+Bv4lHNkeJpcr4AAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Medium";
        }
    })
    export class Medium extends NodeBlock
    {
    
    }