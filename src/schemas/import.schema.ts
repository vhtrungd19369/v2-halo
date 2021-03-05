import * as mongoose from 'mongoose'

export const ImportSchema = new mongoose.Schema({
    Id_employees: String,
    contract: Number,
    date: Number,
    description: String
})