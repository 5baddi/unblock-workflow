import { IDefinition as TripettoIDefinition } from "tripetto";
import { IBuilderProperties } from "tripetto";
import { TSerializeTypes, Export } from 'tripetto-runner-foundation';
import { IEntity } from "./entity";

export interface IDefinition extends TripettoIDefinition, IEntity
{
    user_id?: string;
    is_saved?: boolean;
    ip?: string;
    hash?: string;
    tenant_id?: string;
    tenants_ids?: Array<string>;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IResult extends IEntity
{
    definitionId: string;
    type?: string;
    value?: string | object;
}

export interface ISnapshot extends IDefinition
{
    definition_id: string;
    snaped_at?: Date;
    ip?: string;
}

export interface IResponse
{
    definition_id: string;
    tenants_ids?: Array<string>;
    key: string;
    name: string;
    type: string;
    version: string;
    node: Export.IExportableFieldNode;
    slot: string;
    datatype: string;
    string: string;
    value: TSerializeTypes;
    modified: boolean;
    reference?: string;
    time?: number;

    // TODO: move it to audit
    ip?: string;
}