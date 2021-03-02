import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CategoryInterface } from './interfaces/category.interface';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel:Model<CategoryInterface & Document>) {}
 
    async findAll(): Promise<CategoryInterface[]>{
        return await this.categoryModel.find();
    }

    async findOne(id:string): Promise<CategoryInterface> {
        return await this.categoryModel.findOne({_id: id});
    }

    async create(cat:CategoryInterface): Promise<CategoryInterface>{
        const newCat = new this.categoryModel(cat);
        
        return await newCat.save();
    }

    async delete(Id_category: string): Promise<CategoryInterface> {
        return await this.categoryModel.findByIdAndRemove(Id_category);
    }

    async update(Id_category: string, category: CategoryInterface): Promise<CategoryInterface> {
        return await this.categoryModel.findByIdAndUpdate(Id_category, category, {new: true});
    }

}
