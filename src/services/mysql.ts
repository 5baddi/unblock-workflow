import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } from '../settings';
const mysql = require("mysql");

if (! MYSQL_USER || ! MYSQL_PASSWORD || ! MYSQL_DB) {
    throw new Error("Unblock Studio: Missing MySQL environment variables.")
}

export const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB
});