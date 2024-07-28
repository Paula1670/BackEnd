import { Injectable } from '@nestjs/common';
import { F010CreateContratoDto } from './dto/create-f010.dto';
import { F010EditarContratoDto } from './dto/update-f010.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F010Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_Contrato(createF010Dto: F010CreateContratoDto) {
    try {
      console.log(createF010Dto);
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/contratos/create`,
        { data: createF010Dto },
      );
      console.log(status);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }

  async Find_Contrato(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/contratos/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Contrato(id: number, updateF010Dto: F010EditarContratoDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/contratos/edit/` + id,
        { data: updateF010Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
