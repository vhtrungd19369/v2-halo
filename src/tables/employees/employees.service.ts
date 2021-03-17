import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { EmployeesInterface } from './interfaces/employees.interface';
import { CreateEmployeesDto } from './dtos/create-employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel('Employees')
    private readonly employeesModel: Model<EmployeesInterface & Document>,
  ) {}

  async findAll(): Promise<EmployeesInterface[]> {
    return this.employeesModel.find();
  }

  async findOne(id: string): Promise<EmployeesInterface> {
    return this.employeesModel.findOne({ _id: id });
  }

  async create(
    createEmployeesDto: CreateEmployeesDto,
  ): Promise<EmployeesInterface> {
    const newEmp = new this.employeesModel(createEmployeesDto);

    return await newEmp.save();
  }

  async delete(id: string): Promise<EmployeesInterface> {
    return this.employeesModel.findByIdAndDelete(id);
  }

  async update(
    Id_employees: string,
    employees: EmployeesInterface,
  ): Promise<EmployeesInterface> {
    return this.employeesModel.findByIdAndUpdate(Id_employees, employees, {
      new: true,
    });
  }
}
