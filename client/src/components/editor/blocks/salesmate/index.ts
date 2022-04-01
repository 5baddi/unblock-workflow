import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "salesmate";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAn1BMVEUAAAAYRP4APP7b3/8AOP4eR/4nTP4ALv4AJ/4AI/5FX/4BP/4AK/4AD/7Hzf8AMv4AHv51hv9idf8kSv7Z3f/Y3f+8w/9QaP5KY/4vUf4PQf4MQP7k5v/O0/+utv/T2P/L0P+Vof9vgP/Jz/+krf+bpv9mef9kd/9ccf9Zbv8TQ/7Q1f/GzP+Rnf+fqf9WbP8AGv6Ekv9/jv8+W/43Vv6Y3JAlAAAAAXRSTlMAQObYZgAAAYRJREFUSMftlNlygjAYhbOShbC4IigqIIKo1da+/7MV0LZAKZ2pXnjBd0FmzuRjIJn/gJ6enp6Hsxjjcb5MMP7OxnhSPnG3GkiIdIWBaXuIOi9F9DKDyLNNgJWOoAx+VQ8e9whBIpcNnaC5cMcTV8wRQcYBYJGvHodRu7tWI89ykmS3ACtnOJwxqGuaDtks2TorsDgVUUaZ3yoroZx99WVScM7luhL5M2Vbbe5qEw8a0Vv8IxrEmwl4Ig7hbrBvZMd0uGlE+8EuNJvu0rAIs6e17N0mxNjWoumZEctYNmRCR1Sba9Xo1XYpdes78y35RlR3p0KDEI5Y9V6kTvPIqp53pIptGp/WZV7KKmrK1Arb5Ds+m9x1YP+8Kr+8qidiFR+3zcEIjs3BCIP2wbAEk2ZtJLngXPrVP5ZMWKANn1GoLmnqFGWQDCWD5OJey+D0ZxkAE/JMJ4jfaggJB9xq6Bxdayjj0OwoQO+rAEfp8rMA52JdFmAmg+7qxR3VuwA9PT09j+YDz6cfYkXa6FEAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Salesmate";
        }
    })
    export class Salesmate extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    