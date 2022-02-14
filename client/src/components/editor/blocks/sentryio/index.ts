import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "sentryio";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iY3NzLTE1eGdyeXkgZTEwbnVzaHg1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA0NCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzNTIiPjxwYXRoIGQ9Ik0yOSAyLjI2YTQuNjcgNC42NyAwIDAwLTggMGwtNi41OCAxMS4yN2EzMi4yMSAzMi4yMSAwIDAxMTcuNzUgMjYuNjZoLTQuNjJhMjcuNjggMjcuNjggMCAwMC0xNS40Ni0yMi43Mkw2IDI4YTE1LjkyIDE1LjkyIDAgMDE5LjIzIDEyLjE3SDQuNjJBLjc2Ljc2IDAgMDE0IDM5LjA2bDIuOTQtNWExMC43NCAxMC43NCAwIDAwLTMuMzYtMS45bC0yLjkxIDVhNC41NCA0LjU0IDAgMDAxLjY5IDYuMjQgNC42NiA0LjY2IDAgMDAyLjI2LjZoMTQuNTNhMTkuNCAxOS40IDAgMDAtOC0xNy4zMWwyLjMxLTRBMjMuODcgMjMuODcgMCAwMTIzLjc2IDQ0aDEyLjMxYTM1Ljg4IDM1Ljg4IDAgMDAtMTYuNDEtMzEuOGw0LjY3LThhLjc3Ljc3IDAgMDExLjA1LS4yN2MuNTMuMjkgMjAuMjkgMzQuNzcgMjAuNjYgMzUuMTdhLjc2Ljc2IDAgMDEtLjY4IDEuMTNINDAuNnEuMDkgMS45MSAwIDMuODFoNC43OEE0LjU5IDQuNTkgMCAwMDUwIDM5LjQzYTQuNDkgNC40OSAwIDAwLS42Mi0yLjI4eiIgZmlsbD0iIzM2MmQ1OSIvPjwvc3ZnPg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Sentry.io";
        }
    })
    export class Sentryio extends NodeBlock
    {
    
    }