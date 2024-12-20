import { Injectable } from '@nestjs/common';

import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { ActualizarCategoriaDeNadadorDto } from './dto/P009actualizarCategoriaDeNadador.dto';

import { UsuarioDto } from 'src/Domain/usuario/dto/usuario.dto';
import { P009Get_UserDto } from './dto/P009Get_UserDto';
import { P009GetNadadorDto } from './dto/P009GetNadadorDto';
import { P009GetEntrenadorDto } from './dto/P009GetEntrenadorDto';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { P009GetJuntaDirectivaDto } from './dto/P009GetJuntaDirectivaDto';

@Injectable()
export class P009Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_UsersActivated() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findAllActivated/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async FindById(id: number) {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findById/` + id,
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async Get_UsersInactivated() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findAllInactivated/`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async Delete_User(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/users/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async Activate_User(id: number) {
    try {
      const { status, data } = await this.httpClient.put(
        `${BACK_END_URL}/users/activate/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllSocios() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersSocios/`,
      );

      let socios: P009Get_UserDto[] = [];
      for (let socio of data) {
        if (socio.Habilitado) socios.push(socio);
      }

      return socios;
    } catch (error) {
      return error;
    }
  }

  async findAllNadadores() {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersNadadores`,
      );

      let arrayNadadores: P009GetNadadorDto[] = [];

      for (let usuario of data) {
        if (usuario.Habilitado) {
          const { data: categorias } = await this.httpClient.get(
            `${BACK_END_URL}/categorias/findCategoriaByNadador/` +
              usuario.Nadador, //Nadador es la FK a nadador de la tabla Usuario
          );

          const nuevaCategoria: P009GetNadadorDto = {
            Nombre: usuario.Nombre,
            Apellido: usuario.Apellido,
            Contrasena: usuario.Contrasena,
            FechaNacimiento: usuario.FechaNacimiento,
            Direccion: usuario.Direccion,
            Domicilio: usuario.Domicilio,
            Telefono: usuario.Telefono,
            FechaInscripcion: usuario.FechaInscripcion,
            NombreCategoria: categorias.NombreCategoria,
            IDUsuario: usuario.IDUsuario,
          };

          arrayNadadores.push(nuevaCategoria);
        }
      }
      return arrayNadadores;
    } catch (error) {
      return error;
    }
  }

  async findNadadoresByEntrenador(id: number) {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersNadadores`,
      );

      const { data: Entrenador } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );
      let arrayNadadores: P009GetNadadorDto[] = [];

