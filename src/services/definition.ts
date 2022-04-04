import { IDefinition, ISnapshot } from "../interfaces/definition";
import { connect } from "./mongodb";
import { DEFINITION_COLLECTION_NAME, DEFAULT_MONGODB_DATABASE, NORMALIZED_RESPONSE_COLLECTION_NAME, SNAPSHOT_COLLECTION_NAME, SUPPORTED_VERSION, ROOT_USER_ID, ENV, RESPONSE_COLLECTION_NAME } from "../settings";
import { Db, ObjectId } from "mongodb";
import { IBranch, ICluster, INode } from "@tripetto/map";
import { IMongoDBFilter } from "../interfaces";

function checkDefinitionVersion(definition: IDefinition): boolean
{
    return definition.builder.version >= SUPPORTED_VERSION;
}

function isProcessTaskBlock(node: INode): boolean
{
    if (
        ! node.block || typeof node.block.type !== "string" 
        || node.block.type !== "process-task"
        || typeof node.block.definitionId !== "string" || node.block.definitionId === ""
    ) {
        return false;
    }

    return true;
}

async function loadSubDefinition(db: Db, definitionId: string): Promise<IDefinition | undefined>
{
    let result = await db.collection(DEFINITION_COLLECTION_NAME).findOne({ _id: new ObjectId(definitionId) });
    if (! result) {
        return undefined;
    }

    let subDefinition: IDefinition = Object.assign({} as IDefinition, result);

    return subDefinition;
}
    
async function loadSubClusters(db: Db, clusters: ICluster[]): Promise<ICluster[]>
{
    await Promise.all(
        await clusters.map(async(cluster, clusterIndex) => {
            cluster = await loadClusterSubBranches(db, cluster);

            let _cluster = JSON.parse(JSON.stringify(cluster));

            await Promise.all(
                await (cluster.nodes ?? []).map(async(node, nodeIndex) => {
                    if (! isProcessTaskBlock(node) || (typeof _cluster.nodes[nodeIndex].fetched === "boolean" && _cluster.nodes[nodeIndex].fetched === true)) {
                        return;
                    }

                    _cluster.nodes[nodeIndex].fetched = true;
                    clusters[clusterIndex] = _cluster as ICluster;

                    let subDefinition: IDefinition | undefined = await loadSubDefinition(db, <string> node.block?.definitionId);
                    if (typeof subDefinition === "undefined") {
                        return;
                    }

                    await Promise.all(
                        await (subDefinition.clusters ?? []).map(async(subCluter, index) => {
                            let _index = clusterIndex + index;

                            let _clusters = await loadSubClusters(db, [subCluter]);

                            await Promise.all(
                                await (_clusters ?? []).map(async(_subCluster, index) => {

                                    _subCluster = await loadClusterSubBranches(db, _subCluster);
                                    clusters.splice((_index + index) + 1, 0, _subCluster);
                                })
                            );
                        })
                    );
                }),
            );
        })
    );

    return clusters;
}

async function loadClusterSubBranches(db: Db, cluster: ICluster): Promise<ICluster>
{
    await Promise.all(
        await (cluster.branches ?? []).map(async(branch, branchIndex) => {
            if (typeof branch.fetched === "boolean" && branch.fetched === true) {
                return;
            }

            let _branch = JSON.parse(JSON.stringify(branch));
            _branch.fetched = true;

            let _clusters = await loadSubClusters(db, branch.clusters || []);

            if (Array.isArray(_clusters) && _clusters.length > 0) {
                _branch.clusters = _clusters as ICluster[];
            }

            if (Array.isArray(cluster.branches) && cluster.branches.length > 0) {
                cluster.branches[branchIndex] = _branch as IBranch;
            }
        }),
    );

    return cluster;
}

async function loadSubDefinitions(db: Db, definition: IDefinition): Promise<IDefinition>
{
    if (! Array.isArray(definition.clusters)) {
        return Promise.resolve(definition);
    }

    definition.clusters = await loadSubClusters(db, definition.clusters);

    return Promise.resolve(definition);
}

function getNodesDiffNames(existsNode: INode, newNode: INode): { existsName: string, newName: string }
{
    let newName = newNode.name || '';
    newName = newName.split('.').join(' ').split('$').join(' ');
    
    let existsName = existsNode.name || '';
    existsName = existsName.split('.').join(' ').split('$').join(' ');

    return { existsName, newName };
}

