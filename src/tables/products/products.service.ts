import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { ProductInterface } from '../../interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface & Document>,
  ) {}
  //
  // async onModuleInit() {
  //   await this.create({
  //     name: 'String',
  //     description: 'String',
  //     price: 12,
  //     category: '603df1e939a0b55723d32e4f',
  //   });
  //
  //   console.log(
  //     'rs -Product-findOne--------->',
  //     await this.findOne('603e0a9281d6ab7625e49a7b'),
  //   );
  // }

  async findAll(): Promise<ProductInterface[]> {
    return this.productModel
      .find({})
      .populate([{ path: 'categoryID' }])
      .exec();
  }

  async findOne(id: string): Promise<ProductInterface> {
    return this.productModel
      .findOne({ _id: id })
      .populate([{ path: 'categoryID' }])
      .exec();
  }

  async create(crtProductDto: CreateProductDto): Promise<ProductInterface> {
    // console.log('=========');
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
