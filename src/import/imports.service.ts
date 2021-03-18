import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ImportInterface } from './interfaces/import.interface';
import { CreateImportDto } from './dtos/create-import.dto';

@Injectable()
export class ImportsService {
  constructor(
    @InjectModel('Import')
    private readonly importModel: Model<ImportInterface & Document>,
  ) {}

  async findAll(): Promise<ImportInterface[]> {
    return this.importModel
      .find()
      .populate([{ path: 'employeeId', select: ['id'] }])
      .exec();
  }

  async findOne(id: string): Promise<ImportInterface> {
    return this.importModel
      .findOne({ _id: id })
      .populate([{ path: 'employeeId', select: ['name'] }])
      .exec();
  }

  async create(createImportDto: CreateImportDto): Promise<ImportInterface> {
    const newImport = new this.importModel(createImportDto);

    return await newImport.save();
  }

  async delete(id: string): Promise<ImportInterface> {
    return this.importModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    importInterface: ImportInterface,
  ): Promise<ImportInterface> {
    return this.importModel.findByIdAndUpdate(id, importInterface, {
      new: true,
    });
  }
}
