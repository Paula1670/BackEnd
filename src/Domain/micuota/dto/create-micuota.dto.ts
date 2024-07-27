import { EstadoEnum } from 'src/Constantes/EstadoEnum';

export class CreateMicuotaDto {
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: EstadoEnum;
  Socio: number;
  tipoCuota: number;

  constructor() {
    this.FechaInicio = new Date();
    this.FechaVencimiento = new Date();
    this.Socio = 1;
    this.tipoCuota = 2; // Ajusta el valor predeterminado según tu enumeración
    this.Estado = EstadoEnum.Pendiente; // Ajusta el valor predeterminado según tu enumeración
  }
}
