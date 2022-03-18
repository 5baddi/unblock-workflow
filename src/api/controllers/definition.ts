import { ObjectId } from "mongodb";
import { DEFAULT_MONGODB_DATABASE, DEFINITION_COLLECTION_NAME, ROOT_USER_ID, SNAPSHOT_COLLECTION_NAME, SUPPORTED_VERSION } from '../../settings';
import { IDefinition, ISnapshot } from "../../interfaces/definition";
import { IMongoDBFilter } from '../../interfaces';
import { connect } from "../../services/mongodb";
import { loadSubDefinitions } from "../../services/definition";
import { generateHash } from "../../helpers";

function checkDefinitionVersion(definition: IDefinition): boolean
{
    return definition.builder.version >= SUPPORTED_VERSION;
}

function index(request, response) 
{
    let tenant = request.query.tenant;
    let tenantId = request.params.tenantId;
    let userId = request.params.userId;
    let filter = JSON.parse(JSON.stringify({ deleted_at: { $exists: false } }));

    if (typeof tenantId === "string") {
        filter.tenant_id = tenantId;
    }
    
    // TODO: filter by user if they don't have permission to see all
    // if (typeof userId === "string") {
    //     filter.user_id = userId;
    // }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }
 
    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .find(filter)
                .sort("created_at", "desc")
                .toArray()
                .then(items => {
                    client.close();

                    return response.send({ success: true, definitions: items });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to fetch definitions",
                    });
                });
        });
}

function find(request, response) 
{
    let tenant = request.query.tenant;
    let id = request.params.id;
    if (! id) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(result => {
                    if (! result === null) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to find definition",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result);

                    return response.send({ success: true, definition });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to find definition",
                    });
                });
        });
}

async function findForRunner(request, response) 
{
    let tenant = request.query.tenant;
    let id = request.params.id;
    if (! id) {
        return response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(async(result) => {
                    if (! result === null) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to find definition",
                        });
                    }

                    let definition = Object.assign({} as IDefinition, result);
                    let _definition: IDefinition = await loadSubDefinitions(db, definition);

                    client.close();

                    return response.send({ success: true, definition: _definition });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to find definition",
                    });
                });
        });
}

function save(request, response) 
{
    let tenant = request.query.tenant;
    let body = request.body;
    if (! body.definition) {
        response.status(401)
            .send({
                success: false,
                message: "Definition is required!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    let definition: IDefinition = Object.assign({} as IDefinition, body.definition);

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
                    return response.status(401)
                        .send({
                            success: false,
                            message: error.message || "failed to take snapshot of definition",
                        });
                }
            }

            if (query.existDefinition !== null && query.existDefinition.hash !== definition.hash) {
                return response.status(409)
                    .send({
                        success: false,
                        key: "form-mismatch",
                        message: "Form mis-match with our records! please make sure to reload the page",
                    });
            }

            if (! checkDefinitionVersion(definition)) {
                return response.status(505)
                    .send({
                        success: false,
                        key: "unsupported-version",
                        message: "Unsupported version! please reload the page",
                    });
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

                        return response.status(401).send({
                            success: false,
                            message: "failed to save definition",
                        });
                    }

                    query.client.close();

                    let definition = Object.assign({} as IDefinition, result.value);
                    definition.is_saved = true;

                    return response.send({ success: true, definition });
                })
                .catch(error => {
                    query.client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to save definition",
                    });
                });
        })
        .catch(error => {
            return response.status(500).send({
                success: false,
                message: error.message || "failed to save definition",
            });
        });
}

function hash(request, response)
{
    let tenant = request.query.tenant;
    let id = request.params.id;
    if (! id) {
        return response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
            let hash = generateHash();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false } }, { $set: { hash } })
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to find definition",
                        });
                    }

                    client.close();

                    return response.send({ success: true, hash });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to update definition hash",
                    });
                });
        });
}

function updateName(request, response)
{
    let tenant = request.query.tenant;
    let id = request.params.id;
    let name = request.body.name;
    if (! id || ! name) {
        return response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
            let hash = generateHash();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false } }, { $set: { name } })
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to find definition",
                        });
                    }

                    client.close();

                    return response.send({ success: true, name });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to update definition hash",
                    });
                });
        });
}

function remove(request, response) 
{
    let tenant = request.query.tenant;
    let id = request.params.id;
    if (! id) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false } }, { $set: { deleted_at: new Date() }})
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to delete definition",
                        });
                    }

                    client.close();

                    return response.send({ success: true });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to delete definition",
                    });
                });
        });
}

function bulkRemove(request, response) 
{
    let tenant = request.query.tenant;
    let body = request.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    let ids = Object.values(definitionsIds).map((id) => {
        return new ObjectId(id);
    });

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
            let bulk = db.collection(DEFINITION_COLLECTION_NAME).initializeUnorderedBulkOp();

            bulk.find({ _id: { $in: ids }, deleted_at: { $exists: false } }).update({ $set: { deleted_at: new Date() } });
            bulk.execute()
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to delete definitions",
                        });
                    }

                    client.close();

                    return response.send({ success: true });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to delete definitions",
                    });
                });
        });
}

function bulkExport(request, response) 
{
    let tenant = request.query.tenant;
    let body = request.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (tenant) {
        tenantDB = tenant.split(' ').join('');
        tenantDB = tenant.split('$').join('');
        tenantDB = tenant.split('.').join('');
    }

    let ids = Object.values(definitionsIds).map((id) => {
        return new ObjectId(id);
    });

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .find({ _id: { $in: ids }, deleted_at: { $exists: false } })
                .sort("created_at", "desc")
                .toArray()
                .then(items => {
                    client.close();

                    return response.send({ success: true, definitions: items || [] });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to export definitions",
                    });
                });;
        });
}

export {
    index,
    updateName,
    find,
    save,
    hash,
    remove,
    bulkRemove,
    bulkExport,
    findForRunner
}