import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImpDetailSchema } from 'src/schemas/impdetail.schema';
import { ImportDetailController } from './imp_detail.controller';
import { ImportDetailService } from './imp_detail.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ImpDetail',
        schema: ImpDetailSchema,
      },
    ]),
  ],
  controllers: [ImportDetailController],
  providers: [ImportDetailService],
})
export class ImportDetailModule {}
