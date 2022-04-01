import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "rabbitmq";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAmVBMVEX/////ZgD///37ZwT9ZgL5Zwb+//3+/PT/+O7+/vrxgzb+/vf9/v/1aQr/9en5agr88eD9ZgP8//78+vL6/vzwrXfycx37/Pb78eX67dj3aQn99uz0bA/9ZwH6/fr+/vL559L7ZQX29u733sTzv5nsl1fvlFDxein2+/P44sj0yJ7wx530vY/yqm7ti0f2hjrqfi34cRjycBc4bEPfAAABMUlEQVRIx+3TaW+DIBzH8SL4rxTsBrJqPXofu6/3/+KGYoxLGiVky2bq94HJz/AJj5iMfcszH5s8yWIFHmVQ/wAFeq6kDeYserrTHYJaR8/lfFzZYLl6RWXknVYzXlRLHGPoxzD1Kyy2QYUTZEqVsscIz8vJE2xmziywV2OC56An3CLTDeUjHvE/wlJP1WAm7TFKM6qP06S5GeyxwBsOGu8Lg3Fgj3XnXcxYsiD1PN6zVgqgEws/DEO8rRchadjqvOvGqEBEh5pIq/QkO3BPxQzcMZ557phcBRa+DuPCBYu3bKqLXrYOGCeMcwCIcwfsR+Y0XfwR9gaGyWYNZRvsgMXHfql7+BQO2JDhPYzfx2srLH4ewzQnFtg/waWb6SEVuLd8eRFLFWVBX1lM+WRscH0B1DQddIsrfFgAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "RabbitMQ";
        }
    })
    export class RabbitMQ extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    