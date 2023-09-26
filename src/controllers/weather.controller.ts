import { Controller, Get, Param } from '@nestjs/common';
import { Weather } from 'src/schemas/weather.schema';
import { WeatherService } from 'src/services/weather.service';

@Controller('weather') 
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('temperature/:city')
  getWeather(@Param('city') city: string): Promise<Weather> {
    return this.weatherService.getWeather(city)
  }

  @Get('temperature/:city/forecast')
  getForecast(@Param('city') city: string) {
    return this.weatherService.getForecast(city)
  }

  @Get('history')  
  getWeatherHistory() {
    return this.weatherService.getHistory()
  }
}