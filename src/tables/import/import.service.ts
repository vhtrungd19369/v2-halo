import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ImportInterface } from './interfaces/import.interface';
import { CreateImportDto } from './dtos/create-import.dto';

@Injectable()
export class ImportService {
  constructor(
    @InjectModel('Import')
    private readonly importModel: Model<ImportInterface & Document>,
  ) {}

  async findAll(): Promise<ImportInterface[]> {
    return this.importModel
      .find()
      .populate([{ path: 'employeesID', select: ['id'] }])
      .exec();
  }

  async findOne(id: string): Promise<ImportInterface> {
    return this.importModel
      .findOne({ _id: id })
      .populate([{ path: 'employeesID', select: ['name'] }])
      .exec();
  }

  async create(crtImportDto: CreateImportDto): Promise<ImportInterface> {
    const newImp = new this.importModel(crtImportDto);

    return await newImp.save();
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
