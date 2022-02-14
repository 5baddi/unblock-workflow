import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "ghost";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABF1BMVEUAAAAVISoVISoAMj0VISoVISoVICoVISoVISkUICsVISoVISoVISoVISoVICoVICoVIioVISsVHyoWJCwjIyMVISoVISoVISoVISoVISoWISoWISkVISoUIisVICkUISsVIikTICcVISoUICoVISoWISoVISoUIisZISkVISoWIiwXIywAAAD4+vwwNz0aJC3p6+0mLjXz9fcTICnP0dN2eXwqMTgdJi7////9///7/f8kLDP19/kADh3w8vR6fYAgKTHo6uwAFSHU1tjGyMoABxm+wcORlJYAEyAAABH6/P7AwsW7vb9kaGtDR0wyOD4NHCbR09XCxMe3ubutr7KoqqyFiIpsb3JcYGNaXmJJTVIBFiJRVVmwhm8VAAAAKXRSTlMA/fsE9uuO1nsn8M64qXVOQzURCwfj4sjf2r2Zf3FuaEkaxIflsaFZHzNVgXoAAAM3SURBVEjHpZeHYtowEIYls2xG2RBIgJAtycQlbmNidibZoyNJ0/d/jp4INmkk09r5GSePz5Ll0/kOzRUKIVBBS9ejqWoithQJKxgr4chSLFFNRetpreCcJYrvzKrJImFcFESm4i3GRYpJNctPlKFNNUaBIlgBYegVcxYMbHARfjSmNl18zuajYUbhLEA8hPlRysLRvEM77GqEEThG/iHgCYuscnrOfmJUID15yj5xes4K6EJ8TsOYGQbWFw0jn81VhALri6YRPmscjjKF+JTCogDCtxkm2CcLQLiJQvBZ4R3773plOu4YDQLTGAJlKcb+YYwp93OVjzrIuFWAk0HhJEL5DYqDwJhu5JFGiAhTV86mCBOioTQTWHPU7rYdUWJasDkyBZqlUU24ZdPS38gkxjm3lincdE3im1397OjLTEdXk5H+DPZM70o8NCXA+/plxz6Yyu4Mdi39Z+eic6zvC3AKVSXwlb03U2t8C3BrYD9I4CpKUCzA3zq91qvscXekDy96nVMBxjQh8WyjfzP8OtPwum/cdcH+6hsS7y4JPZvGiT7XyLAYmBPDFHouIVkUsQxX5uRw8sIMw5JFEySLBP3duW5fTd+UxAOkCGhb/zEYf/5L48F3vS2uDST2u6+fOrPtqCc+ZxD+EPyxYcsnTJB8wuIibM4eFT0EUd7yelTFBU5igbj1cJIlVAFY7p7DR5PQu0doe7pngipeC2Pv6fzk9+ACWtKFwcpobcGSvNbPnwc93rIvARbD56ZXMLAPbICfWge8LQ0GW2jZMwzdH98c3t0+3ENTHobWkbogAE4Ye+HWIwA20DbAXqEXJphxKwu9GNOM/D1Hp3Lb8qCv7KBcJOjrphJC8KwCwTzyIrQe9C3ZADgTaNjAaAAXSkFoTMtBMyk+6vo0G9JwgFSKxnMIFOIeGjCTgl8uThWfLC0VnMQ17TdxxSwDmJsyY8VHv5jV3ibctcDJOqczRQZXxP+BEhZPvy8yCitxRnmZIb2CW+dQhpdzYnmDcvUykZVGwHBxkLFSVPOorJDWSFUU6lRl7uKe7YmXo5mCd03H/3YyjfWtZNktB+PFSmJtc1ndzubel4N/AOxI9wYsl+IsAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Ghost";
        }
    })
    export class Ghost extends NodeBlock
    {
    
    }