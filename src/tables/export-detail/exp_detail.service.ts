import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { CreateExpDetailDto } from 'src/dtos/create-expdetail.dto';
import { ExpDetailInterface } from 'src/interfaces/expdetail.interface';

@Injectable()
export class ExportDetailService {
  constructor(
    @InjectModel('ExpDetail')
    private readonly expDetailModel: Model<ExpDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ExpDetailInterface[]> {
    return this.expDetailModel.find();
  }

  async findOne(id: string): Promise<ExpDetailInterface> {
    return this.expDetailModel.findOne({ _id: id });
  }

  async create(
    createExpDetailDto: CreateExpDetailDto,
  ): Promise<ExpDetailInterface> {
    const newExpDetail = new this.expDetailModel(createExpDetailDto);

    return await newExpDetail.save();
  }

  async delete(id: string): Promise<ExpDetailInterface> {
    return this.expDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    expDetailInterface: ExpDetailInterface,
  ): Promise<ExpDetailInterface> {
    return this.expDetailModel.findByIdAndUpdate(id, expDetailInterface, {
      new: true,
    });
  }
}
