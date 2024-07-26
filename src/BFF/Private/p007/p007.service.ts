import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class P007Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Minimas() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/getAll/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Delete_Minima(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/minimas/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByAno(year: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/findMinimasByAno/` + year,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByCategoria(categoria: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/findMinimasByCategoria/` + categoria,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
