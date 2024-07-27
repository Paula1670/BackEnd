import { PuestoEnum } from 'src/Constantes/PuestoEnum';
import { SocioDto } from 'src/Domain/socios/dto/socio.dto';

export class JuntadirectivaDto {
  idMiembroJunta: number;
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;

  constructor() {
    this.fechaInicioCargo = new Date();
    this.fechaTerminoCargo = new Date();
    this.puesto = PuestoEnum.Presidente;
  }
}
