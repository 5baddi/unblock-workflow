import { Builder, IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";
import { ModalProps } from "react-bootstrap/Modal";

export interface IDefinition extends TripettoIDefinition
{
    _id?: string;
    name?: string;
    userId?: string;
    isSaved: boolean;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IEditorProps
{
    element: string;

    definitionId?: string;

    definition?: IDefinition;

    getDefinition(): IDefinition | undefined;
}

export interface IEditorState
{
    definition?: IDefinition;
    showModal: boolean;
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

export interface IEditorMenuProps
{
    editor?: Builder;
}

export interface IEditorMenuState {}

export interface IEditorDefinitionsModalProps extends ModalProps
{
    createNewWorkflow: () => void;
    openWorkflow: (definition: IDefinition) => void;
    deleteWorkflow: (definitionId: string) => Promise<boolean>;
}

export interface IEditorDefinitionsModalState extends ModalProps
{
    definitions?: IDefinition[];
    isLoading: boolean;
}