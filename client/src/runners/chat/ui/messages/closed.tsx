import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";

export const ClosedMessage = (props: { readonly l10n: L10n.Namespace }) => (
    <ParagraphMessage>
        <ParagraphTitle>{props.l10n.pgettext("runner#2|💬 Messages|Conversation closed", "👋 Hi there!")}</ParagraphTitle>
        <ParagraphDescription>
            {props.l10n.pgettext("runner#2|💬 Messages|Conversation closed", "Nothing to talk about. The conversation is closed 🤐")}
        </ParagraphDescription>
    </ParagraphMessage>
);
