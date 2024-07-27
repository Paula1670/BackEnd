import { SocioDto } from 'src/Domain/socios/dto/socio.dto';

export class JuntadirectivaDto {
  fechaInicioCargo: Date;
  fechaTerminoCargo: Date;
  puesto: PuestoEnum;
  usuario: number[];

  constructor() {
    this.fechaInicioCargo = new Date();
    this.fechaTerminoCargo = new Date();
    this.puesto = PuestoEnum.Vicepresidente;
    this.usuario = [];
  }
}

export enum PuestoEnum {
  Presidente = 'Presidente',
  Vicepresidente = 'Vicepresidente',
  Secretario = 'Secretario',
  Vocal = 'Vocal',
}
