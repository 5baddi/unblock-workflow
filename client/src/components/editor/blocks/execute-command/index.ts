import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "execute-command";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtNzhjMjdhOWE9IiIgYXJpYS1oaWRkZW49InRydWUiIGZvY3VzYWJsZT0iZmFsc2UiIGRhdGEtcHJlZml4PSJmYXMiIGRhdGEtaWNvbj0idGVybWluYWwiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXRlcm1pbmFsIGZhLXctMjAiPjxwYXRoIGRhdGEtdi03OGMyN2E5YT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0yNTcuOTgxIDI3Mi45NzFMNjMuNjM4IDQ2Ny4zMTRjLTkuMzczIDkuMzczLTI0LjU2OSA5LjM3My0zMy45NDEgMEw3LjAyOSA0NDQuNjQ3Yy05LjM1Ny05LjM1Ny05LjM3NS0yNC41MjItLjA0LTMzLjkwMUwxNjEuMDExIDI1NiA2Ljk5IDEwMS4yNTVjLTkuMzM1LTkuMzc5LTkuMzE3LTI0LjU0NC4wNC0zMy45MDFsMjIuNjY3LTIyLjY2N2M5LjM3My05LjM3MyAyNC41NjktOS4zNzMgMzMuOTQxIDBMMjU3Ljk4MSAyMzkuMDNjOS4zNzMgOS4zNzIgOS4zNzMgMjQuNTY4IDAgMzMuOTQxek02NDAgNDU2di0zMmMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRIMzEyYy0xMy4yNTUgMC0yNCAxMC43NDUtMjQgMjR2MzJjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDMwNGMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjR6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Execute Command";
        }
    })
    export class ExecuteCommand extends NodeBlock
    {
    
    }