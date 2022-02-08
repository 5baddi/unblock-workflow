import { DEFINITION_KEY } from "../global";
import { IDefinition } from "../interfaces";

export function loadDefaultDefinition(): IDefinition | undefined
{
    try {
        let localDefinition = JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined");
        if (! localDefinition) {
            return undefined;
        }

        return Object.assign({} as IDefinition, localDefinition);
    } catch (error) {
        return undefined;
    }
}