import { IEditorProperties } from "./interfaces";
import { PUBLIC_URL } from "./settings";

export const USER_ID_KEY = "user-id";
export const USER_TENANT_ID_KEY = "user-tenant-id";
export const APPS_LIST_KEY = "apps-list";
export const APP_TO_OPEN_KEY = "app-to-open";

export const DEFINITION_KEY = "definition";
export const DEFINITION_ID_KEY = "definition-id";
export const DEFINITION_NAME_KEY = "definition-name";
export const EDITOR_CONTAINER_ID: string = "editor-container";

export const DEFAULT_NAME = "Unnamed";
export const RUNNER_PREVIEW_APP = "workflow-runner-preview-app";
export const RUNNER_RUN_APP = "workflow-runner-run-app";

export const DEFAULT_EDITOR_PROPERTIES: IEditorProperties = {
    element: null,
    fonts: `${PUBLIC_URL}/fonts/`,
    disableLogo: true,
    disableTutorialButton: true,
    disableSaveButton: true,
    disableRestoreButton: true,
    disableClearButton: true,
    disableCloseButton: true,
    supportURL: false,
    disableOpenCloseAnimation: true,
    showTutorial: false,
    disableEditButton: true,
    zoom: "fit-horizontal"
};