import { IDefinition as TripettoIDefinition } from "tripetto";
import { IBuilderProperties } from "tripetto";
import { IEntity } from "./entity";

export interface IDefinition extends TripettoIDefinition, IEntity
{
    slug?: string;
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
    tenant_id?: string;
    tenants_ids?: Array<string>;
    fields: IResponseField[];
    created_at?: Date;
}

export interface IResponseField 
{
    key: string;
    name: string;
    type: string;
    version: string;
    node: any;
    slot: string;
    datatype: string;
    string: string;
    value: any;
    modified: boolean;
    reference?: string;
    time?: number;
}