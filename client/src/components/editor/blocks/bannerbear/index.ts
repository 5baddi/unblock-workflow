import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "bannerbear";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAArlBMVEX/1wD91QAAAAD/3QD/2wD/2gDmwQD2zwDpxADGpgDzzADwywArIwCtkQCqjwDfvADduQDBogCylQCTewC2mQBKPQAzKQANCQD40QDQrgAeFwD60wDtyAC7nQCagQBWRwA7MAAkHAATDgACAQCfhgCKcwBOQQD/3wDVswDKqgBqWABFOQDivgDXtQBkUwBBNQCnjACNdgCFbwB6ZgBzXwAaFAB/agBeTgADAgCCbQCn+cgBAAAD70lEQVRYw+1YZ1fjQAy0ZiWn2DHpnTRSSEg5Qr3//8duLds47wovG/hwHzI8wLHwRFqNZtl4V1xxxf8LUnwjHRsL/i5KYi7WoqhWZKZvSc/4CygWvvl6kuRxDRatB1jU2KMv1xsBmG8L5WoDQMR0WVpZaWQqwKRqWIRNDx1UTBYhh2TZY6GErwS0hoYUq+1shpJJImL/6Nz8pLRvFGJGYh/oF81HulXM4HMckfLjfn1e/cRFAJFlsV8b4F75FLSqARsN8AhAIHQW4Q3aGMWEpgn8MHQaewSacYgXCDXZszDHuChEMuxgPPBOCSWY4n1oY7xtIRI6s8cyHEhaVk8TzGPmFhhxHOwGcr5sxKOkI69/JEFv0FLJE3IRov3mBlBl+i1i1kBDG+0ocW32T6Hcv7LAHiheMDBkfqSSibnEQi9U69p6R5AUDtgk7mBkUA6CArHhmLPQwkF17wRNpGaI2LupH98mYXjYL5q+MOl4l4wzoTxhUhar8mec4Fhk7f6TOLfEV71xD+hP+7OOxaw/fdG+y2uiHBfo1O3YK4SYArhD+iPEG+lqNJ1rfsa469k8+zjB3TumgUgQ4vkCEc6NbfUDOnfI8aJmw0dXKZKpxSLUjobIGO1FGPdXozWXmtWmHqzWyBuMMcVdzveU5P+OBZOTqlvxE/psx9KkCNGySkpWuOWgbfVY3BpK9DPBdDoDZlY0bwFTNpY3Dimq622ZEvLyI4B3WMy76T3T0zd0yLCBZVYSCVfnY9ztf/jsZbeGfTScFnGTO5dHxCsf7WDFRF7uYRuHBCVo67aX37CEZY9OS7DvIOTSk8xPkk0zJhS9TBe57tIVu+a5+YsnlBHqi3Qj0P3LYU5myWgR37d2nBHyerlNb1ddZsUWpF6ol3PMVwNjTaIsA/OKZqZOoO5AGOkgpMa9LBoZ2efZVNvYGcp0EzkQVvCQEnrdJR5GT7D4OWrjmTI3mjkRNhEOhVLrHsOiGcFiE2R3ty4ea+vMRUHcXVdufcM3zUqPhHIdlMwFOtSq9UihRwv74hIdqlHno0oxkl8ne6Kusou/HqxuPt0hFk72tf5Ut7rXr13sy+u29F/Nf5qH9e6uDbs47CeTQGbk4K8K3Zxw8/dnaNVDmr9LijtgEjD9LeTjRUfQCbruy+CP0yLRyg+TA5UrpKGHMktxSid6QGuI5wxLYxlR6RqhD4gpz229DQ27M0oFwPI2YJMcHo0M620AFXHmy4b4fgkgXNzu/GHRv2++dgAs741HFx/mu/UDFP0+FId6N+vHhUkWSscJUkyOpcLF6eVtlXK1VI+ieqlalrhDX//IRtgoWL7pwxv6gHfFFVf8p/gFQ+05RiEQxa0AAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Bannerbear";
        }
    })
    export class Bannerbear extends NodeBlock
    {
    
    }