import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExportDetailSchema } from 'src/schemas/expdetail.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'expdetail',
        schema: ExportDetailSchema
    }])],
    controllers: [],
    providers: []
})
export class ExportDetailModule {}
