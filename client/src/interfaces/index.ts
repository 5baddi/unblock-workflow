import { Builder, IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";
import { ModalProps } from "react-bootstrap/Modal";
import { IBuilder } from "@tripetto/map";

export interface IDefinition extends TripettoIDefinition
{
    _id?: string;
    name?: string;
    user_id?: string;
    tenant_id?: string;
    is_saved: boolean;
    builder: IBuilder;
    updated_at?: Date;
    hash?: string;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IEditorProps
{
    element: string;
    definitionId?: string;
    manualSaving?: boolean;
    glue?: any;
    user?: any;
}

export interface IEditorState
{
    definition?: IDefinition;
    isLoading: boolean;
    isSaving: boolean;
    definitionChanged: boolean;
    showModal: boolean;
    glueWorkspace?: any;
    glueContext?: any;
    user?: any;
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
    bulkExportWorkflows: (definitionsIds: string[]) => Promise<boolean>;
}

export interface IEditorDefinitionsModalState extends ModalProps
{
    definitions?: IDefinition[];
    isLoading: boolean;
    selectionModel: string[];
}

export interface IModalProps extends ModalProps
{
    title?: string;

    onHide(): void;
}