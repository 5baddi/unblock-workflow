import { MongoClient } from "mongodb";
import { IEntity } from "./entity";

export interface IMongoDBProvider
{
    connect(): Promise<MongoClient>;

    getCurrentTimestamp(): number;

    setDefaultFields(entity: IEntity): IEntity;
}