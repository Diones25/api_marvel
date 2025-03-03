import { BadRequestException, Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('characters/:characterId')
  async getCharacterId(@Param('characterId') characterId: number): Promise<any> {
    return this.marvelService.getCharacterId(characterId);
  }

  @Get('comics')
  async getAllComics(): Promise<any> {
    return this.marvelService.getAllComics();
  }

  @Get('comics/:comicId')
  async getComicsId(@Param('comicId') comicId: number): Promise<any> {
    return this.marvelService.getComicsId(comicId);
  }

  @Get('series')
  async getSeries(): Promise<any> {
    return this.marvelService.getSeries();
  }

  @Get('series/:seriesId')
  async getSerieId(@Param('seriesId') seriesId: number): Promise<any> {
    return this.marvelService.getSerieId(seriesId);
  }
}
