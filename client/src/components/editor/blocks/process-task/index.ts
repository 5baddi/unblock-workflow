import { NodeBlock, tripetto } from "tripetto";
// import * as ICON from "./icon.svg";

@tripetto({
    type: "node",
    identifier: "example-block",
    icon: "",
    label: "Example node block"
})
export class ProcessTask extends NodeBlock {}