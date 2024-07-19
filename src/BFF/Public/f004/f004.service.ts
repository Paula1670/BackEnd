import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { F004Create_CuotaDto } from './dto/create-f004.dto';
import { F004Update_CuotaDto } from './dto/update-f004.dto';

@Injectable()
export class F004Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Create_Cuota(createF004Dto: F004Create_CuotaDto) {
    try {
      const { status, data } = await this.httpClient.post(
        'http://localhost:3000/cuotasposibles/create',
        { data: createF004Dto },
      );

    return data;
    } catch (error) {
      return error;
    }
  }

  async Get_Cuota(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/cuotasposibles/getById/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Cuota(id: number, updateF004Dto: F004Update_CuotaDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        'http://localhost:3000/cuotasposibles/edit/' + id,
        { data: updateF004Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
