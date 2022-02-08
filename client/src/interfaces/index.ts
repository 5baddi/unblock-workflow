import { IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";

export interface IDefinition extends TripettoIDefinition
{
    _id?: string;
    name?: string;
    userId?: string;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IEditorProps
{
    element: string;

    definitionId?: string;

    definition?: IDefinition;

    properties?: IEditorProperties;

    getDefinition(): IDefinition | undefined;
}

export interface IEditorState
{
    definition: IDefinition;
}

export interface IHeaderProps
{
    definition?: IDefinition;
}

export interface IHeaderState
{
    definition?: IDefinition;
    name?: string;
}

export interface IRunnerProps
{
    definitionId?: string;
}