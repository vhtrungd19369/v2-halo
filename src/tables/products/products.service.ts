import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { ProductInterface } from '../../interfaces/product.interface';
import mongoose from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface & Document>,
  ) {}

  async onModuleInit() {
    await this.create({
      name: 'String',
      description: 'String',
      price: 12,
      category: '603df1e939a0b55723d32e4f',
      emp: '603df1e939a0b55723d32e4f',
    });

    console.log(
      'rs ----------->',
      await this.findOne('60488b9d7912b4bc9e9f87de'),
    );
  }

  async findAll(): Promise<ProductInterface[]> {
    return this.productModel.find();
  }

  async findOne(id: string): Promise<ProductInterface> {
    return this.productModel
      .findOne({ _id: id })
      .populate([{ path: 'category' }, { path: 'emp' }])
      .exec();
  }

  async create(createProductDto): Promise<ProductInterface> {
    console.log('============>', createProductDto);
    const newPro = new this.productModel({ ...createProductDto });
    return await newPro.save();
  }

  async delete(ID: string): Promise<ProductInterface> {
    return this.productModel.findByIdAndRemove(ID);
  }

  async update(
    ID: string,
    product: ProductInterface,
  ): Promise<ProductInterface> {
    return this.productModel.findByIdAndUpdate(ID, product, { new: true });
  }
}
