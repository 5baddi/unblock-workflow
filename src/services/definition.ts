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
                if (! cluster.nodes || cluster.nodes.length === 0) {
                    clusters.push(cluster);

                    return;
                }

                return await Promise.all(cluster.nodes.map(async(node, index) => {
                    if (
                        ! node.block || typeof node.block.type !== "string" 
                        || node.block.type !== "process-task"
                        || typeof node.block.definitionId !== "string" || node.block.definitionId === ""
                    ) {
                        if (node.block && typeof node.block.type === "string" && node.block.type === "process-task" && typeof node.block.definitionId === "string" && node.block.definitionId === "") {
                            cluster.nodes?.splice(index, 1);
                        }

                        clusters.push(cluster);

                        return;
                    }

                    let result = await db.collection(DEFINITION_COLLECTION_NAME).findOne({ _id: new ObjectId(<string> node.block.definitionId) });
                    if (! result) {
                        cluster.nodes?.splice(index, 1);
                        clusters.push(cluster);

                        return;
                    }

                    let subDefinition: IDefinition = Object.assign({} as IDefinition, result);

                    cluster.nodes?.splice(index, 1);

                    clusters.push(cluster);
                    clusters.push(...subDefinition.clusters);
                }));
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