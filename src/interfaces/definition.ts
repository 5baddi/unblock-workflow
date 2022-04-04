import { IBuilderProperties } from "tripetto";
import { IEntity } from "./entity";
import { ICluster, IBuilder, IPrologue, IEpilogue } from '@tripetto/map';

export interface IDefinition extends IEntity
{
    name?: string;
    slug?: string;
    user_id?: string;
    is_saved?: boolean;
    ip?: string;
    hash?: string;
    tenant_id?: string;
    tenants_ids?: Array<string>;

    /** Contains the clusters. */
    clusters: ICluster[];
    /** Contains information about the builder. */
    builder: IBuilder;
    /** Contains the map description. */
    description?: string;
    /** Contains the map keywords. */
    keywords?: string[];
    /** Contains the language of the map. */
    language?: string;
    /** Contains the prologue for the map. */
    prologue?: IPrologue;
    /** Contains the epilogue for the map. */
    epilogue?: IEpilogue;
    /**
     * Contains the preface for the map.
     * @deprecated
     */
    preface?: IPrologue;
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
    definition_name?: string;
    definition_slug?: string;
    unblockerId?: string;
    unblockerTenantId?: string;
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