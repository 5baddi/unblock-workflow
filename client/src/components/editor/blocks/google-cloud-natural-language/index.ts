import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "google-cloud-natural-language";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB5ElEQVRogeXXwUrDQBAG4OIT6N2bb+ALeJZQcHP0po/RqgSEJPWNPPoSrSKCeLdNFaSllHgKBE2a2ZnZmW12YK9/5uu/pO1gQBjz8H0W50UpeSj7kkYaqgrXxsZ5UZrJ11VQYLGWtZHiaG2gKFgbJ47WhomCtVHiaG2QKFgbI47WhoiCtRHiaG2AKBjygLahLk7JxWmT8oCyWDSaOgFDcp2127UYBU3NtcJeJItDrsWwaGquk3abFqsvREVD8snoOF9GLsBcTdvksrfbtRB2TLaw+0DHzzi0yYtHH8D11kDg0bQ06dwezH3lKOAKDQVbX+04X658Azdl7AK3odnatW0AczD5nWgs1ldwE7r34FY0Bes7+C/aORg7nOB/6BDAdXQwYJPNwwJXLQ/iyc9xn19a9dP7r6VW8GVWHPUd3OufliCwj/+WuMCN2CDBGLTv4J3YIMG2aOpCLl9aICwVvN5sy/VmS4ZWOSJgGzTkWnI0a5trhQ0SDEX7CEZhgwRD0VQc5yFhoWCTfqpD2cBQdDSa9QMLBatf7fFsxQbeBzQr1gasgR7evT6xg31GO8HagsXQt2/XzsA+op1iMWCX6PP7jxPnYAzapPP9bBcLjvOijG5e9hNLQjNhh8n7qTgYC9du9hf86m67ra1foAAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Google Cloud Natural Language";
        }
    })
    export class GoogleCloudNaturalLanguage extends NodeBlock
    {
    
    }