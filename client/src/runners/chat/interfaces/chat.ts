import { CSSProperties } from "react";
import { ISnapshot, Instance, L10n, TL10n } from "tripetto-runner-foundation";
import { IRunnerAttachments, TRunnerViews } from "tripetto-runner-react-hook";
import { TChatDisplay, TChatPause } from "./props";
import { IChatStyles } from "./styles";
import { IChatSnapshot } from "./snapshot";
import { IDefinition } from "../../../interfaces";

export interface IChat {
    /** Specifies the parent element for the runner. */
    readonly element?: HTMLElement | null;

    /** Specifies the definition to run. */
    readonly definition?: IDefinition | Promise<IDefinition | undefined>;

    /** Specifies the snapshot that should be restored. */
    readonly snapshot?: ISnapshot<IChatSnapshot> | Promise<ISnapshot<IChatSnapshot> | undefined>;

    /** Specifies the styles. */
    readonly styles?: IChatStyles | Promise<IChatStyles | undefined>;

    /** Specifies the localization information. */
    readonly l10n?: TL10n | Promise<TL10n | undefined>;

    /** Specifies the view mode. */
    readonly view?: TRunnerViews;

    /** Specifies the chat display mode. */
    readonly display?: TChatDisplay;

    /** Try to store sessions in the local store to preserve persistency on navigation between multiple pages that host the runner. */
    readonly persistent?: boolean;

    /** Specifies a custom class name for the runner element. */
    readonly className?: string;

    /** Specifies the inline style for the runner element. */
    readonly customStyle?: CSSProperties;

    /**
     * Specifies custom CSS rules.
     * To specify rules for a specific block, use this selector: [data-block="<block identifier>"] { ... }
     */
    readonly customCSS?: string;

    /** Specifies the attachments handler. */
    readonly attachments?: IRunnerAttachments;

    /** Specifies the preferred language (when no language is specified in the definition). */
    readonly language?: string;

    /** Provides locale information. */
    readonly locale?: L10n.ILocale | ((locale: string) => L10n.ILocale | Promise<L10n.ILocale | undefined> | undefined);

    /** Provides translations. */
    readonly translations?:
        | L10n.TTranslation
        | L10n.TTranslation[]
        | ((
              language: string,
              name: string,
              version: string
          ) => L10n.TTranslation | L10n.TTranslation[] | Promise<L10n.TTranslation | L10n.TTranslation[] | undefined> | undefined);

    /** Specifies a function that is invoked when the runner is ready. */
    readonly onReady?: (instance?: Instance) => void;

    /** Specifies a function that is invoked when the runner is touched by a user. */
    readonly onTouch?: () => void;

    /** Specifies a function that is invoked when the user performs an action. */
    readonly onAction?: (
        type: "start" | "stage" | "unstage" | "focus" | "blur" | "pause" | "complete",
        definition: {
            readonly fingerprint: string;
            readonly name: string;
        },
        block?: {
            readonly id: string;
            readonly name: string;
        }
    ) => void;

    /** Invoked when data can be imported into the instance. */
    readonly onImport?: (instance: Instance) => void;

    /** Invoked when there is a change. */
    readonly onChange?: (instance: Instance) => void;

    /** Invoked when there is a data change. */
    readonly onData?: (instance: Instance) => void;

    /** Specifies a function that is invoked when the runner wants to pause. */
    readonly onPause?: TChatPause;

    /** Specifies a function that is invoked when the runner submits data. */
    readonly onSubmit?: (
        instance: Instance,
        language: string,
        locale: string,
        namespace?: string
    ) => Promise<string | undefined> | boolean | void;

    /** Invoked when the runner is completed (after the data is submitted). */
    readonly onComplete?: (instance: Instance, id?: string) => void;

    /** Invoked when the runner wants to reload the definition. */
    readonly onReload?: () => IDefinition | Promise<IDefinition>;

    /** Specifies a function that is invoked when an edit action is requested. */
    readonly onEdit?: (type: "prologue" | "epilogue" | "styles" | "l10n" | "block", id?: string) => void;

    /** Specifies a function that is invoked when the runner is destroyed. */
    readonly onDestroy?: () => void;
}
