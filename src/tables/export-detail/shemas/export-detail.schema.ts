import * as mongoose from 'mongoose';

export const ExportDetailSchema = new mongoose.Schema({
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
