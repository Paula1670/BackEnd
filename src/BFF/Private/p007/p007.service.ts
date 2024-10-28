import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { FiltrosMinimaDto } from 'src/Domain/minimas/dto/filtros_minima.dto';
import { MinimaDto } from 'src/Domain/minimas/dto/minima.dto';
import { P007GetGeneroCategoriaDto } from './dto/P007GetGeneroCategoriaDto';
import { TiempoDto } from 'src/Domain/tiempos/dto/tiempo.dto';
import { P007Minima } from './dto/P007Minima.dto';
import { P007FiltrosDto } from './dto/P007Filtros.dto';

@Injectable()
export class P007Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Minimas() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/getAll/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Delete_Minima(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/minimas/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  /*
  async findMinimasByAno(year: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/findMinimasByAno/` + year,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findMinimasByCategoria(categoria: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/minimas/findMinimasByCategoria/` + categoria,
      );

      return data;
    } catch (error) {
      return error;
    }
  }*/
  async findNadadorByUserId(id:number){
    const { data: idN } = await this.httpClient.get(
      `${BACK_END_URL}/users/findNadadorByUserId/` + id,
    );
    return idN;
  }
  async findMinimasByFilters(
    p007FiltrosDto: P007FiltrosDto,
  ): Promise<P007Minima[]> {
    try {
      const { data: minimas } = await this.httpClient.post<MinimaDto[]>(
        `${BACK_END_URL}/minimas/findMinimasByFilters`,
        {
          data: {
            piscina: p007FiltrosDto.piscina,
            estilo: p007FiltrosDto.estilo,
            prueba: p007FiltrosDto.prueba,
            genero: p007FiltrosDto.genero,
            categoria: p007FiltrosDto.categoria,
            campeonato: p007FiltrosDto.campeonato,
          },
        },
      );
      const { data: tiempos } = await this.httpClient.post<TiempoDto[]>(
        `${BACK_END_URL}/tiempos/findTiemposByFilters`,
        {
          data: {
            IDNadador: p007FiltrosDto.IDNadador,

            piscina: p007FiltrosDto.piscina,
            estilo: p007FiltrosDto.estilo,
            prueba: p007FiltrosDto.prueba,
            genero: p007FiltrosDto.genero,
            categoria: p007FiltrosDto.categoria,
          },
        },
      );
      console.log(tiempos);
      console.log("------------");
      let MinimasGotten: P007Minima[] = [];
      for (let minima of minimas) {
        let tiempo = tiempos.find((t) => t.Estilo==minima.Estilo &&t.Prueba==minima.Prueba &&t.Piscina==minima.Piscina && t.Tiempo <= minima.TiempoMinimo);

        MinimasGotten.push({
          IDMinima: minima.IDMinima,
          TiempoMinimo: minima.TiempoMinimo,
          Temporada: minima.Temporada,
          Prueba: minima.Prueba,
          Piscina: minima.Piscina,
          Categoria: minima.Categoria,
          Estilo: minima.Estilo,
          Genero: minima.Genero,
          FechaVigenciaMinima: minima.FechaVigenciaMinima,
          Campeonato: minima.Campeonato,
          Conseguida: tiempo ? true : false,
        });
      }
console.log(MinimasGotten);
      return MinimasGotten;
    } catch (error) {
      return error;
    }
  }

 

  async GetGeneroCategoriaByIDUser(id: number) {
    try {
      const { data: usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { data: nadador } = await this.httpClient.get(
        `${BACK_END_URL}/nadadores/getById/` + usuario.Nadador,
      );

      const { data: categoria } = await this.httpClient.get(
        `${BACK_END_URL}/categorias/getById/` + nadador.Categoria,
      );

      const nuevaCategoria: P007GetGeneroCategoriaDto = {
        Categoria: categoria.NombreCategoria,
        Genero: usuario.Genero,
        IDCategoria: nadador.Categoria,
      };

      return nuevaCategoria;
    } catch (error) {
      return error;
    }
  }
}
