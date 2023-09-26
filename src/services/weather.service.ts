import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";
import { Weather, WeatherDocument } from "src/schemas/weather.schema";

@Injectable()
export class WeatherService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Weather.name) private weatherModel: Model<WeatherDocument>
  ) {}

  async getWeather(city: string): Promise<Weather> {
    const apiKey = this.configService.get<string>('API_KEY')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url).then(data => data.json())    
    const { main, weather } = response
    const { temp } = main
    const { description, icon } = weather[0]
    const weatherData = new this.weatherModel({
      city,
      temperature: temp,
      description,
      icon
    })
    await weatherData.save()
    return weatherData
  }
 
  async getForecast(city: string) { 
    const apiKey = this.configService.get<string>('API_KEY')
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url).then(data => data.json()) 
    return response.list[0]
  }

  async getHistory(): Promise<Weather[]> {
    return await this.weatherModel.find().exec();
  }
}