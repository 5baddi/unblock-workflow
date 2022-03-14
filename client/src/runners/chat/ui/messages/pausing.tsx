import * as React from "react";
import { L10n } from "tripetto-runner-foundation";
import { verifyEmail } from "../../helpers/verify";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";
import { MailIcon } from "../icons/mail";
import { EmailFabric } from "tripetto-runner-fabric/components/email";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";

export const PausingQuestion = (props: { readonly l10n: L10n.Namespace }) => (
    <ParagraphMessage>
        <ParagraphTitle>{props.l10n.pgettext("runner#8|⏸ Pause conversation", "Pause this conversation")}</ParagraphTitle>
        <ParagraphDescription>
            {props.l10n.pgettext(
                "runner#8|⏸ Pause conversation",
                "Receive a link by email to resume later on any device, right where you left off."
            )}
        </ParagraphDescription>
    </ParagraphMessage>
);

export const PausingEmailInput = (props: {
    readonly l10n: L10n.Namespace;
    readonly value: string;
    readonly hadFocus: boolean;
    readonly onComplete: (emailAddress: string) => void;
    readonly onAutoFocus: (el: HTMLInputElement | null) => void;
    readonly onFocus: (e: React.FocusEvent) => string | void;
    readonly onBlur: (e: React.FocusEvent) => string | void;
    readonly styles: {
        readonly inputs: {
            readonly backgroundColor: string;
            readonly borderColor: string;
            readonly borderSize: number;
            readonly textColor: string;
            readonly errorColor: string;
        };

        readonly buttons: {
            readonly baseColor: string;
            readonly textColor: string | undefined;
            readonly mode: "fill" | "outline";
        };
    };
}) => {
    const [value, setValue] = React.useState(props.value);
    const isValid = verifyEmail(value);

    return (
        <>
            <EmailFabric
                styles={props.styles.inputs}
                required={true}
                value={value}
                placeholder={props.l10n.pgettext("runner#8|⏸ Pause conversation", "Your email address...")}
                error={(props.hadFocus && !isValid) || false}
                onChange={setValue}
                onAutoFocus={props.onAutoFocus}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                onSubmit={() => isValid && props.onComplete(value)}
            />
            <ButtonFabric
                styles={props.styles.buttons}
                icon={MailIcon}
                label={props.l10n.pgettext("runner#8|⏸ Pause conversation", "Receive resume link")}
                disabled={!isValid}
                onClick={() => props.onComplete(value)}
            />
        </>
    );
};
