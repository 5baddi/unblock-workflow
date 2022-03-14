import { IChatStyles } from "../interfaces/styles";
import { TChatDisplay } from "../interfaces/props";
import { useRef } from "react";
import { color } from "tripetto-runner-fabric/color";
import { IAvataaars } from "tripetto-runner-fabric/components/avataaars";
import { Num, castToNumber } from "tripetto-runner-foundation";
import { SIZE } from "../ui/const";
import cssesc from "cssesc";

export interface IRuntimeStyles extends IChatStyles {
    readonly font: {
        readonly family: string;
        readonly size: number;
        readonly sizeSmall: number;
    };

    readonly background: {
        readonly color: string;
        readonly opacity: number;
        readonly url?: string;
        readonly positioning?: "auto" | "100% auto" | "auto 100%" | "cover" | "contain" | "repeat";
    };

    readonly questions: {
        readonly alignment: "left" | "right";
        readonly roundness: number | undefined;
        readonly backgroundColor: string;
        readonly borderColor?: string;
        readonly textColor: string;
    };

    readonly answers: {
        readonly alignment: "left" | "right";
        readonly roundness: number | undefined;
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly textColor: string;
        readonly avatarImage?: string;
    };

    readonly inputs: {
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly borderSize: number;
        readonly roundness: number | undefined;
        readonly textColor: string;
        readonly errorColor: string;
        readonly scale: number;
    };

    readonly checkboxes: {
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly borderSize: number;
        readonly roundness: number | undefined;
        readonly textColor: string;
        readonly errorColor: string;
        readonly scale: number;
    };

    readonly radiobuttons: {
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly borderSize: number;
        readonly textColor: string;
        readonly scale: number;
    };

    readonly matrix: {
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly borderSize: number;
        readonly textColor: string;
        readonly errorColor: string;
        readonly scale: number;
    };

    readonly yesNo: {
        readonly yesColor: string;
        readonly noColor: string;
        readonly outlineSize: number;
        readonly roundness: number | undefined;
        readonly scale: number;
        readonly margin: number;
        readonly alignment: "horizontal" | "vertical";
    };

    readonly rating: {
        readonly color: string;
        readonly scale: number;
    };

    readonly scale: {
        readonly color: string;
        readonly outlineSize: number;
        readonly roundness: number | undefined;
        readonly scale: number;
        readonly margin: number;
        readonly labelColor: string;
    };

    readonly multipleChoice: {
        readonly color: string;
        readonly outlineSize: number;
        readonly roundness: number | undefined;
        readonly scale: number;
        readonly margin: number;
    };

    readonly pictureChoice: {
        readonly color: string;
        readonly outlineSize: number;
        readonly roundness: number | undefined;
        readonly scale: number;
        readonly margin: number;
    };

    readonly fileUpload: {
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly borderSize: number;
        readonly roundness: number | undefined;
        readonly textColor: string;
        readonly errorColor: string;
        readonly scale: number;
    };

    readonly buttons: {
        readonly baseColor: string;
        readonly textColor: string | undefined;
        readonly outlineSize: number;
        readonly roundness: number | undefined;
        readonly mode: "fill" | "outline";
        readonly scale: number;
    };

    readonly chatButton: {
        readonly color: string;
        readonly image?: string;
    };
}

