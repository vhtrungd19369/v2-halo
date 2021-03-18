import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CategoryInterface } from './interfaces/category.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategorysService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryInterface & Document>,
  ) {}

  async findAll(): Promise<CategoryInterface[]> {
    return this.categoryModel.find();
  }

  async findOne(id: string): Promise<CategoryInterface> {
    return this.categoryModel.findOne({ _id: id });
  }

  async create(
    createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryInterface> {
    const newCategory = new this.categoryModel(createCategoryDto);

    return await newCategory.save();
  }

  async delete(id: string): Promise<CategoryInterface> {
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }

  async update(
    id: string,
    categoryInterface: CategoryInterface,
  ): Promise<CategoryInterface> {
    return this.categoryModel.findByIdAndUpdate(id, categoryInterface, {
      new: true,
    });
  }
}
