import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mqtt";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgMzIwIiBvdmVyZmxvdz0idmlzaWJsZSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTcuMSAxMzMuOXY0Ni43YzczLjguMSAxMzQgNTkuMyAxMzUgMTMyLjRoNDUuNWMtMS4xLTk4LjQtODEuNS0xNzguMi0xODAuNS0xNzkuMXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNy4xIDM3LjNWODRjMTI3LjQuMSAyMzEuMSAxMDIuNSAyMzIuMSAyMjguOWg0NS41Yy0xLTE1MS41LTEyNS0yNzQuNi0yNzcuNi0yNzUuNnoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzEyLjkgMTkzLjVWOTcuNmMtMTEuOC0xNi4xLTI1LjktMzMuNC00MC40LTQ3LjgtMTYtMTUuOS0zNC4xLTMwLjEtNTIuMy00Mi43SDExOWM4OC4zIDMxLjggMTU5LjEgMTAwLjEgMTkzLjkgMTg2LjR6Ii8+PHBhdGggZmlsbD0iIzYwNiIgZD0iTTcuMSAxODAuNnYxMTcuMWMwIDguNCA2LjggMTUuMyAxNS4zIDE1LjNIMTQyYy0xLTczLjItNjEuMS0xMzIuMy0xMzQuOS0xMzIuNHptMC05Ni41djQ5LjhjOTkgLjkgMTc5LjQgODAuNyAxODAuNCAxNzkuMWg1MS43QzIzOC4yIDE4Ni42IDEzNC41IDg0LjIgNy4xIDg0LjF6Ii8+PHBhdGggZmlsbD0iIzYwNiIgZD0iTTMxMi45IDI5Ny42VjE5My41QzI3OC4xIDEwNy4yIDIwNy4zIDM4LjkgMTE5IDcuMUgyMi40QzE0IDcuMSA3LjEgMTMuOSA3LjEgMjIuNHYxNWMxNTIuNi45IDI3Ni42IDEyNCAyNzcuNiAyNzUuNmgxM2M4LjQtLjEgMTUuMi02LjkgMTUuMi0xNS40ek0yNzIuNiA0OS44YzE0LjUgMTQuNCAyOC42IDMxLjcgNDAuNCA0Ny44VjIyLjRjMC04LjQtNi44LTE1LjMtMTUuMy0xNS4zaC03Ny4zYzE4IDEyLjYgMzYuMiAyNi44IDUyLjIgNDIuN3oiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "MQTT";
        }
    })
    export class MQTT extends NodeBlock
    {
    
    }