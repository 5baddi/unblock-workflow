import { TStylesContract } from "tripetto-runner-foundation";
import { PACKAGE_NAME, PACKAGE_VERSION } from '../constants';

export default (pgettext: (context: string, id: string, ...args: string[]) => string): TStylesContract => ({
    contract: {
        name: PACKAGE_NAME,
        version: PACKAGE_VERSION,
    },
    styles: [
        {
            elements: [
                {
                    type: "color",
                    name: "color",
                    label: pgettext("runner:chat", "Color"),
                    tier: "standard",
                },
            ],
        },
        {
            title: pgettext("runner:chat", "Avatar"),
            optional: true,
            name: "avatar",
            elements: [
                {
                    type: "dropdown",
                    name: "type",
                    label: pgettext("runner:chat", "Type"),
                    options: [
                        {
                            label: pgettext("runner:chat", "Illustration"),
                            value: "avataaar",
                        },
                        {
                            label: pgettext("runner:chat", "Custom image"),
                            value: "image",
                        },
                    ],
                    default: "avataaar",
                },
                {
                    type: "image",
                    name: "image",
                    label: pgettext("runner:chat", "Image (URL)"),
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "image",
                        },
                        action: "show",
                    },
                },
                {
                    type: "dropdown",
                    name: "skin",
                    label: pgettext("runner:chat", "🤝🏼 Skin"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: "🖐🏿",
                            value: "Black",
                        },
                        {
                            label: "🖐🏾",
                            value: "DarkBrown",
                        },
                        {
                            label: "🖐🏽",
                            value: "Brown",
                        },
                        {
                            label: "🖐🏼",
                            value: "Light",
                        },
                        {
                            label: "🖐🏻",
                            value: "Pale",
                        },
                        {
                            label: "🖐",
                            value: "Yellow",
                        },
                    ],
                    default: "Light",
                },
                {
                    type: "dropdown",
                    name: "eyes",
                    label: pgettext("runner:chat", "👁 Eyes"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Closed"),
                            value: "Close",
                        },
                        {
                            label: pgettext("runner:chat", "Crying"),
                            value: "Cry",
                        },
                        {
                            label: pgettext("runner:chat", "Dizzy"),
                            value: "Dizzy",
                        },
                        {
                            label: pgettext("runner:chat", "Eye-rolling"),
                            value: "EyeRoll",
                        },
                        {
                            label: pgettext("runner:chat", "Happy"),
                            value: "Happy",
                        },
                        {
                            label: pgettext("runner:chat", "Hearts"),
                            value: "Hearts",
                        },
                        {
                            label: pgettext("runner:chat", "Neutral"),
                            value: "Neutral",
                        },
                        {
                            label: pgettext("runner:chat", "Side"),
                            value: "Side",
                        },
                        {
                            label: pgettext("runner:chat", "Squint"),
                            value: "Squint",
                        },
                        {
                            label: pgettext("runner:chat", "Surprised"),
                            value: "Surprised",
                        },
                        {
                            label: pgettext("runner:chat", "Wink"),
                            value: "Wink",
                        },
                        {
                            label: pgettext("runner:chat", "Wink (wacky)"),
                            value: "WinkWacky",
                        },
                    ],
                    default: "Neutral",
                },
                {
                    type: "dropdown",
                    name: "eyeBrow",
                    label: pgettext("runner:chat", "✏ Eyebrow"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Angry"),
                            value: "Angry",
                        },
                        {
                            label: pgettext("runner:chat", "Angry (natural)"),
                            value: "AngryNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Flat"),
                            value: "FlatNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Neutral"),
                            value: "Neutral",
                        },
                        {
                            label: pgettext("runner:chat", "Neutral (natural)"),
                            value: "NeutralNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Raised/excited"),
                            value: "RaisedExcited",
                        },
                        {
                            label: pgettext("runner:chat", "Raised/excited (natural)"),
                            value: "RaisedExcitedNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Sad/concerned"),
                            value: "SadConcerned",
                        },
                        {
                            label: pgettext("runner:chat", "Sad/concerned (natural)"),
                            value: "SadConcernedNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Unibrow"),
                            value: "UnibrowNatural",
                        },
                        {
                            label: pgettext("runner:chat", "Up and down"),
                            value: "UpDown",
                        },
                        {
                            label: pgettext("runner:chat", "Up and down (natural)"),
                            value: "UpDownNatural",
                        },
                    ],
                    default: "Neutral",
                },
                {
                    type: "dropdown",
                    name: "mouth",
                    label: pgettext("runner:chat", "👄 Mouth"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Concerned"),
                            value: "Concerned",
                        },
                        {
                            label: pgettext("runner:chat", "Disbelief"),
                            value: "Disbelief",
                        },
                        {
                            label: pgettext("runner:chat", "Eating"),
                            value: "Eating",
                        },
                        {
                            label: pgettext("runner:chat", "Grimace"),
                            value: "Grimace",
                        },
                        {
                            label: pgettext("runner:chat", "Neutral"),
                            value: "Neutral",
                        },
                        {
                            label: pgettext("runner:chat", "Sad"),
                            value: "Sad",
                        },
                        {
                            label: pgettext("runner:chat", "Screaming"),
                            value: "ScreamOpen",
                        },
                        {
                            label: pgettext("runner:chat", "Serious"),
                            value: "Serious",
                        },
                        {
                            label: pgettext("runner:chat", "Smiling"),
                            value: "Smile",
                        },
                        {
                            label: pgettext("runner:chat", "Tongue"),
                            value: "Tongue",
                        },
                        {
                            label: pgettext("runner:chat", "Twinkle"),
                            value: "Twinkle",
                        },
                        {
                            label: pgettext("runner:chat", "Vomit"),
                            value: "Vomit",
                        },
                    ],
                    default: "Neutral",
                },
                {
                    type: "dropdown",
                    name: "top",
                    label: pgettext("runner:chat", "✂ Hair/hat"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "No hair"),
                            value: "NoHair",
                        },
                        {
                            label: pgettext("runner:chat", "Eyepatch"),
                            value: "Eyepatch",
                        },
                        {
                            label: pgettext("runner:chat", "Hat"),
                            value: "Hat",
                        },
                        {
                            label: pgettext("runner:chat", "Hijab"),
                            value: "Hijab",
                        },
                        {
                            label: pgettext("runner:chat", "Turban"),
                            value: "Turban",
                        },
                        {
                            label: pgettext("runner:chat", "Winter hat (variant 1)"),
                            value: "WinterHat1",
                        },
                        {
                            label: pgettext("runner:chat", "Winter hat (variant 2)"),
                            value: "WinterHat2",
                        },
                        {
                            label: pgettext("runner:chat", "Winter hat (variant 3)"),
                            value: "WinterHat3",
                        },
                        {
                            label: pgettext("runner:chat", "Winter hat (variant 4)"),
                            value: "WinterHat4",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Big"),
                            value: "LongHairBigHair",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Bob"),
                            value: "LongHairBob",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Bun"),
                            value: "LongHairBun",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Curly"),
                            value: "LongHairCurly",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Curvy"),
                            value: "LongHairCurvy",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Dreads"),
                            value: "LongHairDreads",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Frida"),
                            value: "LongHairFrida",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Fro"),
                            value: "LongHairFro",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Fro (with band)"),
                            value: "LongHairFroBand",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Not too long"),
                            value: "LongHairNotTooLong",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Shaved sides"),
                            value: "LongHairShavedSides",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Mia Wallace"),
                            value: "LongHairMiaWallace",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Straight (variant 1)"),
                            value: "LongHairStraight",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Straight (variant 2)"),
                            value: "LongHairStraight2",
                        },
                        {
                            label: pgettext("runner:chat", "Long hair / Straight strand"),
                            value: "LongHairStraightStrand",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Dreads (variant 1)"),
                            value: "ShortHairDreads01",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Dreads (variant 2)"),
                            value: "ShortHairDreads02",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Frizzle"),
                            value: "ShortHairFrizzle",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Shaggy mullet"),
                            value: "ShortHairShaggyMullet",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Curly"),
                            value: "ShortHairShortCurly",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Flat"),
                            value: "ShortHairShortFlat",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Round"),
                            value: "ShortHairShortRound",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Waved"),
                            value: "ShortHairShortWaved",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / Sides"),
                            value: "ShortHairSides",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / The Caesar"),
                            value: "ShortHairTheCaesar",
                        },
                        {
                            label: pgettext("runner:chat", "Short hair / The caesar (side part)"),
                            value: "ShortHairTheCaesarSidePart",
                        },
                    ],
                    default: "LongHairBob",
                },
                {
                    type: "dropdown",
                    name: "hairColor",
                    label: pgettext("runner:chat", "🎨 Hair color"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.top",
                                value: [
                                    "LongHairBigHair",
                                    "LongHairBob",
                                    "LongHairBun",
                                    "LongHairCurly",
                                    "LongHairCurvy",
                                    "LongHairDreads",
                                    "LongHairFro",
                                    "LongHairFroBand",
                                    "LongHairNotTooLong",
                                    "LongHairMiaWallace",
                                    "LongHairStraight",
                                    "LongHairStraight2",
                                    "LongHairStraightStrand",
                                    "ShortHairDreads01",
                                    "ShortHairDreads02",
                                    "ShortHairFrizzle",
                                    "ShortHairShaggyMullet",
                                    "ShortHairShortCurly",
                                    "ShortHairShortFlat",
                                    "ShortHairShortRound",
                                    "ShortHairShortWaved",
                                    "ShortHairSides",
                                    "ShortHairTheCaesar",
                                    "ShortHairTheCaesarSidePart",
                                ],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Auburn"),
                            value: "Auburn",
                        },
                        {
                            label: pgettext("runner:chat", "Black"),
                            value: "Black",
                        },
                        {
                            label: pgettext("runner:chat", "Blonde"),
                            value: "Blonde",
                        },
                        {
                            label: pgettext("runner:chat", "Blonde (golden)"),
                            value: "BlondeGolden",
                        },
                        {
                            label: pgettext("runner:chat", "Brown"),
                            value: "Brown",
                        },
                        {
                            label: pgettext("runner:chat", "Brown (dark)"),
                            value: "BrownDark",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel (pink)"),
                            value: "PastelPink",
                        },
                        {
                            label: pgettext("runner:chat", "Platinum"),
                            value: "Platinum",
                        },
                        {
                            label: pgettext("runner:chat", "Red"),
                            value: "Red",
                        },
                        {
                            label: pgettext("runner:chat", "SilverGray"),
                            value: "SilverGray",
                        },
                    ],
                    default: "Black",
                },
                {
                    type: "dropdown",
                    name: "hatColor",
                    label: pgettext("runner:chat", "🎅 Hat color"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.top",
                                value: ["Hijab", "Turban", "WinterHat1", "WinterHat2", "WinterHat3", "WinterHat4"],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Black"),
                            value: "Black",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 1)"),
                            value: "Blue01",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 2)"),
                            value: "Blue02",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 3)"),
                            value: "Blue03",
                        },
                        {
                            label: pgettext("runner:chat", "Gray (variant 1)"),
                            value: "Gray01",
                        },
                        {
                            label: pgettext("runner:chat", "Gray (variant 2)"),
                            value: "Gray02",
                        },
                        {
                            label: pgettext("runner:chat", "Heather"),
                            value: "Heather",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel blue"),
                            value: "PastelBlue",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel green"),
                            value: "PastelGreen",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel orange"),
                            value: "PastelOrange",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel red"),
                            value: "PastelRed",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel yellow"),
                            value: "PastelYellow",
                        },
                        {
                            label: pgettext("runner:chat", "Pink"),
                            value: "Pink",
                        },
                        {
                            label: pgettext("runner:chat", "Red"),
                            value: "Red",
                        },
                        {
                            label: pgettext("runner:chat", "White"),
                            value: "White",
                        },
                    ],
                    default: "Black",
                },
                {
                    type: "dropdown",
                    name: "facialHair",
                    label: pgettext("runner:chat", "🪒 Facial hair"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.top",
                                value: [
                                    "NoHair",
                                    "Eyepatch",
                                    "Hat",
                                    "Turban",
                                    "WinterHat1",
                                    "WinterHat2",
                                    "WinterHat3",
                                    "WinterHat4",
                                    "LongHairBigHair",
                                    "LongHairBob",
                                    "LongHairBun",
                                    "LongHairCurly",
                                    "LongHairCurvy",
                                    "LongHairDreads",
                                    "LongHairFrida",
                                    "LongHairFro",
                                    "LongHairFroBand",
                                    "LongHairNotTooLong",
                                    "LongHairShavedSides",
                                    "LongHairMiaWallace",
                                    "LongHairStraight",
                                    "LongHairStraight2",
                                    "LongHairStraightStrand",
                                    "ShortHairDreads01",
                                    "ShortHairDreads02",
                                    "ShortHairFrizzle",
                                    "ShortHairShaggyMullet",
                                    "ShortHairShortCurly",
                                    "ShortHairShortFlat",
                                    "ShortHairShortRound",
                                    "ShortHairShortWaved",
                                    "ShortHairSides",
                                    "ShortHairTheCaesar",
                                    "ShortHairTheCaesarSidePart",
                                ],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "No facial hair"),
                            value: "None",
                        },
                        {
                            label: pgettext("runner:chat", "Medium beard"),
                            value: "BeardMedium",
                        },
                        {
                            label: pgettext("runner:chat", "Light beard"),
                            value: "BeardLight",
                        },
                        {
                            label: pgettext("runner:chat", "Magestic beard"),
                            value: "BeardMagestic",
                        },
                        {
                            label: pgettext("runner:chat", "Fancy moustache"),
                            value: "MoustacheFancy",
                        },
                        {
                            label: pgettext("runner:chat", "Magnum moustache"),
                            value: "MoustacheMagnum",
                        },
                    ],
                    default: "None",
                },
                {
                    type: "dropdown",
                    name: "facialHairColor",
                    label: pgettext("runner:chat", "🎨 Facial hair color"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.top",
                                value: [
                                    "NoHair",
                                    "Eyepatch",
                                    "Hat",
                                    "Turban",
                                    "WinterHat1",
                                    "WinterHat2",
                                    "WinterHat3",
                                    "WinterHat4",
                                    "LongHairBigHair",
                                    "LongHairBob",
                                    "LongHairBun",
                                    "LongHairCurly",
                                    "LongHairCurvy",
                                    "LongHairDreads",
                                    "LongHairFrida",
                                    "LongHairFro",
                                    "LongHairFroBand",
                                    "LongHairNotTooLong",
                                    "LongHairShavedSides",
                                    "LongHairMiaWallace",
                                    "LongHairStraight",
                                    "LongHairStraight2",
                                    "LongHairStraightStrand",
                                    "ShortHairDreads01",
                                    "ShortHairDreads02",
                                    "ShortHairFrizzle",
                                    "ShortHairShaggyMullet",
                                    "ShortHairShortCurly",
                                    "ShortHairShortFlat",
                                    "ShortHairShortRound",
                                    "ShortHairShortWaved",
                                    "ShortHairSides",
                                    "ShortHairTheCaesar",
                                    "ShortHairTheCaesarSidePart",
                                ],
                            },
                            {
                                property: "avatar.facialHair",
                                value: ["BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy", "MoustacheMagnum"],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Auburn"),
                            value: "Auburn",
                        },
                        {
                            label: pgettext("runner:chat", "Black"),
                            value: "Black",
                        },
                        {
                            label: pgettext("runner:chat", "Blonde"),
                            value: "Blonde",
                        },
                        {
                            label: pgettext("runner:chat", "Blonde (golden)"),
                            value: "BlondeGolden",
                        },
                        {
                            label: pgettext("runner:chat", "Brown"),
                            value: "Brown",
                        },
                        {
                            label: pgettext("runner:chat", "Brown (dark)"),
                            value: "BrownDark",
                        },
                        {
                            label: pgettext("runner:chat", "Platinum"),
                            value: "Platinum",
                        },
                        {
                            label: pgettext("runner:chat", "Red"),
                            value: "Red",
                        },
                    ],
                    default: "Auburn",
                },
                {
                    type: "dropdown",
                    name: "clothing",
                    label: pgettext("runner:chat", "👔 Clothing"),
                    width: "full",
                    dependency: {
                        observe: {
                            property: "avatar.type",
                            value: "avataaar",
                        },
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Blazer with shirt"),
                            value: "BlazerShirt",
                        },
                        {
                            label: pgettext("runner:chat", "Blazer with sweater"),
                            value: "BlazerSweater",
                        },
                        {
                            label: pgettext("runner:chat", "Collar with sweater"),
                            value: "CollarSweater",
                        },
                        {
                            label: pgettext("runner:chat", "Hoodie"),
                            value: "Hoodie",
                        },
                        {
                            label: pgettext("runner:chat", "Shirt (crew neck)"),
                            value: "ShirtCrewNeck",
                        },
                        {
                            label: pgettext("runner:chat", "Shirt (scoop neck)"),
                            value: "ShirtScoopNeck",
                        },
                        {
                            label: pgettext("runner:chat", "Shirt (V-neck)"),
                            value: "ShirtVNeck",
                        },
                        {
                            label: pgettext("runner:chat", "Shirt (with graphic)"),
                            value: "GraphicShirt",
                        },
                    ],
                    default: "BlazerShirt",
                },
                {
                    type: "dropdown",
                    name: "clothingFabric",
                    label: pgettext("runner:chat", "🎨 Clothing color"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.clothing",
                                value: ["CollarSweater", "Hoodie", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck", "GraphicShirt"],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Black"),
                            value: "Black",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 1)"),
                            value: "Blue01",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 2)"),
                            value: "Blue02",
                        },
                        {
                            label: pgettext("runner:chat", "Blue (variant 3)"),
                            value: "Blue03",
                        },
                        {
                            label: pgettext("runner:chat", "Gray (variant 1)"),
                            value: "Gray01",
                        },
                        {
                            label: pgettext("runner:chat", "Gray (variant 2)"),
                            value: "Gray02",
                        },
                        {
                            label: pgettext("runner:chat", "Heather"),
                            value: "Heather",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel blue"),
                            value: "PastelBlue",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel green"),
                            value: "PastelGreen",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel orange"),
                            value: "PastelOrange",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel red"),
                            value: "PastelRed",
                        },
                        {
                            label: pgettext("runner:chat", "Pastel yellow"),
                            value: "PastelYellow",
                        },
                        {
                            label: pgettext("runner:chat", "Pink"),
                            value: "Pink",
                        },
                        {
                            label: pgettext("runner:chat", "Red"),
                            value: "Red",
                        },
                        {
                            label: pgettext("runner:chat", "White"),
                            value: "White",
                        },
                    ],
                    default: "Black",
                },
                {
                    type: "dropdown",
                    name: "clothingGraphic",
                    label: pgettext("runner:chat", "🖼 Clothing graphic"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.clothing",
                                value: "GraphicShirt",
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "Bat"),
                            value: "Bat",
                        },
                        {
                            label: pgettext("runner:chat", "Bear"),
                            value: "Bear",
                        },
                        {
                            label: pgettext("runner:chat", "Cumbia"),
                            value: "Cumbia",
                        },
                        {
                            label: pgettext("runner:chat", "Deer"),
                            value: "Deer",
                        },
                        {
                            label: pgettext("runner:chat", "Diamond"),
                            value: "Diamond",
                        },
                        {
                            label: pgettext("runner:chat", "Hola"),
                            value: "Hola",
                        },
                        {
                            label: pgettext("runner:chat", "Pizza"),
                            value: "Pizza",
                        },
                        {
                            label: pgettext("runner:chat", "Resist"),
                            value: "Resist",
                        },
                        {
                            label: pgettext("runner:chat", "Selena"),
                            value: "Selena",
                        },
                        {
                            label: pgettext("runner:chat", "Skull"),
                            value: "Skull",
                        },
                        {
                            label: pgettext("runner:chat", "Skull (outline)"),
                            value: "SkullOutline",
                        },
                    ],
                    default: "Bat",
                },
                {
                    type: "dropdown",
                    name: "accessories",
                    label: pgettext("runner:chat", "👓 Accessories"),
                    width: "full",
                    dependency: {
                        observe: [
                            {
                                property: "avatar.type",
                                value: "avataaar",
                            },
                            {
                                property: "avatar.top",
                                value: [
                                    "NoHair",
                                    "Hat",
                                    "Hijab",
                                    "Turban",
                                    "WinterHat1",
                                    "WinterHat2",
                                    "WinterHat3",
                                    "WinterHat4",
                                    "LongHairBigHair",
                                    "LongHairBob",
                                    "LongHairBun",
                                    "LongHairCurly",
                                    "LongHairCurvy",
                                    "LongHairDreads",
                                    "LongHairFrida",
                                    "LongHairFro",
                                    "LongHairFroBand",
                                    "LongHairNotTooLong",
                                    "LongHairShavedSides",
                                    "LongHairMiaWallace",
                                    "LongHairStraight",
                                    "LongHairStraight2",
                                    "LongHairStraightStrand",
                                    "ShortHairDreads01",
                                    "ShortHairDreads02",
                                    "ShortHairFrizzle",
                                    "ShortHairShaggyMullet",
                                    "ShortHairShortCurly",
                                    "ShortHairShortFlat",
                                    "ShortHairShortRound",
                                    "ShortHairShortWaved",
                                    "ShortHairSides",
                                    "ShortHairTheCaesar",
                                    "ShortHairTheCaesarSidePart",
                                ],
                            },
                        ],
                        action: "show",
                    },
                    options: [
                        {
                            label: pgettext("runner:chat", "None"),
                            value: "None",
                        },
                        {
                            label: pgettext("runner:chat", "Kurt"),
                            value: "Kurt",
                        },
                        {
                            label: pgettext("runner:chat", "Prescription (variant 1)"),
                            value: "Prescription01",
                        },
                        {
                            label: pgettext("runner:chat", "Prescription (variant 2)"),
                            value: "Prescription02",
                        },
                        {
                            label: pgettext("runner:chat", "Round"),
                            value: "Round",
                        },
                        {
                            label: pgettext("runner:chat", "Sunglasses"),
                            value: "Sunglasses",
                        },
                        {
                            label: pgettext("runner:chat", "Wayfarers"),
                            value: "Wayfarers",
                        },
                    ],
                    default: "None",
                },
            ],
        },
        {
            title: pgettext("runner:chat", "Font"),
            optional: true,
            name: "font",
            elements: [
                {
                    type: "static",
                    label: pgettext(
                        "runner:chat",
                        "Use any font available on [Google Fonts](https://fonts.google.com/) or supply a custom font URL. Please note that the Google Fonts name is case sensitive."
                    ),
                },
                {
                    type: "dropdown",
                    name: "family",
                    label: pgettext("runner:chat", "Font family"),
                    options: [
                        {
                            optGroup: pgettext("runner:chat", "Standard fonts"),
                        },
                        {
                            label: pgettext("runner:chat", "Default"),
                            value: "",
                        },
                        {
                            label: "Arial",
                            value: "Arial",
                        },
                        {
                            label: "Arial Black",
                            value: "Arial Black",
                        },
                        {
                            label: "Comic Sans MS",
                            value: "Comic Sans MS",
                        },
                        {
                            label: "Courier New",
                            value: "Courier New",
                        },
                        {
                            label: "Georgia",
                            value: "Georgia",
                        },
                        {
                            label: "Garamond",
                            value: "Garamond",
                        },
                        {
                            label: "Helvetica",
                            value: "Helvetica",
                        },
                        {
                            label: "Impact",
                            value: "Impact",
                        },
                        {
                            label: "Palatino",
                            value: "Palatino",
                        },
                        {
                            label: "Sans-Serif",
                            value: "Sans-Serif",
                        },
                        {
                            label: "Times New Roman",
                            value: "Times New Roman",
                        },
                        {
                            label: "Trebuchet MS",
                            value: "Trebuchet MS",
                        },
                        {
                            label: "Verdana",
                            value: "Verdana",
                        },
                        {
                            optGroup: pgettext("runner:chat", "Custom fonts"),
                        },
                        {
                            custom: pgettext("runner:chat", "Google Fonts or URL"),
                        },
                    ],
                },
                {
                    type: "number",
                    name: "size",
                    label: pgettext("runner:chat", "Font size"),
                    default: 14,
                    min: 8,
                    max: 30,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "number",
                    name: "sizeSmall",
                    label: pgettext("runner:chat", "Font size for small screens"),
                    default: 14,
                    min: 8,
                    max: 30,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "static",
                    label: pgettext(
                        "runner:chat",
                        "_Note_: This size applies to small screens (like mobile devices). Switch to the mobile device preview to see and test this small font size."
                    ),
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Background"),
            optional: true,
            name: "background",
            elements: [
                {
                    type: "color",
                    name: "color",
                    label: pgettext("runner:chat", "Color"),
                },
                {
                    type: "image",
                    name: "url",
                    label: pgettext("runner:chat", "Image (URL)"),
                },
                {
                    type: "number",
                    name: "opacity",
                    label: pgettext("runner:chat", "Opacity"),
                    min: 0,
                    max: 100,
                    suffix: "%",
                    default: 100,
                    dependency: {
                        action: "enable",
                        observe: [
                            {
                                property: "background.color",
                                defined: true,
                            },
                            {
                                property: "background.url",
                                defined: true,
                            },
                        ],
                    },
                },
                {
                    type: "dropdown",
                    name: "positioning",
                    label: pgettext("runner:chat", "Positioning"),
                    options: [
                        {
                            label: pgettext("runner:chat", "Center"),
                            value: "auto",
                        },
                        {
                            label: pgettext("runner:chat", "Repeat"),
                            value: "repeat",
                        },
                        {
                            label: pgettext("runner:chat", "Cover (full screen)"),
                            value: "cover",
                        },
                        {
                            label: pgettext("runner:chat", "Contain (full image stretched over screen)"),
                            value: "contain",
                        },
                        {
                            label: pgettext("runner:chat", "100% width, height centered"),
                            value: "100% auto",
                        },
                        {
                            label: pgettext("runner:chat", "100% height, width centered"),
                            value: "auto 100%",
                        },
                    ],
                    default: "auto",
                    dependency: {
                        action: "disable",
                        observe: [
                            {
                                property: "background.url",
                                value: "",
                            },
                        ],
                    },
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Questions"),
            optional: true,
            name: "questions",
            elements: [
                {
                    type: "dropdown",
                    name: "alignment",
                    label: pgettext("runner:chat", "Alignment"),
                    options: [
                        {
                            label: pgettext("runner:chat", "Left"),
                            value: "left",
                        },
                        {
                            label: pgettext("runner:chat", "Right"),
                            value: "right",
                        },
                    ],
                    default: "left",
                },
                {
                    type: "number",
                    name: "roundness",
                    label: pgettext("runner:chat", "Roundness"),
                    default: 20,
                    min: 0,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "color",
                    name: "backgroundColor",
                    label: pgettext("runner:chat", "Background color"),
                },
                {
                    type: "color",
                    name: "borderColor",
                    label: pgettext("runner:chat", "Border color"),
                },
                {
                    type: "color",
                    name: "textColor",
                    label: pgettext("runner:chat", "Text color"),
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Answers"),
            optional: true,
            name: "answers",
            elements: [
                {
                    type: "dropdown",
                    name: "alignment",
                    label: pgettext("runner:chat", "Alignment"),
                    options: [
                        {
                            label: pgettext("runner:chat", "Left"),
                            value: "left",
                        },
                        {
                            label: pgettext("runner:chat", "Right"),
                            value: "right",
                        },
                    ],
                    default: "right",
                },
                {
                    type: "number",
                    name: "roundness",
                    label: pgettext("runner:chat", "Roundness"),
                    default: 20,
                    min: 0,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "color",
                    name: "backgroundColor",
                    label: pgettext("runner:chat", "Background color"),
                },
                {
                    type: "color",
                    name: "borderColor",
                    label: pgettext("runner:chat", "Border color"),
                },
                {
                    type: "color",
                    name: "textColor",
                    label: pgettext("runner:chat", "Text color"),
                },
                {
                    type: "image",
                    name: "avatarImage",
                    label: pgettext("runner:chat", "Avatar image (URL)"),
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Inputs"),
            optional: true,
            name: "inputs",
            elements: [
                {
                    type: "color",
                    name: "backgroundColor",
                    label: pgettext("runner:chat", "Background color"),
                },
                {
                    type: "color",
                    name: "borderColor",
                    label: pgettext("runner:chat", "Border color"),
                },
                {
                    type: "number",
                    name: "borderSize",
                    label: pgettext("runner:chat", "Border size"),
                    default: 1,
                    min: 1,
                    max: 20,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "number",
                    name: "roundness",
                    label: pgettext("runner:chat", "Roundness"),
                    default: 8,
                    min: 0,
                    suffix: "px",
                    width: 75,
                },
                {
                    type: "color",
                    name: "textColor",
                    label: pgettext("runner:chat", "Text color"),
                },
                {
                    type: "color",
                    name: "errorColor",
                    label: pgettext("runner:chat", "Required/error color"),
                    default: "red",
                },
                {
                    type: "color",
                    name: "selectionColor",
                    label: pgettext("runner:chat", "Selection color (input buttons)"),
                },
                {
                    type: "color",
                    name: "agreeColor",
                    label: pgettext("runner:chat", "Agree color (input buttons)"),
                    default: "green",
                },
                {
                    type: "color",
                    name: "declineColor",
                    label: pgettext("runner:chat", "Decline color (input buttons)"),
                    default: "red",
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Buttons"),
            optional: true,
            name: "buttons",
            elements: [
                {
                    type: "color",
                    name: "baseColor",
                    label: pgettext("runner:chat", "Button color"),
                },
                {
                    type: "color",
                    name: "textColor",
                    label: pgettext("runner:chat", "Text color"),
                },
                {
                    type: "dropdown",
                    name: "mode",
                    label: pgettext("runner:chat", "Style"),
                    options: [
                        {
                            label: pgettext("runner:chat", "Fill"),
                            value: "fill",
                        },
                        {
                            label: pgettext("runner:chat", "Outline"),
                            value: "outline",
                        },
                    ],
                },
                {
                    type: "number",
                    name: "roundness",
                    label: pgettext("runner:chat", "Roundness"),
                    default: 8,
                    min: 0,
                    suffix: "px",
                    width: 75,
                },
            ],
            tier: "standard",
        },
        {
            title: pgettext("runner:chat", "Chat button"),
            optional: true,
            name: "chatButton",
            dependency: {
                observe: {
                    property: "display",
                    value: "button",
                },
                action: "show",
            },
            elements: [
                {
                    type: "color",
                    name: "color",
                    label: pgettext("runner:chat", "Color"),
                },
                {
                    type: "image",
                    name: "image",
                    label: pgettext("runner:chat", "Icon (URL)"),
                },
            ],
        },
        {
            title: pgettext("runner:chat", "Appearance"),
            additional: true,
            elements: [
                {
                    type: "radiobuttons",
                    name: "display",
                    buttons: [
                        {
                            label: pgettext("runner:chat", "Inline"),
                            value: "inline",
                            description: pgettext("runner:chat", "Chat content will be displayed inline with other page content."),
                        },
                        {
                            label: pgettext("runner:chat", "Button"),
                            value: "button",
                            description: pgettext(
                                "runner:chat",
                                "Chat needs to be opened with a chat button (only supported when embedding the chat)."
                            ),
                        },
                    ],
                    default: "inline",
                },
            ],
        },
        {
            title: pgettext("runner:chat", "Options"),
            additional: true,
            elements: [
                {
                    type: "checkbox",
                    name: "autoFocus",
                    label: pgettext("runner:chat", "Automatically gain focus"),
                    description: pgettext("runner:chat", "Only applies when embedding the chat."),
                    default: false,
                },
                {
                    type: "checkbox",
                    name: "showScrollbar",
                    label: pgettext("runner:chat", "Show scrollbar"),
                    default: false,
                    dependency: {
                        observe: {
                            property: "display",
                            value: "button",
                        },
                        action: "show",
                    },
                },
                {
                    type: "checkbox",
                    name: "fullWidth",
                    label: pgettext("runner:chat", "Use full width"),
                    default: false,
                },
                {
                    type: "checkbox",
                    name: "autoOpen",
                    label: pgettext("runner:chat", "Automatically open chat window"),
                    default: false,
                    dependency: {
                        observe: {
                            property: "display",
                            value: "button",
                        },
                        action: "show",
                    },
                },
                {
                    type: "checkbox",
                    name: "noBranding",
                    label: pgettext("runner:chat", "Hide all the Tripetto branding"),
                    default: false,
                    tier: "premium",
                },
            ],
        },
    ],
});
