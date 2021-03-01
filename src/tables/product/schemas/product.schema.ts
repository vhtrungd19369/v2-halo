import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    Name_product: String,
    Description_product: String,  
});