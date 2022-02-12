export function migrateResultsTable(db)
{
    let query = "CREATE TABLE IF NOT EXISTS `results` ( `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '', `definition_id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '', `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL, `value` longtext COLLATE utf8mb4_unicode_ci, `snapshot` json DEFAULT NULL, `updated_at` timestamp NULL DEFAULT NULL, `created_at` timestamp NULL DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

    db.query(query, (error, result) => {
        if (error) {
            throw error;
        }
    });
}