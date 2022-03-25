import { IExportableField } from "../interfaces/results";

export function isDate(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-date" || field.type === "date";
}