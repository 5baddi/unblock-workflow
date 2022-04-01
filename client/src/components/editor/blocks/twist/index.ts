import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "twist";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABm1BMVEUAAABHZdctcOwtcOw3U6IucvAucvAuc/EvdPMyePsubOkwdPUWN3MHBxEuce4tb+otb+srbuofNnQuce4AACAwdfYvdPIucOsvcvMtcOsucOsybuwucescOnUYOHQnYs0AAADg5/sxdvcqad0uc/QucOwqYs4ub+svc/Mtb+wpad4xdPIqaNwvc/Evc/Mub+stb+otbestbuszcegzZt8RNXJdk/oIZevr6+8BRO////8fPHTZ3eEtcOv////9/v8ucOs1cuz8/f8xces4dOsycuz6+/4rb+tYi+/4+f4JYerK1vieufQcZ+sCXurv8v0vdPQ6dOsjbOsga+sbaus/d+zx8/0pbusmbevl6/zi6PvCzfakvfWouvSLpfFjlfBdju9VhO1Kg+0tcO0zdOwabOsEYuoMXuoEWena4fnT3PnN2PjCz/jI0/eRq/GEoPA9fe0LZuoJZOry9f25x/WvwfWWtPSIr/SApvJomfBQiu5gie42euwOausVaesVYurz9v1yp/KbsPF2lu9XkO9wku5AfOxGeewAU+n86hMfAAAAPXRSTlMAA/v9Bfzu/f32ZvpPB/735JMQ/Aj+6ruvkItrWEI/PQj+/sSza0Lqv7+/vb28uraIW1QtKA7++sSzbFFD8rdfNgAAAydJREFUSMftllVz20AUhc1Oww4zJ23KzCtphZGZ7ZrjmMLMVG5/dgV21yNZdmb81GnO6EU7+825d3fv7tXd6j+W3jTVMzYy2N0FuroHR8Z6Okz6m5J63bjtgcXcYu0EAHRaW8yWR7YJcbixTLqF2RlgMAIkowH035/UmRr79s23eQ1AKYO3rbVP3wDVtc+ZkWm1u7F3qF2nr8uO3kGuKvc7rSKtyb6wCKw2PfCyDj1q6QX11DvQqmn8AcWsGXm7vjbb8e5NxMcQgKhHD3WYaib8fjp+lN6hXEECUpq0ubWm8UeSJXGMjx38CPx2R7RgY9tkrcDfshgrf+HNVIgDkjgV7H1Yw3j89VJFmcxSiGAgwwVcLldAhiimknX/hMraZIPQJ350KBT65YsW3CV37nzrMH6wC4UAaLu9so4rwyp46p60TQwkrvaKpcvst2R81cNiGLZW9AEKulNb+Yr14w4l3GMRjzSxc/olsbEWC/M4jgukZz3xPQ+jIOPAwlTZ2mh5pYSfWYVxuLshLDiOkyQpoOH4tsseoH2Fs2mWxD4xlbjNz5XwcIswTNsdEizg/PrXi1KBoiFXTHkwYRTBLU+V8KJZhN0OKVjHcfqnyxWFDOWKnMQwOYO/sPWJEr67IjmLcLLo5mgoTKXowvY0RmKCqp07u5WwAZRhnF2O+qR50H+dJAVMCYMuJQwk2C3BQWEawQQvnDEJlWEPKhiDlrOw0OdBCoCoO7WPk2VUzNoZBMi5Zs57myy/v+wnAJVbF4mySOzztp0CmjkvWqU6yGayOQ4AijuWI5blOdwJMgCg1VbvsyhIS7XM+J3IFw8HL6HMoX1WnTAkqhomV+2VCkUnTH22ERxwymHjgrDEFYoZnW1FVamcSWw1ybPkKS0NaleVyaYMWxC7uVva4vmsnLF2PevHZwyKsPmNdISCgbOjnHw81DcJ0qwXzWD8CYxP79EiBSOadxiyXmhDS0aAk7Xla5qTfxrfnnrdvBkgmsvnqYb3NpKpb85QRRNEvRdD7d1+47eq+Vey+fe5+c6gcU9iRj1Jk91Q832YdgdoVXWATfSet/qX9QcIL4QizcntjQAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Twist";
        }
    })
    export class Twist extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    