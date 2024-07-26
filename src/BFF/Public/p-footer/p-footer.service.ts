import { Injectable } from '@nestjs/common';
import { CreatePFooterDto } from './dto/create-p-footer.dto';
import { UpdatePFooterDto } from './dto/update-p-footer.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class PFooterService {
  constructor(private readonly httpClient: HttpClientService) {}
  async findAll() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/datosContacto/getAll`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/datosContacto/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
