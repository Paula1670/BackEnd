import { PuestoEnum } from 'src/Constantes/PuestoEnum';
import { SocioDto } from 'src/Domain/socios/dto/socio.dto';

export class CreateJuntadirectivaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  idUsuario: number;

  constructor() {
    this.fechaInicioCargo = new Date();
    this.fechaTerminoCargo = new Date();
    this.puesto = PuestoEnum.Presidente;
    this.idUsuario = 1;
  }
}
