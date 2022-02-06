import { IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";

export interface IDefinition extends TripettoIDefinition
{
    name?: string;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IEditorProps
{
    element: string;

    definition?: IDefinition;

    properties?: IEditorProperties;

    getDefinition(): IDefinition | undefined;
}

export interface IEditorState
{
    definition?: IDefinition;
}