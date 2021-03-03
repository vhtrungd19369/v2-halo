import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateEmployeesDto } from 'src/dtos/create-employees.dto';
import { EmployeesInterface } from 'src/interfaces/employees.interface';
import { EmployeesService } from './employees.service';

@Controller('employees')
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
        return await this.employeesService.create( createEmployeesDto );
    }

    // @Post()

    // @Delete()

    // @Put()


}
