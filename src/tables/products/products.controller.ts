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
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from 'src/dtos/create-product.dto';
import { ProductInterface } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('product')
@ApiTags('Product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

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
