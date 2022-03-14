import { each } from "tripetto-runner-foundation";

interface IRef {
    readonly resize: () => void;
    readonly index: number;
}

const refs: {
    [index: number]: IRef | undefined;
} = {};
let index = 0;

export const attach = (resize: () => void): IRef => {
    while (refs[index]) {
        index++;
    }

    resize();

    return (refs[index] = {
        resize,
        index,
    });
};

export const detach = (ref: IRef): void => {
    index = ref.index;

    delete refs[ref.index];
};

export const onLoad = () => {
    each(refs, (ref: IRef | undefined) => {
        if (ref) {
            ref.resize();
        }
    });
};
