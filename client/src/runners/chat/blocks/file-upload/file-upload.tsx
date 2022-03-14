import * as React from "react";
import { tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { FileUpload } from "tripetto-block-file-upload/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { FileFabric, FileThumbnailFabric } from "tripetto-runner-fabric/components/file";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { TypingIndicator } from "../../ui/typing-indicator";
import { ImageAnswer } from "../../ui/message/image";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-file-upload",
    alias: "file-upload",
})
export class FileUploadBlock extends FileUpload implements IChatRendering {
    answer(props: IChatRenderProps): React.ReactNode {
        if (this.isImage) {
            return (
                <FileThumbnailFabric
                    controller={this}
                    service={props.attachments}
                    host={ImageAnswer}
                    loading={<TypingIndicator color={props.styles.answers.textColor} animate={true} />}
                    error={this.fileSlot.string || undefined}
                />
            );
        }

        return this.fileSlot.string || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <FileFabric
                    styles={props.styles.fileUpload}
                    controller={this}
                    service={props.attachments}
                    error={props.isFailed}
                    ariaDescribedBy={props.ariaDescribedBy}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                    labels={(id, message) => {
                        switch (id) {
                            case "explanation":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Choose or drag a file here");
                            case "dragging":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Drop your file now");
                            case "limit":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Size limit: %1", message);
                            case "extensions":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Allowed extensions: %1", message);
                            case "retry":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Try again");
                            case "progress":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Uploading (%1)", message);
                            case "delete":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Delete");
                            case "invalid-file":
                                return props.l10n.pgettext("runner#6|📂 File upload", "This file can't be used");
                            case "invalid-amount":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Too many files selected.");
                            case "invalid-extension":
                                return props.l10n.pgettext("runner#6|📂 File upload", "Extension is not allowed.");
                            case "invalid-size":
                                return props.l10n.pgettext("runner#6|📂 File upload", "File size is too large.");
                            case "error":
                                return props.l10n.pgettext(
                                    "runner#6|📂 File upload",
                                    "Something went wrong while uploading%1.",
                                    (message && ` (${message})`) || ""
                                );
                        }
                    }}
                />
                {props.ariaDescription}
                <ButtonFabric
                    styles={props.styles.buttons}
                    icon={SubmitIcon}
                    label={props.submitLabel}
                    disabled={!this.fileSlot.hasValue}
                    onClick={done}
                />
            </>
        );
    }
}
