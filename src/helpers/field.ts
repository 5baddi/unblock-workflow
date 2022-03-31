import { INode, IExportableField } from "../interfaces/results";
import { isDate } from "./date";

export function getFieldAlias(node: INode, field: IExportableField): string | undefined
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

export function getFieldType(node: INode, field: IExportableField): string
{
    let type: string = field.type;

    if (isDate(field) && typeof node?.block?.time === "boolean" && node?.block?.time === true) {
        type = "datetime";
    }

    return type;
}