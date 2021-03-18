import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportSchema } from './shemas/export.schema';
import { ExportsController } from './exports.controller';
import { ExportsService } from './exports.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Export',
        schema: ExportSchema,
      },
    ]),
  ],
  controllers: [ExportsController],
  providers: [ExportsService],
})
export class ExportsModule {}
