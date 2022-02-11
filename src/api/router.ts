import { Container } from "../container";
import Symbols from "../symbols";
import { DefinitionController } from "./controllers/definition";
import {MongoClient, ObjectId} from "mongodb";
import {
    DEFINITION_COLLECTION_NAME,
    MONGODB_URL,
    ROOT_USER_ID,
    TASK_COLLECTION_NAME,
    USER_COLLECTION_NAME
} from "../settings";
import {IDefinition} from "../interfaces/definition";

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
                .find()
                .sort({ name: 1 })
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
    let definition = body.definition;
    if (! definition) {
        res.status(401)
            .send({
                success: false,
                message: "Definition is required!",
            });
    }

    return connect()
        .then(client => {
            let db = client.db();

            if (typeof definition._id === "undefined") {
                definition._id = new ObjectId();
            }

            if (typeof definition._id === "string") {
                definition._id = new ObjectId(definition._id);
            }

            if (typeof definition.userId === "undefined") {
                definition.userId = ROOT_USER_ID;
            }

            db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndReplace({ _id: definition._id, userId: definition.userId }, definition, { upsert: true })
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to save definition",
                        });
                    }

                    client.close();

                    definition.isSaved = true;

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
                .findOneAndUpdate({ _id: id }, { $set: { _id: id, name: name } }, { upsert: true })
                .then(result => {
                    if (! result.ok) {
                        client.close();

                        return res.status(401).send({
                            success: false,
                            message: "failed to update definition name",
                        });
                    }

                    client.close();

                    return res.send({ success: true, id, name });
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
    let body = req.body;
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
                .findOne({ _id: new ObjectId(id) })
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
                .findOneAndDelete({ _id: new ObjectId(id) })
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
            
            bulk.find({ _id: { $in: ids } }).delete();
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

module.exports = router;