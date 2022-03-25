import { IExportableField } from "../interfaces/results";

export function isMultipleChoice(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-multiple-choice" || field.type === "multiple-choice";
}