const generateRuntimeStyles = (styles: IChatStyles, display: TChatDisplay): IRuntimeStyles => {
    const backgroundColor = cssesc(
        (styles.background && styles.background.color) || (display === "page" ? "#fff" : display === "button" ? "#fff" : "transparent")
    );
    const questionsBackgroundColor = cssesc(
        (styles.questions && styles.questions.backgroundColor) ||
            color(
                styles.color ||
                    color(backgroundColor, (o) =>
                        o
                            .makeUnclear("#fff")
                            .makeBlackOrWhite()
                            .manipulate((m) => m.alpha(0.65))
                    ),
                (o) => o.makeUnclear("#000")
            )
    );

    return {
        ...styles,
        ...{
            background: {
                color: backgroundColor,
                url:
                    (styles.background &&
                        styles.background.url &&
                        cssesc(styles.background.url, {
                            quotes: "double",
                        })) ||
                    undefined,
                opacity:
                    styles.background?.color && styles.background?.url
                        ? Num.range(castToNumber(styles.background?.opacity, 100) * 0.01, 0, 1)
                        : 1,
                positioning: cssesc((styles.background && styles.background.positioning) || "auto") as
                    | "auto"
                    | "100% auto"
                    | "auto 100%"
                    | "cover"
                    | "contain"
                    | "repeat",
            },
            font: {
                family: cssesc((styles.font && styles.font.family) || "sans-serif"),
                size: (styles.font && styles.font.size && Num.range(castToNumber(styles.font.size, SIZE), 8, 30)) || SIZE,
                sizeSmall: (styles.font && styles.font.sizeSmall && Num.range(castToNumber(styles.font.sizeSmall, SIZE), 8, 30)) || SIZE,
            },
            questions: {
                alignment: styles.questions && styles.questions.alignment === "right" ? "right" : "left",
                roundness: styles.questions?.roundness,
                backgroundColor: questionsBackgroundColor,
                borderColor: (styles.questions && styles.questions.borderColor && cssesc(styles.questions.borderColor)) || undefined,
                textColor: cssesc(
                    (styles.questions && styles.questions.textColor) || color(questionsBackgroundColor, (o) => o.makeBlackOrWhite())
                ),
            },
            answers: {
                alignment: styles.answers && styles.answers.alignment === "left" ? "left" : "right",
                roundness: styles.answers?.roundness,
                backgroundColor: (styles.answers && styles.answers.backgroundColor && cssesc(styles.answers.backgroundColor)) || undefined,
                borderColor:
                    (styles.answers && styles.answers.borderColor && cssesc(styles.answers.borderColor)) ||
                    ((!styles.answers || !styles.answers.backgroundColor) &&
                        questionsBackgroundColor &&
                        cssesc(questionsBackgroundColor)) ||
                    undefined,
                textColor: cssesc(
                    (styles.answers && styles.answers.textColor) ||
                        (styles.answers && styles.answers.backgroundColor
                            ? color(styles.answers.backgroundColor, (o) => o.makeBlackOrWhite())
                            : (styles.answers && styles.answers.borderColor) || questionsBackgroundColor)
                ),
                avatarImage:
                    (styles.answers &&
                        styles.answers.avatarImage &&
                        cssesc(styles.answers.avatarImage, {
                            quotes: "double",
                        })) ||
                    undefined,
            },
            chatButton: {
                color: color((styles.chatButton && styles.chatButton.color) || (styles.background && styles.background.color), (o) =>
                    o.makeUnclear("#000")
                ),
                image:
                    (styles.chatButton &&
                        styles.chatButton.image &&
                        cssesc(styles.chatButton.image, {
                            quotes: "double",
                        })) ||
                    undefined,
            },
            inputs: {
                backgroundColor: cssesc(
                    (styles.inputs && styles.inputs.backgroundColor) || (styles.answers && styles.answers.backgroundColor) || "transparent"
                ),
                borderColor: cssesc(
                    (styles.inputs && styles.inputs.borderColor) ||
                        (styles.answers && styles.answers.borderColor) ||
                        ((!styles.answers || !styles.answers.backgroundColor) && questionsBackgroundColor) ||
                        "transparent"
                ),
                borderSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                textColor: cssesc(
                    (styles.inputs && styles.inputs.textColor) ||
                        (styles.answers && styles.answers.textColor) ||
                        (styles.answers && styles.answers.backgroundColor
                            ? color(styles.answers.backgroundColor, (o) => o.makeBlackOrWhite())
                            : (styles.answers && styles.answers.borderColor) || questionsBackgroundColor)
                ),
                errorColor: cssesc((styles.inputs && styles.inputs.errorColor) || "red"),
                scale: 0.6075 / 0.375,
            },
            checkboxes: {
                backgroundColor: cssesc(
                    (styles.checkboxes && styles.checkboxes.backgroundColor) || (styles.inputs && styles.inputs.backgroundColor) || (styles.answers && styles.answers.backgroundColor) || "transparent"
                ),
                borderColor: cssesc(
                    (styles.checkboxes && styles.checkboxes.borderColor) ||
                    (styles.inputs && styles.inputs.borderColor) ||
                        (styles.answers && styles.answers.borderColor) ||
                        ((!styles.answers || !styles.answers.backgroundColor) && questionsBackgroundColor) ||
                        "transparent"
                ),
                borderSize: (styles.checkboxes && castToNumber(styles.checkboxes.borderSize, 1)) || (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.checkboxes?.roundness || styles.inputs?.roundness,
                textColor: cssesc((styles.checkboxes && styles.checkboxes.textColor) || questionsBackgroundColor),
                errorColor: cssesc((styles.checkboxes && styles.checkboxes.errorColor) || (styles.inputs && styles.inputs.errorColor) || "red"),
                scale: 1,
            },
            radiobuttons: {
                backgroundColor: cssesc(
                    (styles.radiobuttons && styles.radiobuttons.backgroundColor) || (styles.inputs && styles.inputs.backgroundColor) || (styles.answers && styles.answers.backgroundColor) || "transparent"
                ),
                borderColor: cssesc(
                    (styles.radiobuttons && styles.radiobuttons.borderColor) ||
                    (styles.inputs && styles.inputs.borderColor) ||
                        (styles.answers && styles.answers.borderColor) ||
                        ((!styles.answers || !styles.answers.backgroundColor) && questionsBackgroundColor) ||
                        "transparent"
                ),
                borderSize: (styles.radiobuttons && castToNumber(styles.radiobuttons.borderSize, 1)) || (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                textColor: cssesc(
                    (styles.radiobuttons && styles.radiobuttons.textColor) || questionsBackgroundColor
                ),
                scale: 1,
            },
            matrix: {
                backgroundColor: cssesc(
                    (styles.matrix && styles.matrix.backgroundColor) || (styles.inputs && styles.inputs.backgroundColor) || (styles.answers && styles.answers.backgroundColor) || "transparent"
                ),
                borderColor: cssesc(
                    (styles.matrix && styles.matrix.borderColor) ||
                    (styles.inputs && styles.inputs.borderColor) ||
                        (styles.answers && styles.answers.borderColor) ||
                        ((!styles.answers || !styles.answers.backgroundColor) && questionsBackgroundColor) ||
                        "transparent"
                ),
                borderSize: (styles.matrix && castToNumber(styles.matrix.borderSize, 1)) || (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                textColor: cssesc((styles.matrix && styles.matrix.textColor) || questionsBackgroundColor),
                errorColor: cssesc((styles.matrix && styles.matrix.errorColor) || (styles.inputs && styles.inputs.errorColor) || "red"),
                scale: 1,
            },
            yesNo: {
                yesColor: cssesc((styles.inputs && styles.inputs.agreeColor) || "green"),
                noColor: cssesc((styles.inputs && styles.inputs.declineColor) || "red"),
                alignment: "horizontal",
                outlineSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                scale: 0.6075 / 0.375,
                margin: 8,
            },
            rating: {
                color: cssesc(
                    (styles.inputs && styles.inputs.selectionColor) ||
                        (styles.questions && styles.questions.borderColor) ||
                        questionsBackgroundColor
                ),
                scale: 2,
            },
            scale: {
                color: cssesc(
                    (styles.inputs && styles.inputs.selectionColor) ||
                        (styles.questions && styles.questions.borderColor) ||
                        questionsBackgroundColor
                ),
                outlineSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                scale: 0.6075 / 0.375,
                margin: 8,
                labelColor: questionsBackgroundColor,
            },
            multipleChoice: {
                color: cssesc(
                    (styles.inputs && styles.inputs.selectionColor) ||
                        (styles.questions && styles.questions.borderColor) ||
                        questionsBackgroundColor
                ),
                outlineSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                scale: 0.6075 / 0.375,
                margin: 8,
            },
            pictureChoice: {
                color: cssesc(
                    (styles.inputs && styles.inputs.selectionColor) ||
                        (styles.questions && styles.questions.borderColor) ||
                        questionsBackgroundColor
                ),
                outlineSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                scale: 0.6075 / 0.375,
                margin: 8,
            },
            fileUpload: {
                backgroundColor: cssesc(
                    (styles.inputs && styles.inputs.backgroundColor) || (styles.answers && styles.answers.backgroundColor) || "transparent"
                ),
                borderColor: cssesc(
                    (styles.inputs && styles.inputs.borderColor) ||
                        (styles.answers && styles.answers.borderColor) ||
                        ((!styles.answers || !styles.answers.backgroundColor) && questionsBackgroundColor) ||
                        "transparent"
                ),
                borderSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.inputs?.roundness,
                textColor: cssesc(
                    (styles.inputs && styles.inputs.textColor) ||
                        (styles.answers && styles.answers.textColor) ||
                        (styles.answers && styles.answers.backgroundColor
                            ? color(styles.answers.backgroundColor, (o) => o.makeBlackOrWhite())
                            : (styles.answers && styles.answers.borderColor) || questionsBackgroundColor)
                ),
                errorColor: cssesc((styles.inputs && styles.inputs.errorColor) || "red"),
                scale: 1,
            },
            buttons: {
                baseColor: cssesc(
                    (styles.buttons && styles.buttons.baseColor) ||
                        (styles.answers && (styles.answers.backgroundColor || styles.answers.borderColor)) ||
                        questionsBackgroundColor
                ),
                outlineSize: (styles.inputs && castToNumber(styles.inputs.borderSize, 1)) || 1,
                roundness: styles.buttons?.roundness,
                mode: styles.buttons && styles.buttons.mode === "outline" ? "outline" : "fill",
                textColor: (styles.buttons && styles.buttons.textColor && cssesc(styles.buttons.textColor)) || undefined,
                scale: 0.6075 / 0.375,
            },
        },
    };
};

const generateAvatar = (styles: IChatStyles): string | IAvataaars =>
    (styles.avatar &&
        styles.avatar.type === "image" &&
        styles.avatar.image &&
        cssesc(styles.avatar.image, {
            quotes: "double",
        })) || {
        skin: (styles.avatar && styles.avatar.skin) || "Light",
        eyeBrow: (styles.avatar && styles.avatar.eyeBrow) || "Neutral",
        eyes: (styles.avatar && styles.avatar.eyes) || "Neutral",
        mouth: (styles.avatar && styles.avatar.mouth) || "Neutral",
        top: (styles.avatar && styles.avatar.top) || "LongHairBob",
        hairColor: (styles.avatar && styles.avatar.hairColor) || "Black",
        hatColor: (styles.avatar && styles.avatar.hatColor) || undefined,
        facialHair: (styles.avatar && styles.avatar.facialHair) || "None",
        facialHairColor: (styles.avatar && styles.avatar.facialHairColor) || undefined,
        clothing: (styles.avatar && styles.avatar.clothing) || "BlazerShirt",
        clothingFabric: (styles.avatar && styles.avatar.clothingFabric) || undefined,
        clothingGraphic: (styles.avatar && styles.avatar.clothingGraphic) || undefined,
        accessories: (styles.avatar && styles.avatar.accessories) || "None",
    };

export const useStyles = (
    initialStyles: IChatStyles | undefined,
    display: TChatDisplay,
    changeDisplay: (styles: IChatStyles) => TChatDisplay,
    onChange: () => void
) => {
    const designtimeStyles = useRef<IChatStyles>(initialStyles || {});
    const runtimeStyles = useRef<IRuntimeStyles>();
    const avatar = useRef<string | IAvataaars>();

    if (!runtimeStyles.current) {
        runtimeStyles.current = generateRuntimeStyles(designtimeStyles.current, display);
    }

    if (!avatar.current) {
        avatar.current = generateAvatar(designtimeStyles.current);
    }

    return [
        designtimeStyles.current,
        runtimeStyles.current,
        avatar.current,
        (styles: IChatStyles) => {
            designtimeStyles.current = styles;
            runtimeStyles.current = generateRuntimeStyles(styles, changeDisplay(styles));
            avatar.current = generateAvatar(styles);

            onChange();
        },
    ] as [IChatStyles, IRuntimeStyles, string | IAvataaars, (styles: IChatStyles) => void];
};
