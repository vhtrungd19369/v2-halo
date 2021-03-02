import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySchema } from './schemas/category.schemas';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Category',
        schema: CategorySchema
    }])],
    controllers: [CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}
