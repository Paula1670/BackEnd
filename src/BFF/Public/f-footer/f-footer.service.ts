import { Injectable } from '@nestjs/common';
import { CreateFFooterDto } from './dto/create-f-footer.dto';
import { UpdateFFooterDto } from './dto/update-f-footer.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class FFooterService {
  constructor(private readonly httpClient: HttpClientService) {}

  async create(body: CreateFFooterDto) {
    try {
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/datosContacto/create`,
        { data: body },
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateFooterDto: UpdateFFooterDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/datosContacto/edit/` + id,
        { data: updateFooterDto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/datosContacto/findOne/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
