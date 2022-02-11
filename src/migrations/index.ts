import { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } from '../settings';
import { migrateResultsTable } from './results';
const mysql = require("mysql");

let db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB
});

db.connect((error) => {
    if (error) {
        throw error;
    }

    // migrateResultsTable(db);
});