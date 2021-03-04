import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/dtos/create-category.dto';
import { CategoryInterface } from 'src/interfaces/category.interface';
import { CategoryService } from './category.service';

@Controller('category')
@ApiTags('category')
export class CategoryController {
    constructor( private readonly categoryService: CategoryService) {}

    @Get()
    async findAll(): Promise<CategoryInterface[]> {
        return await this.categoryService.findAll()
    }

    @Get(':Id_category')
    async findOne(@Param('Id_category') id: string): Promise<CategoryInterface> {
        return await this.categoryService.findOne(id);
    }

    @Post()
    async create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryInterface> {
        return await this.categoryService.create(createCategoryDto);
    }

    @Delete(':Id_category')
    async delete(@Param('Id_category') id: string): Promise<CategoryInterface> {
        return await this.categoryService.delete(id);
    }

    @Put(':Id_category')
    async update(@Param('Id_category') id:string, @Body() updateCategory: CreateCategoryDto): Promise<CategoryInterface> {
        return await this.categoryService.update(id, updateCategory );
    }


}
