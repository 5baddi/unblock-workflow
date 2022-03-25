import { ATTACHMENT_URL } from "../settings";
import { IExportableField } from "../interfaces/results";

export function isAttachment(field: IExportableField): boolean 
{
    return field.type === "tripetto-block-file-upload" || field.type === "file-upload";
}

export function attachmentUrl(field: IExportableField): string 
{
    return (field.reference && `${ATTACHMENT_URL}/${field.reference || ""}`) || "";
}