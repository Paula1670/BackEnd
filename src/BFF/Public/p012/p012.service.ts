import { Injectable } from '@nestjs/common';
import { CreateP012Dto } from './dto/create-p012.dto';
import { UpdateP012Dto } from './dto/update-p012.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class P012Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async findAll() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/galeria/getAll/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/galeria/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
