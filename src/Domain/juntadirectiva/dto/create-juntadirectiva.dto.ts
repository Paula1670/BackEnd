import { SocioDto } from 'src/Domain/socios/dto/socio.dto';

export class CreateJuntadirectivaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  usuario: number[];

  constructor() {
    this.fechaInicioCargo = new Date();
    this.fechaTerminoCargo = new Date();
    this.puesto = PuestoEnum.Bicepresidente;
    this.usuario = [];
  }
}

export enum PuestoEnum {
  Presidente = 'presidente',
  Bicepresidente = 'Bicepresidente',
  Secretario = 'Secretario',
  Vocal = 'vocal',
}
