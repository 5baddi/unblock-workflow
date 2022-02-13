import { MongoClient } from "mongodb";
import { MONGODB_URL, ENV } from '../settings';

async function connect(): Promise<MongoClient>
{
    if (! MONGODB_URL) {
        return Promise.reject(new Error("The environment variable 'MONGODB_URL' is not defined."));
    }

    return MongoClient.connect(MONGODB_URL)
        .then(connection => {
            return connection;
        })
        .catch(error => {
            if (ENV === "development") {
                console.log(error);
            }

            return error;
        });
}

export {
    connect
}