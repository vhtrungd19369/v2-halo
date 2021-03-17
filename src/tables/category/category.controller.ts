import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryInterface } from './interfaces/category.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<CategoryInterface[]> {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryInterface> {
    return await this.categoryService.findOne(id);
  }

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryInterface> {
    return await this.categoryService.create(createCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<CategoryInterface> {
    return await this.categoryService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategory: CreateCategoryDto,
  ): Promise<CategoryInterface> {
    return await this.categoryService.update(id, updateCategory);
  }
}
