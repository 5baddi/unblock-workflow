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

module.exports = router;