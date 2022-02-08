import { DEFINITION_KEY } from "../global";
import { IDefinition } from "../interfaces";

export function loadDefaultDefinition(): IDefinition | undefined
{
    let localDefinition = localStorage.getItem(DEFINITION_KEY)
        ? JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined")
        : Object.assign({} as IDefinition, {});

    if (! localDefinition) {
        return undefined;
    }

    return Object.assign({} as IDefinition, localDefinition);
}