import { IMongoDBProvider } from "./providers";
import { IDefinition } from "./definition";
import { IEntity } from "./entity";

export interface IMongoDBService
{
    readonly mongodbProvider: IMongoDBProvider;

    findOne(collectionName: string, filter: object): Promise<IEntity | undefined>;

    findOneAndUpdate(collectionName: string, filter: object, entity: IEntity, upsert?: boolean): Promise<IEntity | undefined>;

    findOneAndReplace(collectionName: string, filter: object, entity: IEntity, upsert?: boolean): Promise<IEntity | undefined>;

    findOneAndDelete(collectionName: string, filter: object): Promise<void | undefined>;
}

export interface IDefinitionService
{
    saveDefinition(definition: IDefinition, user_id?: string): Promise<IEntity | undefined>;
}