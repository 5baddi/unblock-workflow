import { TStyles } from "tripetto-runner-foundation";
import { TAvataaarsSkin } from "tripetto-runner-fabric/components/avataaars/skin";
import { TAvataaarsClothing } from "tripetto-runner-fabric/components/avataaars/clothing";
import { TAvataaarsClothingFabric } from "tripetto-runner-fabric/components/avataaars/clothing/fabric";
import { TAvataaarsClothingGraphic } from "tripetto-runner-fabric/components/avataaars/clothing/graphic";
import { TAvataaarsEyes } from "tripetto-runner-fabric/components/avataaars/face/eyes";
import { TAvataaarsEyebrow } from "tripetto-runner-fabric/components/avataaars/face/eyebrow";
import { TAvataaarsMouth } from "tripetto-runner-fabric/components/avataaars/face/mouth";
import { TAvataaarsTop } from "tripetto-runner-fabric/components/avataaars/top";
import { TAvataaarsHairColor } from "tripetto-runner-fabric/components/avataaars/top/hair";
import { TAvataaarsHatColor } from "tripetto-runner-fabric/components/avataaars/top/hat";
import { TAvataaarsFacialHair, TAvataaarsFacialHairColor } from "tripetto-runner-fabric/components/avataaars/top/facial-hair";
import { TAvataaarsAccessories } from "tripetto-runner-fabric/components/avataaars/top/accessories";

export interface IChatStyles extends TStyles {
    readonly display?: "inline" | "button" | "page";
    readonly color?: string;
    readonly autoOpen?: boolean;
    readonly autoFocus?: boolean;
    readonly showScrollbar?: boolean;
    readonly fullWidth?: boolean;
    readonly noBranding?: boolean;

    readonly font?: {
        readonly family?: string;
        readonly size?: number;
        readonly sizeSmall?: number;
    };

    readonly background?: {
        readonly color?: string;
        readonly url?: string;
        readonly opacity?: number;
        readonly positioning?: "auto" | "100% auto" | "auto 100%" | "cover" | "contain" | "repeat";
    };

    readonly avatar?: {
        readonly type?: "avataaar" | "image";
        readonly image?: string;
        readonly skin?: TAvataaarsSkin;
        readonly eyes?: TAvataaarsEyes;
        readonly eyeBrow?: TAvataaarsEyebrow;
        readonly mouth?: TAvataaarsMouth;
        readonly top?: TAvataaarsTop;
        readonly hairColor?: TAvataaarsHairColor;
        readonly hatColor?: TAvataaarsHatColor;
        readonly facialHair?: TAvataaarsFacialHair;
        readonly facialHairColor?: TAvataaarsFacialHairColor;
        readonly clothing?: TAvataaarsClothing;
        readonly clothingFabric?: TAvataaarsClothingFabric;
        readonly clothingGraphic?: TAvataaarsClothingGraphic;
        readonly accessories?: TAvataaarsAccessories;
    };

    readonly questions?: {
        readonly alignment?: "left" | "right";
        readonly roundness?: number;
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly textColor?: string;
    };

    readonly answers?: {
        readonly alignment?: "left" | "right";
        readonly roundness?: number;
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly textColor?: string;
        readonly avatarImage?: string;
    };

    readonly chatButton?: {
        readonly color?: string;
        readonly image?: string;
    };

    readonly inputs?: {
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly borderSize?: number;
        readonly roundness?: number;
        readonly textColor?: string;
        readonly errorColor?: string;
        readonly agreeColor?: string;
        readonly declineColor?: string;
        readonly selectionColor?: string;
    };

    readonly buttons?: {
        readonly baseColor?: string;
        readonly textColor?: string;
        readonly roundness?: number;
        readonly mode?: "fill" | "outline";
    };

    readonly checkboxes?: {
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly borderSize?: number;
        readonly roundness?: number;
        readonly textColor?: string;
        readonly errorColor?: string;
    };

    readonly radiobuttons?: {
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly borderSize?: number;
        readonly textColor?: string;
    };

    readonly matrix?: {
        readonly backgroundColor?: string;
        readonly borderColor?: string;
        readonly borderSize?: number;
        readonly textColor?: string;
        readonly errorColor?: string;
    };
}
