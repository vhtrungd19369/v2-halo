import * as mongoose from 'mongoose';

export const ExportSchema = new mongoose.Schema({
    Id_employees: String,
    contract: Number,
    date: Number,
    description: String,
});