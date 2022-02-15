import { ObjectId } from "mongodb";
import { DEFINITION_COLLECTION_NAME, ROOT_USER_ID, SNAPSHOT_COLLECTION_NAME, SUPPORTED_VERSION } from '../../settings';
import { IDefinition, ISnapshot } from "../../interfaces/definition";
import { IMongoDBFilter } from '../../interfaces';
import { connect } from "../../services/mongodb";

function checkDefinitionVersion(definition: IDefinition): boolean
{
    return definition.builder.version >= SUPPORTED_VERSION;
}

function index(request, response) 
{
    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .find({ deleted_at: { $exists: false } })
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
    if (! id) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                .then(result => {
                    if (! result === null) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to update definition name",
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
                        message: error.message || "failed to update definition name",
                    });
                });
        });
}

function save(request, response) 
{
    let body = request.body;
    if (! body.definition) {
        response.status(401)
            .send({
                success: false,
                message: "Definition is required!",
            });
    }

    let definition: IDefinition = Object.assign({} as IDefinition, body.definition);
    if (! checkDefinitionVersion(definition)) {
        response.status(400)
            .send({
                success: false,
                message: "Unsupported version of the definition!",
            });
    }

    return connect()
        .then(client => {
            let db = client.db();
            let now: Date = new Date();

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

                try {
                    let snapshot: ISnapshot = Object.assign({} as ISnapshot, definition);
                    snapshot.definition_id = definition._id;
                    snapshot.snaped_at = new Date();

                    delete snapshot._id;

                    db.collection(SNAPSHOT_COLLECTION_NAME).insertOne(JSON.parse(JSON.stringify(snapshot)))
                } catch(error) {
                    return response.status(401)
                        .send({
                            success: false,
                            message: error.message || "failed to take snapshot of definition",
                        });
                }

                delete definition._id;
                delete definition.is_saved;
            }

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate(filters, { $set: definition }, { upsert: true, returnDocument: "after" })
                .then(result => {
                    if (! result.ok || ! result.value) {
                        client.close();

                        return response.status(401).send({
                            success: false,
                            message: "failed to save definition",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result.value);
                    definition.is_saved = true;

                    return response.send({ success: true, definition });
                })
                .catch(error => {
                    client.close();

                    return response.status(500).send({
                        success: false,
                        message: error.message || "failed to save definition",
                    });
                });
        });
}

function remove(request, response) 
{
    let id = request.params.id;
    if (! id) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false }, is_opened: false }, { $set: { deleted_at: new Date() }})
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
    let body = request.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        response.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    let ids = Object.values(definitionsIds).map((id) => {
        return new ObjectId(id);
    });

    return connect()
        .then(client => {
            let db = client.db();
            let bulk = db.collection(DEFINITION_COLLECTION_NAME).initializeUnorderedBulkOp();

            bulk.find({ _id: { $in: ids }, deleted_at: { $exists: false }, is_opened: false }).update({ $set: { deleted_at: new Date() } });
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

export {
    index,
    find,
    save,
    remove,
    bulkRemove
}