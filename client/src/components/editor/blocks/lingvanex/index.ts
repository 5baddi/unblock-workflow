import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "lingvaNex";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADaElEQVRoge3YzWvUQBgG8P5h3d2keCseVFBE8SR48ySI1ura1q1Va+13bbu1FbRgSxcUURCxoKgHv2iptZ682KIXwYNlk5l5PCTdTbIzyeRjkzXmhfeeH887kzdpw39WbUk/QNyVgdNeGTjtlYHTXhk47ZWB014ZuFnFGLCrMXz5ybC6RbG6RbH5g2FXY6AsrqeIAdz9lECZIlBvE6jTjp4l6JijUMsUapng3DPa7MdpDpgx4OQ9AnWcQJ0gUKfMdqJn6+haz1OcWKEgTbJHDn68TqGM6FDGCJRRC3rSApdAdyxQPNyIftYjBR+a1aEM6wZ4RIcyakGPu6DLRvPQBxajjToy8P4xHcqQCRahJxwj7jzT0w70HQPduRAdOhLwsSkNyqAJHtKh3LLAhzlJW9GcEeehDz+IBh0a/GSdQrmhG+0HLRpvXtLmeC+uhUeHAjMGFAZ0FK7rvtDKmMQN7kTPGWgW8h4LBT5e1g2wG3rIB9qZ9Ewj+shSuJRDgQslDYWrIdCjEklz0ImAzyyROnivTbgNfVMw3rwb3AVtfW2dfkTiB+d6NANc0lDoN9sL7YT7QU/X0epczGDGgHyPhnyfBS2btMuIS6FnCNQyBQ042YHAu1WGfK9mdJ9k0s5z7XWmRa8t80zv/A52XQcCb24zI+FeS1+xJB0E7baKcj46Xn2LEfxijSBf1BrQtvHul7zBBejaa0uQdOVTsJkOBy46UvZAeyY9IrGKJgHe+M6Qv6jV0ZcFaD9n2s/+HTf4T9UEy6JlFxQfq2jlY4xgyoBcd9UTXbvISo1JS6F5Z3oiATAAtHdZwFZ0UZA0D31N4iITJF35EDP47F3dnrJftGhB4S0nnJ8JsYMBINdVRe6CHFp6QZH86EgEfHSwaqAlx7vxTEvu35x39fL7BMCUoQZuQF8SoJ03uPVMy6KTAgPA/ZdEjBYlzUOLkhYsKImBAWBfT1UuadH+7bWgcJJOFAwA+S47WniDi/Zvt6Q5r63EwQDQWZJMOsh4O9ArrQAGgPlVlzMtk7T148MFXWkVMGD8ETk4IDHeov2bg3auoi0FttapSQ3t513QnHe17TIToJfftSh4rwgFdn4xPP9MsfSaePbKG3svv7X31+0Y/3j8y5WB014ZOO2VgdNeGTjtlYHTXhk47fUXaWi/qh9Sc0cAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "LingvaNex";
        }
    })
    export class LingvaNex extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    