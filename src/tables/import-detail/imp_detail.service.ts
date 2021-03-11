import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ImpDetailInterface } from 'src/interfaces/impdetail.interface';
import { CreateImpDetailDto } from '../../dtos/create-impdetail.dto';

@Injectable()
export class ImportDetailService {
  constructor(
    @InjectModel('ImpDetail')
    private readonly impDetailModel: Model<ImpDetailInterface & Document>,
  ) {}

  // async onModuleInit() {
  //   await this.create({
  //     quantity: 111,
  //     unit: '',
  //     product: '603e0a9281d6ab7625e49a7b',
  //   });
  //
  //   console.log(
  //     '-ImpD-findOne++++++++>',
  //     await this.findOne('zz'),
  //   );
  // }

  async findAll(): Promise<ImpDetailInterface[]> {
    return this.impDetailModel
      .find({})
      .populate([{ path: 'product' }, { path: 'import' }])
      .exec();
  }

  async findOne(id: string): Promise<ImpDetailInterface> {
    return await this.impDetailModel
      .findOne({ _id: id })
      .populate([{ path: 'product' }, { path: 'import' }])
      .exec();
  }

  async create(
    createImpDetailDto: CreateImpDetailDto,
  ): Promise<ImpDetailInterface> {
    const newImpDetail = new this.impDetailModel({ ...createImpDetailDto });

    return await newImpDetail.save();
  }

  async delete(id: string): Promise<ImpDetailInterface> {
    return this.impDetailModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    impDetailInterface: CreateImpDetailDto,
  ): Promise<ImpDetailInterface> {
    return this.impDetailModel.findByIdAndUpdate(id, impDetailInterface, {
      new: true,
    });
  }
}
