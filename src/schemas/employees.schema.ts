import * as mongoose from 'mongoose';

export const EmployeesSchema = new mongoose.Schema({
    Id_employees: String,
    name: String,
    description: String,
    phone: number,
    gender: String
});