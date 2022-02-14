import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "toggl-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA9CAMAAADGfvrlAAAApVBMVEUAAADhDivgGyLgGyLeJCTcFyPgGyHhGh3gGyLgGyLgGyLhGyLgGiLhGiLgGyHgGyLgGyLgGyLgGyHgGyHhGyLgGyLgGyLgGyHgGyLhGyLgGyLhGyHhGyHgGiLgHCPgGyHgGyHgGyHgGiHgGiLgGyLgGiLhGyLhGyLgGyDjGiLhGiLfGyLfGyHhGyLgGyLqHCPuHSTwHSTlGyPnHCPtHCTiGyLyHSXBQzjgAAAALnRSTlMABPv5Bw7QCer1x+QxJ6jZzL5t7NWdfhtZspBzU04i4KGYaGDvrIqEOBY7R0K72REj6gAAA7RJREFUSMetlwtz2yAMgGUgcRzn/X6sSZM2a9OHAWP7//+0CScps2DL7Trd9a4x+pCQQCDwJMI/8bYdjJ6zWqbdx0kvqgd88dH3eWq0kuUFzqXS+XDz5uM+Gk+GUpmMMZZdhXGWGW1GTzge/ZWdpNownnnCM6mGK2c8gL62dY52gsK4UeO+oyn7YqQzGsKL7IiKIbY1rjJi1Xe+eqxpyi73yjfr41U3hoiyu6nncphWsxZExG4nwDKUEC0s7VgxDLClVloFbOtx0/Ba+2w+PRwO86QMrHsDkWO3VcBnObKDnTyQM/VQ0zXbD2ZVtkFAKwjn09aX4XER2pAIRxYOjek5RBf2hwrEtJRX2MgsgOe9q+NtSWFWVsmJz3A8fu6sM515CsXawmi4oEO8SBZnmA4tnIxgt8kkD5rGFXuwWp8Bbc5quI2+9bua0a1Sr9oPdbEAEFH0ZVkIgAONS/5sA76oOFnOpK4Y5+RieQj1z40iamqFcFeyZhZ+1sqTzi3a+1WNnxRvwgOAJS/pvkJGfFalucBlfjnDcWoaVkwq4IGEK38FAdGo4m6T8GqNQfCyUvZgoXnDmZN1cVAlGbvB9iS82NCOJGuoPuFSGl/kB6A3uDwHX7Mq4Kh4MzgkXmaPPttvTZirAcLLpCQR2xvyQUAP9YnlMjnfJnUpHUNjNq4XEMNEcwqz4gFnnSsH1+M08wgffJjrLcTN4DIzI3DxAw0MFLvCwsEvCG8pnJQe/KgYLUO4Hg+WbRIwfUSdl4tOnh4nx21S3pIq4GcDLsYkgnoDbtOVWmvltpOAdcGamTk1I9i1QZrmpOhbFwFEasgmuUTQ4TvrXsVppT7i5zfHXlZifSSJtiE2jBbSOs2cHAxyJPPUXoIfMmO/sYb1kd3xjB7JZsTqhAosikZy9nWl87f6qClGi4FbtDvQSL8OK4kcBkzq7g4iAauC0c3oFUBmOmdLR5N2VigleReVkO2xslkKsAD6pZfJ/RK17bQPT0/vOwA7Vy8xzC+9ftHn8vkDASRqiew/K2aYX/RD1w3LzWFZY3FcT9E/FSULXTfhi04lh48Yamm9DzKnQAwHr1heapmO5z83j92pVBkLXrF/vtx5lhdKayVzxkKXO31WeDqMc4+8FaWIPmjCEn7QhJ9S91n9CeFHnC/hR9z3no/ff7g6uvX5z0/m7z/WXZtQ3W0T/nuD4lqjmW2N+O+tEaet0f2mLC8tWhrSlN3FxSu2g2lizSapawfvy5dz8bLf7+/Own2j8gul+pBV9HWHvQAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Toggl Trigger";
        }
    })
    export class TogglTrigger extends NodeBlock
    {
    
    }