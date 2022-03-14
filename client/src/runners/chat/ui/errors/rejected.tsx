import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";

export const RejectedError = (props: { readonly l10n: L10n.Namespace; readonly color: string }) => (
    <ParagraphMessage>
        <ParagraphTitle>{props.l10n.pgettext("runner#9|⚠ Errors|Submit error", "Your data is rejected.")}</ParagraphTitle>
        <ParagraphDescription>
            {props.l10n.pgettext(
                "runner#9|⚠ Errors|Rejected error",
                "Unfortunately, your data is marked as invalid and therefore rejected. If you believe this is a mistake, please contact the form owner. We're sorry for the inconvenience."
            )}
        </ParagraphDescription>
    </ParagraphMessage>
);
