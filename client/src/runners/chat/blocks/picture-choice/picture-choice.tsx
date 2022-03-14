import * as React from "react";
import { filter, findFirst, map, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { PictureChoice } from "tripetto-block-picture-choice/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { PictureChoiceFabric } from "tripetto-runner-fabric/components/picture-choice";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { ParagraphCaption } from "../../ui/message/paragraph/caption";
import { NothingAnswered } from "../../ui/message/nothing";
import { ChoiceAnswer } from "../../ui/message/choice";
import { ImageAnswer } from "../../ui/message/image";
import { EmojiAnswer } from "../../ui/message/emoji";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-picture-choice",
    autoRender: true,
})
export class PictureChoiceBlock extends PictureChoice implements IChatRendering {
    question(props: IChatRenderProps): React.ReactNode {
        return (
            ((props.name || props.description || this.props.caption || this.props.imageURL) && (
                <ParagraphMessage>
                    {this.props.imageURL && this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                    {props.name}
                    {this.props.caption && <ParagraphCaption>{props.markdownifyToJSX(this.props.caption)}</ParagraphCaption>}
                    {props.description}
                    {this.props.imageURL && !this.props.imageAboveText && (
                        <ParagraphImage src={props.markdownifyToImage(this.props.imageURL)} width={this.props.imageWidth} />
                    )}
                </ParagraphMessage>
            )) ||
            undefined
        );
    }

    answer(props: IChatRenderProps): React.ReactNode {
        const choices = this.choices();

        if (this.props.multiple) {
            if (findFirst(choices, (choice) => choice.slot?.hasValue || false)) {
                const selectedChoices = map(
                    filter(choices, (choice) => choice.slot?.value || false),
                    (choice) => (
                        <ChoiceAnswer key={choice.id} color={props.styles.answers.textColor}>
                            {choice.image ? (
                                <ImageAnswer>
                                    <img src={choice.image} />
                                </ImageAnswer>
                            ) : choice.emoji ? (
                                <EmojiAnswer>{choice.emoji}</EmojiAnswer>
                            ) : (
                                props.markdownifyToString(choice.name) || ""
                            )}
                        </ChoiceAnswer>
                    )
                );

                return (
                    (selectedChoices.length > 0 && selectedChoices) || (
                        <NothingAnswered
                            label={props.l10n.pgettext("runner#2|💬 Messages|Nothing selected", "Nothing selected")}
                            color={props.styles.answers.textColor}
                        />
                    )
                );
            }

            return undefined;
        }

        const value = this.valueOf("choice");
        const answer = value && findFirst(choices, (choice) => choice.id === value.reference);

        if (answer) {
            if (answer.image) {
                return (
                    <ImageAnswer>
                        <img src={answer.image} />
                    </ImageAnswer>
                );
            } else if (answer.emoji) {
                return <EmojiAnswer>{answer.emoji}</EmojiAnswer>;
            }

            return answer.name || undefined;
        }

        return undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <PictureChoiceFabric
                    styles={props.styles.pictureChoice}
                    view={props.view}
                    options={this.choices()}
                    size={this.props.size}
                    value={(!this.props.multiple && this.valueOf("choice")) || undefined}
                    required={this.required}
                    ariaDescribedBy={props.ariaDescribedBy}
                    autoSubmit={true}
                    onAutoFocus={props.autoFocus}
                    onFocus={props.focus}
                    onBlur={props.blur}
                    onSubmit={done}
                    onCancel={cancel}
                />
                {props.ariaDescription}
                {this.props.multiple && (
                    <ButtonFabric styles={props.styles.buttons} icon={SubmitIcon} label={props.submitLabel} onClick={done} />
                )}
            </>
        );
    }
}
