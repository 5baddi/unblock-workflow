import { IExportableField } from "../interfaces/results";

export function isMatrix(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-matrix" || field.type === "matrix";
}