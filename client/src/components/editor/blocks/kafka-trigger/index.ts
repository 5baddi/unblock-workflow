import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "kafka-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDMyIDMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTIxLjUzOCAxNy43MjRhNC4xNiA0LjE2IDAgMDAtMy4xMjggMS40MmwtMS45Ni0xLjM4OGE1LjM1NCA1LjM1NCAwIDAwLjMyOC0xLjgzMiA1LjM1IDUuMzUgMCAwMC0uMzE3LTEuODAybDEuOTU2LTEuMzczYTQuMTYgNC4xNiAwIDAwMy4xMjIgMS40MTQgNC4xOCA0LjE4IDAgMDA0LjE3Mi00LjE3MiA0LjE4IDQuMTggMCAwMC00LjE3Mi00LjE3MiA0LjE4IDQuMTggMCAwMC00LjE3MiA0LjE3MmMwIC40MTIuMDYyLjguMTc0IDEuMTg1bC0xLjk1NyAxLjM3NGE1LjM5MyA1LjM5MyAwIDAwLTMuMzM2LTEuOTRWOC4yNWE0LjE4IDQuMTggMCAwMDMuMzEzLTQuMDgyQTQuMTggNC4xOCAwIDAwMTEuMzg4IDBhNC4xOCA0LjE4IDAgMDAtNC4xNzIgNC4xNzIgNC4xNzcgNC4xNzcgMCAwMDMuMjQgNC4wNjN2Mi40QTUuMzcxIDUuMzcxIDAgMDA2IDE1LjkyNWMwIDIuNjY1IDEuOTQ3IDQuODggNC40OTMgNS4zMDh2Mi41MjNhNC4xNjkgNC4xNjkgMCAwMC0zLjI3NiA0LjA3MkE0LjE4IDQuMTggMCAwMDExLjM4OCAzMmE0LjE4IDQuMTggMCAwMDQuMTcyLTQuMTcyIDQuMTc3IDQuMTc3IDAgMDAtMy4yNzYtNC4wNzJ2LTIuNTIzYTUuMzg2IDUuMzg2IDAgMDAzLjI4LTEuOTA3bDEuOTczIDEuMzk3YTQuMTUgNC4xNSAwIDAwLS4xNzEgMS4xNzMgNC4xOCA0LjE4IDAgMDA0LjE3MiA0LjE3MiA0LjE4IDQuMTggMCAwMDQuMTcyLTQuMTcyIDQuMTggNC4xOCAwIDAwLTQuMTcyLTQuMTcyem0wLTkuNzU0YzEuMTE1IDAgMi4wMjIuOTA4IDIuMDIyIDIuMDIzcy0uOTA3IDIuMDIyLTIuMDIyIDIuMDIyLTIuMDIyLS45MDctMi4wMjItMi4wMjIuOTA3LTIuMDIzIDIuMDIyLTIuMDIzek05LjM2NiA0LjE3MmEyLjAyNCAyLjAyNCAwIDAxNC4wNDUgMGMwIDEuMTE1LS45MDcgMi4wMjItMi4wMjIgMi4wMjJzLTIuMDIzLS45MDctMi4wMjMtMi4wMjJ6TTEzLjQxIDI3LjgzYzAgMS4xMTUtLjkwNyAyLjAyMi0yLjAyMiAyLjAyMnMtMi4wMjMtLjkwNy0yLjAyMy0yLjAyMi45MDctMi4wMjIgMi4wMjMtMi4wMjIgMi4wMjIuOTA3IDIuMDIyIDIuMDIyem0tMi4wMjMtOS4wODJjLTEuNTU2IDAtMi44Mi0xLjI2NS0yLjgyLTIuODJzMS4yNjUtMi44MiAyLjgyLTIuODIgMi44MiAxLjI2NSAyLjgyIDIuODItMS4yNjUgMi44Mi0yLjgyIDIuODJ6bTEwLjE1IDUuMTcyYy0xLjExNSAwLTIuMDIyLS45MDgtMi4wMjItMi4wMjNzLjkwNy0yLjAyMiAyLjAyMi0yLjAyMiAyLjAyMi45MDcgMi4wMjIgMi4wMjItLjkwNyAyLjAyMy0yLjAyMiAyLjAyM3oiLz48L3N2Zz4=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Kafka Trigger";
        }
    })
    export class KafkaTrigger extends NodeBlock
    {
    
    }