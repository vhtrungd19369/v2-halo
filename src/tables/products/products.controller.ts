import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Get()
    async finAll(): Promise<ProductInterface[]> {
        return await this.productService.findAll(); 
    }

    @Get(':Id_product')
    async findOne(@Param('Id_product') id:string): Promise<ProductInterface> {
        return await this.productService.findOne(id);
    }
    @Post(':Id_category')
    async create(@Param('Id_category') id:, @Body() createProductDto: CreateProductDto): Promise<ProductInterface> {   
        return await this.productService.create(createProductDto);
    }

    @Delete(':Id_product')
    async delete(@Param('Id_product') id: string): Promise<ProductInterface> {
        return await this.productService.delete(id);
    }

    @Put(':Id_product')
    async update(@Body() updateProductDto: CreateProductDto, @Param('Id_product') id:string): Promise<ProductInterface> {
        return await this.productService.update(id, updateProductDto );
    }

}