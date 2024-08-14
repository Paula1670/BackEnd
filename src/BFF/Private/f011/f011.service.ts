import { Injectable } from '@nestjs/common';
import { CreateF011Dto } from './dto/create-f011.dto';
import { UpdateF011Dto } from './dto/update-f011.dto';
import { ActualizarCategoriaDeNadadorDto } from './dto/F011actualizarCategoriaDeNadador.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { F011Get_EntrenadoresDto } from './dto/F011Get_EntrenadoresDto';
import { ActualizarEntrenadorDeNadadorDto } from './dto/actualizarEntrenadorDeNadador.dto';

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

  async Find_Nadador(id: number) {
    try {
      const { data: user } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { data: nadador } = await this.httpClient.get(
        `${BACK_END_URL}/nadadores/getById/` + user.Nadador,
      );
      return nadador;
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

  async findEntrenadores() {
    try {
      const { data: Usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersEntrenadores/`,
      );

      let Arrayentrenadores: F011Get_EntrenadoresDto[] = [];
      for (let entrenador of Usuario) {
        if (entrenador.Habilitado) {
          // entrenadores.push(entrenador);

          const nuevoEntrenador: F011Get_EntrenadoresDto = {
            IDEntrenador: entrenador.Entrenador,
            nombreUsuario: entrenador.Nombre,
            apellidoUsuario: entrenador.Apellido,
          };
          Arrayentrenadores.push(nuevoEntrenador);
        }
      }
      return Arrayentrenadores;
    } catch (error) {
      return error;
    }
  }

  async actualizarEntrenadorDeNadador(idNadador: number, IDEntrenaodr: number) {
    try {
      const nadadorDto: ActualizarEntrenadorDeNadadorDto = {
        idNadador: idNadador,
        idEntrenador: IDEntrenaodr,
      };
      const { data } = await this.httpClient.put(
        `${BACK_END_URL}/nadadores/actualizarEntrenadorDeNadador`,
        { data: nadadorDto },
      );
      return data;
    } catch (error) {
      return error;
    }
  }
}
