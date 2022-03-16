import { Builder, IBuilderProperties, IDefinition as TripettoIDefinition } from "tripetto";
import { ModalProps } from "react-bootstrap/Modal";
import { IBuilder, ICluster, IDefinition as TripettoDefinition, IPrologue, IEpilogue } from "@tripetto/map";

export interface IDefinition extends TripettoIDefinition
{
    _id?: string;
    clusters: ICluster [];
    builder: IBuilder;
    name?: string;
    description?: string;
    keywords?: string[];
    language?: string;
    prologue?: IPrologue;
    epilogue?: IEpilogue;
    created_at?: Date | string | number;
    hash?: string;
    user_id?: string;
    tenant_id?: string;
    tenants_ids?: Array<string>;
    updated_at?: Date;
    is_saved?: boolean;
}

export interface IEditorProperties extends IBuilderProperties {}

export interface IEditorProps
{
    element: string;
    definitionId?: string;
    manualSaving?: boolean;
    allowExport?: boolean;
    glue?: any;
}

export interface IEditorState
{
    tripettoDefinition?: TripettoDefinition;
    definition?: IDefinition;
    isLoading: boolean;
    isSaving: boolean;
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
    previewMode?: boolean;
}

export interface IEditorMenuProps
{
    editor?: Builder;
}

export interface IEditorMenuState {}

export interface IEditorDefinitionsModalProps extends ModalProps
{
    currentOpenedDefinition: string | undefined;
    allowExport?: boolean;

    createNewWorkflow: () => void;
    openWorkflow: (definitionId: string) => void;
    deleteWorkflow: (definitionId: string) => Promise<boolean>;
    bulkDeleteWorkflows: (definitionsIds: string[]) => Promise<boolean>;
    bulkExportWorkflows: (definitionsIds: string[]) => Promise<boolean>;
    loadWorkflows: () => Promise<IDefinition[] | undefined>;
}

export interface IEditorDefinitionsModalState extends ModalProps
{
    definitions?: IDefinition[];
    isLoading: boolean;
    selectionModel: string[];
}