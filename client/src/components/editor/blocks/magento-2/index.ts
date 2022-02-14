import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "magento-2";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjMwM3B4IiB2aWV3Qm94PSIwIDAgMjU2IDMwMyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Zz4KICAgICAgICA8cGF0aCBkPSJNMTQ0Ljg1Miw5MC42NyBMMTQ0Ljg1MiwyNjIuODYyIEwxMjcuOTE5LDI3My4yMTEgTDExMC45NzMsMjYyLjgwNyBMMTEwLjk3Myw5MC44MDMgTDY3LjA5NSwxMTcuODE5IEw2Ny4wOTUsMjY1LjA3NCBMMTI3LjkxOSwzMDIuMjkxIEwxODkuMjU4LDI2NC44MDkgTDE4OS4yNTgsMTE3LjcyNSBMMTQ0Ljg1Miw5MC42NyBMMTQ0Ljg1Miw5MC42NyBaIE0xMjcuOTE5LDAgTDAsNzcuNTAyIEwwLDIyNC43NzYgTDMzLjIyMywyNDQuMzQ4IEwzMy4yMjMsOTcuMDYgTDEyNy45NDUsMzkuNDY0IEwyMjIuNzU1LDk2Ljk3NiBMMjIzLjE0Niw5Ny4xOTkgTDIyMy4xMDQsMjQ0LjEyOCBMMjU2LDIyNC43NzYgTDI1Niw3Ny41MDIgTDEyNy45MTksMCBMMTI3LjkxOSwwIFoiIGZpbGw9IiNFQzY3MzciPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Magento 2";
        }
    })
    export class Magento2 extends NodeBlock
    {
    
    }