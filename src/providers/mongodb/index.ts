import { inject, injectable } from "inversify";
import { IMongoDBProvider } from "../../interfaces/providers";
import { ILogger } from "../../interfaces/logger";
import Symbols from "../../symbols";
import { MongoClient, ObjectId } from "mongodb";
import { IEntity } from "../../interfaces/entity";
import { MONGODB_URL, DEFINITION_COLLECTION_NAME, TASK_COLLECTION_NAME, USER_COLLECTION_NAME } from "../../settings";

@injectable()
export class MongoDBProvider implements IMongoDBProvider
{
    private readonly logger: ILogger;

    constructor(
        @inject(Symbols.Logger) logger: ILogger
    ) {
        this.logger = logger;

        this.initCollections()
            .catch(error => {
                if (error.hasOwnProperty("message") && error.message.indexOf("ECONNREFUSED") !== -1) {
                    process.exit(1);
                }
            });
    }

    async connect(): Promise<MongoClient>
    {
        try {
            if (! MONGODB_URL) {
                throw new Error("The environment variable 'MONGODB_URL' is not defined.");
            }

            return await MongoClient.connect(MONGODB_URL);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    getCurrentTimestamp(): number
    {
        return (new ObjectId()).getTimestamp().getTime();
    }

    setDefaultFields(entity: IEntity): IEntity
    {
        let now = this.getCurrentTimestamp();

        entity.updated_at = now;

        if (typeof entity.created_at === "undefined") {
            entity.created_at = now;
        }

        return entity;
    }

    private async initCollections(): Promise<void>
    {
        let connection = await this.connect();
        let db = connection.db();

        db.listCollections()
            .toArray(function (error, collections) {
                if (error) {
                    throw error;
                }

                if (collections?.length === 0) {
                    db.createCollection(USER_COLLECTION_NAME);
                    db.createCollection(DEFINITION_COLLECTION_NAME);
                    db.createCollection(TASK_COLLECTION_NAME);
                }
            });
    }
}