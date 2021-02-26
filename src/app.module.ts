import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HaloModule } from './halo/halo.module';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ExportDetailService } from './export-detail/export-detail.service';
import { ExportDetailController } from './export-detail/export-detail.controller';
import { ImportDetailService } from './import-detail/import-detail.service';
import { ImportDetailController } from './import-detail/import-detail.controller';
import { ExportService } from './export/export.service';
import { ExportController } from './export/export.controller';
import { ImportService } from './import/import.service';
import { ImportController } from './import/import.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeesController } from './employees/employees.controller';

@Module({
  imports: [HaloModule],
  controllers: [AppController, EmployeesController, ImportController, ExportController, ImportDetailController, ExportDetailController, ProductController, CategoryController],
  providers: [AppService, EmployeesService, ImportService, ExportService, ImportDetailService, ExportDetailService, ProductService, CategoryService],
})
export class AppModule {}
