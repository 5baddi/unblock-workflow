import { IDefinition } from "../interfaces/definition";
import { connect } from "./mongodb";
import { DEFINITION_COLLECTION_NAME } from "../settings";
import { ObjectId } from 'mongodb';
import { ICluster } from '@tripetto/map';

async function loadSubDefinitions(db, definition: IDefinition): Promise<IDefinition>
{
    if (! Array.isArray(definition.clusters)) {
        return Promise.resolve(definition);
    }

    let clusters: ICluster[] = [];

    return Promise.all(
            definition.clusters.map(async(cluster) => {
                let _cluster = Object.assign({}, JSON.parse(JSON.stringify(cluster)));

                if (typeof _cluster.nodes !== "undefined" && _cluster.nodes.length > 0) {
                    await Promise.all(_cluster.nodes.map(async(node, index) => {
                        if (
                            ! node.block || typeof node.block.type !== "string" 
                            || node.block.type !== "process-task"
                            || typeof node.block.definitionId !== "string" || node.block.definitionId === ""
                        ) {
                            return;
                        }
    
                        let result = await db.collection(DEFINITION_COLLECTION_NAME).findOne({ _id: new ObjectId(<string> node.block.definitionId) });
                        if (! result) {
                            return;
                        }
    
                        let subDefinition: IDefinition = Object.assign({} as IDefinition, result);
                        subDefinition.clusters.map(function (subCluster) {
                            let _index = index + 1;
 
                            _cluster.nodes?.splice(_index, 0, ...subCluster.nodes ?? []);
                            if (! Array.isArray(_cluster.branches)) {
                                _cluster.branches = [];
                            }

                            _cluster.branches?.push(...subCluster.branches ?? []);
                        });
                    }));
                }

                clusters.push(_cluster as ICluster);
            })
        )
        .then(() => {
            return Promise.resolve({
                clusters: clusters,
                builder: definition.builder,
                _id: definition._id,
                name: definition.name,
                description: definition.description,
                keywords: definition.keywords,
                language: definition.language,
                prologue: definition.prologue,
                epilogue: definition.epilogue,
                tenant_id: definition.tenant_id,
                tenants_ids: definition.tenants_ids,
            } as IDefinition);
        });
}

export {
    loadSubDefinitions
}