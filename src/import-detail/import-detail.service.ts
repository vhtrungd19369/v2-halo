import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ImportDetailInterface } from './interfaces/import-detail.interface';
import { CreateImportDetailDto } from './dtos/create-import-detail.dto';

@Injectable()
export class ImportDetailService {
  constructor(
    @InjectModel('ImportDetail')
    private readonly importDetailModel: Model<ImportDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ImportDetailInterface[]> {
    return this.importDetailModel
      .find()
      .populate([
        { path: 'importId', select: ['id'] },
        { path: 'productId', select: ['id'] },
      ])
      .exec();
  }

  async findOne(id: string): Promise<ImportDetailInterface> {
    return await this.importDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'importId' }, { path: 'productId' }])
      .exec();
  }

  async create(
    createImportDetailDto: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    const newImportDetail = new this.importDetailModel(createImportDetailDto);

    return await newImportDetail.save();
  }

  async delete(id: string): Promise<ImportDetailInterface> {
    return this.importDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    importDetailInterface: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    return this.importDetailModel.findByIdAndUpdate(id, importDetailInterface, {
      new: true,
    });
  }
}
