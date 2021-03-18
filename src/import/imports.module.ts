import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportSchema } from './shemas/import.schema';
import { ImportsController } from './imports.controller';
import { ImportsService } from './imports.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Import',
        schema: ImportSchema,
      },
    ]),
  ],
  controllers: [ImportsController],
  providers: [ImportsService],
})
export class ImportsModule {}
