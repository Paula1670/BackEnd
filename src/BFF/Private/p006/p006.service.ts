import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P006Get_TiempoDto } from './dto/P006Get_Tiempo.dto';
import { TiemposController } from 'src/Domain/tiempos/tiempos.controller';
import { TiempoDto } from 'src/Domain/tiempos/dto/tiempo.dto';
import { MinimaDto } from 'src/Domain/minimas/dto/minima.dto';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class P006Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Tiempos(): Promise<P006Get_TiempoDto[]> {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/tiempos/getAll/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllByNadador(id: number): Promise<P006Get_TiempoDto[]> {
    try {
      const { status: status1, data: tiemposNadador } =
        await this.httpClient.get(
          `${BACK_END_URL}/tiempos/findAllByNadador/` + id,
        );

      let TiemposUsuario: P006Get_TiempoDto[] = [];

      for (let tiempoNadador of tiemposNadador) {
        let filter = {
          // year: tiempoNadador.FechaMarcaNadador,
          temporada: tiempoNadador.Temporada,
          piscina: tiempoNadador.Piscina,
          estilo: tiempoNadador.Estilo,
          prueba: tiempoNadador.Prueba,
          // genero: tiempoNadador.Genero,
          categoria: tiempoNadador.IDCategoria,
        };
        const { status: status2, data: minima } = await this.httpClient.post(
          `${BACK_END_URL}/minimas/findMinimasByFilters`,
          { data: filter },
        );

        if (tiempoNadador.Tiempo <= minima[0].TiempoMinimo) {
          TiemposUsuario.push(tiempoNadador);
        }
      }

      return TiemposUsuario;
    } catch (error) {
      return error;
    }
  }

  async Delete_Tiempo(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/tiempos/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
