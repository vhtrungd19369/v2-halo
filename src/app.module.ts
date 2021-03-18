import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './product/products.module';
import { CategorysModule } from './category/categorys.module';
import { EmployeesModule } from './employees/employees.module';
import { ExportsModule } from './export/exports.module';
import { ExportDetailsModule } from './export-detail/export-details.module';
import { ImportsModule } from './import/imports.module';
import { ImportDetailModule } from './import-detail/import-detail.module';

@Module({
  imports: [
    ProductsModule,
    CategorysModule,
    EmployeesModule,
    ExportsModule,
    ExportDetailsModule,
    ImportsModule,
    ImportDetailModule,

    MongooseModule.forRoot(
      'mongodb+srv://test:test@demo.htzax.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
