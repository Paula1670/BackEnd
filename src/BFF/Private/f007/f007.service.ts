import { Injectable } from '@nestjs/common';
import { F007Editar_MinimaDto } from './dto/F007Editar_MinimaDto';
import { F007Create_MinimaDto } from './dto/F007Create_MinimaDto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { F007Get_MinimaDto } from './dto/F007Get_MinimaDto';

@Injectable()
export class F007Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_Minima(createF007Dto: F007Create_MinimaDto) {
    try {
      const { status, data } = await this.httpClient.post(
        'http://localhost:3000/minimas/create',
        { data: createF007Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Find_Minima(id: number): Promise<F007Get_MinimaDto> {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/minimas/getById/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Minima(id: number, updateF007Dto: F007Editar_MinimaDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        'http://localhost:3000/minimas/edit/' + id,
        { data: updateF007Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findCategorias() {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/categorias/getAll',
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
