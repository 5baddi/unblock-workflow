import { IDefinition as TripettoIDefinition } from "tripetto";
import { IBuilderProperties } from "tripetto";
import { IEntity } from "./entity";

export interface IDefinition extends TripettoIDefinition, IEntity
{
    user_id?: string;
    is_saved?: boolean;
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
}