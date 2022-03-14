import * as React from "react";
import { filter, findFirst, map, tripetto } from "tripetto-runner-foundation";
import { namespace } from "../../namespace";
import { MultipleChoice } from "tripetto-block-multiple-choice/runner";
import { IChatRenderProps, IChatRendering } from "../../interfaces/block";
import { MultipleChoiceFabric } from "tripetto-runner-fabric/components/multiple-choice";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";
import { SubmitIcon } from "../../ui/icons/submit";
import { ParagraphMessage } from "../../ui/message/paragraph";
import { ParagraphImage } from "../../ui/message/paragraph/image";
import { ParagraphCaption } from "../../ui/message/paragraph/caption";
import { NothingAnswered } from "../../ui/message/nothing";
import { ChoiceAnswer } from "../../ui/message/choice";

@tripetto({
    namespace,
    type: "node",
    identifier: "tripetto-block-multiple-choice",
    alias: "multiple-choice",
    autoRender: true,
})
export class MultipleChoiceBlock extends MultipleChoice implements IChatRendering {
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
                            {choice.name}
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

        return (answer && answer.name) || undefined;
    }

    input(props: IChatRenderProps, done?: () => void, cancel?: () => void): React.ReactNode {
        return (
            <>
                <MultipleChoiceFabric
                    styles={props.styles.multipleChoice}
                    view={props.view}
                    buttons={this.choices()}
                    alignment={(this.props.alignment && "horizontal") || "vertical"}
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
