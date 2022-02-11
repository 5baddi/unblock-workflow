import { ObjectId } from 'mongodb';
export interface IEntity
{
    _id?: string | ObjectId;
    updated_at?: Date;
    created_at?: Date;
    deleted_at?: Date;
}