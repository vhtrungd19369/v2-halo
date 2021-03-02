import * as mognoose from 'mongoose';

export const CategorySchema = new mognoose.Schema({
    name: String,
    description: String,
});