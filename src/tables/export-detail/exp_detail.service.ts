import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CreateExpDetailDto } from 'src/dtos/create-expdetail.dto';
import { Exp_detailInterface } from 'src/interfaces/exp_detail.interface';

@Injectable()
export class ExportDetailService {
  constructor(
    @InjectModel('ExpDetail')
    private readonly expDetailModel: Model<Exp_detailInterface & Document>,
  ) {}

  async findAll(): Promise<Exp_detailInterface[]> {
    return this.expDetailModel
      .find()
      .populate([{ path: 'exportID' }, { path: 'productID' }])
      .exec();
  }

  async findOne(id: string): Promise<Exp_detailInterface> {
    return this.expDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'exportID' }, { path: 'productID' }])
      .exec();
  }

  async create(
    crtExpDetailDto: CreateExpDetailDto,
  ): Promise<Exp_detailInterface> {
    const newExpDetail = new this.expDetailModel(crtExpDetailDto);
    return await newExpDetail.save();
  }

  async delete(id: string): Promise<Exp_detailInterface> {
    return this.expDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    expDetailInterface: Exp_detailInterface,
  ): Promise<Exp_detailInterface> {
    return this.expDetailModel.findByIdAndUpdate(id, expDetailInterface, {
      new: true,
    });
  }
}
