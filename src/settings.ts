export const ENV = process.env.ENV || "development";
export const APP_NAME = process.env.APP_NAME || "Unblock - Workflow";
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT || "3000";
export const URL = process.env.URL || `http://${SERVER_HOST}:${SERVER_PORT}`;
export const MONGODB_URL = process.env.MONGODB_URL;

if (! MONGODB_URL) {
    throw new Error("Unblock Studio: The environment variable 'MONGODB_URL' is not defined.");
}