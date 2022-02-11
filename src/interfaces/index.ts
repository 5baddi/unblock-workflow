import { ObjectId } from 'mongodb';

export interface IMongoDBFilter
{
    _id?: string | ObjectId | object;
    deleted_at?: Date | object;
}