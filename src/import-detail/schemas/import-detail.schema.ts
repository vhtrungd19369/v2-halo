import * as mongoose from 'mongoose';

export const ImportDetailSchema = new mongoose.Schema({
  importId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Import',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
  unit: String,
});
