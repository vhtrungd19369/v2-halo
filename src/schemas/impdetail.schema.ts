import * as mongoose from 'mongoose'
import { exitCode } from 'node:process';

export const ImpDetailSchema = new mongoose.Schema({
    Id_import: String,
    Id_product: String,
    quantity: Number,
    unit: String,
})
