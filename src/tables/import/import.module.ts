import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImportSchema } from 'src/schemas/import.schema';
import { ImportController } from './import.controller';
import { ImportService } from './import.service';


@Module({
    imports: [MongooseModule.forFeature([{
            name: 'Import',
            schema: ImportSchema
    }])],
    controllers: [ImportController],
    providers: [ImportService],
})
export class ImportModule {}
