import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { ExportDetailInterface } from './interfaces/export-detail.interface';
import { CreateExportDetailDto } from './dtos/create-export-detail.dto';

@Injectable()
export class ExportDetailsService {
  constructor(
    @InjectModel('ExportDetail')
    private readonly exportDetailModel: Model<ExportDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ExportDetailInterface[]> {
    return this.exportDetailModel
      .find()
      .populate([
        { path: 'exportId', select: ['id'] },
        { path: 'productId', select: ['id'] },
      ])
      .exec();
  }

  async findOne(id: string): Promise<ExportDetailInterface> {
    return this.exportDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'exportId' }, { path: 'productId' }])
      .exec();
  }

  async create(
    createExportDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    const newExportDetail = new this.exportDetailModel(createExportDetailDto);
    return await newExportDetail.save();
  }

  async delete(id: string): Promise<ExportDetailInterface> {
    return this.exportDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    exportDetailInterface: ExportDetailInterface,
  ): Promise<ExportDetailInterface> {
    return this.exportDetailModel.findByIdAndUpdate(id, exportDetailInterface, {
      new: true,
    });
  }
}
