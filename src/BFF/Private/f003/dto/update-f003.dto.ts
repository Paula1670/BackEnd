import { PartialType } from '@nestjs/mapped-types';
import { PuestoEnum } from 'src/Constantes/PuestoEnum';

export class UpdateF003Dto {
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  idUsuario: number;
}
