import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './shemas/product.schema';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Product',
        schema: ProductSchema,
      },
    ]),
  ],

  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
