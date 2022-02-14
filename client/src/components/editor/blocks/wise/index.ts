import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "wise";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yIC0zIDI1IDI2Ij48cGF0aCBkPSJNMi40NzEgMGwzLjI4MiA1LjQ5NkwwIDEwLjk4M2g5Ljk0N2wuOTM1LTIuMTk5SDUuMzk0bDMuMzItMy4zMDItMS45NC0zLjI4M2g5LjA1MUw3Ljg4IDIwLjk2NmgyLjcyMkwxOS40ODYgMEgyLjQ3MSIgZmlsbD0iIzAwY2RmZiIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Wise";
        }
    })
    export class Wise extends NodeBlock
    {
    
    }