import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class P007Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Minimas() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/minimas/getAll/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Delete_Minima(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/minimas/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByAno(year: number) {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/minimas/findMinimasByAno/' + year,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByCategoria(categoria: number) {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/minimas/findMinimasByCategoria/' + categoria,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
