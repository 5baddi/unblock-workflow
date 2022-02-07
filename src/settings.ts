import { IDefinition } from "./interfaces/definition";

export const ENV = process.env.ENV || "development";
export const APP_NAME = process.env.APP_NAME || "Unblock - Workflow";
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT || "3000";
export const PUBLIC_URL = process.env.PUBLIC_URL || `http://${SERVER_HOST}:${SERVER_PORT}`;
export const MONGODB_URL = process.env.MONGODB_URL;

if (! MONGODB_URL) {
    throw new Error("Unblock Studio: The environment variable 'MONGODB_URL' is not defined.");
}

export const DEFINITION_KEY = "definition";
export const DEFINITION_COLLECTION_NAME = "definitions";
export const TASK_COLLECTION_NAME = "tasks";
export const USER_COLLECTION_NAME = "users";

export const LOG_FILE = "unblock-workflow-%DATE%.log";
export const LOG_FOLDER = "./logs";
export const LOG_LEVEL = "error";