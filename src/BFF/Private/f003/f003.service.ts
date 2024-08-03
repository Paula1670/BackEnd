import { Injectable } from '@nestjs/common';
import { F003Create_MiembroJuntaDto } from './dto/create-f003.dto';
import { UpdateF003Dto } from './dto/update-f003.dto';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { BACK_END_URL } from 'src/Constantes/enviroment';
import { F003Get_MiembroJuntaDto } from './dto/get-f003.dto';
import { F009Editar_UserDto } from '../f009/dto/update-f009.dto';
import { P009Get_UserDto } from '../p009/dto/P009Get_UserDto';
import { UsuarioDto } from 'src/Domain/usuario/dto/usuario.dto';
import { F003Usuario } from './dto/F003Get_UsersDto';

@Injectable()
export class F003Service {
  constructor(private readonly httpClient: HttpClientService) {}
  async Create_MiembroJunta(
    createF003Dto: F003Create_MiembroJuntaDto,
    id: number,
  ) {
    try {
      const { data: usuario } = await this.httpClient.get<UsuarioDto>(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { data: miembroJunta } = await this.httpClient.post(
        `${BACK_END_URL}/juntadirectiva/create`,
        { data: createF003Dto },
      );
      usuario.juntaDirectiva = miembroJunta.idMiembroJunta;
      const { data: usuarioFinal } = await this.httpClient.patch(
        `${BACK_END_URL}/users/edit/` + usuario.IDUsuario,
        {
          data: {
            juntaDirectiva: usuario.juntaDirectiva,
          },
        },
      );

      return miembroJunta;
    } catch (error) {
      return error;
    }
  }

  async Find_MiembroJunta(id: number): Promise<F003Get_MiembroJuntaDto> {
    try {
      const { data: usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { status, data } = await this.httpClient.get(
        `${BACK_END_URL}/juntadirectiva/getById/` + usuario.juntaDirectiva,
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async findUsuarios(): Promise<F003Usuario[]> {
    try {
      const { data: usuarios } = await this.httpClient.get(
        `${BACK_END_URL}/users/getAll`,
      );
      let users: F003Usuario[] = [];
      for (let user of usuarios) {
        console.log(user);
        if (user.juntaDirectiva == null) {
          users.push(user);
          console.log('entro if');
        }
      }
      return users;
    } catch (error) {
      throw error;
    }
  }

  async Editar_MiembroJunta(id: number, updateF007Dto: UpdateF003Dto) {
    try {
      const { data: usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/` + id,
      );

      const { data: junta } = await this.httpClient.patch(
        `${BACK_END_URL}/juntadirectiva/edit/` + usuario.juntaDirectiva,
        { data: updateF007Dto },
      );

      return junta;
    } catch (error) {
      return error;
    }
  }
}
