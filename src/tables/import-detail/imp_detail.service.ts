import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Imp_detailInterface } from 'src/interfaces/imp_detail.interface';
import { CreateImpDetailDto } from '../../dtos/create-impdetail.dto';

@Injectable()
export class ImportDetailService {
  constructor(
    @InjectModel('ImpDetail')
    private readonly impDetailModel: Model<Imp_detailInterface & Document>,
  ) {}

  async findAll(): Promise<Imp_detailInterface[]> {
    return this.impDetailModel
      .find()
      .populate([
        { path: 'importID', select: ['id'] },
        { path: 'productID', select: ['id'] },
      ])
      .exec();
  }

  async findOne(id: string): Promise<Imp_detailInterface> {
    return await this.impDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'importID' }, { path: 'productID' }])
      .exec();
  }

  async create(
    crtImpDetailDto: CreateImpDetailDto,
  ): Promise<Imp_detailInterface> {
    const newImpDetail = new this.impDetailModel({ ...crtImpDetailDto });

    return await newImpDetail.save();
  }

  async delete(id: string): Promise<Imp_detailInterface> {
    return this.impDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    impDetailInterface: CreateImpDetailDto,
  ): Promise<Imp_detailInterface> {
    return this.impDetailModel.findByIdAndUpdate(id, impDetailInterface, {
      new: true,
    });
  }
}
