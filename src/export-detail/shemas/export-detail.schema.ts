import * as mongoose from 'mongoose';

export const ExportDetailSchema = new mongoose.Schema({
  quantity: Number,
  unit: String,
  exportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Export',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});
