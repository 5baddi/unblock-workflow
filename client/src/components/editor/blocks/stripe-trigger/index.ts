import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "stripe-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSI1NCAtODAgMzYwIDM2MCI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzYzNUJGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxNCwxMTMuNGMwLTI1LjYtMTIuNC00NS44LTM2LjEtNDUuOGMtMjMuOCwwLTM4LjIsMjAuMi0zOC4yLDQ1LjZjMCwzMC4xLDE3LDQ1LjMsNDEuNCw0NS4zCgkJYzExLjksMCwyMC45LTIuNywyNy43LTYuNXYtMjBjLTYuOCwzLjQtMTQuNiw1LjUtMjQuNSw1LjVjLTkuNywwLTE4LjMtMy40LTE5LjQtMTUuMmg0OC45QzQxMy44LDEyMSw0MTQsMTE1LjgsNDE0LDExMy40egoJCSBNMzY0LjYsMTAzLjljMC0xMS4zLDYuOS0xNiwxMy4yLTE2YzYuMSwwLDEyLjYsNC43LDEyLjYsMTZIMzY0LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzAxLjEsNjcuNmMtOS44LDAtMTYuMSw0LjYtMTkuNiw3LjhsLTEuMy02LjJoLTIydjExNi42bDI1LTUuM2wwLjEtMjguM2MzLjYsMi42LDguOSw2LjMsMTcuNyw2LjMKCQljMTcuOSwwLDM0LjItMTQuNCwzNC4yLTQ2LjFDMzM1LjEsODMuNCwzMTguNiw2Ny42LDMwMS4xLDY3LjZ6IE0yOTUuMSwxMzYuNWMtNS45LDAtOS40LTIuMS0xMS44LTQuN2wtMC4xLTM3LjEKCQljMi42LTIuOSw2LjItNC45LDExLjktNC45YzkuMSwwLDE1LjQsMTAuMiwxNS40LDIzLjNDMzEwLjUsMTI2LjUsMzA0LjMsMTM2LjUsMjk1LjEsMTM2LjV6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjIyMy44LDYxLjcgMjQ4LjksNTYuMyAyNDguOSwzNiAyMjMuOCw0MS4zIAkiLz4KCTxyZWN0IHg9IjIyMy44IiB5PSI2OS4zIiBjbGFzcz0ic3QwIiB3aWR0aD0iMjUuMSIgaGVpZ2h0PSI4Ny41Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTk2LjksNzYuN2wtMS42LTcuNGgtMjEuNnY4Ny41aDI1Vjk3LjVjNS45LTcuNywxNS45LTYuMywxOS01LjJ2LTIzQzIxNC41LDY4LjEsMjAyLjgsNjUuOSwxOTYuOSw3Ni43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0Ni45LDQ3LjZsLTI0LjQsNS4ybC0wLjEsODAuMWMwLDE0LjgsMTEuMSwyNS43LDI1LjksMjUuN2M4LjIsMCwxNC4yLTEuNSwxNy41LTMuM1YxMzUKCQljLTMuMiwxLjMtMTksNS45LTE5LTguOVY5MC42aDE5VjY5LjNoLTE5TDE0Ni45LDQ3LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzkuMyw5NC43YzAtMy45LDMuMi01LjQsOC41LTUuNGM3LjYsMCwxNy4yLDIuMywyNC44LDYuNFY3Mi4yYy04LjMtMy4zLTE2LjUtNC42LTI0LjgtNC42CgkJQzY3LjUsNjcuNiw1NCw3OC4yLDU0LDk1LjljMCwyNy42LDM4LDIzLjIsMzgsMzUuMWMwLDQuNi00LDYuMS05LjYsNi4xYy04LjMsMC0xOC45LTMuNC0yNy4zLTh2MjMuOGM5LjMsNCwxOC43LDUuNywyNy4zLDUuNwoJCWMyMC44LDAsMzUuMS0xMC4zLDM1LjEtMjguMkMxMTcuNCwxMDAuNiw3OS4zLDEwNS45LDc5LjMsOTQuN3oiLz4KPC9nPgo8L3N2Zz4K",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Stripe Trigger";
        }
    })
    export class StripeTrigger extends NodeBlock
    {
    
    }