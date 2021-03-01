import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../tables/product/schemas/product.schema';

import { CategoryController } from 'src/tables/category/category.controller';
import { EmployeesController } from 'src/tables/employees/employees.controller';
import { EmployeesService } from 'src/tables/employees/employees.service';
import { ExportDetailController } from 'src/tables/export-detail/export-detail.controller';
import { ExportController } from 'src/tables/export/export.controller';
import { ImportController } from 'src/tables/import/import.controller';
import { ProductController } from 'src/tables/product/product.controller';
import { ImportService } from 'src/tables/import/import.service';
import { ExportService } from 'src/tables/export/export.service';
import { ExportDetailService } from 'src/tables/export-detail/export-detail.service';
import { ProductService } from 'src/tables/product/product.service';
import { CategoryService } from 'src/tables/category/category.service';
import { ImportDetailService } from 'src/tables/import-detail/import-detail.service';
import { ImportDetailController } from 'src/tables/import-detail/import-detail.controller';
@Module({
  imports: [
    MongooseModule.forFeature([{name:'Job', schema: ProductSchema}])],
    
  controllers: [
    EmployeesController,
    ImportController,
    ExportController,
    ImportDetailController,
    ExportDetailController,
    ProductController,
    CategoryController
    ],

  providers: [
    EmployeesService,
    ImportService,
    ExportService,
    ImportDetailService,
    ExportDetailService,
    ProductService,
    CategoryService
    ],
})
export class HaloModule {}
