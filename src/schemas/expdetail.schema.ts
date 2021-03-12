import * as mongoose from 'mongoose';

export const ExpDetailSchema = new mongoose.Schema({
  quantity: Number,
  unit: String,
  exportID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Export',
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});
