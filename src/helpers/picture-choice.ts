import { IExportableField } from "../interfaces/results";

export function isPictureChoice(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-picture-choice" || field.type === "picture-choice";
}