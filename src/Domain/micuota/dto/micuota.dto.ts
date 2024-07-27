import { EstadoEnum } from 'src/Constantes/EstadoEnum';

export class MicuotaDto {
  IDMiCuota: number;
  FechaInicio: Date;
  FechaVencimiento: Date;
  Socio: number;
  tipoCuota: number;
  Estado: EstadoEnum;

  constructor() {
    this.IDMiCuota = 1;
    this.FechaInicio = new Date();
    this.FechaVencimiento = new Date();
    this.Socio = 1;
    this.tipoCuota = 2; // Ajusta el valor predeterminado según tu enumeración
    this.Estado = EstadoEnum.Pagado; // Ajusta el valor predeterminado según tu enumeración
  }
}
