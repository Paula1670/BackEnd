import { Injectable } from '@nestjs/common';
import { CreateF011Dto } from './dto/create-f011.dto';
import { UpdateF011Dto } from './dto/update-f011.dto';
import { ActualizarCategoriaDeNadadorDto } from './dto/F011actualizarCategoriaDeNadador.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class F011Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async actualizarCategoriaDeNadador(idNadador: number, IDCategoria: number) {
    try {
      const nadadorDto: ActualizarCategoriaDeNadadorDto = {
        idNadador: idNadador,
        idCategoria: IDCategoria,
      };
      const { data } = await this.httpClient.put(
        `${BACK_END_URL}/nadadores/actualizarCategoriaDeNadador`,
        { data: nadadorDto },
      );
      console.log(nadadorDto);
      return data;
    } catch (error) {
      return error;
    }
  }

  async Find_User(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async findCategorias() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/categorias/getAll`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
