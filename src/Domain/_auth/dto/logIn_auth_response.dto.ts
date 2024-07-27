import { PartialType } from '@nestjs/mapped-types';
import { LogInAuthDto } from './logIn_auth.dto';
import { PuestoEnum } from 'src/Constantes/PuestoEnum';

export class LogInAuthResponseDto {
  token: string;
  idUsuario: number;

  nombre: string;
  apellido: string;
  entrenador: boolean;
  nadador: boolean;
  juntaDirectiva: boolean;
  socio: boolean;
  miembroPuesto: PuestoEnum;
}
