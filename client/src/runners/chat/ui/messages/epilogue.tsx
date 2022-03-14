import * as React from "react";
import { IEpilogue, L10n, markdownifyToString, markdownifyToURL, noop } from "tripetto-runner-foundation";
import { TRunnerViews, markdownifyToJSX } from "tripetto-runner-react-hook";
import { IRuntimeStyles } from "../../hooks/styles";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";
import { ParagraphImage } from "../message/paragraph/image";
import { ParagraphVideo } from "../message/paragraph/video";
import { ParagraphButtons } from "../message/paragraph/buttons";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { RestartIcon } from "../icons/restart";
import { ReopenIcon } from "../icons/reopen";

export const Epilogue = (
    props: IEpilogue & {
        readonly l10n: L10n.Namespace;
        readonly styles: IRuntimeStyles;
        readonly view: TRunnerViews;
        readonly repeat?: () => void;
        readonly isPreview: boolean;
        readonly isTest: boolean;
    }
) => (
    <ParagraphMessage>
        {(props.isPreview || props.isTest) && props.redirectUrl ? (
            <ParagraphTitle>
                {props.l10n.pgettext(
                    "runner:chat",
                    "The test conversation has ended. In a live environment this conversation will now redirect to:"
                )}
                <br />
                <a href={markdownifyToURL(props.redirectUrl, props.context) || "#"} target="_blank">
                    {markdownifyToURL(props.redirectUrl, props.context) ||
                        props.l10n.pgettext("runner:chat", "The supplied URL is invalid!")}
                </a>
            </ParagraphTitle>
        ) : (
            <>
                {props.image && (
                    <ParagraphImage
                        src={markdownifyToURL(props.image, props.context, undefined, ["image/jpeg", "image/png", "image/svg", "image/gif"])}
                    />
                )}
                <ParagraphTitle>
                    {markdownifyToJSX(
                        props.title || props.l10n.pgettext("runner#2|💬 Messages|Conversation ended", "Thank you for this conversation!"),
                        props.context
                    )}
                </ParagraphTitle>
                {props.description && <ParagraphDescription>{markdownifyToJSX(props.description, props.context)}</ParagraphDescription>}
                {props.video && <ParagraphVideo src={markdownifyToURL(props.video, props.context)} view={props.view} play={true} />}
                {(props.button || props.repeatable || props.isTest) && (
                    <ParagraphButtons>
                        {props.button && (
                            <ButtonFabric
                                styles={{
                                    baseColor: props.styles.questions.textColor,
                                    mode: "outline",
                                }}
                                label={markdownifyToString(props.button.label, props.context)}
                                hyperlink={{
                                    url: markdownifyToURL(props.button.url, props.context),
                                    target: props.isPreview || props.isTest ? "blank" : props.button.target,
                                }}
                            />
                        )}
                        {(props.repeatable || props.isTest) && (
                            <ButtonFabric
                                styles={{
                                    baseColor: props.styles.questions.textColor,
                                    mode: "outline",
                                }}
                                label={
                                    props.repeatable
                                        ? props.l10n.pgettext("runner#2|💬 Messages|Conversation ended", "Reopen conversation")
                                        : props.l10n.pgettext("runner:chat", "Test again")
                                }
                                icon={props.repeatable ? ReopenIcon : RestartIcon}
                                onClick={props.isPreview && props.repeatable ? noop : props.repeat}
                            />
                        )}
                    </ParagraphButtons>
                )}
            </>
        )}
    </ParagraphMessage>
);
