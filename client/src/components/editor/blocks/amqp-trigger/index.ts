import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "amqp-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB7UlEQVRoge2W4W3CMBCFj26QjkBHSEdIR4AR6Ah0BBgBRqAjhBFgBBghHaEVlV29PN0lDr+o9D7JEjhn+975bJ8JIYQQQgghhBBCCCGEEA9CY2bf0NaBW2uyu7UN2XSOzTyY60J2BzNbObbsH7eTmS2mhHJHE1wmCD7A93ngEAquHaHc2omCcysSXQW74g32BHfwfTEiuCoQm9vuDsEndPYpELxKjjBj0foCEXX6XdM3by3c7aOZPZvZzMzeaBzbIh9pzIuZXaG/RqNIMAq7Ur8XCHQ2kx3LC56DMQ39X4LI23zbAd88ruRHD09wTVF5p+/eBZI5g7O8w5FgXOvsZAI7PxRwS4HGIPbm8wRjBL/Sgp/QNyQYHWySmOxgJBgFeGnPfZHgDVyufET+YMEVCdo7gziCTBbGmRKlGQpCMXOnj+1L6B0JFsxndO3cjjZyjo6OnZeqGb5gqhTQS3qKeK1SwbesfB3IrF/awqu+g8Dgs5SLE37SciHiPUv8rLVp7k2wdl63tDDqgTs8lqpINWGXbSTKe9rlJgXME7C9I6V7oGAWsEzv2gzeN2TstkbCZyIJWBYKWUwtF4foKGU9TpRGdZDSdVDpDNXSVVBLt5TeucS9K6X/E3USX3rshBBCCCGEEEIIIYQQ4tExsx8PuuPnwhCIbgAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "AMQP Trigger";
        }
    })
    export class AMQPTrigger extends NodeBlock
    {
    
    }