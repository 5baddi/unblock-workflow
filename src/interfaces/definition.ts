import { IDefinition as TripettoIDefinition } from "tripetto";
import { IBuilderProperties } from "tripetto";

export interface IDefinition extends TripettoIDefinition
{
    userId?: string;
}

export interface IEditorProperties extends IBuilderProperties {}