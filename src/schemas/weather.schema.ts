import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WeatherDocument = Weather & Document

@Schema()
export class Weather {
  @Prop()
  city: string

  @Prop()
  temperature: number

  @Prop()
  description: string

  @Prop()
  icon: string

  @Prop({ default: Date.now })
  createdAt: Date
}

export const WeatherSchema = SchemaFactory.createForClass(Weather)