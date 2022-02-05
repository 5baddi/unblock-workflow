import { DEFAULT_DEFINITION, DEFINITION_KEY } from "../global";

export function loadDefaultDefinition(): object | undefined
{
    let localDefinition = JSON.parse(localStorage.getItem(DEFINITION_KEY) || JSON.stringify(DEFAULT_DEFINITION));

    return Object.assign({}, localDefinition);
}