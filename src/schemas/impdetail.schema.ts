import * as mongoose from 'mongoose';

export const ImpDetailSchema = new mongoose.Schema({
  quantity: Number,
  unit: String,
  importID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Import',
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});
