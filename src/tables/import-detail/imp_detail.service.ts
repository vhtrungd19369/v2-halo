import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ImpDetailInterface } from 'src/interfaces/impdetail.interface';
import { CreateImpDetailDto } from 'src/dtos/create-impdetail.dto';

@Injectable()
export class ImportDetailService {
  model: any;
  constructor(
    @InjectModel('ImpDetail')
    private readonly impDetailModel: Model<ImpDetailInterface & Document>,
  ) {}

  async findAll(): Promise<ImpDetailInterface[]> {
    return this.impDetailModel.find();
  }

  async findOne(id: string): Promise<ImpDetailInterface> {
    return this.impDetailModel.findOne({ _id: id });
  }

  async create(
    createImpDetailDto: CreateImpDetailDto,
  ): Promise<ImpDetailInterface> {
    const newImpDetail = new this.impDetailModel(createImpDetailDto);

    return await newImpDetail.save();
  }

  async delete(id: string): Promise<ImpDetailInterface> {
    return this.impDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    impDetailInterface: CreateImpDetailDto
  ): Promise<ImpDetailInterface> {
    return this.impDetailModel.findByIdAndUpdate(id, impDetailInterface, {
      new: true,
    });
  }
}
