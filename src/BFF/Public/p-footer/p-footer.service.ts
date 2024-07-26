import { Injectable } from '@nestjs/common';
import { CreatePFooterDto } from './dto/create-p-footer.dto';
import { UpdatePFooterDto } from './dto/update-p-footer.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';

@Injectable()
export class PFooterService {
  constructor(private readonly httpClient: HttpClientService) {}
  async findAll() {
    try {
      const { status, data } = await this.httpClient.get(
        'https://nestapp-ea9cec2c16b6.herokuapp.com/datosContacto/getAll/',
      );
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/datosContacto/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
