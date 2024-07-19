import { PartialType } from '@nestjs/mapped-types';
import { LogInAuthDto } from './logIn_auth.dto';

export class LogInAuthResponseDto {
  token: string;
  idUsuario: number;
  nombre: string;
  apellido: string;
  entrenador: boolean;
  nadador: boolean;
  juntaDirectiva: boolean;
  socio: boolean;
}
