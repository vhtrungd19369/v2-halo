import * as mongoose from 'mongoose'

export const ImpDetailSchema = new mongoose.Schema({
    Id_importdetail: String,
    Id_import: String,
    Id_product: String,
    quantity: Number,
    unit: String,
})