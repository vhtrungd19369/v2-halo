import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeesDto } from 'src/dtos/create-employees.dto';
import { EmployeesInterface } from 'src/interfaces/employees.interface';
import { EmployeesService } from './employees.service';

@Controller('employees')
@ApiTags('Employees')

export class EmployeesController {
    constructor( private readonly employeesService: EmployeesService ) {}

    @Get()
    async findAll(): Promise<EmployeesInterface[]> {
        return await this.employeesService.findAll();
    }

    @Get(':Id_employees')
    async findOne(@Param('Id_employees') id: string): Promise<EmployeesInterface>{
        return await this.employeesService.findOne(id);
    }

    @Post()
    async create(@Body() createEmployeesDto: CreateEmployeesDto): Promise<EmployeesInterface>{
        return await this.employeesService.create(createEmployeesDto);
    }

    @Delete(':Id_employees')
    async delete(@Param('Id_employees') id: string): Promise<EmployeesInterface> {
        return await this.employeesService.delete(id);
    }

    @Put(':Id_employees')
    async update(@Param('Id_employees') id: string, @Body() updateEmployees: CreateEmployeesDto): Promise<EmployeesInterface> {
        return await this.employeesService.update(id, updateEmployees);
    }

}
