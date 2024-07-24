import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P006Get_TiempoDto } from './dto/P006Get_Tiempo.dto';
import { TiemposController } from 'src/domain/tiempos/tiempos.controller';
import { TiempoDto } from 'src/domain/tiempos/dto/tiempo.dto';
import { MinimaDto } from 'src/domain/minimas/dto/minima.dto';

@Injectable()
export class P006Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Tiempos(): Promise<P006Get_TiempoDto[]> {
    try {
      const { status, data } = await this.httpClient.get(
        'http://localhost:3000/tiempos/getAll/',
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
          'http://localhost:3000/tiempos/findAllByNadador/' + id,
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
          'http://localhost:3000/minimas/findMinimasByFilters',
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
        'http://localhost:3000/tiempos/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}