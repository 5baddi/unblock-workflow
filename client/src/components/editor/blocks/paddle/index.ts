import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "paddle";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA7VBMVEXq9f/q9f/q9f9FVnz////s9/8pO2YnOWTo9P+Aj6tGV30/UHdCU3otQGrt+P+Tobo4SnL7//9HWH4jNWFIWX8rPWf9//88TXXz/v/v+v/p9f82SHElN2Py+/9PX4M0RW4xQ2z5///2//+isMWZqL+JlrF5h6Tk7/lreplod5dgb5Baao1UZokgMl8cL1zv+//T3+3P2ujK1ODAzNu7xte1wtW6xNKdrMOQn7mOnLWEk699jKlygqBvfpxLXIHx9fng6/fd6PXj6/LY4u2wvdGuucvq8ffM1+TT2eLC0OKhsciWorqFk68VKFYFGEkorq/MAAAAAnRSTlPy5YB5WPAAAAIRSURBVEjH7dfHdptAFAZgRVyYMQOEIopEVe9dVrMl9/Tk/R8n96Cco2QFg7Kxj//dLD5+5jILpvShVDRIyxekVLrAvuM3gTWv0WiEIjfWGgBglO/vuyGAI9LcmGrououX9mEYHaNBp/kEDq3lwzSE5a4X6RKxY133E2LpnUcQaS5cNdqWZetM+BNZdsf6EnUeDKuJawr/pKIGK6jlwnvrZE1FV21Vl2XUSfIENBtP631VkBWGmkX9Q98kbgW11YNqNq53I98n6ugo2Pu7hlF//J74qBX7K9BMDMufUtRZbGLF2kBVqzpwrTLcg3UD2c3Gc2/VhVDxZfIRTl+9HeC245HmZeIaBYBwRCpCilHDzMdq5s6dbKxpFL6NZeGEMd50GOOm1WvIc7ZFuAn+wppza+PspWZeLAlnLEInXbZy4qsTPjcXxp43SNLXLoKNB8FNB1YAU3gmuGJs5nDgYAMUrQEjFWevDr2QA0s/IM0VQWuOt1DjwIrbWc/n6z5RZEHW9QeDB1cUSXVdVRWwWJ5scQAcGKMwhrX4nPGw7lEOfI6pTI6fgHI1m4yllklW7y61PM0VPSAkIP7gBRy0XNjefmm197vmZwOqaPmw1YI0Z8p9PNO8JhzsimPTahXGZpzMjGLYZmTSBLEQvv0VD9ag0SK43j4sILX8uEzL52PFjctTsfZ6/wDf8X/H5Qty0XXwN61CRV4cnPZKAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Paddle";
        }
    })
    export class Paddle extends NodeBlock
    {
    
    }