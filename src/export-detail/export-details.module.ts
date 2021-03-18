import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportDetailSchema } from './shemas/export-detail.schema';
import { ExportDetailsController } from './export-details.controller';
import { ExportDetailsService } from './export-details.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ExportDetail',
        schema: ExportDetailSchema,
      },
    ]),
  ],
  controllers: [ExportDetailsController],
  providers: [ExportDetailsService],
})
export class ExportDetailsModule {}