      for (let usuario of data) {
        if (usuario.Habilitado) {
          const { data: nadador } = await this.httpClient.get(
            `${BACK_END_URL}/nadadores/getById/` + usuario.Nadador, //Nadador es la FK a nadador de la tabla Usuario
          );

          const { data: categorias } = await this.httpClient.get(
            `${BACK_END_URL}/categorias/findCategoriaByNadador/` +
              usuario.Nadador, //Nadador es la FK a nadador de la tabla Usuario
          );

          const nuevaCategoria: P009GetNadadorDto = {
            Nombre: usuario.Nombre,
            Apellido: usuario.Apellido,
            Contrasena: usuario.Contrasena,
            FechaNacimiento: usuario.FechaNacimiento,
            Direccion: usuario.Direccion,
            Domicilio: usuario.Domicilio,
            Telefono: usuario.Telefono,
            FechaInscripcion: usuario.FechaInscripcion,
            NombreCategoria: categorias.NombreCategoria,
            IDUsuario: usuario.IDUsuario,
          };

          if (nadador.entrenador == Entrenador.Entrenador) {
            arrayNadadores.push(nuevaCategoria);
          }
        }
      }
      return arrayNadadores;
    } catch (error) {
      return error;
    }
  }

  async findNadadoresBySocio(id: number) {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersNadadores`,
      );
      const { data: Socio } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      let arrayNadadores: P009GetNadadorDto[] = [];

      for (let usuario of data) {
        if (usuario.Habilitado) {
          const { data: nadador } = await this.httpClient.get(
            `${BACK_END_URL}/nadadores/getById/` + usuario.Nadador, //Nadador es la FK a nadador de la tabla Usuario
          );

          const { data: categorias } = await this.httpClient.get(
            `${BACK_END_URL}/categorias/findCategoriaByNadador/` +
              usuario.Nadador, //Nadador es la FK a nadador de la tabla Usuario
          );

          const nuevaCategoria: P009GetNadadorDto = {
            Nombre: usuario.Nombre,
            Apellido: usuario.Apellido,
            Contrasena: usuario.Contrasena,
            FechaNacimiento: usuario.FechaNacimiento,
            Direccion: usuario.Direccion,
            Domicilio: usuario.Domicilio,
            Telefono: usuario.Telefono,
            FechaInscripcion: usuario.FechaInscripcion,
            NombreCategoria: categorias.NombreCategoria,
            IDUsuario: usuario.IDUsuario,
          };
          if (nadador.socio == Socio.Socio) {
            arrayNadadores.push(nuevaCategoria);
          }
        }
      }
      return arrayNadadores;
    } catch (error) {
      return error;
    }
  }

  async findAllEntrenadores() {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersEntrenadores/`,
      );

      let Arrayentrenadores: P009GetEntrenadorDto[] = [];
      for (let entrenador of data) {
        if (entrenador.Habilitado) {
          // entrenadores.push(entrenador);

          const { data: especialidades } = await this.httpClient.get(
            `${BACK_END_URL}/entrenadores/getById/` + entrenador.Entrenador,
          );

          const nuevoEntrenador: P009GetEntrenadorDto = {
            Nombre: entrenador.Nombre,
            Apellido: entrenador.Apellido,
            Contrasena: entrenador.Contrasena,
            FechaNacimiento: entrenador.FechaNacimiento,
            Direccion: entrenador.Direccion,
            Domicilio: entrenador.Domicilio,
            Telefono: entrenador.Telefono,
            FechaInscripcion: entrenador.FechaInscripcion,
            especialidad: especialidades.especialidad,
          };

          Arrayentrenadores.push(nuevoEntrenador);
        }
      }

      return Arrayentrenadores;
    } catch (error) {
      return error;
    }
  }

  async findAllJunta() {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersJunta/`,
      );

      let ArrayJunta: P009GetJuntaDirectivaDto[] = [];
      for (let miembro of data) {
        if (miembro.Habilitado) {
          // entrenadores.push(entrenador);

          const { data: junta } = await this.httpClient.get(
            `${BACK_END_URL}/juntadirectiva/getById/` + miembro.juntaDirectiva,
          );

          const nuevoJunta: P009GetJuntaDirectivaDto = {
            Nombre: miembro.Nombre,
            Apellido: miembro.Apellido,
            Contrasena: miembro.Contrasena,
            FechaNacimiento: miembro.FechaNacimiento,
            Direccion: miembro.Direccion,
            Domicilio: miembro.Domicilio,
            Telefono: miembro.Telefono,
            FechaInscripcion: miembro.FechaInscripcion,
            FechaInicioCargo: junta.fechaInicioCargo,
            FechaTerminoCargo: junta.fechaTerminoCargo,
            Puesto: junta.puesto,
            idUsuario: miembro.IDUsuario,
            idPuesto: junta.idMiembroJunta,
          };

          ArrayJunta.push(nuevoJunta);
        }
      }

      return ArrayJunta;
    } catch (error) {
      return error;
    }
  }

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

  async actualizarAllCategorias() {
    try {
      const { data } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersNadadores/`,
      );

      for (let user of data) {
        const idCategoria = await this.obtenerIdCategoria(user);

        this.actualizarCategoriaDeNadador(user.Nadador, idCategoria);
      }

      return data;
    } catch (error) {
      return error;
    }
  }

  async obtenerIdCategoria(user: UsuarioDto) {
    const year = new Date(user.FechaNacimiento).getFullYear();

    const { data } = await this.httpClient.get<any[]>(
      `${BACK_END_URL}/categorias/getAll`,
    );

    let idCategoriaEncontrada = null;
    let i = 0;

    while (i < data.length && !idCategoriaEncontrada) {
      const categoria = data[i];

      if (
        year >= categoria.AnoInicio &&
        year <= categoria.AnoFin &&
        user.Genero == categoria.Genero
      ) {
        idCategoriaEncontrada = categoria.IDCategoria;
      }

      i++;
    }
    return idCategoriaEncontrada;
  }

  //Junta
  async Delete_MiembroJunta(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        `${BACK_END_URL}/juntadirectiva/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
