export const ENV = process.env.ENV || "development";
export const APP_NAME = process.env.APP_NAME || "Unblock - Workflow";
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT || "3000";
export const PUBLIC_URL = process.env.PUBLIC_URL || `http://${SERVER_HOST}:${SERVER_PORT}`;
export const MONGODB_URL = process.env.MONGODB_URL;
export const DEFAULT_MONGODB_DATABASE = process.env.DEFAULT_MONGODB_DATABASE;
export const RESULT_WEBHOOK = process.env.RESULT_WEBHOOK;
export const RESPONSE_WEBHOOK = process.env.RESPONSE_WEBHOOK;
export const BUILDER_ON_SAVE_WEBHOOK = process.env.BUILDER_ON_SAVE_WEBHOOK;
export const BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME || "admin";
export const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD || "S57Yo4nzGEgdLX";

if (! MONGODB_URL || ! DEFAULT_MONGODB_DATABASE) {
    throw new Error("Unblock Studio: The environment variable 'MONGODB_URL' is not defined.");
}

export const MYSQL_HOST = process.env.MYSQL_HOST || "127.0.0.1";
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const MYSQL_DB = process.env.MYSQL_DB;

if (! MYSQL_USER || ! MYSQL_PASSWORD || ! MYSQL_DB) {
    throw new Error("Unblock Studio: Missing MySQL environment variables.")
}

export const DEFINITION_KEY = "definition";
export const DEFINITION_COLLECTION_NAME = "definitions";
export const SNAPSHOT_COLLECTION_NAME = "snapshots";
export const RESPONSE_COLLECTION_NAME = "responses";
export const NORMALIZED_RESPONSE_COLLECTION_NAME = "results-";
export const TASK_COLLECTION_NAME = "tasks";
export const USER_COLLECTION_NAME = "users";

export const ROOT_USER_ID = "root-user-id";

export const LOG_FILE = "unblock-workflow-%DATE%.log";
export const LOG_FOLDER = "./logs";
export const LOG_LEVEL = "error";

export const SUPPORTED_VERSION = "0.0.7";

export const PUBLIC_KEY_PATH = process.env.PUBLIC_KEY_PATH || '';

export const ATTACHMENT_URL = `${PUBLIC_URL}/attachment`;