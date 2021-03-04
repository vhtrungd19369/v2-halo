import * as mongoose from 'mongoose'

export const ExportDetailSchema = new mongoose.Schema({
    Id_emport: String,
    Id_product: String,
    quantity: Number,
    unit: String,
})