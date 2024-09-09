import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LogInAuthDto } from './dto/logIn_auth.dto';
import { LogOutAuthDto } from './dto/logOut_auth.dto';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDto } from '../usuario/dto/usuario.dto';
import { JwtService } from '@nestjs/jwt';
import { LogInAuthResponseDto } from './dto/logIn_auth_response.dto';
import { EntrenadorDto } from '../entrenadores/dto/entrenador.dto.';
import { JuntadirectivaService } from '../juntadirectiva/juntadirectiva.service';
import { JuntadirectivaDto } from '../juntadirectiva/dto/juntadirectiva.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
    private readonly juntaService: JuntadirectivaService,
  ) {}

  async logIn(logInAuthDto: LogInAuthDto): Promise<LogInAuthResponseDto> {
    let user: UsuarioDto;
    let miembro: JuntadirectivaDto = null;

    user = await this.usuarioService.findByDirecccion(logInAuthDto.direccion);
    if (!user)
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

    const areSame = await bcrypt.compare(
      logInAuthDto.contrasena,
      user.Contrasena,
    );

    if (!areSame)
      throw new HttpException('Contraseña incorrecta', HttpStatus.UNAUTHORIZED);

    const payload = { direccion: user.Direccion, sub: user.IDUsuario };
    const token = this.jwtService.sign(payload);

    if (user.juntaDirectiva) {
      miembro = await this.juntaService.findOne(user.juntaDirectiva);
    }

    return {
      token: token,
      idUsuario: user.IDUsuario,
      nombre: user.Nombre,
      apellido: user.Apellido,
      nadador: user.Nadador ? true : false,
      juntaDirectiva: user.juntaDirectiva ? true : false,
      entrenador: user.Entrenador ? true : false,
      socio: user.Socio ? true : false,
      miembroPuesto: miembro ? miembro.puesto : null,
    };
  }

  async logOut() {
    return { message: 'Sesión cerrada exitosamente' };
  }
}
