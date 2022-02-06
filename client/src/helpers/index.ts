import { DEFAULT_DEFINITION, DEFINITION_KEY } from "../global";
import { IDefinition } from "../interfaces";

export function loadDefaultDefinition(): IDefinition | undefined
{
    let localDefinition = JSON.parse(localStorage.getItem(DEFINITION_KEY) || JSON.stringify(DEFAULT_DEFINITION));

    return Object.assign({} as IDefinition, localDefinition);
}