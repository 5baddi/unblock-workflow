import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";

export const EmptyMessage = (props: { readonly l10n: L10n.Namespace }) => (
    <ParagraphMessage>
        <ParagraphTitle>{props.l10n.pgettext("runner:chat", "👋 Hi there!")}</ParagraphTitle>
        <ParagraphDescription>
            {props.l10n.pgettext("runner:chat", "Please add a block first to get the magic going.")}
        </ParagraphDescription>
    </ParagraphMessage>
);
