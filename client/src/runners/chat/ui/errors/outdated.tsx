import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";
import { ParagraphButtons } from "../message/paragraph/buttons";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { RetryIcon } from "../icons/retry";

export const OutdatedError = (props: { readonly l10n: L10n.Namespace; readonly color: string; readonly reload?: () => void }) => {
    const [isReloading, setReloading] = React.useState(false);

    return (
        <ParagraphMessage>
            <ParagraphTitle>{props.l10n.pgettext("runner#9|⚠ Errors|Submit error", "The form is outdated.")}</ParagraphTitle>
            <ParagraphDescription>
                {props.reload
                    ? props.l10n.pgettext(
                          "runner#9|⚠ Errors|Outdated error",
                          "It seems the form is changed by the owner while you were filling in the form. Your data cannot be processed, but you can try to reload the new version of the form while maintaining the data you've filled in. Click the reload button to try this. Please check your data after reloading and then submit again."
                      )
                    : props.l10n.pgettext(
                          "runner#9|⚠ Errors|Outdated error",
                          "It seems the form is changed by the owner while you were filling in the form. Your data cannot be processed. Try reloading the form."
                      )}
            </ParagraphDescription>
            {props.reload && (
                <ParagraphButtons>
                    <ButtonFabric
                        styles={{
                            baseColor: props.color,
                            mode: "outline",
                        }}
                        label={props.l10n.pgettext("runner#1|🆗 Buttons", "Reload")}
                        icon={RetryIcon}
                        disabled={isReloading}
                        onClick={() => {
                            setReloading(true);

                            props.reload!();
                        }}
                    />
                </ParagraphButtons>
            )}
        </ParagraphMessage>
    );
};
