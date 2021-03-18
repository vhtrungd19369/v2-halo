import * as mongoose from 'mongoose';

export const ImportSchema = new mongoose.Schema({
  contract: Number,
  date: Number,
  description: String,
  employeesId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
});
