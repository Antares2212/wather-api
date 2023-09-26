import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Weather, WeatherSchema } from 'src/schemas/weather.schema';
import { WeatherController } from 'src/controllers/weather.controller';
import { WeatherService } from 'src/services/weather.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Weather.name, schema: WeatherSchema }]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}