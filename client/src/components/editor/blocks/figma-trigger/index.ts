import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "figma-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAwIDMwMCIgd2lkdGg9IjE2NjciIGhlaWdodD0iMjUwMCI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzBhY2Y4M30uc3Qxe2ZpbGw6I2EyNTlmZn0uc3Qye2ZpbGw6I2YyNGUxZX0uc3Qze2ZpbGw6I2ZmNzI2Mn0uc3Q0e2ZpbGw6IzFhYmNmZX08L3N0eWxlPjx0aXRsZT5GaWdtYS5sb2dvPC90aXRsZT48ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPjxwYXRoIGlkPSJwYXRoMF9maWxsIiBjbGFzcz0ic3QwIiBkPSJNNTAgMzAwYzI3LjYgMCA1MC0yMi40IDUwLTUwdi01MEg1MGMtMjcuNiAwLTUwIDIyLjQtNTAgNTBzMjIuNCA1MCA1MCA1MHoiLz48cGF0aCBpZD0icGF0aDFfZmlsbCIgY2xhc3M9InN0MSIgZD0iTTAgMTUwYzAtMjcuNiAyMi40LTUwIDUwLTUwaDUwdjEwMEg1MGMtMjcuNiAwLTUwLTIyLjQtNTAtNTB6Ii8+PHBhdGggaWQ9InBhdGgxX2ZpbGxfMV8iIGNsYXNzPSJzdDIiIGQ9Ik0wIDUwQzAgMjIuNCAyMi40IDAgNTAgMGg1MHYxMDBINTBDMjIuNCAxMDAgMCA3Ny42IDAgNTB6Ii8+PHBhdGggaWQ9InBhdGgyX2ZpbGwiIGNsYXNzPSJzdDMiIGQ9Ik0xMDAgMGg1MGMyNy42IDAgNTAgMjIuNCA1MCA1MHMtMjIuNCA1MC01MCA1MGgtNTBWMHoiLz48cGF0aCBpZD0icGF0aDNfZmlsbCIgY2xhc3M9InN0NCIgZD0iTTIwMCAxNTBjMCAyNy42LTIyLjQgNTAtNTAgNTBzLTUwLTIyLjQtNTAtNTAgMjIuNC01MCA1MC01MCA1MCAyMi40IDUwIDUweiIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Figma Trigger";
        }
    })
    export class FigmaTrigger extends NodeBlock
    {
    
    }