import * as mongoose from 'mongoose';

export const ExpDetailSchema = new mongoose.Schema({
  Id_emport: String,
  Id_product: String,
  quantity: Number,
  unit: String,
});
