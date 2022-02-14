import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "filemaker";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC91BMVEUAAACd3do5dan///8Absj///8KdMkcV4kZWo/d7PIXXpgBUYfq9foCVZKZtdBR68C76er0+/6b6dyVscyk5eLP8O9o6MoAW5hQdJhfgaaL59evyNz///9H4cNB38JK5sFoiKlQeqaApM2Lpb5ive0CYax0odV/mrWasssqwtQTZacWYKBXeZxxkraE6NLu8PNc1M9o38xWfqtSi8146s1u1Nb///9wj64/tuwOUIBOic7///9bkdB41d1piKd8mLb///+s7+L7//975tBrmdD///////////////9ols2Z3OeKuOBylLR37Mtp2c+I6dL///9SxeX////+/v4TjsBPuu2svtOb79eg79uTqcD///800MUQXJk61sQOXp39/v492cMRW5Q308RB3cMTWZExzsYNX6AUWI1F4MIsysoMYaQVVooXVYUAcckKY6ovzMhJ5MEIZrEpxc8rx80GabclwtMaUn8CbcJN6MEApuogSWkEa7sdTnUysOwLYqcAqeohR2MAutY0x8/2/P0ArOvW7fcAvtEAq+QXVIPv+Pyf0/IAs9wAycXj9Pi/4vQzu98AS34eTHGt2vMAwcwosOw0w9QbruszteaF0+IBxMk1ysoru8XM6Paz4O1M8s8Ab84BUo0vT2soTWro9ft9x+6G190bUHu65ewBYLfe8fpywu+LzO0sv9kEedYAZcgho7w8cacAD1FSuusQr+sAr+Q2wNl11Ng5g9UYx8wl08dG7sUCWp8APWcAM1rD6e2m4OUAtt5Z9s86z8Y23sNB58AAacAVf65Ca5QuZJIpWYQjsuVMxODGz9cWv9Zh+dA86MokpsUPcLoEW6cGVJkuVXkAQnjj5+xJ5dc03tFa59AmcrqGlaYhZJs4apoAJmgAHlZnxObU2uBjyt4cuN4Xy9wnyNY7zcqsuscqaaJsgphSbYUAMnYsUnOV2+Imf9YPkMkdkbueqrckO1VL2dtMzNI0e8cSS4kbuvtC0ty9xc+Po7YDyd2B/t7awo4LAAAAWnRSTlMAAwME/fv+/v0f/v4T/kT+OAtzVF0o/v772pgzB/38/Mv8h3H+/ZiGY/7+/uu6tf7+8uvo3NPJmv78++Hes7Klkk01xLqsdFPz0Ihz+fDf1p+QZkge3sey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",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "FileMaker";
        }
    })
    export class FileMaker extends NodeBlock
    {
    
    }