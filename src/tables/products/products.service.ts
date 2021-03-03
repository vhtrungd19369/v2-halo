import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Document, Model } from 'mongoose';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { ProductInterface } from '../../interfaces/product.interface';

@Injectable()
export class ProductsService {
   constructor(@InjectModel('Product') private readonly productModel:Model<ProductInterface & Document>) {}

    async findAll(): Promise<ProductInterface[]> {
        return await this.productModel.find();
    }

    async findOne(id:string): Promise<ProductInterface> {
        return await this.productModel.findOne({ _id: id })
    }

    async create(createProductDto:CreateProductDto): Promise<ProductInterface> {
        const newPro = new this.productModel(createProductDto);
        return await newPro.save();
    }
    
    async delete(ID: string): Promise<ProductInterface> {
        return await this.productModel.findByIdAndRemove(ID);
    }

    async update(ID: string, product: ProductInterface ): Promise<ProductInterface> {
        return await this.productModel.findByIdAndUpdate(ID, product, {new: true});
    }
}