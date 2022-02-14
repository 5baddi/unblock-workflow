import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "mocean";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAtFBMVEX///8APaEAL5sAM5wAOZ8ANZ0AQKMAN54BQ6QFRqUAO6ALSqgAKpgAMZt5m8+lvN/q8Ph8ntBii8aZs9tTgMElXbEeWK4ST6r6/P34+fzv8/nK1+yPrNdnjshId708brkxZrW7zea4yuWUr9lOfMBBcrr9/v7a4/LU3+/O2+3F1OrA0Oiet9yCotJyl8wuZLQqYbPg6PSvxOKKqNSGpdR2mc5xlcxtk8tdh8UVUasAJJUAJZW9ju6pAAABpElEQVRIx+3R13LbMBCF4bOLDpAWZRWq92bJKi5xSd7/vbJUlJlMHsHmdwNe4B/uYFGr1Wq1b6TpwxkiJNsClolZXXYAnlZlSuECNGYpJTuqrlo9kGPsq5vz6Db4ET33gKHybomPnExUNhtin0XFnCW0WefMP5sAtI9jOe6jNxIbBu4o6BHwIUerl9kZUJAt4W3Y9fr9zTazk2IwKPoygrNSSUw+3mPv1DW2HYB80I1HbQoAr1E9Kf0IIYMZ3HRNw7uWxLFruTc0VezanvGg0tQ0msQQCxdH0Tyg0qag8jz/1cSWDe50klhPTmZa3OK2arybt9k/Mb2S2aEysUE757IjVrEzH0U1lPgMY5Z0jdcHNS3VtutkbDUA8CK/NW6Bypj+js2BcuPtVOIOXpwP1/iM3HqN0rX6mV0DfWsTtO0WEHumd1SOOkzWk5lljCWGv8UdrIlWCGaJlSKXZFUHPGf0Z1VTdV1VK+kThNLNk+sCizww8JZ/4jnnOYhH1dsz8+cBwPBiibRcO5YkHzOXXSdpGxqrEkBHZxv8rzdArVar1b6o38TvHGi2cKpaAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Mocean";
        }
    })
    export class Mocean extends NodeBlock
    {
    
    }