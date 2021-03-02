import * as mognoose from 'mongoose';

export const ProductSchema = new mognoose.Schema({
    Id_category: String,
    name: String,
    description: String,
});