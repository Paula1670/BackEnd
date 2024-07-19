import { Injectable } from '@nestjs/common';
import { CreateF005Dto } from './dto/create-f005.dto';
import { UpdateF005Dto } from './dto/update-f005.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class F005Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async create(body: CreateF005Dto) {
    try {
      const { status, data } = await this.httpClient.post(
        'http://localhost:3000/documentacion/create',
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
        'http://localhost:3000/documentacion/edit/' + id,
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
        'http://localhost:3000/documentacion/getById/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
