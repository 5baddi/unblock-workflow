import { IDefinition } from "../interfaces";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { VERSION, PUBLIC_URL, ENV } from "../settings";
import API  from "../api";

const BUILDER_VERSION = {
    "name": "unblock",
    "version": VERSION
};

function parseDefinition(submittedDefinition: TripettoDefinition): IDefinition
{
    let definition: IDefinition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(submittedDefinition)));

    definition.builder = BUILDER_VERSION;

    return definition;
}

function checkDefinitionIsUpdated(definition: IDefinition): boolean
{
    return true;
}

function saveDefinition(definition: IDefinition): Promise<IDefinition | undefined>
{
    if (typeof definition.name === "undefined" && typeof definition.clusters === "undefined") {
        return Promise.resolve(definition);
    }

    return API.post(`${PUBLIC_URL}/api/definitions`, { definition })
        .then(response => {
            if (! response.data.definition) {
                return Promise.resolve(undefined);
            }

            let definition: IDefinition = parseDefinition(response.data.definition);
            definition.is_saved = true;

            return Promise.resolve(definition);
        })
        .catch(error => {
            if (ENV === "development") {
                console.log(error);
            }

            return Promise.reject(error);
        });
}

function loadDefinitionById(definitionId?: string): Promise<IDefinition | undefined>
{
    if (! definitionId) {
        return Promise.resolve(undefined);
    }

    return API.get(`${PUBLIC_URL}/api/definitions/${definitionId}`)
        .then(response => {
            if (! response.data.definition) {
                return Promise.resolve(undefined);
            }

            let definition: IDefinition = parseDefinition(response.data.definition);

            return Promise.resolve(definition);
        })
        .catch(error => {
            if (ENV === "development") {
                console.log(error);
            }

            return Promise.reject(error);
        });
}

export {
    parseDefinition,
    saveDefinition,
    loadDefinitionById,
    checkDefinitionIsUpdated
}