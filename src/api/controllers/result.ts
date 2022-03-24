import { ObjectId } from "mongodb";
import { DEFAULT_MONGODB_DATABASE, DEFINITION_COLLECTION_NAME, RESPONSE_COLLECTION_NAME, RESULT_WEBHOOK, NORMALIZED_RESPONSE_COLLECTION_NAME } from "../../settings";
import { connect } from "../../services/mongodb";
import { v4 as uuidv4 } from "uuid";
import { IResponse, IDefinition } from "../../interfaces/definition";
import * as Superagent from "superagent";
import { getDefinitionsNode } from "../../services/definition";
import { INode } from "@tripetto/map";

function save(request, response)
{
    let id = request.params.id;
    let tenantId = request.params.tenantId;
    let fields = request.body.fields;
    let unblockerId = request.body.unblockerId || undefined;
    let unblockerTenantId = request.body.unblockerTenantId || undefined;

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

                        let _fields: any[] = [];

                        Object.values(fields).forEach((field) => {
                            let data = JSON.parse(JSON.stringify(field));

                            data.type = data.type.replace("tripetto-block-", "");

                            if (data.type === "multiple-choice") {
                                let id = data.node.id || undefined;
                                
                                if (typeof id !== "undefined") {
                                    let values = '';
                                    let firstKey = undefined;
                                    let keysToIgnore: string[] = [];
                                    
                                    Object.values(fields).forEach((field) => {
                                        let data = JSON.parse(JSON.stringify(field));
                                        if (typeof data.node.id !== "undefined" && data.node.id === id) {
                                            if (values !== '') {
                                                values = values.concat(',');
                                            }
                                            
                                            values = values.concat(data.name);

                                            if (typeof firstKey === "undefined") {
                                                firstKey = data.key;
                                            } else {
                                                keysToIgnore.push(data.key);
                                            }
                                        }
                                    });

                                    if (Object.values(keysToIgnore).includes(data.key)) {
                                        return;
                                    } else {
                                        let node: INode | undefined = getDefinitionsNode(definition, id);
                                        if (typeof node !== "undefined") {
                                            data.name = node.name || '';
                                            data.value = values;

                                            return _fields.push(data);
                                        }
                                    }
                                }
                            }

                            if (data.type === "date") {
                                data.value = new Date(data.string || data.value);
                            }

                            if (typeof data.node.id !== "undefined") {
                                let node: INode | undefined = getDefinitionsNode(definition, data.node.id);
                                if (typeof node !== "undefined") {
                                    data.name = node.name || data.name || '';
                                }
                            }

                            return _fields.push(data);
                        });

                        let _response: IResponse = Object.assign({} as IResponse, { _fields });
                        _response.definition_id = <string> definition._id;
                        _response.tenant_id = definition.tenant_id;
                        _response.tenants_ids = definition.tenants_ids;
                        _response.created_at = new Date();

                        return db.collection(RESPONSE_COLLECTION_NAME)
                            .insertOne(JSON.parse(JSON.stringify(_response)))
                            .then(insertedResponse => {
                                let query = "INSERT INTO `results` (`id`, `definition_id`, `key`, `type`, `version`, `data_type`, `name`, `value`, `snapshot`, `updated_at`, `created_at`) VALUES ?";
                                let key = uuidv4();

                                let rows = Object.values(_fields).map((field) => {
                                    let data = JSON.parse(JSON.stringify(field));

                                    return [
                                        uuidv4(), 
                                        id,
                                        key,
                                        data.type,
                                        data.version,
                                        data.datatype,
                                        data.name,
                                        data.value,
                                        JSON.stringify(data),
                                        null,
                                        new Date(),
                                    ];
                                });

                                let error: any = undefined;

                                request.getConnection((conErr, connection) => {
                                    if (conErr) {
                                        error = conErr;

                                        return;
                                    }

                                    connection.query(query, [rows], (err) => {
                                        if (err) {
                                            error = err;

                                            return;
                                        }
                                    });
                                });

                                if (typeof error === "undefined") {
                                    return true;
                                }

                                return error;
                            })
                            .then(savingResponse => {
                                if (savingResponse !== true) {
                                    return response.status(500).send({
                                        success: false,
                                        message: savingResponse?.message  || "failed to save result.",
                                    });
                                }

                                let normalizedResponses = {
                                    unblocker_id: unblockerId,
                                    unblocker_tenant_id: unblockerTenantId,
                                    created_at: new Date()
                                };
                                 
                                Object.values(_fields).map((field) => {
                                    let data = JSON.parse(JSON.stringify(field));

                                    let name = data.name;
                                    if (typeof name !== "string") {
                                        return false;
                                    }

                                    let _name: string = name;
                                    _name = name.split('.').join(' ');
                                    _name = name.split('$').join(' ');

                                    normalizedResponses[_name] = data.value;

                                    return field;
                                });

                                return db.collection(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${definition.slug || definition._id}`)
                                    .insertOne(normalizedResponses)
                                    .then(normalizedResult => {
                                        client.close();

                                        if (RESULT_WEBHOOK) {
                                            return Superagent
                                                .post(RESULT_WEBHOOK)
                                                .send(_response)
                                                .then((webhookResult) => {
                                                    return response.send({ success: true });;
                                                });
                                        }
        
                                        return response.send({ success: true });;
                                    });
                            });
                    })
                    .catch(error => {
                        client.close();

                        return response.status(500).send({
                            success: false,
                            message: error.message || "failed to fetch definition",
                        });
                    });
            });
}

export {
    save
}