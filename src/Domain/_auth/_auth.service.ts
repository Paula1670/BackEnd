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

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(logInAuthDto: LogInAuthDto): Promise<LogInAuthResponseDto> {
    let user: UsuarioDto;

    user = await this.usuarioService.findByNombre(logInAuthDto.nombre);
    if (!user)
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

    if (logInAuthDto.contrasena != user.Contrasena)
      throw new HttpException('Contraseña incorrecta', HttpStatus.UNAUTHORIZED);

    const payload = { nombre: user.Nombre, sub: user.IDUsuario };
    const token = this.jwtService.sign(payload);

    return {
      token: token,
      idUsuario: user.IDUsuario,
      nombre: user.Nombre,
      apellido: user.Apellido,
      nadador: user.Nadador ? true : false,
      juntaDirectiva: user.juntaDirectiva ? true : false,
      entrenador: user.Entrenador ? true : false,
      socio: user.Socio ? true : false,
    };
  }

  async logOut() {
    return { message: 'Sesión cerrada exitosamente' };
  }
}
