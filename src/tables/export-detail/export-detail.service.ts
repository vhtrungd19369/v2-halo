import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { ExportDetailInterface } from './interfaces/export-detail.interface';
import { CreateExportDetailDto } from './dtos/create-export-detail.dto';

@Injectable()
export class ExportDetailService {
  constructor(
    @InjectModel('ExportDetail')
    private readonly expDetailModel: Model<ExportDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ExportDetailInterface[]> {
    return this.expDetailModel
      .find()
      .populate([
        { path: 'exportID', select: ['id'] },
        { path: 'productID', select: ['id'] },
      ])
      .exec();
  }

  async findOne(id: string): Promise<ExportDetailInterface> {
    return this.expDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'exportID' }, { path: 'productID' }])
      .exec();
  }

  async create(
    crtExpDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    const newExpDetail = new this.expDetailModel(crtExpDetailDto);
    return await newExpDetail.save();
  }

  async delete(id: string): Promise<ExportDetailInterface> {
    return this.expDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    expDetailInterface: ExportDetailInterface,
  ): Promise<ExportDetailInterface> {
    return this.expDetailModel.findByIdAndUpdate(id, expDetailInterface, {
      new: true,
    });
  }
}
