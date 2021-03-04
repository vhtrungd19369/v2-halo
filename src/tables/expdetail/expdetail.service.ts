import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { ExportDetailInterface } from 'src/interfaces/expdetail.interface';

@Injectable()
export class ExportDetailService {
    constructor(@InjectModel('ExportDetail') private readonly exportDetailModel:Model<ExportDetailInterface & Document>) {}
}
