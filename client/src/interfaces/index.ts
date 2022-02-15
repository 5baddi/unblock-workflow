import { Builder, IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";
import { ModalProps } from "react-bootstrap/Modal";
import { IBuilder } from "@tripetto/map";

export interface IDefinition extends TripettoIDefinition
{
    _id?: string;
    name?: string;
    user_id?: string;
    is_saved: boolean;
    builder: IBuilder;
    is_opened: boolean;
    updated_at?: Date;
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
    isLoading: boolean;
    showModal: boolean;
    showAlertModal: boolean;
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
    currentOpenedDefinition: string | undefined;

    createNewWorkflow: () => void;
    openWorkflow: (definitionId: string) => void;
    deleteWorkflow: (definitionId: string) => Promise<boolean>;
    bulkDeleteWorkflows: (definitionsIds: string[]) => Promise<boolean>;
}

export interface IEditorDefinitionsModalState extends ModalProps
{
    definitions?: IDefinition[];
    isLoading: boolean;
    selectionModel: string[];
}

export interface IEditorAlertModalProps extends ModalProps
{

}