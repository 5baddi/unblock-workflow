import { ObjectId } from 'mongodb';
export interface IEntity
{
    _id?: string | ObjectId;
    updated_at?: number;
    created_at?: number;
    deleted_at?: number;
}