export interface IChatSnapshot {
    /** Contains the key of the active item. */
    readonly a?: string;

    /** Contains focus information. */
    readonly b?: {
        [key: string]: false | true | undefined;
    };

    /** Contains if the chat was visible or not. */
    readonly c?: boolean;

    /** Contains the email address that was used to pause. */
    readonly d?: string;

    /** Contains a timestamp of the snapshot. */
    readonly e?: number;
}
