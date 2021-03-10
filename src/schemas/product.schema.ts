import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
});
