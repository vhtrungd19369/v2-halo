import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreateExportDto } from 'src/dtos/create-export.dto';
import { ExportInterface } from 'src/interfaces/export.interface';

@Injectable()
export class ExportService {
  constructor(
    @InjectModel('Export')
    private readonly exportModel: Model<ExportInterface & Document>,
  ) {}

  async findAll(): Promise<ExportInterface[]> {
    return this.exportModel
      .find()
      .populate([{ path: 'employeesID', select: ['id'] }])
      .exec();
  }

  async findOne(id: string): Promise<ExportInterface> {
    return this.exportModel
      .findOne({ _id: id })
      .populate([{ path: 'employeesID', select: ['name', 'gender'] }])
      .exec();
  }

  async create(crtExportDto: CreateExportDto): Promise<ExportInterface> {
    const newExp = new this.exportModel({ ...crtExportDto });

    return await newExp.save();
  }

  async delete(id: string): Promise<ExportInterface> {
    // console.log("---------------", ID);
    const res = await this.exportModel.findByIdAndDelete({ _id: id }).exec();
    console.log(res);
    return res;
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
