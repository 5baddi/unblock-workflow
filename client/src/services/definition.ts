import { IDefinition } from "../interfaces";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { VERSION, PUBLIC_URL, ENV } from "../settings";
import API  from "../api";
import { omit } from "lodash";
import { DEFAULT_NAME } from "../global";
import { User } from "@frontegg/redux-store";

const BUILDER_VERSION = {
    "name": "unblock",
    "version": VERSION
};

function parseDefinition(submittedDefinition: TripettoDefinition, currentDefinition?, user?): IDefinition
{
    let definition: IDefinition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(submittedDefinition)));

    definition.builder = BUILDER_VERSION;
    definition.name = DEFAULT_NAME;

    if (typeof submittedDefinition?.name !== "undefined") {
        definition.name = submittedDefinition?.name;
    }

    if (currentDefinition && typeof currentDefinition._id === "string") {
        definition._id = currentDefinition._id;
    }
    
    if (currentDefinition && typeof currentDefinition.slug === "string" && typeof definition.slug === "undefined") {
        definition.slug = currentDefinition.slug;
    }

    let slug = definition.name.replace(/[^\w]/g, '-').toLocaleLowerCase();
    if (definition.name !== DEFAULT_NAME && definition.slug !== slug) {
        definition.slug = slug;
    }
    
    if (currentDefinition && typeof currentDefinition.created_at !== "undefined") {
        definition.created_at = currentDefinition.created_at;
    }

    if (currentDefinition && typeof currentDefinition?.hash === "string") {
        definition.hash = currentDefinition.hash;
    }

    if (user && typeof user.id === "string") {
        definition.user_id = user.id;
    }

    if (currentDefinition && typeof currentDefinition?.user_id === "string" && typeof definition.user_id !== "string") {
        definition.user_id = currentDefinition.user_id;
    } 
    
    if (user && typeof user.tenantId === "string") {
        definition.tenant_id = user.tenantId.replace(/[^\w]/g, '');
    }

    if (currentDefinition && typeof currentDefinition?.tenant_id === "string" && typeof definition.tenant_id !== "string") {
        definition.tenant_id = currentDefinition.tenant_id;
    } 
    
    if (user && Array.isArray(user.tenantIds)) {
        definition.tenants_ids = user.tenantIds;
    }

    if (currentDefinition && Array.isArray(currentDefinition?.tenants_ids) && ! Array.isArray(definition.tenants_ids)) {
        definition.tenants_ids = currentDefinition.tenants_ids;
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

function saveDefinition(definition: IDefinition, tenantId?: string): Promise<IDefinition | undefined>
{
    if (typeof definition.name === "undefined" && typeof definition.clusters === "undefined") {
        return Promise.resolve(definition);
    }

    let tenant = typeof tenantId !== "undefined" ? tenantId : '';

    return API.post(`${PUBLIC_URL}/api/definitions/${tenant}`, { definition })
        .then(response => {
            if (! response.data.definition) {
                return Promise.resolve(undefined);
            }

            let definition: IDefinition = parseDefinition(response.data.definition);
            definition.is_saved = true;

            return Promise.resolve(definition);
        })
        .then(definition => {
            if (! definition) {
                return Promise.resolve(undefined);
            }

            return API.get(`${PUBLIC_URL}/api/webhooks/builder/${definition._id}/${tenant}`)
                .then(result => {
                    return Promise.resolve(definition);
                });
        })
        .catch(error => {
            if (ENV === "development") {
                console.log(error);
            }

            return Promise.reject(error);
        });
}

function loadDefinitionById(definitionId?: string, tenantId?: string): Promise<IDefinition | undefined>
{
    if (! definitionId) {
        return Promise.resolve(undefined);
    }

    let tenant = typeof tenantId !== "undefined" ? tenantId : '';

    return API.get(`${PUBLIC_URL}/api/definition/${definitionId}/${tenant}`)
        .then(response => {
            if (! response.data.definition) {
                return undefined;
            }

            let definition: IDefinition = parseDefinition(response.data.definition);

            return definition;
        })
        .then(definition => {
            if (! definition || typeof definition._id === "undefined") {
                return definition;
            }

            return API.put(`${PUBLIC_URL}/api/definition/${definition._id}/hash/${tenant}`)
                .then(response => {
                    if (! response.data.hash) {
                        return undefined;
                    }
        
                    definition.hash = response.data.hash;
        
                    return definition;
                });
        })
        .catch(error => {
            if (ENV === "development") {
                console.log(error);
            }

            return error;
        });
}

function omitUniqueFields(definition?: IDefinition | IDefinition[]): object | undefined
{
    if (! definition) {
        return undefined;
    }

    if (definition instanceof Array) {
        return definition.map(value => {
            return omitUniqueFields(value);
        });
    }

    return omit(definition, ["_id", "user_id", "hash", "ip", "is_saved", "snaped_at", "tenant_id", "definition_id", "is_opened", "deleted_at", "created_at", "updated_at"]);
}

function exportDefinitionAsJsonFile(data?: IDefinition | IDefinition[]): void
{
    if (! data) {
        return;
    }

    let exportable = omitUniqueFields(data);

    let dataStr = JSON.stringify(exportable);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    let now = new Date();

    let exportFileDefaultName = `export-${now.toISOString().substring(0, 10)}.json`;

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

function getTenantId(user?: User): string
{
    if (! user || ! user.tenantId) {
        return "";
    }

    return user.tenantId.replace(/[^\w]/g, "");
}

export {
    parseDefinition,
    saveDefinition,
    loadDefinitionById,
    metaFieldsHasChanged,
    exportDefinitionAsJsonFile,
    omitUniqueFields,
    getTenantId
}