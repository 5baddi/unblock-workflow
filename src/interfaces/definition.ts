import { IDefinition as TripettoIDefinition } from "tripetto";
import { IBuilderProperties } from "tripetto";
import { IEntity } from "./entity";

export interface IDefinition extends TripettoIDefinition, IEntity
{
    userId?: string;
}

export interface IEditorProperties extends IBuilderProperties {}