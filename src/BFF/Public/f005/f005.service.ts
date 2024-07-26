import { Injectable } from '@nestjs/common';
import { CreateF005Dto } from './dto/create-f005.dto';
import { UpdateF005Dto } from './dto/update-f005.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F005Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async create(body: CreateF005Dto) {
    try {
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/documentacion/create`,
        { data: body },
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateF005Dto: UpdateF005Dto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/documentacion/edit/` + id,
        { data: updateF005Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Find_Documento(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/documentacion/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
