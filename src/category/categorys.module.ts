import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './shemas/category.schema';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Category',
        schema: CategorySchema,
      },
    ]),
  ],
  controllers: [CategorysController],
  providers: [CategorysService],
})
export class CategorysModule {}
