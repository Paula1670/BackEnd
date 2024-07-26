import { Injectable } from '@nestjs/common';
import { CreateF012Dto } from './dto/create-f012.dto';
import { UpdateF012Dto } from './dto/update-f012.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import axios, { AxiosResponse } from 'axios';
import { log } from 'console';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F012Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async create_Galeria(body: CreateF012Dto) {
    try {
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/galeria/create`,
        { data: body },
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async update_Galeria(id: number, updateF012Dto: UpdateF012Dto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/galeria/edit/` + id,
        { data: updateF012Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
