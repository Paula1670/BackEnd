import { EstadoEnum } from 'src/Constantes/EstadoEnum';

export class F010CreateContratoDto {
  Socio: number;
  CuotasPosibles: number;
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: EstadoEnum;

  constructor() {
    this.Socio = 1;
    this.CuotasPosibles = 2;
    this.FechaInicio = new Date('2023-01-01');
    this.FechaVencimiento = new Date('2023-12-31');
    this.Estado = EstadoEnum.Pendiente; // Ajusta el valor predeterminado según tu enumeración
  }
}
