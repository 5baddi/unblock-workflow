export const ENV = process.env.ENV || "development";
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT || "3000";
export const PUBLIC_URL = process.env.PUBLIC_URL || `http://${SERVER_HOST}:${SERVER_PORT}`;
export const BASE_NAME = process.env.BASE_NAME || "/";
export const FRONTEGG_BASE_URL = process.env.FRONTEGG_BASE_URL || "https://unblock.frontegg.com";

export const VERSION = "0.0.8";