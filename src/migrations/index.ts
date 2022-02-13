import { migrateResultsTable } from './results';

export default function migrate(connection)
{    
    migrateResultsTable(connection);
}