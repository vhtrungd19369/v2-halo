import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportSchema } from 'src/schemas/export.schema';
import { ExportController } from './export.controller';
import { ExportService } from './export.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name:'Export',
        schema: ExportSchema
    }])],
    controllers: [ExportController],
    providers: [ExportService]
})
export class ExportModule {}
