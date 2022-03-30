import { L10n, NodeBlock } from "tripetto-runner-foundation";
import * as React from "react";
import { IRuntimeStyles } from "../hooks/styles";
import { IRunnerAttachments, TRunnerViews } from "tripetto-runner-react-hook";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";

export interface IChatRenderProps {
    readonly id: string;
    readonly l10n: L10n.Namespace;
    readonly styles: IRuntimeStyles;
    readonly view: TRunnerViews;
    readonly name: JSX.Element | undefined;
    readonly description: JSX.Element | undefined;
    readonly explanation: JSX.Element | undefined;
    readonly label: JSX.Element | undefined;
    readonly placeholder: string;
    readonly submitLabel: string;
    readonly isFailed: boolean;
    readonly ariaDescribedBy: string | undefined;
    readonly ariaDescription: JSX.Element | undefined;
    readonly focus: <T>(e: React.FocusEvent) => T;
    readonly blur: <T>(e: React.FocusEvent) => T;
    readonly autoFocus: (element: HTMLElement | null) => void;
    readonly attachments: IRunnerAttachments | undefined;
    readonly markdownifyToJSX: (md: string, lineBreaks?: boolean) => JSX.Element;
    readonly markdownifyToURL: (md: string) => string;
    readonly markdownifyToImage: (md: string) => string;
    readonly markdownifyToString: (md: string) => string;
    readonly user?: User;
    readonly glue?: Glue42Web.API | Glue42.Glue;
}

export interface IChatRendering extends NodeBlock {
    readonly required?: boolean;
    readonly question?: (props: IChatRenderProps) => React.ReactNode;
    readonly answer?: (props: IChatRenderProps) => React.ReactNode;
    readonly input?: (props: IChatRenderProps, done?: () => void, cancel?: () => void) => React.ReactNode;
}
