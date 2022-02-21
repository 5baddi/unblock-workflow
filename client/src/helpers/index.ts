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

export {
    loadDefaultDefinition,
    sleep,
    recursiveSearch
}