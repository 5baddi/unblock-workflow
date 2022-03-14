import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";
import { ParagraphButtons } from "../message/paragraph/buttons";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { RetryIcon } from "../icons/retry";

export const ConnectionError = (props: { readonly l10n: L10n.Namespace; readonly color: string; readonly retry?: () => void }) => (
    <ParagraphMessage>
        <ParagraphTitle>
            {props.l10n.pgettext("runner#9|⚠ Errors|Submit error", "Something went wrong while submitting your conversation.")}
        </ParagraphTitle>
        <ParagraphDescription>
            {props.l10n.pgettext(
                "runner#9|⚠ Errors|Connection error",
                "Please check your connection and try again (for the techies: The error console of your browser might contain more technical information about what went wrong)."
            )}
        </ParagraphDescription>
        <ParagraphButtons>
            <ButtonFabric
                styles={{
                    baseColor: props.color,
                    mode: "outline",
                }}
                label={props.l10n.pgettext("runner#1|🆗 Buttons", "Retry")}
                icon={RetryIcon}
                onClick={props.retry}
            />
        </ParagraphButtons>
    </ParagraphMessage>
);
