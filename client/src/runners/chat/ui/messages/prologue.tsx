import * as React from "react";
import { IPrologue, noop } from "tripetto-runner-foundation";
import { TRunnerViews, markdownifyToJSX } from "tripetto-runner-react-hook";
import { TChatDisplay } from "../../interfaces/props";
import { IRuntimeStyles } from "../../hooks/styles";
import { ParagraphMessage } from "../message/paragraph";
import { ParagraphTitle } from "../message/paragraph/title";
import { ParagraphDescription } from "../message/paragraph/description";
import { ParagraphImage } from "../message/paragraph/image";
import { ParagraphVideo } from "../message/paragraph/video";
import { ParagraphButtons } from "../message/paragraph/buttons";
import { ButtonFabric } from "tripetto-runner-fabric/components/button";

export const Prologue = (
    props: IPrologue & {
        readonly view: TRunnerViews;
        readonly display: TChatDisplay;
        readonly styles: IRuntimeStyles;
        readonly kickOff?: () => void;
    }
) => (
    <ParagraphMessage>
        {props.image && <ParagraphImage src={props.image} />}
        {props.title && <ParagraphTitle>{markdownifyToJSX(props.title)}</ParagraphTitle>}
        {props.description && <ParagraphDescription>{markdownifyToJSX(props.description)}</ParagraphDescription>}
        {props.video && <ParagraphVideo src={props.video} view={props.view} />}
        {props.button && (
            <ParagraphButtons>
                <ButtonFabric
                    styles={{
                        baseColor: props.styles.questions.textColor,
                        mode: "outline",
                    }}
                    label={props.button}
                    onClick={props.view === "preview" ? noop : props.kickOff}
                    onAutoFocus={(e) => {
                        if (
                            props.view === "live" &&
                            (props.styles.autoFocus || props.display === "page" || props.display === "button") &&
                            e
                        ) {
                            e.focus();
                        }
                    }}
                />
            </ParagraphButtons>
        )}
    </ParagraphMessage>
);
