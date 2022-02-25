import { IDefinition } from "../interfaces/definition";
import { connect } from "./mongodb";
import { DEFINITION_COLLECTION_NAME } from "../settings";
import { ObjectId } from 'mongodb';
import { ICluster, INode } from '@tripetto/map';

async function loadClusterNodes(db, node: INode): Promise<ICluster[] | undefined>
{
    if (
        ! node.block || typeof node.block.type !== "string" 
        || node.block.type !== "process-task"
        || typeof node.definitionId !== "string"
    ) {
        return undefined;
    }

    return undefined;
}

async function loadSubDefinitions(db, definition: IDefinition): Promise<IDefinition>
{
    if (! Array.isArray(definition.clusters)) {
        return Promise.resolve(definition);
    }

    let clusters: ICluster[] = [];

    return Promise.all(
            definition.clusters.map(async(cluster) => {
                clusters.push(cluster);

                if (! cluster.nodes) {
                    return;
                }

                return await Promise.all(cluster.nodes.map(async(node) => {
                    if (
                        ! node.block || typeof node.block.type !== "string" 
                        || node.block.type !== "process-task"
                        || typeof node.definitionId !== "string"
                    ) {
                        return;
                    }

                    let result = await db.collection(DEFINITION_COLLECTION_NAME).findOne({ _id: new ObjectId(<string> node.definitionId) });
                    if (! result) {
                        return;
                    }

                    let subDefinition: IDefinition = Object.assign({} as IDefinition, result);
                    clusters.push(...subDefinition.clusters);
                }));
            })
        )
        .then(() => {
            return Promise.resolve({
                clusters,
                builder: definition.builder,
                _id: definition._id,
                name: definition.name
            } as IDefinition);
        });
}

export {
    loadSubDefinitions
}