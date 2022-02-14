import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "workable-trigger";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAulBMVEUAdWoAdWoAdWr///8Ac2j9/v4Ddmtcp6AJem8GeG34+/vu9vXq9PNDmZEWgXeZyMQbhHoRfnT6/f3T6ObP5ePL4+Gmz8tSoppLnpYvj4Yfhnzy+Pjj8O/W6efG4N6019R8uLN1ta9usKpjq6Q9lo40kYjw9/bf7uzb6+q/3dqt0s+Pwr1orac5lIv0+fm52daKwLuHvrmEvLdgqaJXpJwhh32v1NCgzMiSxL9Gm5MpjIMliX4VgHat08+5DWDyAAAAAnRSTlP8+H38GacAAAHxSURBVEjH7dVpV6MwFAZgh3uBBMoOQi201O776jKO8///1tzICegpDh79pIf3S0/S+6RJCOnVr6uvRPl8WtziFv9IjCJvvsQiH8H2DYW/tq6+dw6xjc1Yc9I0zbpVpaYHKgD4UfIBvKRK43eJ8TSFIp0EG6f9QHWqjtLeZCDT97AB4woowxLrKoDxN783xHwa8VDgxxIfqeUwZNf0eVv2Umpx7FPZgMvmAcCwUMGzWs0Hn0bnhNXhbodwYMu6W4DehnDiVzuBOcDsDmuwFxE2J7Ju3BPoZZCOfIAarSH0LjHFAcpIYq8PcM2RDWgtTPaF1KddTFvub/UdrlUwLbSm4OvVbMTm1eK7OeHZH1lp00/v3HuAhSe7jnIJFa4OKLx5LHEPgqMB21haNwBYcqUWo9UjHLpS85XpzAAeeHkSVNgmWI8VtgTKoVz1cx4CBOU6NiltCVPewWiZhKcjBYvTNI5e3gqKaHWpNe9iPaZoK6CYuS2APUyLkca6y7g7ymgkWv67GN2F0Gq4P532oU/jrDVlPFfnu11mkNX/e4fhJINXmZ3p1exDEbVvNVyAuIlK6g/EWeWbx8A0tp3F2sYGTEfFMUHEiNbF4UDFnljWE0NsvnqRT/LlYrCKnxEv7tUmLGo1xqn8e/xjtLjFLf7m+B9NTDfhxHhL1QAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Workable Trigger";
        }
    })
    export class WorkableTrigger extends NodeBlock
    {
    
    }