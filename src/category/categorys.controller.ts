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
import { CategorysService } from './categorys.service';
import { CategoryInterface } from './interfaces/category.interface';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
@ApiTags('Category')
export class CategorysController {
  constructor(private readonly categoryService: CategorysService) {}

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
