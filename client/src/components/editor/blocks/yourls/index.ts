import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "yourls";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABsFBMVEUAAAAnYYwgYp8OOmUACAoAFSgfZpweZpwBDRkBBxoAGBogaaAfZ54gaqIgaaEgaaEhaJ4faKAfaJ8fZpwhZ5wga6QfZ54fZpwfZpwgaaEfZp0ibqkfZp0pU5gfZ54faJ8fZ50faqIgaJ8faJ4qXYgiYpEeYZQicKsfaJ8faJ8gaJ8eZ54bX5AaUHsYS3cKHzQgaKAfZp0gaqEfZ58fZ50gaqIfZ50fZZodXpEdZp0mXIgVSXAeZJgdYZMaVIUdYJAVSXEdZZkWSm4MIzMUQnAQYHUja6IfZ58gaqMeZp0fZ54faJ8iZ54jaqAgaJ4hZ6AdZZwbV4YeY5giU30fZ50YTHUPKkIfZZcnVX4ZR3EgaqMhbKcmaZ8eYJQgZ58fZ5wdX5EaU4EgZ50XSXIgZJ0haJ4aV4UWR24cXpEUQGIVRmofXaQWQWEaWIQWSW8MJjoRN1MJHC8WPmYQQmMeZpwbWYofYpYaWIYWSW4fZpsWR28gaJ4cWIUnd6UnWqUaVoAWTnUhYpIOK0AJGyQfZ50hbKYfaJ8hbqggaaEha6QfZpwhbacdZpwja6IgaqIga6Qn2Cl0AAAAhHRSTlMAAg8EBQL+/BUMCf79/cfFpfv596P9/Oz5+PT95Ab++vrkz8Y2JR399urTyoNmMSb18Ojh2ta0qqF+cGBaUEpFPjgfEAwI/vLdw7qxo5iNiXhya2djQzkxMBrv7tjJqpuXlpSPhoBuZ2NNR0Y7OjgvLhsWD+ayp3R0c3NxWk9PRDsvJBxfMhbPAAADHElEQVRIx+2UR1PbQABGd73aXduSIJIiyb1i3G16Cb2FFmooIb33BqT3IgnZlPzlyMCECMwthxz8Zr7xaJ+edZJAjRo1avw/4CDEEDIIB0+6IEYMtHQQV00hRMUv87Mzt7v71627bArD9f7umZnZ+c9FBHG1dvRWNEU4jiPixJ1hCP9uh+9MiFpFpVpujUJ8sl0NlGhI10u6HqJy6jGAfxR47NMPlUZLgSGMj8eFCO/hA12LvQ9vps1Iub0I4aGBxXZWMltuPuxb7ArwHll6jqC9dWbCYvrd5v7pRi7KKR0uCGAFPNIhhKO5jf3bNj+kRW9mDdlinPMK44NjACYaCoVnq0vNCn8j0dBw6ZK1G7ygLq0+KxQa1iBgvo0rwhy2xY60ZvYi9L0jYvK8WWI9lBrnd3fPW5MNSiS2VDlvvu1AqE8XWxttcS/PdwA0GPFTyhFKNUPTOLpDdkKEUKJZl5RwHA0l24Yh6JS5JVs8vScOAWfM25Sui9fX1dVXn88jv3aDoSa50xYHjFY3GBhX1Ocup9N12noEGn0BHBm2zRZTNuOGvZL+BjtOZxSpWssKGMt6y7a42WhjQH8T2zbMuNwM466+QYG0vABjMUG1xZN7vgT4OSGJsTNnz5452IWjHZ61ikJ8BCSaf03Z4nmZnwWoJ8lKhJByWWNN0yA7O6QywzRZrVy2hMcfHkSgW+a7bXGCcr4EQouqvr29tb3lpx6pbP3uQySJ+isX23psAKFGn+YbssXouihnnQivfbqfzy+8/fiKZbMXz527aC0/yQuB9wsL+fz9/lE85ozLTdeRLYYvoxJ77enBIfOoXhHbfxwaUGwXyeQj5uAhT68JnujLYzF4kJTCqa6+RkfjQKc35LvyBAThPkHw5IpP83YOWKqvKxWm/gcAgWN1zq8oOqsGVG0v4knePXrtgszdJBVLmtqqsnpE8OfAya8BWI57w5xhGKxyOd4D4JHCsCd+WWEtxQne7DKAEJysXV/nprNXY1P3VkYAtLuRlXtTmaux6bll14GqkiMGYzdj2Sr/zbgxZpBlatSoUeNf8huUYZu5QUSg+AAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Yourls";
        }
    })
    export class Yourls extends NodeBlock
    {
    
    }