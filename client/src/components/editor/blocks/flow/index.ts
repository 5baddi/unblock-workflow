import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "flow";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAyVBMVEX///+q3P8yp/j9/v8xp/gAn/c9qfii2f+s3f+o3P+m2/81p/ik2v+t3f84qPgAovj1+v/q9f87qPgAofjx+P9Bqvj4/P8AnPff8f+f2f/b6v2kzfvu9v+44f+FwPrU7P+84//j7/7R5fx8vPlYsPgipfjO6v9Fq/gppvja7//H5v++4/+14P/H3/xhs/kupvgapPjl8//J6P/A5P+x3//B3Pyr0fuayfoSpPjX7f/L4fy42Puy1PuOw/p3uvnU5/1vt/lKrPgJpPi1dHKnAAACx0lEQVRIx+2V13LiMBSGj5BluTfcMJheQ2dZwqZn3/+h9mDZSS7smL0O/wwzskefz3+KBNx0048SFfpY/w9ZurwKxV84GK7XD0nn8ujGcbz3aYHXscn92Gaopjz67UMnbXFDOx5cQdegI8Ymlozytk0WPFGICVE0zvtuLXvCgLLekC7SvWAbbQbgElVRFINPRfAqlnYj2WtIjQ/pgW0PwVVVguFby+9Y6EazHC0kydvmK8RcQdrkfVoNt6NZjqLpYmXN5y7c5fRdJTtkQRHWkzFzKY/dHIFDVHKhWzHQUjbc7Kx8e6OJrdrKeewgWsMUQ6PUY1ge+HcUSIJlk2673bWYJYJb9hv4GrlI4Yvyir/ZVsZ67DlrqX+yJV0kwRJYGhmtpbQs8CBnZXYP4PZ6e4AHW+Qhszb8Eb6J0QFa4prJmcfzhmJxUakPT0yWMt8v4BrVvrFPuDELvIZey1QUk6fgvM8vxvX5zAmJKuBDme1u08vKM++AKfrCB/AsQusTF46asP0LSjSyvcu23Zh+VLYH7dz33wGsxFutfyU8xaRFs7edAjb6VbZFeo5KCocJCyycEpyxLy+homBIn908Z5QD9xGO6pklRavQTlm110wWbR4WA6EYd0BPlm2Ph+DgBwUcl8HuRNc/ByL3OAXwkwEFJ9WIkOpDRdIIW7sNxfxy8f4e44QLE9k85eoTKXyL4yucczNdEV58TeH7iqvopSkj7WFpRbPEdlXTVKV4EI2qOBoi64fLgJIyaeJYVJxoXcJZfPdhyUtoRVwkFfQJL08J750u0LSEbvXgOz2yXWCJI71sEeUraWrGoubWT8bRRJZn7JlCT+OqUlSdaK2VC1BDh49jxmydbRLwD4RzTUUZ3FgtKNBaGsLX9st4dp48AjjxITUV89ifuhQEW4sj1ek4YbaiYbGAa0RL/tLpdejn7ptu+rn6B6F7N6r/f4/gAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Flow";
        }
    })
    export class Flow extends NodeBlock
    {
    
    }