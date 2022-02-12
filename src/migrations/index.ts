import { migrateResultsTable } from './results';
import { db } from "../services/mysql";

export default function migrate()
{    
    db.connect((error) => {
        if (error) {
            throw error;
        }
    
        migrateResultsTable(db);
    });
}