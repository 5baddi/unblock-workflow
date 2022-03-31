import { IExportableField } from "../interfaces/results";

export function isCheckboxes(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-checkboxes" || field.type === "multiple-checkboxes";
}