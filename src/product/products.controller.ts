import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductService } from './products.service';
import { ProductInterface } from './interfaces/product.interface';
import { CreateProductDto } from './dtos/create-product.dto';

@Controller('product')
@ApiTags('Product')
export class ProductsController {
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
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
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
