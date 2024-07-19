import { Injectable } from '@nestjs/common';
import { F010CreateContratoDto } from './dto/create-f010.dto';
import { F010EditarContratoDto } from './dto/update-f010.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class F010Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_Contrato(createF010Dto: F010CreateContratoDto) {
    try {
      const { status, data } = await this.httpClient.post(
        'http://localhost:3000/contratos/create',
        { data: createF010Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Find_Contrato(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/contratos/getById/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Contrato(id: number, updateF010Dto: F010EditarContratoDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        'http://localhost:3000/contratos/edit/' + id,
        { data: updateF010Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
