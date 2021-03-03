import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import * as mongoose from 'mongoose';
import { CategorySchema } from './category.schema';

// export type ProductDocument = Product & Document;
// @Schema()
// export class Product{
//   @Prop()
//   name: string;

//   @Prop()
//   description: number;

//   @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CategorySchema' }] })
//   Id_category: string;

// }

// export const ProductSchema = SchemaFactory.createForClass(Product);


export const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
});