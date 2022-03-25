export interface ISerialize {
    /** Retrieves the specified property. */
    readonly [property: string]: TSerializeTypes;
}

export type TSerializePrimitives = string | number | boolean | undefined | null | ISerialize;

export type TSerializeTypes = TSerializePrimitives | TSerializePrimitives[];

export interface IGridResource extends ISerialize {
    /** Contains the identifier for the serialized resource. */
    readonly id: string;
}

export interface INode extends IGridResource {
    readonly block?: INodeBlock;
    readonly slots?: ISlot[];
    readonly disabled?: boolean;
    readonly name?: string;
    readonly nameVisible?: boolean;
    readonly placeholder?: string;
    readonly description?: string;
    readonly explanation?: string;
}

export interface INodeBlock extends ISerialize {
    /** Contains the node block type. */
    readonly type: string;
    /** Contains the version of the block. */
    readonly version: string;
}

export interface ISlot<T extends TSerializeTypes = TSerializeTypes> extends ISlotBase<T>, ISerialize {}

export type Kinds = "meta" | "static" | "dynamic" | "feature";

export type TPipeable =
        | boolean
        | {
              /** Optional name for the pipe. */
              readonly pipe?: string;
              /** Optional localized label for the pipe. */
              readonly label?: string;
              /** Optional alias for the pipe. */
              readonly alias?: string;
              /** Specifies the field or content that should be used as the pipe string (defaults to `value` which is the current value of the slot). */
              readonly content?:
                  | "value"
                  | "label"
                  | "name"
                  | {
                        /** Contains the content as a string without any markup or variables. */
                        readonly string: string;
                        /** Contains the content as text with support for variables. */
                        readonly text?: string;
                        /** Contains markdown content with support for basic formatting, hyperlinks and variables. */
                        readonly markdown?: string;
                    };
              /**
               * Specifies the name of a legacy pipe. Only here for backwards compatibility.
               * @deprecated
               */
              readonly legacy?: string;
          };

export interface ISlotBase<T extends TSerializeTypes = TSerializeTypes> {
    /** Contains the id for the serialized slot. */
    readonly id: string;
    /** Contains the slot type. */
    readonly type: string;
    /** Contains the slot kind. */
    readonly kind: Kinds;
    /** Contains the slot reference. */
    readonly reference: string;
    /** Contains the slot sequence number. */
    readonly sequence?: number;
    /** Contains the label for the slot. */
    readonly label?: string;
    /** Contains the slot name. */
    readonly name?: string;
    /** Contains the slot placeholder. */
    readonly placeholder?: string;
    /** Contains the slot alias. */
    readonly alias?: string;
    /** Contains if the slot is required. */
    readonly required?: boolean;
    /** Contains if the slot is pipeable. */
    readonly pipeable?: TPipeable;
    /** Contains the default slot value. */
    readonly default?: T;
    /** Contains if this slot is exportable. */
    readonly exportable?: boolean;
    /** Contains if the slot is actionable. */
    readonly actionable?: boolean;
    /** Contains if the slot is protected. */
    readonly protected?: boolean;
}

export interface IExportableFieldNode {
    /** Contains the node identifier. */
    readonly id: string;
    /** Contains the key of the node within the context. */
    readonly key: string;
    /** Contains the context for the node. */
    readonly context: string;
    /** Retrieve a reference to the node props. */
    readonly props: () => INode;
}

export interface IExportableField {
    /** A unique key for the data field. */
    readonly key: string;
    /** Contains the name. */
    readonly name: string;
    /** Contains the block type identifier. */
    readonly type: string;
    /** Contains the block version. */
    readonly version: string;
    /** Contains the node. */
    readonly node: IExportableFieldNode;
    /** Contains the slot reference. */
    readonly slot: string;
    /** Contains the slot data type. */
    readonly datatype: string;
    /** Contains the data as a string. */
    readonly string: string;
    /** Contains the data value. */
    readonly value: TSerializeTypes;
    /** Contains if the data was modified. */
    readonly modified: boolean;
    /** Contains the data reference. */
    readonly reference?: string;
    /** Contains the UTC set time of the data. */
    readonly time?: number;
}