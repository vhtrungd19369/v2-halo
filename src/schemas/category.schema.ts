import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    Id_category: String,
    name: String,
    description: String,
});