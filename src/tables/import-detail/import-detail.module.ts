import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportDetailSchema } from './schemas/import-detail.schema';
import { ImportDetailController } from './import-detail.controller';
import { ImportDetailService } from './import-detail.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'ImportDetail',
        schema: ImportDetailSchema,
      },
    ]),
  ],
  controllers: [ImportDetailController],
  providers: [ImportDetailService],
})
export class ImportDetailModule {}
