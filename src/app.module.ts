import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AppConfigModule } from './modules/config.module';
import { WeatherModule } from './modules/Weather.module';

@Module({
  imports: [
    AppConfigModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/weather'),
    WeatherModule
  ],
})
export class AppModule {}