import { IEditorProperties } from "./interfaces";
import { PUBLIC_URL } from "./settings";

export const DEFINITION_KEY = "definition";
export const DEFINITION_ID_KEY = "definition-id";
export const DEFINITION_NAME_KEY = "definition-name";
export const USER_ID_KEY = "user-id";
export const EDITOR_CONTAINER_ID: string = "editor-container";
export const DEFAULT_DEFINITION = {
    "name": "Demo",
    "clusters": [
        {
            "id": "d68aae43c32e158b53068dcaeb6bed8e1e3b397216332af3f425013eae868ee2",
            "name": "Introduction",
            "nodes": [
                {
                    "id": "3aa3016e2ff41e789df25dcca54faf95c7b62bc2f05de6e8f93418530e172b19",
                    "name": "Welcome to Tripetto!",
                    "nameVisible": true,
                    "description": "**A full-fledged form kit to rapidly create and deploy smart flowing forms and surveys. Drop the kit into your codebase to get everything you need. And be the single host of your own data.**\n\nThis example shows you how to use the editor and collector in your own projects and demonstrates some powerful features available in Tripetto (e.g. a visual form editor, smart flows, **markdown** *support*, extensibility and many, many more). Can't wait to implement Tripetto? Head over to our **[documentation](https://docs.tripetto.com/)**.\n\n🗨 *This demo setup shows the form editor on the left and the so-called collector on the right, running the form being built in the editor. All editing is realtime. Have fun!*"
                }
            ]
        },
        {
            "id": "a96965d63b719ab125498b3a55bafa87a43f5ca44d380e8d348423692ce22573",
            "name": "Piping",
            "nodes": [
                {
                    "id": "a41e7aee8c63dfe1159c17f9610b11228f8400281c59b31c2941e983f0168de9",
                    "name": "Smart flows (piping)",
                    "nameVisible": true,
                    "description": "Tripetto handles the piping of data anywhere in the form. Type your name in the input box below to see how this works."
                },
                {
                    "id": "6bb19d29b0a05b8fc37240916d3ec779f7cf469b986bd5d4e78e6d50a03e8b48",
                    "explanation": "You can use collected data *anywhere*. Yes, even in this help text, **@2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0**!",
                    "name": "👋 Hello there, @2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0!",
                    "nameVisible": true,
                    "placeholder": "What's your name?",
                    "slots": [
                        {
                            "id": "2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0",
                            "type": "text",
                            "kind": "static",
                            "reference": "value",
                            "label": "Tekst",
                            "alias": "NAME",
                            "required": true,
                            "transformation": "capitalize"
                        }
                    ],
                    "block": { "type": "tripetto-block-text", "version": "1.0.13-11" }
                }
            ]
        },
        {
            "id": "1ddd78d139f960c45651ae27d1b9b09d483c7904d1200e44352ae8ef70ef2f6c",
            "name": "Logic",
            "nodes": [
                {
                    "id": "7720412dd05b3288b6e7c45168ee40e6b5a83fca09dc151417138d6b5a62e946",
                    "name": "Sound logic for creating conversations",
                    "nameVisible": true,
                    "description": "We believe good forms are smart forms. They should flow like conversations. But those only really work with sound logic. That's where Tripetto comes in."
                },
                {
                    "id": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                    "name": "What would you like to learn about Tripetto, @2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0?",
                    "nameVisible": true,
                    "description": "Select your topics from the list below. We suggest selecting more than one for the optimal experience 😉.",
                    "slots": [
                        {
                            "id": "c357e913d1019850befe3c41b1235a41800cc17effa82f4acc9d715c3eb1ad77",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "ecb6b8b19b96c9688c67ee5571d9aa1df93de21acc773375573e09d864c21afa",
                            "sequence": 0,
                            "label": "Keuzevak",
                            "name": "Visual editor for form creation",
                            "pipable": {
                                "group": "Checkbox",
                                "label": "Keuzevak",
                                "template": "name",
                                "alias": "TOPICS"
                            }
                        },
                        {
                            "id": "4e1e3f2954d6f326ce074cf79c0adfa29bf474ca5db9356e7c2594165339edb6",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "90f33f36ba6abdb8745870e2f882a5760ee45a138abe06c239eec6f3d30faad1",
                            "sequence": 1,
                            "label": "Keuzevak",
                            "name": "Collector for response gathering",
                            "pipable": {
                                "group": "Checkbox",
                                "label": "Keuzevak",
                                "template": "name",
                                "alias": "TOPICS"
                            }
                        },
                        {
                            "id": "76b5a0ab5acb6a99d3a477f291104bdf066134f5a3c77b50a22bdc9af368d0a8",
                            "type": "boolean",
                            "kind": "dynamic",
                            "reference": "3820cc79b6d79a25dd411e82b94f50c4e803fc057c67b2225a6bb94befd6bb1a",
                            "sequence": 2,
                            "label": "Keuzevak",
                            "name": "Custom building blocks",
                            "pipable": {
                                "group": "Checkbox",
                                "label": "Keuzevak",
                                "template": "name",
                                "alias": "TOPICS"
                            }
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-checkboxes",
                        "version": "1.0.15-17",
                        "checkboxes": [
                            {
                                "id": "ecb6b8b19b96c9688c67ee5571d9aa1df93de21acc773375573e09d864c21afa",
                                "name": "Visual editor for form creation"
                            },
                            {
                                "id": "90f33f36ba6abdb8745870e2f882a5760ee45a138abe06c239eec6f3d30faad1",
                                "name": "Collector for response gathering"
                            },
                            {
                                "id": "3820cc79b6d79a25dd411e82b94f50c4e803fc057c67b2225a6bb94befd6bb1a",
                                "name": "Custom building blocks"
                            }
                        ],
                        "alias": "TOPICS"
                    }
                }
            ],
            "branches": [
                {
                    "id": "4726e8946d0ad76a5e4e4ffeb536d84044964a1bbd09180311c34b5ef17e9991",
                    "name": "Editor topic",
                    "clusters": [
                        {
                            "id": "c1ac720fd8f00df0c5bdaff08e63caba213421ebee9b869bd46c2523a80e8107",
                            "nodes": [
                                {
                                    "id": "45f32e70b67ec511532b3d7ff2e9c647d17289da7ccf7ceaa29c653ac1d2874e",
                                    "name": "Visual editor for form creation",
                                    "nameVisible": true,
                                    "description": "The visual editor is for creating forms with clever flows on a self-organizing drawing board. It visualizes your form's flow and structure and helps you use all the right logic for skipping questions, branching the flow and much more.\n\n👨‍💻 **[Start integrating the visual editor](https://docs.tripetto.com/guide/editor/)**\n\n🗨 *You see this information because you've selected the topic '**@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf**' just now.*"
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "d501f98151aaf384fe8f6d437d5aa8457552fa09b724645a3eb31c73258a8911",
                            "block": {
                                "checkbox": "ecb6b8b19b96c9688c67ee5571d9aa1df93de21acc773375573e09d864c21afa",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "c357e913d1019850befe3c41b1235a41800cc17effa82f4acc9d715c3eb1ad77",
                                "checked": true
                            }
                        }
                    ]
                },
                {
                    "id": "de79ef15c0b3bda1dcc43e84a496b770bb978391c3969f06279554822600be76",
                    "name": "Collector topic",
                    "clusters": [
                        {
                            "id": "d0c60cab0aa6ef95a39130af543d4cc00d8e43eb2fd88f77b3603969d34ec193",
                            "nodes": [
                                {
                                    "id": "49254d29ef6d79a69dcd5528b0413df55498dc5a78f2b572df5eb59b288bdf54",
                                    "name": "Collector for response gathering",
                                    "nameVisible": true,
                                    "description": "The collector library is for form deployment and response collection in your projects. It runs your forms built with the editor, handling all logic and response delivery. Also, it's the front-end for your forms, and infinitely customizable.\n\n👨‍💻 **[Start implementing your own collector](https://docs.tripetto.com/guide/collector/)**\n\n🗨 *You see this information because you've selected the topic '**@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf**' just now.*"
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "20b5ebcce0443a86f780defc4339c4d10953a4154c26e1d40877c6d638051ea7",
                            "block": {
                                "checkbox": "90f33f36ba6abdb8745870e2f882a5760ee45a138abe06c239eec6f3d30faad1",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "4e1e3f2954d6f326ce074cf79c0adfa29bf474ca5db9356e7c2594165339edb6",
                                "checked": true
                            }
                        }
                    ]
                },
                {
                    "id": "6af61dfce89e99ec7a1d3707821f5997725ae10a83c31b1266dfa2ea81679fd1",
                    "name": "Blocks topic",
                    "clusters": [
                        {
                            "id": "c48b9526c95d904c1b8cb609da72ad485b47f4e7c4a2f697b76390c6947309ee",
                            "nodes": [
                                {
                                    "id": "c0ced66783813d02ecb9addd0cc662cbdba57e2ea29884ee58996b6fd14f47ae",
                                    "name": "SDK for developing form building blocks",
                                    "nameVisible": true,
                                    "description": "The TypeScript SDK is for developing customized form building blocks to extend Tripetto far beyond its default capabilities. With custom blocks you can hook our form kit up to anything, making your forms ever more sophisticated.\n\n👨‍💻 **[Start developing your own building blocks](https://docs.tripetto.com/guide/blocks/)**\n\n🗨 *You see this information because you've selected the topic '**@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf**' just now.*"
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "2b2aa0f98b619cd3ce0762eb081539cf451d66c97e97ae778120aa29fd095ff4",
                            "block": {
                                "checkbox": "3820cc79b6d79a25dd411e82b94f50c4e803fc057c67b2225a6bb94befd6bb1a",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "76b5a0ab5acb6a99d3a477f291104bdf066134f5a3c77b50a22bdc9af368d0a8",
                                "checked": true
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "690de751b9ea3f5d4dd7ad2dd5a01fb18a7be007b47f1ba363084683bc4f503b",
            "name": "Iterations",
            "nodes": [
                {
                    "id": "fdf028d6dd8917181e2b3332fd35162063f45c77d0f524bcf6dd02940a79b163",
                    "name": "Clever iterations",
                    "nameVisible": true,
                    "description": "You can also iterate a certain set of questions based on previously given answers. For example, to dig deeper into selected topics. In this case you've selected **@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf**.\n\n🗨 *If you checked one or more items earlier, you'll now be taken through the same set of questions for each selected topic.*"
                }
            ],
            "branches": [
                {
                    "id": "18cdd71e3f3b32f640e2155045fd61ce1544c3b407bd4d696db509082c684035",
                    "name": "Topics",
                    "clusters": [
                        {
                            "id": "2f40a06957aa2bf56ebdcfbef9561a0ec60ac37d2f619fccb20a0948951507f6",
                            "nodes": [
                                {
                                    "id": "fa43f30bfca37fdae992fab07755878e02376b9fa1b0ee1c27c43b8462202dc2",
                                    "name": "Topic: @7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf",
                                    "nameVisible": true
                                },
                                {
                                    "id": "5e8af38edf8c1c0d9978102cbd1b196e4cce359fb29df16297d109c1de6542ef",
                                    "name": "Was the information about the _@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf_ sufficient?",
                                    "nameVisible": true,
                                    "slots": [
                                        {
                                            "id": "3bf0838d19492b45d292cab84949375e94ddf1597677fa0fe30a5470ad58df1c",
                                            "type": "string",
                                            "kind": "static",
                                            "reference": "button",
                                            "label": "Gekozen knop",
                                            "required": true
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-radiobuttons",
                                        "version": "1.0.13-12",
                                        "buttons": [
                                            {
                                                "id": "93bbf75c97d71ee5fb8d6ef7f94e57361b82b0cbbbace20bc70adcfea65a3134",
                                                "name": "Yes",
                                                "value": ""
                                            },
                                            {
                                                "id": "a301d7cc37c916d23e546e9c487bfd665ea349283eeaaac7bb8e0b0b47719a12",
                                                "name": "No",
                                                "value": ""
                                            }
                                        ]
                                    }
                                }
                            ],
                            "branches": [
                                {
                                    "id": "707850815f08e59cb39bc04df051d6d7671a409005e84900838ca5590bb8f8b3",
                                    "clusters": [
                                        {
                                            "id": "fcfab806567c6c1ae42a4b02e79917a445544f3cdd2bd06a0b9a2aaf994e0a0c",
                                            "nodes": [
                                                {
                                                    "id": "fdb7c33dae3fbd84f5785878e52ef3c871e7c36d2812fe809cadd8b1404803d3",
                                                    "explanation": "This is a demo. No data is actually sent. If you really want to share something with us, contact us **[here](https://tripetto.com/contact/)**.",
                                                    "name": "What can we do to improve this?",
                                                    "nameVisible": true,
                                                    "description": "Could you tell us what we can do to improve the information about the '@7dd19e69b4b55a5dbc083dd9ad0998385753a60dcd7e2b28872e30b5f4d0c3bf'?",
                                                    "slots": [
                                                        {
                                                            "id": "65d855cf11f2e1da73098401e71e7e93e1e4ae0c03387fc1df553f1b117be55c",
                                                            "type": "text",
                                                            "kind": "static",
                                                            "reference": "value",
                                                            "label": "Tekst met meerdere regels"
                                                        }
                                                    ],
                                                    "block": {
                                                        "type": "tripetto-block-textarea",
                                                        "version": "1.0.12-8"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "conditions": [
                                        {
                                            "id": "04989e03f79150b46e2027968fc0711c7d712c9bff421bb12ed68fe72f24403d",
                                            "block": {
                                                "button": "a301d7cc37c916d23e546e9c487bfd665ea349283eeaaac7bb8e0b0b47719a12",
                                                "type": "tripetto-block-radiobuttons",
                                                "version": "1.0.13-12",
                                                "node": "5e8af38edf8c1c0d9978102cbd1b196e4cce359fb29df16297d109c1de6542ef",
                                                "slot": "3bf0838d19492b45d292cab84949375e94ddf1597677fa0fe30a5470ad58df1c"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "aff8428a60be02e312f601774db9721ad638cb3d7fb6a47c76cc899cb3a907c7",
                            "block": {
                                "checkbox": "ecb6b8b19b96c9688c67ee5571d9aa1df93de21acc773375573e09d864c21afa",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "c357e913d1019850befe3c41b1235a41800cc17effa82f4acc9d715c3eb1ad77",
                                "checked": true
                            }
                        },
                        {
                            "id": "3ef24433865828b04dbe078d098861fc8596ee8e76ec21e46516948ad0050e2b",
                            "block": {
                                "checkbox": "90f33f36ba6abdb8745870e2f882a5760ee45a138abe06c239eec6f3d30faad1",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "4e1e3f2954d6f326ce074cf79c0adfa29bf474ca5db9356e7c2594165339edb6",
                                "checked": true
                            }
                        },
                        {
                            "id": "2151942ab45c3c2177aab061fe055bfceb55067cb393d5fc5641adec2e6c5f40",
                            "block": {
                                "checkbox": "3820cc79b6d79a25dd411e82b94f50c4e803fc057c67b2225a6bb94befd6bb1a",
                                "type": "tripetto-block-checkboxes",
                                "version": "0.0.0",
                                "node": "9b799c9c56989a9204f99de38c61964f4051edd76bbdd37fdc28c894015d52fc",
                                "slot": "76b5a0ab5acb6a99d3a477f291104bdf066134f5a3c77b50a22bdc9af368d0a8",
                                "checked": true
                            }
                        }
                    ],
                    "culling": "each"
                }
            ]
        },
        {
            "id": "c364b30c39d3ce04bd9549683a5527231115bc139d2f71f3bba4509e37c4d4ad",
            "name": "Conversion",
            "nodes": [
                {
                    "id": "c5413a3d5230ca0375116ec0f68fe30bfe3f4510c5379fa7f30ff2a044f68807",
                    "name": "Get started with Tripetto!",
                    "nameVisible": true
                },
                {
                    "id": "6958fd6300174670eabe0fb0fb79a164eba18adf57c42c8f5e38ec73cdef9be8",
                    "name": "So @2dfc6a6947325ae704a80b579a321cf44dd980f1b3178ef1c518f76dec4b46d0, do you fancy using the Tripetto form kit?",
                    "nameVisible": true,
                    "slots": [
                        {
                            "id": "3837be48fb0ec06724d57a0e5782c32042efa381de1469867369066bf5c35509",
                            "type": "string",
                            "kind": "static",
                            "reference": "button",
                            "label": "Gekozen knop",
                            "required": true
                        }
                    ],
                    "block": {
                        "type": "tripetto-block-radiobuttons",
                        "version": "1.0.13-12",
                        "buttons": [
                            {
                                "id": "ca77d15f840a15d9a609603e01f3e96ff628fa73cdc2d6eea86d8179cd8ea974",
                                "name": "Yes, please!",
                                "value": ""
                            },
                            {
                                "id": "040976acfc997d53dbf97b4854060beff84b9c685156aa1105613987621dd8e5",
                                "name": "No, thank you.",
                                "value": ""
                            }
                        ]
                    }
                }
            ],
            "branches": [
                {
                    "id": "c9c2c6cf320c1b81a6e4eec166f2c2b718a43d17ebddd515567dcb14d9e19961",
                    "name": "🙂",
                    "clusters": [
                        {
                            "id": "11846c8513d6ff97d05350573b2a5ae7ea4a28fbbbc2f1685a595613cf95f72c",
                            "nodes": [
                                {
                                    "id": "84442bf92fcd4b13c5c1cd60082532b9aac3ac1af4dfda98a5d7381827287fe7",
                                    "name": "👏 Sweet!",
                                    "nameVisible": true,
                                    "description": "Start with reading our docs or dive into one of our example projects!\n\n📘 You can find all the stuff you need **[here](https://docs.tripetto.com/)**.\n\n👨‍💻 Or take a peek under the hood of this **[demo](https://gitlab.com/tripetto/examples/react)**. You may use the code of this example free of charge for your own collector. Have a blast!"
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "c90477c64801786c9c48ae1fe14295d632231d5403df414642e7f76c376075f6",
                            "block": {
                                "button": "ca77d15f840a15d9a609603e01f3e96ff628fa73cdc2d6eea86d8179cd8ea974",
                                "type": "tripetto-block-radiobuttons",
                                "version": "1.0.13-12",
                                "node": "6958fd6300174670eabe0fb0fb79a164eba18adf57c42c8f5e38ec73cdef9be8",
                                "slot": "3837be48fb0ec06724d57a0e5782c32042efa381de1469867369066bf5c35509"
                            }
                        }
                    ]
                },
                {
                    "id": "74050a9046603dbea59af40d4d5310e06ab46eceaa1f37cc7dac5375712e5ac5",
                    "name": "😢",
                    "clusters": [
                        {
                            "id": "fef30e046a019155e757f20f7652fffdefdae2636a8df8a58a77f7efe31bd171",
                            "nodes": [
                                {
                                    "id": "ca0760c6b0e57c7898833d4e226168b828f0d60ce9a3c4796dfa049500db6d39",
                                    "explanation": "This is a demo. No data is actually sent. If you really want to share something with us, contact us **[here](https://tripetto.com/contact/)**.",
                                    "name": "😢 We're sorry Tripetto isn't right for you.",
                                    "nameVisible": true,
                                    "description": "Could you elaborate a bit on what you feel is wrong? Are you missing certain features? What can we do to make it better?",
                                    "slots": [
                                        {
                                            "id": "8dfff7e0a838709d0d0b5b76765faa077cd23604053f301a0354d12deb07c5a5",
                                            "type": "text",
                                            "kind": "static",
                                            "reference": "value",
                                            "label": "Tekst met meerdere regels",
                                            "required": true
                                        }
                                    ],
                                    "block": {
                                        "type": "tripetto-block-textarea",
                                        "version": "1.0.12-8"
                                    }
                                }
                            ]
                        }
                    ],
                    "conditions": [
                        {
                            "id": "d2659236dc03756707debe20c3ae29aeabb6bd654a8a731f19469540c0973652",
                            "block": {
                                "button": "040976acfc997d53dbf97b4854060beff84b9c685156aa1105613987621dd8e5",
                                "type": "tripetto-block-radiobuttons",
                                "version": "1.0.13-12",
                                "node": "6958fd6300174670eabe0fb0fb79a164eba18adf57c42c8f5e38ec73cdef9be8",
                                "slot": "3837be48fb0ec06724d57a0e5782c32042efa381de1469867369066bf5c35509"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "editor": { "name": "tripetto", "version": "0.4.13-63" }
};
export const DEFAULT_EDITOR_PROPERTIES: IEditorProperties = {
    element: null,
    fonts: `${PUBLIC_URL}/fonts/`,
    disableLogo: true,
    disableTutorialButton: true,
    disableSaveButton: true,
    disableRestoreButton: true,
    disableClearButton: true,
    disableCloseButton: true,
    supportURL: false,
    disableOpenCloseAnimation: false,
    showTutorial: false,
    disableEditButton: true,
    zoom: "fit-horizontal"
};