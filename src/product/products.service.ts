import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { ProductInterface } from './interfaces/product.interface';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface & Document>,
  ) {}

  async findAll(): Promise<ProductInterface[]> {
    return this.productModel
      .find()
      .populate([{ path: 'categoryId', select: 'name' }])
      .exec();
  }

  async findOne(id: string): Promise<ProductInterface> {
    return this.productModel
      .findOne({ _id: id })
      .populate([{ path: 'categoryId' }])
      .exec();
  }

  async create(createProductDto: CreateProductDto): Promise<ProductInterface> {
    const newProduct = new this.productModel({ ...createProductDto });
    return await newProduct.save();
  }

  async delete(id: string): Promise<ProductInterface> {
    return this.productModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    product: ProductInterface,
  ): Promise<ProductInterface> {
    return this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
  }
}
