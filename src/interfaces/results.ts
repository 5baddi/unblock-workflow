export interface ISerialize {
    /** Retrieves the specified property. */
    [property: string]: TSerializeTypes;
}

export type TSerializePrimitives = string | number | boolean | undefined | null | ISerialize;

export type TSerializeTypes = TSerializePrimitives | TSerializePrimitives[];

export interface IGridResource extends ISerialize {
    /** Contains the identifier for the serialized resource. */
    id: string;
}

export interface INode extends IGridResource {
    block?: INodeBlock;
    slots?: ISlot[];
    disabled?: boolean;
    name?: string;
    nameVisible?: boolean;
    placeholder?: string;
    description?: string;
    explanation?: string;
}

export interface INodeBlock extends ISerialize {
    /** Contains the node block type. */
    type: string;
    /** Contains the version of the block. */
    version: string;
}

export interface ISlot<T extends TSerializeTypes = TSerializeTypes> extends ISlotBase<T>, ISerialize {}

export type Kinds = "meta" | "static" | "dynamic" | "feature";

export type TPipeable =
        | boolean
        | {
              /** Optional name for the pipe. */
              pipe?: string;
              /** Optional localized label for the pipe. */
              label?: string;
              /** Optional alias for the pipe. */
              alias?: string;
              /** Specifies the field or content that should be used as the pipe string (defaults to `value` which is the current value of the slot). */
              content?:
                  | "value"
                  | "label"
                  | "name"
                  | {
                        /** Contains the content as a string without any markup or variables. */
                        string: string;
                        /** Contains the content as text with support for variables. */
                        text?: string;
                        /** Contains markdown content with support for basic formatting, hyperlinks and variables. */
                        markdown?: string;
                    };
              /**
               * Specifies the name of a legacy pipe. Only here for backwards compatibility.
               * @deprecated
               */
              legacy?: string;
          };

export interface ISlotBase<T extends TSerializeTypes = TSerializeTypes> {
    /** Contains the id for the serialized slot. */
    id: string;
    /** Contains the slot type. */
    type: string;
    /** Contains the slot kind. */
    kind: Kinds;
    /** Contains the slot reference. */
    reference: string;
    /** Contains the slot sequence number. */
    sequence?: number;
    /** Contains the label for the slot. */
    label?: string;
    /** Contains the slot name. */
    name?: string;
    /** Contains the slot placeholder. */
    placeholder?: string;
    /** Contains the slot alias. */
    alias?: string;
    /** Contains if the slot is required. */
    required?: boolean;
    /** Contains if the slot is pipeable. */
    pipeable?: TPipeable;
    /** Contains the default slot value. */
    default?: T;
    /** Contains if this slot is exportable. */
    exportable?: boolean;
    /** Contains if the slot is actionable. */
    actionable?: boolean;
    /** Contains if the slot is protected. */
    protected?: boolean;
}

export interface IExportableFieldNode {
    /** Contains the node identifier. */
    id: string;
    /** Contains the key of the node within the context. */
    key: string;
    /** Contains the context for the node. */
    context: string;
    /** Retrieve a reference to the node props. */
    props: () => INode;
}

export interface IExportableField {
    /** A unique key for the data field. */
    key: string;
    /** Contains the name. */
    name: string;
    /** Contains the block type identifier. */
    type: string;
    /** Contains the block version. */
    version: string;
    /** Contains the node. */
    node: IExportableFieldNode;
    /** Contains the slot reference. */
    slot: string;
    /** Contains the slot data type. */
    datatype: string;
    /** Contains the data as a string. */
    string: string;
    /** Contains the data value. */
    value: TSerializeTypes;
    /** Contains if the data was modified. */
    modified: boolean;
    /** Contains the data reference. */
    reference?: string;
    /** Contains the UTC set time of the data. */
    time?: number;
}