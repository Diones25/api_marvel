import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';

@Injectable()
export class MarvelService {
  private readonly publicKey = process.env.MARVEL_PUBLIC_KEY;
  private readonly privateKey = process.env.MARVEL_PRIVATE_KEY;
  private readonly baseUrl = 'https://gateway.marvel.com/v1/public';

  //Método para gerar o hash MD5
  private generateHash(timestamp: string): string {
    return crypto
      .createHash('md5')
      .update(`${timestamp}${this.privateKey}${this.publicKey}`)
      .digest('hex');
  }

  //Método para buscar personagens
  async getCharacters(name: string): Promise<any> {
    const timestamp = Date.now().toString();
    const hash = this.generateHash(timestamp);

    const params = {
      apikey: this.publicKey,
      ts: timestamp,
      hash: hash,
      name: name,
    };

    try {
      const response = await axios.get(`${this.baseUrl}/characters`, {
        params,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Erro ao buscar personagens: ${error.message}`);
    }
  }
}
