import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class P004Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Cuotas() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/cuotasposibles/getAll/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Delete_Cuota(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/cuotasposibles/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
