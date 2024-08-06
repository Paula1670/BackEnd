import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { F009Create_UserDto } from './dto/create-f009.dto';
import { F009Editar_UserDto } from './dto/update-f009.dto';
import { SocioDto } from 'src/Domain/socios/dto/socio.dto';
import { NadadorDto } from 'src/Domain/nadadores/dto/nadador.dto';
import { EntrenadorDto } from 'src/Domain/entrenadores/dto/entrenador.dto.';
import { CreateEntrenadoreDto } from 'src/Domain/entrenadores/dto/create-entrenadore.dto';
import { CreateNadadorDto } from 'src/Domain/nadadores/dto/create-nadador.dto';
import { CreateSocioDto } from 'src/Domain/socios/dto/create-socio.dto';
import { F009GetSociosDto } from './dto/F009Get_SociosDto';
import { CreateMicuotaDto } from 'src/Domain/micuota/dto/create-micuota.dto';
import { EstadoEnum } from 'src/Constantes/EstadoEnum';
import { CreateUsuarioDto } from 'src/Domain/usuario/dto/create-usuario.dto';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { F009Get_EntrenadoresDto } from './dto/F009Get_EntrenadoresDto';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { F009GetNadadoresDto } from './dto/F009Get_NadadoresDto';
import { ActualizarCategoriaDeNadadorDto } from '../p009/dto/P009actualizarCategoriaDeNadador.dto';
import { P009GetNadadorDto } from '../p009/dto/P009GetNadadorDto';
import { F009GetNadadorDto } from './dto/F009GetNadadorDto';

