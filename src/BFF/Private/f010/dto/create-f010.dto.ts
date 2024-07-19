import { EstadoEnum } from 'src/Constantes/EstadoEnum';

export class F010CreateContratoDto {
  Nombre: string;
  Precio: number;
  IDSocio: number;
  IDCuotasPosibles: number;
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: EstadoEnum;

  constructor() {
    this.Nombre = 'Federados sin hermano';
    this.Precio = 35;
    this.IDSocio = 1;
    this.IDCuotasPosibles = 2;
    this.FechaInicio = new Date('2023-01-01');
    this.FechaVencimiento = new Date('2023-12-31');
    this.Estado = EstadoEnum.Pendiente; // Ajusta el valor predeterminado según tu enumeración
  }
}
