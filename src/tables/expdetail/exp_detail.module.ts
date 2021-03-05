import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpDetailSchema } from 'src/schemas/expdetail.schema';
import { ExportDetailController } from './exp_detail.controller';
import { ExportDetailService } from './exp_detail.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Expdetail',
        schema: ExpDetailSchema
    }])],
    controllers: [ExportDetailController],
    providers: [ExportDetailService]
})
export class ExportDetailModule {}
