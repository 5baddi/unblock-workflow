import { tripetto, HeadlessBlock } from "tripetto-runner-foundation";
import { BLOCK_NAME } from '../constants';
import { IZendeskField } from '../interfaces';

@tripetto({
    identifier: BLOCK_NAME,
    type: "headless"
})
export class Zendesk extends HeadlessBlock<IZendeskField>
{
    do(): void {}
}