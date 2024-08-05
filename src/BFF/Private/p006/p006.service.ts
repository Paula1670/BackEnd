import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P006Get_TiempoDto } from './dto/P006Get_Tiempo.dto';
import { TiemposController } from 'src/Domain/tiempos/tiempos.controller';
import { TiempoDto } from 'src/Domain/tiempos/dto/tiempo.dto';
import { MinimaDto } from 'src/Domain/minimas/dto/minima.dto';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { UsuarioDto } from 'src/Domain/usuario/dto/usuario.dto';
import { availableParallelism } from 'os';
import { P006Get_TiempoByNadadorDto } from './dto/P006Get_TiempoByNadador.dto';
import { CategoriaEnum } from 'src/Constantes/CategoriaEnum';

@Injectable()
export class P006Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Tiempos(): Promise<P006Get_TiempoDto[]> {
    let t: P006Get_TiempoDto;
    let tiemposFinales: P006Get_TiempoDto[] = [];
    let users: UsuarioDto[] = [];
    try {
      const { data: usuarios } = await this.httpClient.get<UsuarioDto[]>(
        `${BACK_END_URL}/users/findAllActivated/`,
      );

      for (let user of usuarios) {
        if (user.Nadador != null) {
          const { data: tiemposNadador } = await this.httpClient.get<
            TiempoDto[]
          >(`${BACK_END_URL}/tiempos/findAllByNadador/` + user.Nadador);

          for (let tiempo of tiemposNadador) {
            t = {
              Tiempo: tiempo.Tiempo,
              Temporada: tiempo.Temporada,
              Prueba: tiempo.Prueba,
              Piscina: tiempo.Piscina,
              Categoria: CategoriaEnum.Absoluto,
              Estilo: tiempo.Estilo,
              CumpleMinima: true,
              IDCategoria: tiempo.IDCategoria,
              IDUsuario: user.IDUsuario,
              Nombre: user.Nombre,
              Apellido: user.Apellido,
              FechaMarcaNadador: tiempo.FechaMarcaNadador,
              IDTiempo: tiempo.IDTiempos,
            };
            tiemposFinales.push(t);
          }
        }
      }
      return tiemposFinales;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByNadador(id: number): Promise<P006Get_TiempoDto[]> {
    try {
      const { status: status1, data: tiemposNadador } =
        await this.httpClient.get(
          `${BACK_END_URL}/tiempos/findAllByNadador/` + id,
        );

      let TiemposUsuario: P006Get_TiempoDto[] = [];

      for (let tiempoNadador of tiemposNadador) {
        let filter = {
          temporada: tiempoNadador.Temporada,
          piscina: tiempoNadador.Piscina,
          estilo: tiempoNadador.Estilo,
          prueba: tiempoNadador.Prueba,
          categoria: tiempoNadador.IDCategoria,
        };

        const { data: minima } = await this.httpClient.post(
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

  async findAllByUserId(id: number): Promise<P006Get_TiempoByNadadorDto[]> {
    try {
      const { data: usuario } = await this.httpClient.get<UsuarioDto>(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { data: tiemposNadador } = await this.httpClient.get<TiempoDto[]>(
        `${BACK_END_URL}/tiempos/findAllByNadador/` + usuario.Nadador,
      );
      let t: P006Get_TiempoByNadadorDto;
      let tiemposFinales: P006Get_TiempoByNadadorDto[] = [];
      for (let tiempo of tiemposNadador) {
        t = {
          Tiempo: tiempo.Tiempo,
          Temporada: tiempo.Temporada,
          Prueba: tiempo.Prueba,
          Piscina: tiempo.Piscina,
          Categoria: CategoriaEnum.Absoluto,
          Estilo: tiempo.Estilo,
          CumpleMinima: true,
          IDCategoria: tiempo.IDCategoria,
          IDUsuario: usuario.IDUsuario,
        };

        tiemposFinales.push(t);
      }
      return tiemposFinales;
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
