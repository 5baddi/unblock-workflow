import { IDefinition } from "../interfaces";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { VERSION, PUBLIC_URL, ENV } from "../settings";
import API  from "../api";

const BUILDER_VERSION = {
    "name": "unblock",
    "version": VERSION
};

function parseDefinition(submittedDefinition: TripettoDefinition, user?): IDefinition
{
    let definition: IDefinition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(submittedDefinition)));

    definition.builder = BUILDER_VERSION;

    if (typeof user.id === "string") {
        definition.user_id = user.id;
    }
    
    if (typeof user.tenantId === "string") {
        definition.tenant_id = user.tenantId;
    }

    return definition;
}

function metaFieldsHasChanged(submittedDefinition?: TripettoDefinition, stateDefinition?: IDefinition): boolean
{
    if (! submittedDefinition && ! stateDefinition) {
        return false;
    }

    if (submittedDefinition?.name !== stateDefinition?.name) {
        return true;
    }
    
    if (submittedDefinition?.description !== stateDefinition?.description) {
        return true;
    }
    
    if (submittedDefinition?.keywords?.join("") !== stateDefinition?.keywords?.join("")) {
        return true;
    }

    return false;
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
    metaFieldsHasChanged
}