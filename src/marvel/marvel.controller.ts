import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { MarvelService } from './marvel.service';

@Controller('marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) {}

  @Get('character')
  async getCharacter(@Query('name') name: string): Promise<any> {
    if (!name) {
      throw new BadRequestException('O parâmetro name é obrigatório');
    }
    return this.marvelService.getCharacter(name);
  }

  @Get('characters')
  async getAllCharacters(): Promise<any> {
    return this.marvelService.getAllCharacters();
  }
}
