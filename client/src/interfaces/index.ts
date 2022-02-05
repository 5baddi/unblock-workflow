export interface IDefinition
{
    name?: string;
}

export interface IEditorProps
{
    definition?: IDefinition;

    getDefinition(): IDefinition | undefined;
}