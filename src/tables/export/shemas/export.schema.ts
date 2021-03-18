import * as mongoose from 'mongoose';

export const ExportSchema = new mongoose.Schema({
  contract: Number,
  date: Number,
  description: String,
  employeesID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employees',
  },
});
