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
      .populate([{ path: 'categoryID', select: 'name' }])
      .exec();
  }

  async findOne(id: string): Promise<ProductInterface> {
    return this.productModel
      .findOne({ _id: id })
      .populate([{ path: 'categoryID' }])
      .exec();
  }

  async create(crtProductDto: CreateProductDto): Promise<ProductInterface> {
    const newPro = new this.productModel({ ...crtProductDto });
    return await newPro.save();
  }

  async delete(ID: string): Promise<ProductInterface> {
    return this.productModel.findByIdAndRemove(ID);
  }

  async update(
    ID: string,
    product: ProductInterface,
  ): Promise<ProductInterface> {
    return this.productModel.findByIdAndUpdate(ID, product, {
      new: true,
    });
  }
}
