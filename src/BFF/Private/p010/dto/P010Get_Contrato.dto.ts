import { EstadoEnum } from 'src/Constantes/EstadoEnum';

export class P010Get_ContratoDto {
  IDMiCuota: number;
  IDUsuario: number;
  IDCuota: number;
  NombreContrato: string;
  Precio: number;
  FechaInicio: Date;
  FechaVencimiento: Date;
  Estado: EstadoEnum;
  NombreUsuario: string;
  ApellidoUsuario: string;

  constructor() {
    this.IDMiCuota = 1;
    this.IDCuota = 1;
    this.IDUsuario = 1;
    this.NombreContrato = '';
    this.Precio = 1;
    this.FechaInicio = new Date();
    this.FechaVencimiento = new Date();
    this.Estado = EstadoEnum.Pendiente;
    this.NombreUsuario = '';
    this.ApellidoUsuario = '';
  }
}
