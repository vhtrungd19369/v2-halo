import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportDetailSchema } from './shemas/export-detail.schema';
import { ExportDetailController } from './export-detail.controller';
import { ExportDetailService } from './export-detail.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ExportDetail',
        schema: ExportDetailSchema,
      },
    ]),
  ],
  controllers: [ExportDetailController],
  providers: [ExportDetailService],
})
export class ExportDetailModule {}
