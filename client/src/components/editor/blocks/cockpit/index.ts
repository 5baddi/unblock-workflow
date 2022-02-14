import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "cockpit";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAzFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////9/f0GBgbU1NTBwcEkJCTi4uIWFhYSEhIJCQny8vLIyMjg4OA0NDQpKSmLi4s7OzsaGhr4+Pjo6Ojb29uxsbGCgoJKSkosLCwODg7Y2Ni7u7u0tLSkpKSHh4dpaWlYWFg4ODghISHPz8/Ozs6tra2Ojo5xcXFOTk4wMDDt7e23t7epqambm5tfX181NTULdftaAAAAE3RSTlMAB72e9/Tw7d2ukVtPRjgyG9HQ6cOT1QAAAhJJREFUSMftltl2okAQhgeMyuKW+RuQACLivkw0i9lnff93Gmm60ZnT3ZrDRS7idwM336nqparry5lPTce2dKMKVA3dsjvvMbV2Bf9QaWunqk2zhv+omU3tJLdyAQEXlRPslg4JeuuY26hDSr1xxL2Egkul3apDSV2RuabjCLom32ccRbrnzf0ZDeYoCAeDYH9iTUlgE5ylN34OQdmmD5OJ9+seDFMcul0r4k4JcZ6REXwjlMkdcmptoVyseBSTHePUBZKYMBxuV4R1VMTtE0o3RHJFCnp84aIas5ETskSvQww9csALcmyBbIHyNmOuv4vr0IQfnnrZdz0CxRLIOjJW10XOW55+gE329Qag6ALZQMZvhwpegIS5jz5As4l9UAyBXKWBuzzYkO3VLAJu6F8agVIVyMj4M6Vxl0i8fL2ej+iFLnnM74krkxc03sZlcZ3Nzr0Z0985uCxL+55G7qfsuDwfuO1R9+cKjKpsw9w1OWDm8/U6qQuOIT2qO2fvPkaIbvPfHxEKdOklWa257XTznClXCxRY8uvpP5HibgBvvDD6CTi2ojCiebbTk3mQV9iU2d+HYHSUJYntcImD+mSZu6wkZc1ARNjNK3KhbAaaCSHLzO6/ytsQb4BCwpj0XhUNUN16R/Fi33pLNP1yz42Cxlf1Q1fmiS3zuJcfK8oPNOpRypWNUqcPca7LhrgzZz6Cv5ArdCqXWYITAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Cockpit";
        }
    })
    export class Cockpit extends NodeBlock
    {
    
    }