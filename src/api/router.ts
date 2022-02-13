import {MongoClient, ObjectId} from "mongodb";
import { DEFINITION_COLLECTION_NAME, MONGODB_URL, ROOT_USER_ID, SNAPSHOT_COLLECTION_NAME } from '../settings';
import { IDefinition, ISnapshot } from "../interfaces/definition";
import { IMongoDBFilter } from '../interfaces';
import { db as mysqlDB } from "../services/mysql";
import { v4 as uuidv4 } from "uuid";

const express = require("express");
const router = express.Router();

// let definitionController = Container.resolve(DefinitionController);
// router.post("/definition", definitionController.save);

async function connect()
{
    try {
        if (! MONGODB_URL) {
            throw new Error("The environment variable 'MONGODB_URL' is not defined.");
        }

        return MongoClient.connect(MONGODB_URL)
            .then(connection => {
                return connection;
            });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

router.get("/definitions", (req, res) => {
    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .find({ deleted_at: { $exists: false } })
                .sort("created_at", "desc")
                .toArray()
                .then(items => {

                    client.close();

                    return res.send({ success: true, definitions: items });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to fetch definitions",
                    });
                });
        });
});

router.post("/definition", (req, res) => {
    let body = req.body;
    if (! body.definition) {
        res.status(401)
            .send({
                success: false,
                message: "Definition is required!",
            });
    }

    let definition: IDefinition = Object.assign({} as IDefinition, body.definition);

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

            let filters = Object.assign({} as IMongoDBFilter, { _id: new ObjectId() });

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
                    return res.status(401)
                        .send({
                            success: false,
                            message: error.message || "failed to take snapshot of definition",
                        });
                }

                delete definition._id;
                delete definition.is_saved;
            }

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate(filters, { $set: definition }, { upsert: (typeof definition._id !== "string"), returnDocument: "after" })
                .then(result => {
                    if (! result.ok || ! result.value) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to save definition",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result.value);
                    definition.is_saved = true;

                    return res.send({ success: true, definition });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to save definition",
                    });
                });
        });
});


router.put("/definition/:id?", (req, res) => {
    let body = req.body;
    let name = body.name;
    let id = req.params.id;
    if (! name) {
        res.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    id = new ObjectId(id);

    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: id, deleted_at: { $exists: false } }, { $set: { _id: id, name: name, updated_at: new Date() } }, { upsert: true, returnDocument: "after" })
                .then(result => {
                    if (! result.ok || ! result.value) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to update definition name",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result.value)

                    return res.send({ success: true, id: definition._id, name: definition.name });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to update definition name",
                    });
                });
        });
});

router.get("/definition/:id", (req, res) => {
    let id = req.params.id;
    if (! id) {
        res.status(401)
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

                        return res.status(401).send({
                            success: false,
                            message: "failed to update definition name",
                        });
                    }

                    client.close();

                    let definition = Object.assign({} as IDefinition, result);

                    return res.send({ success: true, definition });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to update definition name",
                    });
                });
        });
});

router.delete("/definition/:id", (req, res) => {
    let id = req.params.id;
    if (! id) {
        res.status(401)
            .send({
                success: false,
                message: "Bad request!",
            });
    }

    return connect()
        .then(client => {
            let db = client.db();

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndUpdate({ _id: new ObjectId(id), deleted_at: { $exists: false } }, { $set: { deleted_at: new Date() }})
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to delete definition",
                        });
                    }

                    client.close();

                    return res.send({ success: true });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to delete definition",
                    });
                });
        });
});

router.delete("/definitions", (req, res) => {
    let body = req.body;
    let definitionsIds: string[] = Object.assign({} as string[], JSON.parse(JSON.stringify(body.definitionsIds)));
    if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
        res.status(401)
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

            bulk.find({ _id: { $in: ids }, deleted_at: { $exists: false } }).update({ $set: { deleted_at: new Date() } });
            bulk.execute()
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to delete definitions",
                        });
                    }

                    client.close();

                    return res.send({ success: true });
                })
                .catch(error => {
                    client.close();

                    return res.status(500).send({
                        success: false,
                        message: error.message || "failed to delete definitions",
                    });
                });
        });
});

router.post("/result/:id", (req, res) => {
    let id = req.params.id;
    let fields = req.body.fields;
    if (! id || ! fields) {
        res.status(401)
            .send({
                success: false,
                message: "Definition id and fields are required!",
            });
    }

    return connect()
        .then(client => {
                let db = client.db();
                
                db.collection(DEFINITION_COLLECTION_NAME)
                    .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                    .then(result => {
                        if (! result) {
                            client.close();

                            return res.status(500).send({
                                success: false,
                                message: "Definition not found!",
                            });
                        }

                        client.close();

                        try {
                            mysqlDB.connect();
                            
                            let params = Object.values(fields).map((field) => {
                                let data = JSON.parse(JSON.stringify(field));

                                return [
                                    uuidv4(), 
                                    id,
                                    data.type,
                                    data.value,
                                    data,
                                    new Date(),
                                    new Date(),
                                ];
                            });
                            console.log(params);
                            

                            let data = null;
                            let error: any = null;

                            mysqlDB.query("INSERT INTO results VALUES ?", params, (err, result) => {
                                if (err) {
                                    error = err;
                                }

                                data = result;
                            });

                            mysqlDB.end();

                            if (error) {
                                return res.status(500).send({
                                    success: false,
                                    message: error.message  || "failed to save result.",
                                });
                            }

                            return res.send({ success: true, data });
                        } catch(error) {
                            return res.status(500).send({
                                success: false,
                                message: error.message  || "failed to save result.",
                            });
                        }

                        // let definition = Object.assign({} as IDefinition, result.value);
                        // definition.is_saved = true;
                    })
                    .catch(error => {
                        client.close();

                        return res.status(500).send({
                            success: false,
                            message: error.message || "failed to fetch definition",
                        });
                    });
            });
});

module.exports = router;