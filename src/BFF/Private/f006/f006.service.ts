import { Injectable } from '@nestjs/common';
import { F006Create_TiempoDto } from './dto/F006Create_TiempoDto';
import { F006Editar_TiempoDto } from './dto/F006Editar_TiempoDto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F006Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_Tiempo(createF006Dto: F006Create_TiempoDto) {
    try {
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/tiempos/create`,
        { data: createF006Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Get_Tiempo(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/tiempos/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Tiempo(id: number, updateF006Dto: F006Editar_TiempoDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/tiempos/edit/` + id,
        { data: updateF006Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
