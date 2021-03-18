import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { EmployeeInterface } from './interfaces/employees.interface';
import { CreateEmployeeDto } from './dtos/create-employees.dto';

@Controller('employees')
@ApiTags('Employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get()
  async findAll(): Promise<EmployeeInterface[]> {
    return await this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EmployeeInterface> {
    return await this.employeeService.findOne(id);
  }

  @Post()
  async create(
    @Body() createEmployeesDto: CreateEmployeeDto,
  ): Promise<EmployeeInterface> {
    return await this.employeeService.create(createEmployeesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<EmployeeInterface> {
    return await this.employeeService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployees: CreateEmployeeDto,
  ): Promise<EmployeeInterface> {
    return await this.employeeService.update(id, updateEmployees);
  }
}
