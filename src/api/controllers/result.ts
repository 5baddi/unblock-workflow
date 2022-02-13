import { ObjectId } from "mongodb";
import { DEFINITION_COLLECTION_NAME } from '../../settings';
import { connect } from "../../services/mongodb";
import { v4 as uuidv4 } from 'uuid';

function save(request, response)
{
    let id = request.params.id;
    let fields = request.body.fields;
    if (! id || ! fields) {
        response.status(401)
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

                            return response.status(500).send({
                                success: false,
                                message: "Definition not found!",
                            });
                        }

                        client.close();

                        let query = "INSERT INTO `results` (`id`, `definition_id`, `key`, `type`, `version`, `data_type`, `name`, `value`, `snapshot`, `updated_at`, `created_at`) VALUES ?";
                        let key = uuidv4();

                        let rows = Object.values(fields).map((field) => {
                            let data = JSON.parse(JSON.stringify(field));
                            let type = data.type.replace("tripetto-block-", "");

                            return [
                                uuidv4(), 
                                id,
                                key,
                                type,
                                data.version,
                                data.datatype,
                                data.name,
                                data.value,
                                JSON.stringify(data),
                                null,
                                new Date(),
                            ];
                        });

                        return request.getConnection((conErr, connection) => {
                            if (conErr) {
                                return response.status(500).send({
                                    success: false,
                                    message: conErr.message  || "failed to save result.",
                                });
                            }

                            connection.query(query, [rows], (err) => {
                                if (err) {
                                    return response.status(500).send({
                                        success: false,
                                        message: err.message  || "failed to save result.",
                                    });
                                }

                                return response.send({ success: true});
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