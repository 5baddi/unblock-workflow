import { IDefinition } from "../interfaces";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { VERSION, PUBLIC_URL } from "../settings";
import API  from "../api";

const BUILDER_VERSION = {
    "name": "unblock",
    "version": VERSION
};

function parseDefinition(submitedDefinition: TripettoDefinition): IDefinition
{
    let definition: IDefinition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(submitedDefinition)));

    if (typeof definition.builder === "undefined") {
        definition.builder = BUILDER_VERSION;
    }

    return definition;
}

async function saveDefinition(definition: IDefinition): Promise<IDefinition | undefined>
{
    return API.post(`${PUBLIC_URL}/api/definitions`, { definition })
        .then(response => {
            if (! response.data.definition) {
                return Promise.resolve(undefined);
            }

            let definition = parseDefinition(response.data.definition);

            return Promise.resolve(definition);
        })
        .catch(error => Promise.reject(error));
}

export {
    parseDefinition,
    saveDefinition,
}