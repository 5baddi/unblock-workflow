import { IRunnerProps, TRunnerViews } from "tripetto-runner-react-hook";
import { IDefinition, ISnapshot, TL10n } from "tripetto-runner-foundation";
import * as React from "react";
import { IChatController } from "../hooks/controller";
import { IChatSnapshot } from "./snapshot";
import { IChatStyles } from "./styles";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";

export type TChatDisplay = "inline" | "button" | "page";

export type TChatPause =
    | {
          readonly recipe: "email";
          readonly onPause: (
              emailAddress: string,
              snapshot: ISnapshot,
              language: string,
              locale: string,
              namespace: string
          ) => Promise<void> | boolean | void;
      }
    | ((snapshot: ISnapshot, language: string, locale: string, namespace: string) => Promise<void> | boolean | void);

export interface IChatProps extends IRunnerProps<IChatSnapshot> {
    readonly styles?: IChatStyles;
    readonly l10n?: TL10n;
    readonly view?: TRunnerViews;
    readonly display?: TChatDisplay;
    readonly controller?: [IChatController | undefined];
    readonly className?: string;
    readonly customStyle?: React.CSSProperties;
    readonly customCSS?: string;
    readonly onL10n?: (l10n: TL10n) => Promise<void>;
    readonly onReload?: () => IDefinition | Promise<IDefinition>;
    readonly onEdit?: (type: "prologue" | "epilogue" | "styles" | "l10n" | "block", id?: string) => void;
    readonly onPause?: TChatPause;
    readonly onTouch?: () => void;
    readonly user?: User;
    readonly glue?: Glue42Web.API | Glue42.Glue;
}
