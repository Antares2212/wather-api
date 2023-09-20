import { Module } from '@nestjs/common';
import { AppConfigModule } from './modules/config.module';

@Module({
  imports: [
    AppConfigModule,
  ],
})
export class AppModule {}