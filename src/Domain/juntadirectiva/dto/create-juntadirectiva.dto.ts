import { SocioDto } from 'src/Domain/socios/dto/socio.dto';

export class CreateJuntadirectivaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  usuario: number[];

  constructor() {
    this.fechaInicioCargo = new Date();
    this.fechaTerminoCargo = new Date();
    this.puesto = PuestoEnum.Presidente;
    this.usuario = [];
  }
}

export enum PuestoEnum {
  Presidente = 'Presidente',
  Vicepresidente = 'Vicepresidente',
  Secretario = 'Secretario',
  Vocal = 'Vocal',
}
