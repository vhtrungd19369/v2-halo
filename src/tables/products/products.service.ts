import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Document, Model } from 'mongoose';
import { CreateCategoryDto } from '../category/dto/create-category.dto';
import { ProductInterface } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
    [x: string]: any;
   constructor(@InjectModel('Product') private readonly productModel:Model<ProductInterface & Document>) {}

    async findAll(): Promise<ProductInterface[]> {
        return await this.productModel.find();
    }

    async findOne(id:string): Promise<ProductInterface> {
        return await this.productModel.findOne({ _id: id })
    }

    async create(Id_category:CreateCategoryDto, prod:ProductInterface): Promise<ProductInterface> {
        const newPro = new this.productModel(prod);
        const id_category = new this.CategoryInterface(Id_category);

        return await id_category, newPro.save();
    }
    
    async delete(Id_product: string): Promise<ProductInterface> {
        return await this.productModel.findByIdAndRemove(Id_product);
    }

    async update(Id_product: string, product: ProductInterface ): Promise<ProductInterface> {
        return await this.productModel.findByIdAndUpdate(Id_product, product, {new: true});
    }
}