async function saveDefinition(tenantDB, definition, request, response?) 
{
    return connect()
        .then(client => {
            let db = client.db(tenantDB || DEFAULT_MONGODB_DATABASE);
            let existDefinition: IDefinition | null = null;

            if (typeof definition._id === "undefined") {
                return {
                    client,
                    db,
                    definition,
                    existDefinition
                };
            }

            return db.collection(DEFINITION_COLLECTION_NAME)
                .findOne({ _id: new ObjectId(definition._id) })
                .then(result => {
                    if (result !== null) {
                        existDefinition = result as IDefinition;
                    }

                    return {
                        client,
                        db,
                        definition,
                        existDefinition
                    };
                });
        })
        .then(async(query) => {
            if (query.existDefinition !== null && typeof query.existDefinition.slug !== "undefined" && typeof query.definition.slug !== "undefined") {
                try {
                    let existsCollection = await query.db.listCollections({name: `${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.existDefinition.slug.toLocaleLowerCase()}`}).toArray();
                    let existsNewCollection = await query.db.listCollections({name: `${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.definition.slug.toLocaleLowerCase()}`}).toArray();

                    if (! Array.isArray(existsCollection) || existsCollection.length === 0) {
                        await query.db.createCollection(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.definition.slug.toLocaleLowerCase()}`);

                        return query;
                    }
                    
                    if (query.existDefinition.slug !== query.definition.slug && ! Array.isArray(existsNewCollection) || existsNewCollection.length === 0) {
                        await query.db.collection(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.existDefinition.slug.toLocaleLowerCase()}`)
                            .rename(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.definition.slug.toLocaleLowerCase()}`);
                    }

                    let existsNodes: INode[] = getDefinitionNodes(query.existDefinition);
                    let newNodes: INode[] = getDefinitionNodes(definition);

                    let filedsShouldBeUpdated = existsNodes.filter((existsNode) => {
                        let newNode: INode | undefined = newNodes.find(node => node.id === existsNode.id);

                        if (typeof newNode !== "undefined") {
                            let { newName, existsName } = getNodesDiffNames(existsNode, newNode);

                            return newName !== existsName;
                        }

                        return false;
                    });

                    await Promise.all([
                        await filedsShouldBeUpdated.forEach(async(existsNode) => {
                            let newNode: INode | undefined = newNodes.find(node => node.id === existsNode.id);

                            if (typeof newNode !== "undefined" && typeof query.definition.slug !== "undefined") {
                                let { newName, existsName } = getNodesDiffNames(existsNode, newNode);

                                if (typeof newName === "string" && newName !== "" && typeof existsName === "string" && existsName !== "") {
                                    await query.db.collection(`${NORMALIZED_RESPONSE_COLLECTION_NAME}${query.definition.slug.toLocaleLowerCase()}`)
                                        .updateMany({ [existsName]: { $exists: true } }, { $rename: { [existsName]: newName } });
                                }
                            }
                        }),
                        await filedsShouldBeUpdated.forEach(async(existsNode) => {
                            let newNode: INode | undefined = newNodes.find(node => node.id === existsNode.id);

                            if (typeof newNode !== "undefined" && query.existDefinition && typeof query.existDefinition._id !== "undefined") {
                                let { newName } = getNodesDiffNames(existsNode, newNode);

                                if (typeof newName === "string" && newName !== "") {
                                    await query.db.collection(`${RESPONSE_COLLECTION_NAME}`)
                                        .updateMany({ definition_id: query.existDefinition._id.toString(), "fields.node.id": existsNode.id }, { $set: { "fields.$.name": newName } });
                                }
                            }
                        })
                    ]);

                    return query;
                } catch (error) {
                    if (ENV === "development") {
                        console.log(error);
                    }

                    if (typeof response !== "undefined") {
                        return response.status(400)
                            .send({
                                success: false,
                                message: error.message || "failed to take snapshot of definition",
                            });
                    }
                }
            }

            return query;
        })
        .then(async(query) => {
            let now: Date = new Date();
            let ip = request.headers['x-forwarded-for'] || null;
            let definition: IDefinition = query.definition;

            if (typeof definition._id === "string") {
                try {
                    let snapshot: ISnapshot = Object.assign({} as ISnapshot, definition);
                    snapshot.definition_id = definition._id;
                    snapshot.snaped_at = new Date();
                    snapshot.ip = ip;
    
                    delete snapshot._id;
    
                    query.db.collection(SNAPSHOT_COLLECTION_NAME).insertOne(JSON.parse(JSON.stringify(snapshot)));
                } catch(error) {
                    if (typeof response !== "undefined") {
                        return response.status(400)
                            .send({
                                success: false,
                                message: error.message || "failed to take snapshot of definition",
                            });
                    }
                }
            }

            if (typeof definition.name !== "undefined" && definition.name.toLocaleLowerCase() !== "unnamed") {
                try {
                    let existsWorkflowByName = await query.db.collection(DEFINITION_COLLECTION_NAME)
                        .findOne({ name: definition.name, deleted_at: { $exists: false } });

                    if (typeof existsWorkflowByName !== "undefined" && existsWorkflowByName?._id.toString() !== definition._id && existsWorkflowByName?.name === definition.name) {
                        if (typeof response === "undefined") {
                            process.exit();
                        }

                        return response.status(409)
                            .send({
                                success: false,
                                key: "duplicate-name",
                                message: "Workflow name already exists!",
                            });
                    }
                } catch (error) {
                    if (ENV === "development") {
                        console.log(error);
                    }

                    if (typeof response !== "undefined") {
                        return response.status(400)
                            .send({
                                success: false,
                                message: error.message || "failed to take snapshot of definition",
                            });
                    }
                }
            }

            if (query.existDefinition !== null && query.existDefinition.hash !== definition.hash && typeof response !== "undefined") {
                return response.status(409)
                    .send({
                        success: false,
                        key: "form-mismatch",
                        message: "Form mis-match with our records! please make sure to reload the page",
                    });
            }

            if (! checkDefinitionVersion(definition)) {
                if (typeof response !== "undefined") {
                    return response.status(505)
                        .send({
                            success: false,
                            key: "unsupported-version",
                            message: "Unsupported version! please reload the page",
                        });
                }
            }

            definition.ip = ip;

            if (typeof definition.user_id === "undefined") {
                definition.user_id = ROOT_USER_ID;
            }
            
            if (typeof definition.created_at === "undefined") {
                definition.created_at = now;
            }

            let filters = Object.assign({} as IMongoDBFilter, {});

            if (typeof definition._id === "undefined") {
                filters._id = definition._id = new ObjectId();
            }

            if (typeof definition.slug === "undefined") {
                definition.slug = definition._id.toString();
            }

            if (typeof definition._id !== "undefined") {
                filters._id = typeof definition._id === "string" ? new ObjectId(definition._id) : definition._id;
                filters.deleted_at = { $exists: false };

                definition.updated_at = now;

                delete definition._id;
                delete definition.is_saved;
            }

            return query.db.collection(DEFINITION_COLLECTION_NAME)
                .findOneAndReplace(filters, definition, { upsert: true, returnDocument: "after" })
                .then(result => {
                    if (! result.ok || ! result.value) {
                        query.client.close();

                        if (typeof response !== "undefined") {
                            return response.status(401).send({
                                success: false,
                                message: "failed to save definition",
                            });
                        }
                    }

                    query.client.close();

                    let definition = Object.assign({} as IDefinition, result.value);
                    definition.is_saved = true;
                    console.log(definition.tenant_id, definition._id);

                    if (typeof response !== "undefined") {
                        return response.send({ success: true, definition });
                    }
                });
        })
        .catch(error => {
            if (typeof response === "undefined") {
                return Promise.reject(error);
            }
                
            if (typeof response !== "undefined") {
                return response.status(500).send({
                    success: false,
                    message: error.message || "failed to save definition",
                });
            }
        });
}

function getDefinitionNodes(definition: IDefinition, id?: string, type?: string, onlyBranches?: boolean): INode[]
{
    let nodes: INode[] = [];

    (definition.clusters ?? []).map((cluster: ICluster) => {
        nodes.push(...getClusterNodes(cluster, id, type, onlyBranches));
    });

    return nodes;
}

function getDefinitionNode(definition: IDefinition, id: string, type?: string, onlyBranches?: boolean): INode | undefined
{
    let nodes: INode[] = getDefinitionNodes(definition, id, type, onlyBranches);
    if (Array.isArray(nodes) && nodes.length === 1) {
        return nodes[0];
    }

    return undefined;
}

function getClusterNodes(cluster: ICluster, id?: string, type?: string, onlyBranches?: boolean): INode[]
{
    let nodes: INode[] = [];

    if (Array.isArray(cluster.nodes) && typeof id === "undefined" && typeof type === "undefined" && (typeof onlyBranches === "undefined" || onlyBranches === false)) {
        nodes.push(...cluster.nodes);
    }

    if (Array.isArray(cluster.nodes) && typeof id === "string" && (typeof onlyBranches === "undefined" || onlyBranches === false)) {
        nodes.push(...cluster.nodes.filter((node: INode) => { return node.id === id; }));
    }

    if (Array.isArray(cluster.nodes) && typeof type === "string" && (typeof onlyBranches === "undefined" || onlyBranches === false)) {
        nodes.push(...cluster.nodes.filter((node: INode) => { return node.block?.type === type; }));
    }

    if (typeof onlyBranches === "undefined" || onlyBranches === true) {
        (cluster.branches ?? []).map((branch: IBranch) => {
            (branch.clusters ?? []).map((cluster: ICluster) => {
                nodes.push(...getClusterNodes(cluster, id, type));
            });
        });
    }

    return nodes;
}

export {
    loadSubDefinitions,
    checkDefinitionVersion,
    saveDefinition,
    getDefinitionNodes,
    getDefinitionNode
}