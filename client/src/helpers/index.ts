import { IBranch, ICluster, INode } from "@tripetto/map";
import { Export } from "tripetto-runner-foundation";
import { DEFINITION_KEY } from "../global";
import { IDefinition } from "../interfaces";

function loadDefaultDefinition(): IDefinition | undefined
{
    let localDefinition = window.sessionStorage.getItem(DEFINITION_KEY)
        ? JSON.parse(window.sessionStorage.getItem(DEFINITION_KEY) || "undefined")
        : Object.assign({} as IDefinition, {});

    if (! localDefinition) {
        return undefined;
    }

    return Object.assign({} as IDefinition, localDefinition);
}

function sleep(ms: number): Promise<void>
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function recursiveSearch(obj, searchKey, results = [])
{
    let r:any = results;

    Object.keys(obj).forEach(key => {
       let value:any = obj[key];

       if(key === searchKey && typeof value !== 'object') {
          r.push(value);
       } else if(typeof value === 'object') {
          recursiveSearch(value, searchKey, r);
       }
    });

    return r;
}

function getDefinitionNodesHelper(definition: IDefinition, id?: string, type?: string, onlyBranches?: boolean): INode[]
{
    let nodes: INode[] = [];

    (definition.clusters ?? []).map((cluster: ICluster) => {
        nodes.push(...getClusterNodesHelper(cluster, id, type, onlyBranches));
    });

    return nodes;
}

function getDefinitionNodeHelper(definition: IDefinition, id: string, type?: string, onlyBranches?: boolean): INode | undefined
{
    let nodes: INode[] = getDefinitionNodesHelper(definition, id, type, onlyBranches);
    if (Array.isArray(nodes) && nodes.length === 1) {
        return nodes[0];
    }

    return undefined;
}

function getClusterNodesHelper(cluster: ICluster, id?: string, type?: string, onlyBranches?: boolean): INode[]
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
                nodes.push(...getClusterNodesHelper(cluster, id, type));
            });
        });
    }

    return nodes;
}

function getFieldAliasHelper(node: INode, field: Export.IExportableField): string | undefined
{
    let alias: string | undefined = undefined;

    if (typeof node?.slots !== "undefined" && Array.isArray(node?.slots) && node?.slots.length > 0 && typeof field.slot === "string") {
        let slot = (node?.slots ?? []).find((slot) => slot.reference === field.slot);
        
        if (typeof slot !== "undefined" && typeof slot.alias === "string") {
            alias = slot.alias;
        }
    }

    return alias;
}

export {
    loadDefaultDefinition,
    sleep,
    recursiveSearch,
    getDefinitionNodesHelper,
    getDefinitionNodeHelper,
    getClusterNodesHelper,
    getFieldAliasHelper
}