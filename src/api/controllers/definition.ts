import { ObjectId } from "mongodb";
import { DEFAULT_MONGODB_DATABASE, DEFINITION_COLLECTION_NAME } from '../../settings';
import { IDefinition } from "../../interfaces/definition";
import { connect } from "../../services/mongodb";
import { loadSubDefinitions, saveDefinition } from "../../services/definition";
import { generateHash } from "../../helpers";

function index(request, response) 
{
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
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
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
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    if (! id) {
        response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(result => {
                    if (! result === null) {
                        client.close();

                        return response.status(400).send({
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
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    if (! id) {
        return response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(async(result) => {
                    if (! result === null) {
                        client.close();

                        return response.status(400).send({
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
    let tenantId = request.params.tenantId;
    let body = request.body;
    if (! body.definition) {
        response.status(400)
            .send({
                success: false,
                message: "Definition is required!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    let definition: IDefinition = Object.assign({} as IDefinition, body.definition);

    return saveDefinition(tenantDB, definition, request, response);
}

function hash(request, response)
{
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    if (! id) {
        return response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
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

                        return response.status(400).send({
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
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    let name = request.body.name;

    if (! id || ! name) {
        return response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(result => {
                    if (! result === null) {
                        client.close();

                        return response.status(400).send({
                            success: false,
                            message: "failed to find definition",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result);

                    definition.name = name;
                    definition.slug = name.replace(/[^\w]/g, '-').toLocaleLowerCase();

                    return saveDefinition(tenantDB, definition, request, response);
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

function remove(request, response) 
{
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    if (! id) {
        response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false } }, { $set: { deleted_at: new Date() }})
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return response.status(400).send({
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
    let tenantId = request.params.tenantId;
    let body = request.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
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

                        return response.status(400).send({
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
    let tenantId = request.params.tenantId;
    let body = request.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        response.status(400)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
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

async function migration(request, response) 
{
    return connect()
        .then(async(client) => {
            let db = client.db(DEFAULT_MONGODB_DATABASE);

            let definitions = await db.collection(DEFINITION_COLLECTION_NAME)
                .find({ tenant_id: { $exists: true }})
                .sort("created_at", "desc")
                .toArray();

            await Promise.all(Object.values(definitions || []).map(async(value) => {
                let definition: IDefinition = Object.assign({} as IDefinition, value);

                let tenantDB: string | undefined = undefined;
                if (typeof definition.tenant_id === "string") {
                    tenantDB = definition.tenant_id.replace(/[^\w]/g, '');
                }

                if (typeof tenantDB === "string" && tenantDB !== "") {
                    try {
                        await saveDefinition(tenantDB, definition, request);
                    } catch (e) {
                        console.log(e);

                        process.exit();
                    }
                }
            }));

            client.close();

            return response.send({ success: true, definitions }); 
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
    findForRunner,
    migration
}