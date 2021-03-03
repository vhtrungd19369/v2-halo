import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/schemas/product.schema';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Employees',
        schema: ProductSchema
    }])],
    controllers: [EmployeesController],
    providers: [EmployeesService]
})
export class EmployeesModule {}
