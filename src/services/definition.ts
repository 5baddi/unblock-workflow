import { IDefinition } from "../interfaces/definition";
import { DEFINITION_COLLECTION_NAME, ROOT_USER_ID } from "../settings";
import { inject, injectable } from "inversify";
import { IDefinitionService } from "../interfaces/services";
import { IMongoDBService } from "../interfaces/services";
import Symbols from "../symbols";
import { IEntity } from "../interfaces/entity";

@injectable()
export class DefinitionService implements IDefinitionService
{
    private readonly mongoDBService: IMongoDBService;

    constructor(
        @inject(Symbols.DefinitionService) mongoDBService: IMongoDBService
    ) {
        this.mongoDBService = mongoDBService;
    }

    async saveDefinition(definition: IDefinition, userId: string = ROOT_USER_ID): Promise<IEntity | undefined>
    {
        let entity = Object.assign({} as IEntity, JSON.parse(JSON.stringify(definition)));

        return this.mongoDBService
            .findOneAndReplace(
                DEFINITION_COLLECTION_NAME,
                { _id: entity._id, userId: userId },
                entity
            );
    }
}