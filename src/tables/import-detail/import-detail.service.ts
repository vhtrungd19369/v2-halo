import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ImportDetailInterface } from './interfaces/import-detail.interface';
import { CreateImportDetailDto } from './dtos/create-import-detail.dto';

@Injectable()
export class ImportDetailService {
  constructor(
    @InjectModel('ImportDetail')
    private readonly impDetailModel: Model<ImportDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ImportDetailInterface[]> {
    return this.impDetailModel
      .find()
      .populate([
        { path: 'importID', select: ['id'] },
        { path: 'productID', select: ['id'] },
      ])
      .exec();
  }

  async findOne(id: string): Promise<ImportDetailInterface> {
    return await this.impDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'importID' }, { path: 'productID' }])
      .exec();
  }

  async create(
    crtImpDetailDto: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    const newImpDetail = new this.impDetailModel(crtImpDetailDto);

    return await newImpDetail.save();
  }

  async delete(id: string): Promise<ImportDetailInterface> {
    return this.impDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    impDetailInterface: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    return this.impDetailModel.findByIdAndUpdate(id, impDetailInterface, {
      new: true,
    });
  }
}
