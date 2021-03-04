import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesSchema } from 'src/schemas/employees.schema';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Employees',
        schema: EmployeesSchema
    }])],
    controllers: [EmployeesController],
    providers: [EmployeesService]
})
export class EmployeesModule {}
