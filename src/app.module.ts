import { Module } from '@nestjs/common';
import { MarvelModule } from './marvel/marvel.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MarvelModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
