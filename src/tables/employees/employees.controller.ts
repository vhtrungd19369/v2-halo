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
import { CreateEmployeesDto } from 'src/dtos/create-employees.dto';
import { EmployeesInterface } from 'src/interfaces/employees.interface';
import { EmployeesService } from './employees.service';

@Controller('employees')
@ApiTags('Employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async findAll(): Promise<EmployeesInterface[]> {
    return await this.employeesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EmployeesInterface> {
    return await this.employeesService.findOne(id);
  }

  @Post()
  async create(
    @Body() createEmployeesDto: CreateEmployeesDto,
  ): Promise<EmployeesInterface> {
    return await this.employeesService.create(createEmployeesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<EmployeesInterface> {
    return await this.employeesService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployees: CreateEmployeesDto,
  ): Promise<EmployeesInterface> {
    return await this.employeesService.update(id, updateEmployees);
  }
}
