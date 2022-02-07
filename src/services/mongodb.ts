import { inject } from "inversify";
import Symbols from "../symbols";
import { IMongoDBProvider } from "../interfaces/providers";
import { IMongoDBService } from "../interfaces/services";
import { IEntity } from "../interfaces/entity";

export class MongoDBService implements IMongoDBService
{
    readonly mongodbProvider: IMongoDBProvider;

    constructor(
        @inject(Symbols.MongoDBProvider) mongodbProvider: IMongoDBProvider
    ) {
        this.mongodbProvider = mongodbProvider;
    }

    async findOne(collectionName: string, filter: object): Promise<IEntity | undefined>
    {
        let connection = await this.mongodbProvider.connect();
        let db = connection.db();

        return db.collection(collectionName)
            .findOne(filter)
            .then(result => {
                if (result === null) {
                    return Promise.resolve(undefined);
                }

                let entity = Object.assign({} as IEntity,  JSON.parse(JSON.stringify(result)));

                connection.close();

                return Promise.resolve(entity);
            })
            .catch(error => Promise.reject(error));
    }

    async findOneAndUpdate(collectionName: string, filter: object, entity: IEntity, upsert: boolean = false): Promise<IEntity | undefined>
    {
        let connection = await this.mongodbProvider.connect();
        let db = connection.db();

        entity = this.mongodbProvider.setDefaultFields(entity);

        return db.collection(collectionName)
            .findOneAndUpdate(filter, { $set: entity }, { upsert: upsert })
            .then(result => {
                if (result === null) {
                    return Promise.resolve(undefined);
                }

                connection.close();

                return Promise.resolve(entity);
            })
            .catch(error => Promise.reject(error));
    }

    async findOneAndReplace(collectionName: string, filter: object, entity: IEntity, upsert: boolean = true): Promise<IEntity | undefined>
    {
        let connection = await this.mongodbProvider.connect();
        let db = connection.db();

        entity = this.mongodbProvider.setDefaultFields(entity);

        return db.collection(collectionName)
            .findOneAndReplace(filter, entity, { upsert: upsert })
            .then(result => {
                if (result === null) {
                    return Promise.resolve(undefined);
                }

                connection.close();

                return Promise.resolve(entity);
            })
            .catch(error => Promise.reject(error));
    }

    async findOneAndDelete(collectionName: string, filter: object): Promise<void | undefined>
    {
        let connection = await this.mongodbProvider.connect();
        let db = connection.db();

        return db.collection(collectionName)
            .findOneAndDelete(filter)
            .then(() => {
                connection.close();

                return Promise.resolve();
            })
            .catch(error => Promise.reject(error));
    }
}