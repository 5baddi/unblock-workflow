import { ObjectId } from "mongodb";
import { DEFAULT_MONGODB_DATABASE, DEFINITION_COLLECTION_NAME, RESPONSE_WEBHOOK, BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD, BUILDER_ON_SAVE_WEBHOOK } from '../../settings';
import { connect } from "../../services/mongodb";
import { IResponse, IDefinition } from '../../interfaces/definition';
import * as Superagent from "superagent";

function send(request, response)
{
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    let fields = request.body.fields;
    if (! id || ! fields) {
        return response.status(401)
            .send({
                success: false,
                message: "Definition id and fields are required!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    if (typeof RESPONSE_WEBHOOK === "undefined") {
        return response.status(200)
            .send({ success: true });
    }

    return connect()
        .then(client => {
                let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
                
                db.collection(DEFINITION_COLLECTION_NAME)
                    .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                    .then(result => {
                        if (! result) {
                            client.close();

                            return response.status(404).send({
                                success: false,
                                message: "Definition not found!",
                            });
                        }

                        fields = Object.values(fields).map((field) => {
                            let data = JSON.parse(JSON.stringify(field));

                            data.type = data.type.replace("tripetto-block-", "");

                            return data;
                        });

                        let definition: IDefinition = Object.assign({} as IDefinition, result);

                        let _response: IResponse = Object.assign({} as IResponse, { fields });
                        _response.definition_id = <string> definition._id;
                        _response.tenant_id = definition.tenant_id;
                        _response.tenants_ids = definition.tenants_ids;
                        _response.created_at = new Date();

                        return Superagent
                            .post(RESPONSE_WEBHOOK)
                            // .auth(BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD)
                            .send(_response)
                            .then((webhookResult) => {
                                return response.send({ success: true});
                            });
                    })
                    .catch(error => {
                        client.close();

                        return response.status(200)
                            .send({ success: true });
                    });
            });
}

function save(request, response)
{
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    if (! id) {
        return response.status(401)
            .send({
                success: false,
                message: "Definition id is required!",
            });
    }

    let tenantDB: string | undefined = undefined;
    if (typeof tenantId === "string") {
        tenantDB = tenantId.replace(/[^\w]/g, '');
    }

    if (typeof BUILDER_ON_SAVE_WEBHOOK === "undefined") {
        return response.status(200)
            .send({ success: true });
    }

    return connect()
        .then(client => {
                let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
                
                db.collection(DEFINITION_COLLECTION_NAME)
                    .findOne({ _id: new ObjectId(id), deleted_at: { $exists: false } })
                    .then(result => {
                        if (! result) {
                            client.close();

                            return response.status(500).send({
                                success: false,
                                message: "Definition not found!",
                            });
                        }

                        let definition: IDefinition = Object.assign({} as IDefinition, result);

                        return Superagent
                            .post(BUILDER_ON_SAVE_WEBHOOK)
                            .auth(BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD)
                            .send(definition)
                            .then((webhookResult) => {
                                return response.send({ success: true});
                            });
                    })
                    .catch(error => {
                        client.close();

                        return response.status(200)
                            .send({ success: true });
                    });
            });
}

export {
    send,
    save
}