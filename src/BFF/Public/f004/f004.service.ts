import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { F004Create_CuotaDto } from './dto/create-f004.dto';
import { F004Update_CuotaDto } from './dto/update-f004.dto';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F004Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Create_Cuota(createF004Dto: F004Create_CuotaDto) {
    try {
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/cuotasposibles/create`,
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
        `${BACK_END_URL}/cuotasposibles/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Cuota(id: number, updateF004Dto: F004Update_CuotaDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/cuotasposibles/edit/` + id,
        { data: updateF004Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
