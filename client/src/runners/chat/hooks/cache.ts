import { ReactNode, useRef } from "react";
import { each } from "tripetto-runner-foundation";
import { IRunnerSequenceItem } from "tripetto-runner-react-hook";
import { IChatRenderProps, IChatRendering } from "../interfaces/block";

export interface ICache {
    readonly prepare: (item: IRunnerSequenceItem<IChatRendering>, fnBlock: () => IChatRenderProps) => void;

    readonly fetch: (
        type: "question" | "answer" | "input",
        create: (block: IChatRenderProps) => ReactNode,
        item: IRunnerSequenceItem<IChatRendering>
    ) => ReactNode;

    readonly purge: () => void;
}

export function useCache(): ICache {
    const cacheRef = useRef<ICache>();

    if (!cacheRef.current) {
        const cache: {
            [node: string]:
                | {
                      readonly buffer: ReactNode;
                      readonly allowNext: boolean;
                      readonly allowUndo: boolean;
                  }
                | undefined;
        } = {};
        let generator: () => IChatRenderProps;
        let props: IChatRenderProps | undefined;
        const isDirty = (item: IRunnerSequenceItem<IChatRendering>) => {
            const current = cache["input" + item.id];

            return (current && (current.allowNext !== item.allowNext || current.allowUndo !== item.allowUndo)) || false;
        };

        cacheRef.current = {
            prepare: (item: IRunnerSequenceItem<IChatRendering>, fnBlock: () => IChatRenderProps) => {
                generator = fnBlock;
                props = undefined;

                if (!item.node || item.node.hasChanged()) {
                    each(["question", "answer", "input"], (type) => {
                        delete cache[type + item.id];
                    });
                } else if (isDirty(item)) {
                    delete cache["input" + item.id];
                }
            },
            fetch: (
                type: "question" | "answer" | "input",
                create: (block: IChatRenderProps) => ReactNode,
                item: IRunnerSequenceItem<IChatRendering>
            ) => {
                const key = type + item.id;
                const current = cache[key];

                if (current) {
                    return current.buffer;
                }

                return (cache[key] = {
                    buffer: create(props || (props = generator())),
                    allowNext: item.allowNext,
                    allowUndo: item.allowUndo,
                }).buffer;
            },
            purge: () => {
                each(
                    cache,
                    (node, key: string) => {
                        delete cache[key];
                    },
                    {
                        keys: true,
                    }
                );
            },
        };
    }

    return cacheRef.current;
}
