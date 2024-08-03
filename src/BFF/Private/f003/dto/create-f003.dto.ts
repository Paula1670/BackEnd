import { PuestoEnum } from 'src/Constantes/PuestoEnum';

export class F003Create_MiembroJuntaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  idUsuario: number;
}
