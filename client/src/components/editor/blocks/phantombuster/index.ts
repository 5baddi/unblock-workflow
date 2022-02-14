import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "phantombuster";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEU1wtv////9/v8Avdg8w9w/w9z2+/04wtv7/f75/f0Bv9kbwNpBw9wAu9cnwNpnyuBQxt284+4rwdvf8fbs9vqt3eql2+nl9PghwNvx+fvT7POL0+Vuy+FdyN5Vx93P6vKD0eN8zuJLxdzF5vCp3Ol3zeGV1uZiyd/K6PKd2OeQ1OVFxNwQwNoJwNnY7vW34e3A5e+a2OciUFVPAAAC80lEQVRIx+2W6ZaiMBCFgUogBAMCssgm7rtOv//LTRY4jU0j9Jwz//p6WCL1ectQRdB+1RHCsxkWm/VT0sLIAQZcDBz0M34WAPXO/irLVv6HRyHA0xO2YBOFRG9khzEGhCba3p3I5JDRiJ8uY+rgSSwUiSBbY3UeljCbwl5Ii3Zxcw2zcfbAY/WeDN2ox2hM1w3bp+2Core3N7guW7ZPLwLNemcMJ8EO0T57kzjiSb8T8Rz0xngljIett8PWVlraQ6CCzU1gDRrHrbFhvFLt8QB4JGuFGl3UMEbzdhd6gy0XHZosTL25EH57qxHv+mBj6oa8oTWFMmtpH8Ht3FxZooBHoi8Z3xi7uUdbFQM9rh4HdlLxOxY9trRQHWputDuPxC++sPe3NXgKvlTCM3ZtMUjYiQ8WzJeJmBXUW78A1J2pnfhrVUlk82t/dEJ4fCjmyb/ynyD6Za3gq4zZAf4srL0M+JgrOOAwTx4UvOF7oh/2CnbP4pq+v7feM/ZHN/gn3hCZdu7pXBE1BRyyTDxK4KngNOJHwqscd9tBTE0DJ7B/hDHbqgk7Mz9Z4cpWE+ZEMvQEuFNZpHFWdAGAJCsiIwqQi06VzjvpHLewaNJEXKkr0pbUYiGTMBSRLNuSMbVcHJLunXLmmUky6pFOLYe+zPQR2Z1aN+dORsxsnqIO7UJ1dO6e3XniZSzIdx8lq4lCFVw5zrECF70uL26K009YluKzLvZx2Ixb5wClbm/5sSzkcLjfh19g17K+a2kJd2mlHtwnW7ivX/h/weSfYSs9TnAOBpxvhTEKl0Np01wfpdcDazSGwxhs6PUAjJxC9uIwSnS74mkP5P0caqf26xjQ4BpL937S0n02fL59K0F3RnNT0j12uQZwBDtMzzBbG+rJJza5l0PbA7HCjegKuagV2xSQQE0xNNdw1SYI0zKK8nJ+SeRDNJ8fL9FuTvHEt94UgKYBOOfV6kAhcADARdNf1TGyLGwBF8IWH2JL+6kwl/arF/0F4zowSpVkN1MAAAAASUVORK5CYII=",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Phantombuster";
        }
    })
    export class Phantombuster extends NodeBlock
    {
    
    }