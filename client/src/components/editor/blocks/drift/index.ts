import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "drift";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAtFBMVEUAAAAfHx8mJiYmJiYiIiImJiYnJycmJiYlJSUnJycnJycnJycmJiYmJiYnJyclJSUnJycmJiYmJiYmJiYmJiYnJycgICAnJycmJiYjIyMnJycmJiYmJiYmJiYnJycmJiYlJSUlJSUmJiYkJCQlJSUlJSUmJiYlJSUlJSUkJCQnJyclJSUlJSUiIiInJycmJiYkJCQmJiYmJiYjIyMkJCQfHx8lJSUmJiYlJSUdHR0mJiYnJycoeVoCAAAAO3RSTlMABZXiEKqeXTf8+vXv685o6NLLyGExDMW7T9yyoZCMhWREPCMeGeVYSSzXgWwpFfnBenG2pJh0QTS9VYekN+kAAAIySURBVEjH7ZXreppAEIZnQVQURIRwEJV4wLMmmjRJO/d/X5XsMkqzbGj/1veP64Ovw863A3DnP2cxdVJNS/frOftL83AKLRR03Ukb6jNLOljG+1X3fg2UENaq7tsopZN+706wkqQBapqoIFTbP1DJc6Bwz1gi0jHq4w3ma7XbfsIbBmvYu7DQSrZT5TIXryzPDODRy1OP8Iq1qJD3NxW0DC44HuS0hkiM5G5w/UnUFpmH/LORdlHwdJDKjygYtii4ZSZWGzp2mlR+Lm6MFf17QdQfi2+xOO99WdhzftHS9RXkHDWTz8Q7L50sRWqxRG7xS36w634OgYMCN9/02Bplbf73Y4ks8pwCzA2zmV1b0Lu0Y+nNABa8a6FEFmmu8/W7azknqjz1dP9zY1zWJfKWKuc4NhLdCe+RqGxJZNGO4vwdxx3hGoei+7yDtkS2r2U4D4k44Ry272OlTOOj+xTtsnMu1tMBYrU8RGJFCfSK1QYJS3rACJ/kQbF6QKKvfoi08u4EJM9YSfYq54JkYxsDjC/yR7TllVWTcTBLchPRiAdWfEmsV5ZXEpn1/pCJsmxlIOGtnmyAjKNdS26DlB3t6qtMOScgp6Ej560s53lNi0fYBiqIizFKGzBCwgXmiMNr7mq85YZjG4mOFqLgJ6uW2Qsq2WagIIhU7nAOSgKj2u1xV8XOrHBfA/iemSdT9RXUgvnuF/XUgLqw9UhHwk5aXK1N8OGnTcMYTZzZEe7c+Vd+A8+v5+dUEorsAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Drift";
        }
    })
    export class Drift extends NodeBlock
    {
    
    }