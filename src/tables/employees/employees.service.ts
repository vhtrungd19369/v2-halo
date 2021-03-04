import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CreateEmployeesDto } from 'src/dtos/create-employees.dto';
import { EmployeesInterface } from 'src/interfaces/employees.interface';


@Injectable()
export class EmployeesService {
    constructor(@InjectModel('Employees') private readonly employeesModel:Model<EmployeesInterface & Document>) {}

    async findAll(): Promise<EmployeesInterface[]> {
        return await this.employeesModel.find();
    }

    async findOne(id:string): Promise<EmployeesInterface> {
        return await this.employeesModel.findOne({_id: id});
    }

    async create(createEmployeesDto:CreateEmployeesDto): Promise<EmployeesInterface> {
        const newEmp = new this.employeesModel(createEmployeesDto);
        
        return await newEmp.save();
    }

    async delete(Id_employees: string): Promise<EmployeesInterface> {
        return await this.employeesModel.findByIdAndDelete(Id_employees);
    }

    async update(Id_employees: string, employees: EmployeesInterface): Promise<EmployeesInterface> {
        return await this.employeesModel.findByIdAndUpdate(Id_employees, employees, {new: true});
    }

}