import { Injectable } from '@nestjs/common';
import { CreateP005Dto } from './dto/create-p005.dto';
import { UpdateP005Dto } from './dto/update-p005.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class P005Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async findAll() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/documentacion/getAll`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/documentacion/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async findAllEsp() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/documentacion/findAllEsp/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllAnd() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/documentacion/findAllAnd/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllOtros() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/documentacion/findAllOtros/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllEstatutos() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/documentacion/findAllEstatutos/',
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
