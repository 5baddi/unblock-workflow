import { IDefinition } from "../interfaces/definition";
import { BLOCK_NAME as PROCESS_TASK_BLOCK_NAME } from "../../client/src/components/editor/blocks/process-task";

function loadSubDefinition(definition: IDefinition): IDefinition
{
    if (Array.isArray(definition.clusters)) {
        definition.clusters.map(cluster => {
            if (cluster && Array.isArray(cluster.nodes)) {
                cluster.nodes.map(node => {
                    if (
                        ! node.block || typeof node.block.type !== "string" 
                        || node.block.type !== PROCESS_TASK_BLOCK_NAME
                        || typeof node.definitionId !== "string"
                    ) {
                        return;
                    }

                    console.log(node.definitionId);
                });
            }
        })
    }

    return definition;
}