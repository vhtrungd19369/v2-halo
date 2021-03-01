import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HaloModule } from './halo.module/halo.module';
import config from './config/keys';



@Module({
  imports: [HaloModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
