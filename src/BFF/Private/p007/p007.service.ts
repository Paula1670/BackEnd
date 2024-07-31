import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { FiltrosMinimaDto } from 'src/Domain/minimas/dto/filtros_minima.dto';
import { MinimaDto } from 'src/Domain/minimas/dto/minima.dto';
import { P007GetGeneroCategoriaDto } from './dto/P007GetGeneroCategoriaDto';

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
  }

  async findMinimasByFilters(filtrosMinimaDto: FiltrosMinimaDto) {
    try {
      console.log(filtrosMinimaDto);
      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/minimas/findMinimasByFilters`,
        { data: filtrosMinimaDto },
      );
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }

  async GetGeneroCategoriaByIDUser(id: number) {
    try {
      const { data: usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );
      console.log(usuario);
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
