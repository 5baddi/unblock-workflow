import { tripetto, HeadlessBlock } from "tripetto-runner-foundation";
import { BLOCK_NAME } from '../constants';
import { IProcessTaskField } from '../interfaces';

@tripetto({
    identifier: BLOCK_NAME,
    type: "headless"
})
export class ProcessTask extends HeadlessBlock<IProcessTaskField>
{
    do(): void {}
}