@Injectable()
export class F009Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_User(createF009Dto: F009Create_UserDto) {
    try {
      let IDSOCIO: number = null;
      let IDNADADOR: number = null;
      let IDENTRENADOR: number = null;

      if (createF009Dto.crearSocio) {
        let socioDto: CreateSocioDto = {
          cuotas: [],
          nadadores: [],
        };
        const { data: socio } = await this.httpClient.post<SocioDto>(
          `${BACK_END_URL}/socios/create`,
          { data: socioDto },
        );
        IDSOCIO = socio.idSocio;
        let fechaActual = new Date();

        let contrato: CreateMicuotaDto = {
          FechaInicio: fechaActual,
          FechaVencimiento: new Date(
            fechaActual.setMonth(fechaActual.getMonth() + 11),
          ),
          Estado: EstadoEnum.Pendiente,
          CuotasPosibles: createF009Dto.idCuota,
          Socio: socio.idSocio,
        };

        const { data } = await this.httpClient.post(
          `${BACK_END_URL}/contratos/create`,
          { data: contrato },
        );
        if (createF009Dto.crearNadador) {
          let nadadorDto: CreateNadadorDto = {
            socioAsociado: IDSOCIO, //
            entrenadorAsociado: createF009Dto.entrenadorAsociado, //
            Categoria: createF009Dto.Categoria, //FUTURO
          };

          const { data: nadador } = await this.httpClient.post<NadadorDto>(
            `${BACK_END_URL}/nadadores/create`,
            { data: nadadorDto },
          );
          IDNADADOR = nadador.idNadador;
        }
      } else if (createF009Dto.crearNadador) {
        let nadadorDto: CreateNadadorDto = {
          socioAsociado: createF009Dto.socioAsociado,
          entrenadorAsociado: createF009Dto.entrenadorAsociado,
          Categoria: createF009Dto.Categoria,
        };

        const { data: nadador } = await this.httpClient.post<NadadorDto>(
          `${BACK_END_URL}/nadadores/create`,
          { data: nadadorDto },
        );

        IDNADADOR = nadador.idNadador;
      } else if (createF009Dto.crearEntrenador) {
        let entrenadorDto: CreateEntrenadoreDto = {
          fechaContratacion: undefined, //
          especialidad: createF009Dto.especialidad,
          //nadadores: [],
        };
        const { data } = await this.httpClient.post<EntrenadorDto>(
          `${BACK_END_URL}/entrenadores/create`,
          { data: entrenadorDto },
        );
        IDENTRENADOR = data.idEntrenador;
      }
      const User: CreateUsuarioDto = {
        Nombre: createF009Dto.Nombre,
        Apellido: createF009Dto.Apellido,
        Contrasena: createF009Dto.Contrasena,
        FechaNacimiento: createF009Dto.FechaNacimiento,
        Direccion: createF009Dto.Direccion,
        Domicilio: createF009Dto.Domicilio,
        Telefono: createF009Dto.Telefono,
        FechaInscripcion: createF009Dto.FechaInscripcion,
        Genero: createF009Dto.Genero,
        Socio: IDSOCIO,
        Nadador: IDNADADOR,
        Entrenador: IDENTRENADOR,
        juntaDirectiva: null,
        Habilitado: 1,
      };

      const { status, data } = await this.httpClient.post(
        `${BACK_END_URL}/users/create`,
        { data: User },
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

  async Editar_User(id: number, updateF009Dto: F009Editar_UserDto) {
    try {
      const { status, data } = await this.httpClient.patch(
        `${BACK_END_URL}/users/edit/` + id,
        { data: updateF009Dto },
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findCuotas() {
    try {
      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/cuotasposibles/getAll`,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findSocios(): Promise<F009GetSociosDto[]> {
    try {
      const { data: socios } = await this.httpClient.get(
        `${BACK_END_URL}/socios/getAll`,
      );

      const nuevosSocios: F009GetSociosDto[] = [];

      for (let socio of socios) {
        const { data: usuario } = await this.httpClient.get(
          `${BACK_END_URL}/users/findUserBySocioId/` + socio.idSocio,
        );
        if (usuario.Habilitado) {
          const nuevoSocio: F009GetSociosDto = {
            IDSocio: socio.idSocio,
            nombreUsuario: usuario.Nombre,
            apellidoUsuario: usuario.Apellido,
          };

          nuevosSocios.push(nuevoSocio);
        }
      }

      return nuevosSocios;
    } catch (error) {
      throw error;
    }
  }

  async findNadadores(): Promise<F009GetNadadoresDto[]> {
    try {
      const { data: nadadores } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUsersNadadores`,
      );

      const nuevosNadadores: F009GetNadadoresDto[] = [];

      for (let nadador of nadadores) {
        const { data: usuario } = await this.httpClient.get(
          `${BACK_END_URL}/users/findUserByNadadorId/` + nadador.Nadador,
        );
        if (usuario.Habilitado) {
          const nuevoNadador: F009GetNadadoresDto = {
            IDNadador: nadador.Nadador,
            nombreUsuario: usuario.Nombre,
            apellidoUsuario: usuario.Apellido,
          };

          nuevosNadadores.push(nuevoNadador);
        }
      }

      return nuevosNadadores;
    } catch (error) {
      throw error;
    }
  }

  async findEntrenadores(): Promise<F009Get_EntrenadoresDto[]> {
    try {
      const { data: entrenadores } = await this.httpClient.get(
        `${BACK_END_URL}/entrenadores/getAll`,
      );

      const nuevosEntrenadores: F009Get_EntrenadoresDto[] = [];

      for (let entrenador of entrenadores) {
        const { data: usuario } = await this.httpClient.get(
          `${BACK_END_URL}/users/findUserByEntrenadorId/` +
            entrenador.idEntrenador,
        );
        if (usuario.Habilitado) {
          const nuevoEntrenador: F009Get_EntrenadoresDto = {
            IDEntrenador: entrenador.idEntrenador,
            nombreUsuario: usuario.Nombre,
            apellidoUsuario: usuario.Apellido,
          };

          nuevosEntrenadores.push(nuevoEntrenador);
        }
      }

      return nuevosEntrenadores;
    } catch (error) {
      throw error;
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
      let arrayNadadores: F009GetNadadorDto[] = [];

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
}
