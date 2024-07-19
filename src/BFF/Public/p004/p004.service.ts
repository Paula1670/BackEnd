import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class P004Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Cuotas() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/cuotasposibles/getAll/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Delete_Cuota(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/cuotasposibles/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
