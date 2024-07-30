import { Injectable } from '@nestjs/common';
import { F006Editar_TiempoDto } from './dto/F006Editar_TiempoDto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { NadadorDto } from 'src/Domain/nadadores/dto/nadador.dto';
import { F006CreateTiempoDto } from './dto/F006Create_TiempoDto';
import { CreateTiempoDto } from 'src/Domain/tiempos/dto/create-tiempo.dto';

@Injectable()
export class F006Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_Tiempo(createF006Dto: F006CreateTiempoDto) {
    try {
      const { data: nadador } = await this.httpClient.get<NadadorDto>(
        `${BACK_END_URL}/nadadores/getById/` + createF006Dto.IDNadador,
      );

      const { data: usuario } = await this.httpClient.get<NadadorDto>(
        `${BACK_END_URL}/users/findUserByNadadorId/` + createF006Dto.IDNadador,
      );
      console.log(nadador);
      console.log(createF006Dto.IDNadador);
      const newTiempo: CreateTiempoDto = {
        IDNadador: createF006Dto.IDNadador,
        Tiempo: createF006Dto.Tiempo,
        Temporada: createF006Dto.Temporada,
        Prueba: createF006Dto.Prueba,
        Piscina: createF006Dto.Piscina,
        FechaMarcaNadador: createF006Dto.FechaMarcaNadador,
        Estilo: createF006Dto.Estilo,
        IDCategoria: nadador.Categoria,
      };
      console.log(newTiempo);
      const { data: tiempo } = await this.httpClient.post(
        `${BACK_END_URL}/tiempos/create`,
        { data: newTiempo },
      );

      return tiempo;
    } catch (error) {
      return error;
    }
  }

  async Get_Tiempo(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/tiempos/getById/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Editar_Tiempo(id: number, updateF006Dto: F006Editar_TiempoDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/tiempos/edit/` + id,
        { data: updateF006Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
