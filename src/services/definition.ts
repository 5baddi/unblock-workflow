import { IDefinition } from "../interfaces/definition";
import { connect } from "./mongodb";
import { DEFINITION_COLLECTION_NAME } from "../settings";
import { ObjectId } from 'mongodb';

function loadSubDefinitions(definition: IDefinition): IDefinition
{
    if (Array.isArray(definition.clusters)) {
        definition.clusters.map(cluster => {
            if (cluster && Array.isArray(cluster.nodes)) {
                cluster.nodes.map(node => {
                    if (
                        ! node.block || typeof node.block.type !== "string" 
                        || node.block.type !== "process-task"
                        || typeof node.definitionId !== "string"
                    ) {
                        return;
                    }

                    connect()
                        .then(client => {
                            let db = client.db();
                            
                            db.collection(DEFINITION_COLLECTION_NAME)
                                .findOne({ _id: new ObjectId(<string> node.definitionId) })
                                .then(result => {
                                    if (! result === null) {
                                        client.close();

                                        return;
                                    }
                
                                    client.close();
                
                                    let definition = Object.assign({} as IDefinition, result);
                                    console.log(definition);
                                });
                        });
                });
            }
        })
    }

    return definition;
}

export {
    loadSubDefinitions
}