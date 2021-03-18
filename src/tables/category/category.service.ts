import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CategoryInterface } from './interfaces/category.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
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
    const newCat = new this.categoryModel(createCategoryDto);

    return await newCat.save();
  }

  async delete(id: string): Promise<CategoryInterface> {
    return this.categoryModel.findByIdAndRemove(id);
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
