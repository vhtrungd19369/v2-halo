import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { ProductsModule } from './tables/products/products.module';
import { CategoryModule } from './tables/category/category.module';
import { EmployeesModule } from './tables/employees/employees.module';
import { ExportModule } from './tables/export/export.module';
import { ExportDetailModule } from './tables/export-detail/export-detail.module';
import { ImportModule } from './tables/import/import.module';
import { ImportDetailModule } from './tables/import-detail/import-detail.module';



@Module({
  imports: [
    ProductsModule,
    CategoryModule,
    EmployeesModule,
    ExportModule,
    ExportDetailModule,
    ImportModule,
    ImportDetailModule,

    MongooseModule.forRoot('mongodb+srv://test:test@demo.htzax.mongodb.net/test'),
    // MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
