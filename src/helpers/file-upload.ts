import { IExportableField } from "../interfaces/results";

export function isFileUpload(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-file-upload" || field.type === "file-upload";
}