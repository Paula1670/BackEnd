export class CuotasposibleDto {
  IdCuota: number;
  Nombre: string;
  Precio: number;
  MisCuotas: number[];
  Federado: number;
  constructor() {
    this.Nombre = 'Nombre del Contrato';
    this.Precio = 0.0;
    this.MisCuotas = [];
    this.Federado = 0;
  }
}
