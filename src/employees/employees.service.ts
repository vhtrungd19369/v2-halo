import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { EmployeeInterface } from './interfaces/employees.interface';
import { CreateEmployeeDto } from './dtos/create-employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employee')
    private readonly employeeModel: Model<EmployeeInterface & Document>,
  ) {}

  async findAll(): Promise<EmployeeInterface[]> {
    return this.employeeModel.find();
  }

  async findOne(id: string): Promise<EmployeeInterface> {
    return this.employeeModel.findOne({ _id: id });
  }

  async create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeInterface> {
    const newEmployee = new this.employeeModel(createEmployeeDto);

    return await newEmployee.save();
  }

  async delete(id: string): Promise<EmployeeInterface> {
    return this.employeeModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    employeeInterface: EmployeeInterface,
  ): Promise<EmployeeInterface> {
    return this.employeeModel.findByIdAndUpdate(id, employeeInterface, {
      new: true,
    });
  }
}
