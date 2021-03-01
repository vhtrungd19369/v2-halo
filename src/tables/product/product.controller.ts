import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('products')
// export class ProductController {
    // constructor(private readonly productService:ProductService) {}
    
    // @Get()
    // async findAll(): Promise<ProductInterface[]> {
    //     return await this.productService.findAll();
    // }

    // @Get(':id')
    // async findOne(@Param('id') id: string): Promise<ProductInterface> {
    //     return await this.productService.findOne(id);
    // }

    // @Post()
    // async create(@Body() createProductDto:CreateProductDto ): Promise<ProductInterface> {   
    //     return await this.productService.create(createProductDto);
    // }

    // @Delete(':id')
    // async delete(@Param('id') id: string): Promise<ProductInterface> {
    //     return await this.productService.delete(id);
    // }

    // @Put(':id')
    // async update(@Body() updateProductDto: CreateProductDto, @Param('id') id:string): Promise<ProductInterface> {
    //     return await this.productService.update(id, updateProductDto);
    // }
// }


/////////////////////////////////////////////////////test1
// export class ProductController {
    // @Get()
    // findAll(): string {
    //     return ' Get all produt'; 
    // }

    // @Get(':id')
    // findOne(@Param('id') id): string {
    //     return `Product ${id}`;
    // }

    // @Post()
    // create(@Body() createProductDto: CreateProductDto ): string {
    //     return `
    //     Name: ${createProductDto.Name_product},
    //     Description: ${createProductDto.Description_product}`;
    // }

    // @Delete(':id')
    // delete(@Param('id') id): string {
    //     return `Delete ${id}`;
    // }

    // @Put(':id')
    // update(@Body() updateProductDto: CreateProductDto, @Param('id') id): string {
    //     return `
    //     Update: ${id},
    //     Name: ${updateProductDto.Name_product}`;
    // }

// }
/////////////////////////////////////////////////////test2
// export class ProductController {
//     constructor(private readonly productService: ProductService) {}

//     @Get()
//     findAll(): ProductInterface[] {
//         return this.productService.findAll(); 
//     }

//     @Get(':id')
//     findOne(@Param('id') id): ProductInterface {
//         return this.productService.findOne(id);
//     }

//     @Post()
//     create(@Body() createProductDto: CreateProductDto ): string {
//         return `
//         Name: ${createProductDto.Name_product},
//         Description: ${createProductDto.Description_product}`;
//     }

//     @Delete(':id')
//     delete(@Param('id') id): string {
//         return `Delete ${id}`;
//     }

//     @Put(':id')
//     update(@Body() updateProductDto: CreateProductDto, @Param('id') id): string {
//         return `
//         Update: ${id},
//         Name: ${updateProductDto.Name_product}`;
//     }
// }

/////////////////////////////////////////////////////test3
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async findAll():  Promise<ProductInterface[]> {
        return await this.productService.findAll(); 
    }

    @Get(':Id_product')
    async findOne(@Param('Id_product') Id_product): Promise<ProductInterface> {
        return await this.productService.findOne(Id_product);
    }

}