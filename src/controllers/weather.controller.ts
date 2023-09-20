import { Controller, Get, Param } from '@nestjs/common';

@Controller('weather') 
export class WeatherController {


  @Get(':city')
  getWeather(@Param('city') city: string) {
    return city
  }

  @Get(':city/forecast')
  getForecast(@Param('city') city: string) {
    return city
  }

  @Get('history')
  getWeatherHistory() {
    return 'history'
  }
}