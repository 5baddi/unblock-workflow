import { IEditorProperties } from "./interfaces";
import { PUBLIC_URL } from "./settings";

export const DEFINITION_KEY = "definition";
export const DEFINITION_ID_KEY = "definition-id";
export const DEFINITION_NAME_KEY = "definition-name";
export const USER_ID_KEY = "user-id";
export const EDITOR_CONTAINER_ID: string = "editor-container";

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