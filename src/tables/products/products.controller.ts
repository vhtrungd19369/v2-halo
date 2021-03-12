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
import { CreateProductDto } from 'src/dtos/create-product.dto';
import { ProductInterface } from 'src/interfaces/product.interface';
import { ProductService } from './products.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async finAll(): Promise<ProductInterface[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductInterface> {
    return await this.productService.findOne(id);
  }

  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductInterface> {
    return await this.productService.create(createProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ProductInterface> {
    return await this.productService.delete(id);
  }

  @Put(':id')
  async update(
    @Body() updateProductDto: CreateProductDto,
    @Param('id') id: string,
  ): Promise<ProductInterface> {
    return await this.productService.update(id, updateProductDto);
  }
}
