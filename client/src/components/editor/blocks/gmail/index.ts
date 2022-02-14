import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "gmail";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjE5MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PHBhdGggZD0iTTU4LjE4MiAxOTIuMDVWOTMuMTRMMjcuNTA3IDY1LjA3NyAwIDQ5LjUwNHYxMjUuMDkxYzAgOS42NTggNy44MjUgMTcuNDU1IDE3LjQ1NSAxNy40NTVoNDAuNzI3eiIgZmlsbD0iIzQyODVGNCIvPjxwYXRoIGQ9Ik0xOTcuODE4IDE5Mi4wNWg0MC43MjdjOS42NTkgMCAxNy40NTUtNy44MjYgMTcuNDU1LTE3LjQ1NVY0OS41MDVsLTMxLjE1NiAxNy44MzctMjcuMDI2IDI1Ljc5OHY5OC45MXoiIGZpbGw9IiMzNEE4NTMiLz48cGF0aCBmaWxsPSIjRUE0MzM1IiBkPSJNNTguMTgyIDkzLjE0bC00LjE3NC0zOC42NDcgNC4xNzQtMzYuOTg5TDEyOCA2OS44NjhsNjkuODE4LTUyLjM2NCA0LjY3IDM0Ljk5Mi00LjY3IDQwLjY0NEwxMjggMTQ1LjUwNHoiLz48cGF0aCBkPSJNMTk3LjgxOCAxNy41MDRWOTMuMTRMMjU2IDQ5LjUwNFYyNi4yMzFjMC0yMS41ODUtMjQuNjQtMzMuODktNDEuODktMjAuOTQ1bC0xNi4yOTIgMTIuMjE4eiIgZmlsbD0iI0ZCQkMwNCIvPjxwYXRoIGQ9Ik0wIDQ5LjUwNGwyNi43NTkgMjAuMDdMNTguMTgyIDkzLjE0VjE3LjUwNEw0MS44OSA1LjI4NkMyNC42MS03LjY2IDAgNC42NDYgMCAyNi4yM3YyMy4yNzN6IiBmaWxsPSIjQzUyMjFGIi8+PC9zdmc+",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Gmail";
        }
    })
    export class Gmail extends NodeBlock
    {
    
    }