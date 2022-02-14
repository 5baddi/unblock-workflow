import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "s3";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABDlBMVEUAAAATbrMSbbQTbbQSbbQTbrQTbrQUbrQTbrQSbrQTbbQSbbQSbbQTbrMSbbQTbrQTbrQTbbQSbbMTbbQSbbQSbbQSbbQTbrQTbbQTbrQSbrQSbrQSbbQSbbMTbrQUbrQTbbMSbbQSbbQSbbQTbLQTbbQTbbQTbrQSbbQTbbQSbbQTbrQTbrQTbbQSbbQSbbQOarITbbQUbrT///8KaLEQa7MNarISbbN3q9MFZa+81uqfxOFyqNIbc7cUbrWNudsvf7wkd7m10ehin81IjsUIZ7H7/f71+fzw9vvd6vTE2+x9r9VrpNBVlslOksfR4vCnyeORu9uCsdc+iMI8h8Ho8PfL4O+ry+SSvNxnoc6vyMA5AAAAMnRSTlMACARbK/r177Z20ZlGk1HYxb9oYiQVEPfyy41LHBnr6KtlQTsvDOPeraKBem43Hob+sqyldq4AAALoSURBVEjH7ZbndqJAFICHKh1EsPfek4ygbjZuYkmvm+3v/yILKgITiPhrz9mT7989zuctDlfAB/8QLE9WCTbbOVE4uVkqFktNmVNOOlmWqJJ5DITTqKkiI9MwBFpmRLXWCDJxgedicC8xjhdwtFqCg5HJEL769TY8iLbuunkeHghf2MmkcqiskO6wJPowNy15hyZkDnEzgkfFk9a4mVI0s8RYw066mZNEzu68wiuxPb+ywlfsbnNE0lN1WtTW30IKfZHhYimK8joUlYpxjNgXyLWj8Wlv3ck0pMuEhm27wAr1qkSofdairxJStV7AtnViGlGmYTrpbToOLYpMNlHLg1DytUSWKU6sk3HfDc3uumpl2mIvkauRQ72BWTT0IVnLJXpiO9PaTeQIeJGgBdJmiqbTaZpO2QNAkHxy/aBbQtd9sn7YJdGBjw5EMD45jN/IHeCHhQhP99MN9ysTIrCILCFDmXweOfw2EDclIbLWCpXPUbmlAQQluqwAFD66zAOURHQ5AVBIKqpMkQAFa0aVmxh4QzmqXAZvYcPkr4jMBsgC9DG9O91w94DcTyFA1pAF+MUBXYBagNyIw0jEA/8nxWiyCIJQvU+jGSqrgXJ1s6JMczW9X859UzIn7uquBsq6DC2O5y83o9HV86Nrm7PlfFeJrINAmPXBxWjNzcrYtfF0tdwFDAjmyPrs8mG0ZTHbZVuMnmcTZOuiSHZzL458893YJn60ojMndS5ELtBW1acjh9XltuM7K7jdTpAuhMg4B034y3Gv7cxuI6+biMNBCLx19MyRTzc9j+c/1+HtxRjdIug2ceu+ftykMqa+hysRKg8oy75YXNmJlnYiO/zhtPHNqoQahMp52a5z9vR6/ufCgFt5erZhastyPlTGy+vzxrFpuPdr7LDeIjgIpQv30AXhDON7nuUheAesEi+GmcV4BQPvg9crWYaLoS/KTLZSx0EUsAI5yBEq2+t2e6xK5AZkAQP/D38B/zR2KYIltgQAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "S3";
        }
    })
    export class S3 extends NodeBlock
    {
    
    }