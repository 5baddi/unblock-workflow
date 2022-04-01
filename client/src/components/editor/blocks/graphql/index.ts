import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "graphql";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAA2FBMVEUAAADmNavmNKvlNavlNavlNKvlNavmNKznMqzpMa/lM6zmNKvnMqvrMbDlNavmNKvnL63pK7PpMa/lNavlNavlNKrmNazlNKvmM63nM6znMqzoMK3nM6znM63mNKrmMqvnM6zmM6zoMavoMa/rLrTlNKvlNarlM6vmNKvlNKzmNKznM6znMa3nMq3nMa7nNaroMa7mNKvnNKznM63mNKvrL67nMa/lNKzmM63nNK3mNqroL6voMq7nMaznNa3nOKjmMavmMq7pKbLqKbvuLb70EtLlNavlNaqwTcGTAAAARnRSTlMAvCb9+euyqmgXNjEcCfaNUiIG+/Tg2tKukUgDs6GflVovLBMN8OXMx7eYeG9OOyAa59S/g2RANODMxKaFfXFvENheiW4pQeUjUwAAAmRJREFUSMftlteS4jAQRQWywSxOJINNHnIa8uzktLtX//9HiySoGhiL4Nfhvsju6+NytbpbJldd9XtV/7Qism8agH4qEvuLYiNWigT7ELLNKPBQwrlpBHY2kLDWuBjNjnVonKVAonkZO+lBe4kxSll+9AjqXJDymxJQiqe1j2bzFaWyoaNrlE9B7+Oac0tajoaHCSE9uISUe2xCZj5FPyCWwW2FMkUAtFqA/polZM1iPHgHz9rU2gBIPmCjkQLepdefbW5a81xaRJPshS9uEVJ34XBOunVx42xXkrE7okymtrT9cBhSQ5EzTd9l+JlVBbx9dzUc7krX4NcVjHfh9j3labIK0n4Lh/8yAGzR3lwGKGbJTg30+UatBfvRUvVgAXZpyutrwYIv8UeIEjU8aJUMUekWsgHHrLLfnIW2GA4YKEDpJkVP6HZ8L15lz3xpInGs/yU8ZM5+3Ozk+eemz4DTufn7gTFiyTPhJVsfGpbH7s6CXdb/3kIuHrJnwJYXWr4xZpwBj/AUZjW1bvvmBFxN8cSGqY5V5ih8g5qPVbiX0vMNlNTszEFXW7QVroEu9QIV+0/0zZPyszQA7I/CXTIx5FVjqgIuFhydJPexUC2ptOtHJwlFqHbhWjhckK7XMKfxQ5mZly1thMOfjJt52M/v37OVgC7YnmozGsW8XssYc8yN7P4e+wx+yt3YVfXBUzZb/FGHohd8PfQ6SDS39mmlK0AyTtynwcokQRGLyWXHZBH2UmxcBR1++lwka6QzCA3N6L8VdopEUE3CNB4FXkvYs6LA1iNnmUsiqVUv6H2XXPXT9R/lWHu2SyWatgAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "GraphQL";
        }
    })
    export class GraphQL extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    