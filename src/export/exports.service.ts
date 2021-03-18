import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ExportInterface } from './interfaces/export.interface';
import { CreateExportDto } from './dtos/create-export.dto';

@Injectable()
export class ExportsService {
  constructor(
    @InjectModel('Export')
    private readonly exportModel: Model<ExportInterface & Document>,
  ) {}

  async findAll(): Promise<ExportInterface[]> {
    return this.exportModel
      .find()
      .populate([{ path: 'employeesId', select: ['id'] }])
      .exec();
  }

  async findOne(id: string): Promise<ExportInterface> {
    return this.exportModel
      .findOne({ _id: id })
      .populate([{ path: 'employeesId', select: ['name', 'gender'] }])
      .exec();
  }

  async create(createExportDto: CreateExportDto): Promise<ExportInterface> {
    const newExport = new this.exportModel(createExportDto);

    return await newExport.save();
  }

  async delete(id: string): Promise<ExportInterface> {
    return this.exportModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    exportInterface: ExportInterface,
  ): Promise<ExportInterface> {
    return this.exportModel.findByIdAndUpdate(id, exportInterface, {
      new: true,
    });
  }
}
