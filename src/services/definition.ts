import { IDefinition, ISnapshot } from '../interfaces/definition';
import { connect } from "./mongodb";
import { DEFINITION_COLLECTION_NAME, DEFAULT_MONGODB_DATABASE, NORMALIZED_RESPONSE_COLLECTION_NAME, SNAPSHOT_COLLECTION_NAME, SUPPORTED_VERSION, ROOT_USER_ID } from "../settings";
import { ObjectId } from 'mongodb';
import { ICluster } from '@tripetto/map';
import { IMongoDBFilter } from '../interfaces/index';

function checkDefinitionVersion(definition: IDefinition): boolean
{
    return definition.builder.version >= SUPPORTED_VERSION;
}

async function loadSubDefinitions(db, definition: IDefinition): Promise<IDefinition>
{
    if (! Array.isArray(definition.clusters)) {
        return Promise.resolve(definition);
    }

    let clusters: ICluster[] = [];

    return Promise.all(
            definition.clusters.map(async(cluster) => {
                let _cluster = Object.assign({}, JSON.parse(JSON.stringify(cluster)));

                if (typeof _cluster.nodes !== "undefined" && _cluster.nodes.length > 0) {
                    await Promise.all(_cluster.nodes.map(async(node, index) => {
                        if (
                            ! node.block || typeof node.block.type !== "string" 
                            || node.block.type !== "process-task"
                            || typeof node.block.definitionId !== "string" || node.block.definitionId === ""
                        ) {
                            return;
                        }
    
                        let result = await db.collection(DEFINITION_COLLECTION_NAME).findOne({ _id: new ObjectId(<string> node.block.definitionId) });
                        if (! result) {
                            return;
                        }
    
                        let subDefinition: IDefinition = Object.assign({} as IDefinition, result);
                        subDefinition.clusters.map(function (subCluster) {
                            let _index = index + 1;
 
                            _cluster.nodes?.splice(_index, 0, ...subCluster.nodes ?? []);
                            if (! Array.isArray(_cluster.branches)) {
                                _cluster.branches = [];
                            }

                            _cluster.branches?.push(...subCluster.branches ?? []);
                        });
                    }));
                }

                clusters.push(_cluster as ICluster);
            })
        )
        .then(() => {
            return Promise.resolve({
                clusters: clusters,
                builder: definition.builder,
                _id: definition._id,
                name: definition.name,
                description: definition.description,
                keywords: definition.keywords,
                language: definition.language,
                prologue: definition.prologue,
                epilogue: definition.epilogue,
                tenant_id: definition.tenant_id,
                tenants_ids: definition.tenants_ids,
            } as IDefinition);
        });
}

async function saveDefinition(tenantDB, definition, request, response?) 
{
    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
            let existDefinition: IDefinition | null = null;

            if (typeof definition._id === "undefined") {
                return {
                    client,
                    db,
                    definition,
                    existDefinition
                };
            }

            return db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(definition._id) })
                .then(result => {
                    if (result !== null) {
                        existDefinition = result as IDefinition;
                    }

                    return {
                        client,
                        db,
                        definition,
                        existDefinition
                    };
                });
        })
        .then(async(query) => {
            if (query.existDefinition !== null && query.existDefinition.slug !== query.definition.slug && query.existDefinition.slug !== "undefined" && typeof query.definition.slug !== "undefined") {
                await query.db.collection(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.existDefinition.slug}`)
                    .rename(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.definition.slug}`);
            }

            return query;
        })
        .then(query => {
            let now: Date = new Date();
            let ip = request.headers['x-forwarded-for'] || null;
            let definition: IDefinition = query.definition;

            if (typeof definition._id === "string") {
                try {
                    let snapshot: ISnapshot = Object.assign({} as ISnapshot, definition);
                    snapshot.definition_id = definition._id;
                    snapshot.snaped_at = new Date();
                    snapshot.ip = ip;
    
                    delete snapshot._id;
    
                    query.db.collection(SNAPSHOT_COLLECTION_NAME).insertOne(JSON.parse(JSON.stringify(snapshot)));
                } catch(error) {
                    if (typeof response !== "undefined") {
                        return response.status(401)
                            .send({
                                success: false,
                                message: error.message || "failed to take snapshot of definition",
                            });
                    }
                }
            }

            if (query.existDefinition !== null && query.existDefinition.hash !== definition.hash && typeof response !== "undefined") {
                return response.status(409)
                    .send({
                        success: false,
                        key: "form-mismatch",
                        message: "Form mis-match with our records! please make sure to reload the page",
                    });
            }

            if (! checkDefinitionVersion(definition)) {
                if (typeof response !== "undefined") {
                    return response.status(505)
                        .send({
                            success: false,
                            key: "unsupported-version",
                            message: "Unsupported version! please reload the page",
                        });
                }
            }

            definition.ip = ip;

            if (typeof definition.user_id === "undefined") {
                definition.user_id = ROOT_USER_ID;
            }
            
            if (typeof definition.created_at === "undefined") {
                definition.created_at = now;
            }

            let filters = Object.assign({} as IMongoDBFilter, {});

            if (typeof definition._id === "undefined") {
                filters._id = definition._id = new ObjectId();
                definition.slug = definition._id.toJSON();
            }

            if (typeof definition._id === "string") {
                filters._id = new ObjectId(definition._id);
                filters.deleted_at = { $exists: false };

                definition.updated_at = now;

                delete definition._id;
                delete definition.is_saved;
            }

            query.db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndReplace(filters, definition, { upsert: true, returnDocument: "after" })
                .then(result => {
                    if (! result.ok || ! result.value) {
                        query.client.close();

                        if (typeof response !== "undefined") {
                            return response.status(401).send({
                                success: false,
                                message: "failed to save definition",
                            });
                        }
                    }

                    query.client.close();

                    let definition = Object.assign({} as IDefinition, result.value);
                    definition.is_saved = true;

                    if (typeof response !== "undefined") {
                        return response.send({ success: true, definition });
                    }
                })
                .catch(error => {
                    query.client.close();

                    if (typeof response !== "undefined") {
                        return response.status(500).send({
                            success: false,
                            message: error.message || "failed to save definition",
                        });
                    }
                });
        })
        .catch(error => {
            if (typeof response !== "undefined") {
                return response.status(500).send({
                    success: false,
                    message: error.message || "failed to save definition",
                });
            }
        });
}

export {
    loadSubDefinitions,
    checkDefinitionVersion,
    saveDefinition
}