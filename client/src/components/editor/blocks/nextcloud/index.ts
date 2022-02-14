import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "nextcloud";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABFFBMVEX///8AgskAgckHhcohk9AAf8j7/f7y+f0vmtTb7/g5n9Z2veNar90smNMdkc8Jh8zv+Pzh8fnT6vai1exQqttMqNokldH4/P70+v3W7PfO5/bK5vSHxeaCw+ZvuuFpt+Bfst4ajs4MiMwEhMrk9Pre8Pmr2vCn1u2bz+qWzeqKyOdVrNxIpthCptc+odYynNUakNELis0OiczU9/zO6PrK7vfG6PbB5fS83/G43fGx2vCd0uuH0eh5wOJruOFcst5dsd01ndQrmtQpldIXjs4Xi8z9/v/f9P3q9vvf8vrY7Pq14/PE4vOS2e+q1u6HzOqPzOlzyumAxud9xuV0wuNtveNHrNsknNchldAXkM8gjM0MgsrqR81pAAAB40lEQVRIx+2T13ajMBCGR4hqwNgG3HtZ18TpdZNN2Wzvm573f48wYw7twudwkTu+CzSjf/4jIY0gIyMj4w2pHOtuWVy0TxRIizw1mY/YTGmvbbII6g9Iwf4Ni/HyHdZSGHcco9WgeLQlkMd0XZVjIGzvk1BvGk7H/gIJJiIj5iMAeUPy6lmnLuMP6FzwsusCQNEYMCQ/hRh/JeaT3wMbq/vvwOfwCfMW7IreSEh3EOEPeQnhcXiJI3p9Diwv72lXQlj0PlSLOzhhqSLDNXLc+3yACDodAHlFtY8D1wKxhfNuDar2NvNpQIQiGhBrooDmYKQHYg7/tYDRzN+aWCEhLCCEf5hUy17RMtA+ekKXIo0zYhNiGGxFibKOZ+5FzUIK8zmaY7vaom3/Xr/t/5go2BKX4YGhcl+SldPgwA4gwleLreBTRa65uIAevyqJm3kBx5yVvKpbnFfJnjetxFXBz7BJpIdhLtEkhxxdI3Qnm4Q4C7rneRdsTPgYfI5usLwJ38rBAm2IYa+UgVHEh0FxtyEDfCq1B+i9UgCGXU6CeAoJlF/t+UWzTvFn/0leLxbmgKL+Hgml2cX8fFyAtdR7LMbOMaRA24h6lw1IhTwJDrc8q0JaKkdnzlJ19JMqZGRkZLwdry7HJMVSdkCSAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Nextcloud";
        }
    })
    export class Nextcloud extends NodeBlock
    {
    
    }