import { IChatController } from "../hooks/controller";

export interface IChatRunner extends IChatController {
    readonly destroy: () => void;
}
