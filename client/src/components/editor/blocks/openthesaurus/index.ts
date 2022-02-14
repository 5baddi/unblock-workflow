import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "openthesaurus";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFUklEQVRoge3a6VOTVxQGcP6TTl1ICB3boe2HUrTtwNhOp+1oKRSIGBbpRJ2ilEJrHa3dtExlGJCpIiEJawEBYzCIsoNCkSUYBrAqyr5VkC2EkOXpB7dGknvfl4S8ATwzz7d7zzm/8JIMixtcvMbmdOgen0Xd/QnU9E6geXgGLUOP0DY0DfXQI3SOzKB7bBZ3JuZwf2oeQ7OLGF8wYGrJhEntImZ0BuiWTDCazQAAN449MJjMKOgYQJZ6EFmtfchr70dhxwCKNIO41DUMVc8Iyv8ZReXdMdT2TuD6g3/R1PcQLQOTVsED01oMzy5gfF6HSe0ipnUGzOuN0BtNMJjMzgX3T2uRUN2DxLrbSG64g9Qbd3Gu6R7Sm3sha3mw9sEmM3D0ajeOl3fi52tdOFnZvf7Atb3j+EbZgbjSDnyvuoWjVzTrDzyvN2J/URsOFrUguqQVMYp2h4CVXcMouz0CVc8ISruGkaDU4KukCvh9dxGCfbnYLMzCK19In8dfCn5ELt6LLYEooRy/F7SioWcMU1o9loyP37jsAh8obkN43t/Yl98MceFNduD65+BfVZ3wOliILaFZ8IzMXdWsCBwgb4IwuxF7c5oYg3+p6MKpqm5EpjdgU0jmqsMcAt4tbUKAtAFB8huMwEfKNPA/fQ08URYEETkuEUbgT9LqsCu9Dp9n1NPBxa3wjOQetiJwvnoQH/9Zg0/TaongqPxmeIRzj7ELvPNMDT5KrSaC/c/WQhCeA8+ItZNlYOnN+/BLrsTOlCqr4EBZA7zjSzhf3CHgHaev4oOkazbBb0YXQBCevabzDLzjjyt4P7HcKtjnmJLzRQXh2fjshArbY0vsA8/pjfBJKLMK/jClinOkT0yJxbecT0yxfWDvkyqrYP4eOWdIrwMFNj85HA9OvApBWBanIZVPTLFdvS3A28R5nGOdBvYQcQ91DviUinOgU8H2LvfOoSJUqgdtLpisUINPeXr4IsuQyvtw8bLzT8MI7CHKBNvwQjMxMjlHXMxaScq7rPZzVG2LyqPuzhpcWH/H7sV840vWBtiRVacZcm3walSFesD5YIFIDloau0cYDYw+2wBBmByCsEycUd5idMdLnGuP0aK2ReVSLW4ee+Ugh/4VeD0q1+b91EtkuBlYdodU7x66QNmXHCqYVl7ifOqQ5tujxB77U2rXBthoMjMeRCuXAL8lziMO3xyUwXhQfi3544wf6ixwqAy2MqPVE4eT7r6YVwMkxF6+8RefnSWCowtZzX0xRDCt2A4jVdpljWuDtTqDQ8GjU1rXBo8/0rIeRiqd3uja4IczCw4GGxidsxvM3yOFrdCKdJdtP/W9cUbnvL8uYD33/3EamCck9zsiuc49+FypxmFgn8OFxF6bAtO5B3tSft3y7fl6hzzOL7547MAyVKkHLEIGCzNACnVRyn2+MAObA9OJPUwmM+OZvrEXLM5uDZYtO8MLsb0LFXxMdoO4gHbRQAXTamuQhPH5E5mNFmd3/6hcdoa0CxXMZGEAcA+RLbu3JYjZXXueKib9WIMFDH7aeVqmJ//ix7Sszats76feW1wysurJCswXZmDXcQUrCJNyD5ba9VRZqx+k1yngEAmYZnu07T9ysSkznryxEGYF/lS6ot40AyswP0QCXgj5xzxa9Y3NMJ4Vn1bPqjftRVwR+Bk8OAOzC0uMl5Fe6QQvmP0cDwaf4Y+xzPqtGGyJl+CNyGz4xilwKLUawt8uwy9OgddEmStC2prxtvgvBJxQQpxUAb94BTz3yln3ceMFp2Mj5SV4vecleL3HjRd0HhspL8HrPRsP7P5lGjZSNhz4P5A5mTeCQ0SmAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "OpenThesaurus";
        }
    })
    export class OpenThesaurus extends NodeBlock
    {
    
    }