import * as mongoose from 'mongoose';

export const EmployeesSchema = new mongoose.Schema({
  name: String,
  mail: String,
  phone: Number,
  gender: String,
});
